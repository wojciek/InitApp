using Common.Infrastructure.CQRS;

namespace InitApp.Models.Commands
{
  public class DeleteSampleCommand : ICommand
  {
    public int SampleId { get; set; }
  }
}
