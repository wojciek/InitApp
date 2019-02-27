using System.Collections.Generic;
using Common.Infrastructure.CQRS;

namespace InitApp.Models.Queries
{
  public class AppUserIdQueryParameter : IQuery<List<SampleDTO>>, ICommand
  {
    public int AppUserIdQuery { get; set; }
  }
}
