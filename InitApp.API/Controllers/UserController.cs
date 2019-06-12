using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using EnsureThat;
using InitApp.AppService.AppUser;
using InitApp.Domain.AppUser;
using InitApp.Models.Commands;
using InitApp.Models.Helpers;
using InitApp.Models.Queries;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace InitApp.API.Controllers
{
  [Authorize]
  [Produces("application/json")]
  [Route("api")]
  public class UserController : Controller
  {
    private readonly AppSettings _appSettings;
    private readonly UsersServiceUseCase _usersService;
    private readonly IMapper _mapper;
    public UserController(IOptions<AppSettings> appSettings, UsersServiceUseCase userService, IMapper mapper)
    {
      Ensure.That(appSettings, nameof(appSettings)).IsNotNull();
      Ensure.That(userService, nameof(userService)).IsNotNull();
      Ensure.That(mapper, nameof(mapper)).IsNotNull();

      _appSettings = appSettings.Value;
      _usersService = userService;
      _mapper = mapper;
    }
    [AllowAnonymous]
    [HttpGet]
    [Route("test")]
    public IEnumerable<string> Get()
    {
      return new string[] { "value1", "value2" };
    }
    [AllowAnonymous]
    [HttpPost("authenticate")]
    public IActionResult Authenticate([FromBody]AppUserAuthenticateParameters userAuthenticateModel)
    {
      if (ModelState.IsValid)
      {
        var userHelper = _usersService.Authenticate(userAuthenticateModel);
        if (userHelper == null)
        {
          return Unauthorized();
        }

        if (userAuthenticateModel.Username == null)
          return BadRequest(new { message = "Username or password is incorrect" });

        var jwtToken = TokenProvider(userAuthenticateModel.Username);

        return Ok(new
        {
          Id = userHelper.Id,
          Username = userHelper.Username,
          Token = jwtToken,
        });
      }
      else
      {
        return Unauthorized();
      }
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public IActionResult Register([FromBody]AppUserDTO userDTO)
    {
      AppUser user = new AppUser();
      try
      {
        _usersService.Create(user, userDTO.Password);
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(new { message = ex.Message });
      }
    }

    [HttpPut("password/{id}")]
    public IActionResult ChangeAppUserPassword(int id, [FromBody]ChangeAppUserPasswordCommand command)
    {
      try
      {
        _usersService.UpdatePassword(id, command.Password);
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(new { message = ex.Message });
      }
    }

    [HttpPut("address/{id}")]
    public IActionResult UpdateAppUserAddress(int id, [FromBody]UpdateAppUserAddressCommand command)
    {
      try
      {
        _usersService.UpdateData(id, command);
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(new { message = ex.Message });
      }
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      try
      {
        _usersService.Delete(id);
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(new { message = ex.Message });
      }
    }

    [HttpGet("address/{id}")]
    public IActionResult ReturnAppUserAddressById(int id)
    {
      try
      {
        var userAddressData = _usersService.GetAppUserAddressByAppUserId(id);
        return Ok(userAddressData);
      }
      catch (Exception ex)
      {
        return BadRequest(new { message = ex.Message });
      }
    }

    public string TokenProvider(string username)
    {
      var tokenHandler = new JwtSecurityTokenHandler();
      var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new Claim[]
        {
          new Claim(ClaimTypes.Name, username)
        }),
        Expires = DateTime.UtcNow.AddMinutes(20),
        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
          SecurityAlgorithms.HmacSha256Signature)
      };
      var token = tokenHandler.CreateToken(tokenDescriptor);
      var tokenString = tokenHandler.WriteToken(token);
      return tokenString;
    }
  }
}
