using System.Collections.Generic;

namespace InitApp.Domain.AppUser
{
  public class AppUser
  {
    public int Id { get; set; }
    public string Username { get; set; }
    public byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }
    public virtual AppUserAddress Address { get; set; }
    public virtual ICollection<Sample.Sample> Samples { get; set; }
  }
}
