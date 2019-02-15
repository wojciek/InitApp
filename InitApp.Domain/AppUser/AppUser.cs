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

    public AppUser(string username, byte[] passwordHash, byte[] passwordSalt)
    {
      Merge(username, passwordHash, passwordSalt);
    }

    private void Merge(string username, byte[] passwordHash, byte[] passwordSalt)
    {
      Username = username;
      PasswordHash = passwordHash;
      PasswordSalt = passwordSalt;
    }

    public void CreateAppUserAddress(string line1, string line2, string line3, string city, string zipCode, string country)
    {
      AppUserAddress newAppUserAddress = new AppUserAddress(line1, line2, line3, city, zipCode, country);

      Address = newAppUserAddress;
    }

    public void UpdateAppUserAddress(string line1, string line2, string line3, string city, string zipCode, string country)
    {
      Address.Line1 = line1;
      Address.Line2 = line2;
      Address.Line3 = line3;
      Address.City =  city;
      Address.ZipCode = zipCode;
      Address.Country = country;
    }

  }
}
