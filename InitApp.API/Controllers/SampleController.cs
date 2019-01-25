using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InitApp.API.Controllers
{
  [Produces("application/json")]
  [Route("api")]
  [Authorize]
  public class SampleController : Controller
  {
    [HttpGet]
    [Route("samples")]
    public List<string> Get()
    {
      return new List<string>() { "jeden", "dwa", "trzy", "cztery" };
    }
  }
}
