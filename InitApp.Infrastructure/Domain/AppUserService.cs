using System;
using System.Linq;
using EnsureThat;
using InitApp.Domain.AppUser;

namespace InitApp.Infrastructure.Domain
{
  public class AppUserService : IAppUserService
  {
    private readonly InitAppDbContext _context;
    private readonly IAppUserRepository _appUserRepository;

    public AppUserService(InitAppDbContext context, IAppUserRepository appUserRepository)
    {
      Ensure.That(context, nameof(context)).IsNotNull();
      Ensure.That(appUserRepository, nameof(appUserRepository)).IsNotNull();
      _context = context;
      _appUserRepository = appUserRepository;
    }
    public void Create(AppUser user, string password)
    {
      Ensure.That(user, nameof(user)).IsNotNull();

      if (string.IsNullOrWhiteSpace(password))
        throw new Exception("Password is required");

      if (_appUserRepository.IsAny(user.Username))
        throw new Exception("Username \"" + user.Username + "\" is already taken");

      byte[] passwordHash, passwordSalt;
      CreatePasswordHash(password, out passwordHash, out passwordSalt);

      user.PasswordHash = passwordHash;
      user.PasswordSalt = passwordSalt;

      _appUserRepository.Add(user);
    }

    public AppUser Authenticate(string username, string password)
    {
      if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
        return null;

      var user = _context.AppUsers.SingleOrDefault(x => x.Username == username);

      if (user == null)
        return null;

      if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
        return null;

      return user;
    }

    public void Update(AppUser userParam, string password)
    {
      Ensure.That(userParam, nameof(userParam)).IsNotNull();
      var user = _appUserRepository.Find(userParam.Id);

      if (user == null)
        throw new Exception("User not found");

      if (userParam.Username != user.Username)
      {
        if (_context.AppUsers.Any(x => x.Username == userParam.Username))
          throw new Exception("Username " + userParam.Username + " is already taken");
      }

      user.Username = userParam.Username;

      if (!string.IsNullOrWhiteSpace(password))
      {
        byte[] passwordHash, passwordSalt;
        CreatePasswordHash(password, out passwordHash, out passwordSalt);

        user.PasswordHash = passwordHash;
        user.PasswordSalt = passwordSalt;
      }

      _context.AppUsers.Update(user);
    }

    public void Delete(int id)
    {
      _appUserRepository.Delete(_appUserRepository.Find(id));
    }

    public AppUser GetById(int id)
    {
      throw new NotImplementedException();
    }

    public AppUser GetById(int? id)
    {
      if (!id.HasValue)
      {
        throw new Exception("User Id is null");
      }

      if (_appUserRepository.Find(id) == null)
      {
        throw new Exception("User not found");
      }

      return _appUserRepository.Find(id);
    }

    public void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
    {
      if (password == null) throw new ArgumentNullException("password");
      if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

      using (var hmac = new System.Security.Cryptography.HMACSHA512())
      {
        passwordSalt = hmac.Key;
        passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
      }
    }

    public bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
    {
      if (password == null) throw new ArgumentNullException("password");
      if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
      if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
      if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

      using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
      {
        var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        for (int i = 0; i < computedHash.Length; i++)
        {
          if (computedHash[i] != storedHash[i]) return false;
        }
      }

      return true;
    }
  }
}
