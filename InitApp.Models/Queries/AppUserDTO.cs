using System.Collections.Generic;
using Common.Infrastructure;
using InitApp.Domain.AppUser;
using InitApp.Domain.Sample;

namespace InitApp.Models.Queries
{
  public class AppUserDTO : ICommand
  {
    public int Id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    public virtual AppUserAddress Address { get; set; }
    public virtual ICollection<Sample> Samples { get; set; }
  }
}
