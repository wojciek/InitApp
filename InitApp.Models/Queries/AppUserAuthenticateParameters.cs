using Common.Infrastructure;
using InitApp.Domain.AppUser;


namespace InitApp.Models.Queries
{
  public class AppUserAuthenticateParameters : IQuery<AppUserDTO>, ICommand, IQuery<AppUser>
  {
    public string Username { get; set; }
    public string Password { get; set; }
  }
}
