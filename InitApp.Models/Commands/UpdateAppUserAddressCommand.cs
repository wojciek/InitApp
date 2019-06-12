﻿using Common.Infrastructure.CQRS;

namespace InitApp.Models.Commands
{
  public class UpdateAppUserAddressCommand : ICommand
  {
    public string Line1 { get; set; }
    public string Line2 { get; set; }
    public string Line3 { get; set; }
    public string City { get; set; }
    public string ZipCode { get; set; }
    public string Country { get; set; }

  }
}
