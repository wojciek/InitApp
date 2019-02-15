using System.Collections.Generic;

namespace InitApp.Domain.AppUser
{
  public class AppUserAddress
  {
    public AppUserAddress(string line1, string line2, string line3, string city, string zipCode, string country)
    {
      Merge(line1, line2, line3, city, zipCode, country);
    }
    public int Id { get; set; }
    public string Line1 { get; set; }
    public string Line2 { get; set; }
    public string Line3 { get; set; }
    public string City { get; set; }
    public string ZipCode { get; set; }
    public string Country { get; set; }
    public virtual ICollection<AppUser> AppUsers { get; set; }

    private void Merge(string line1, string line2, string line3, string city, string zipCode, string country)
    {
      Line1 = line1;
      Line2 = line2;
      Line3 = line3;
      City = city;
      ZipCode = zipCode;
      Country = country;
    }
  }
}
