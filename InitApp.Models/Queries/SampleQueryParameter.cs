using Common.Infrastructure.CQRS;

namespace InitApp.Models.Queries
{
  public class SampleQueryParameter : IQuery<SampleDTO>, ICommand
  {
    public string SampleNameQuery { get; set; }
  }
}
