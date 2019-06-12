using Common.Infrastructure.CQRS;

namespace InitApp.Models.Commands
{
  public class ChangeAppUserPasswordCommand : ICommand
  {
    public string Password { get; set; }
  }
}
