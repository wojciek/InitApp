using System;
using System.Collections.Generic;
using System.Text;

namespace InitApp.Domain.AppUser
{
    public class AppUserAddress
    {
      public int Id { get; set; }
      public string Name { get; set; }
      public string Description { get; set; }
      public int SampleValue { get; set; }
      public virtual ICollection<AppUser> AppUsers { get; set; }
  }
}
