using Common.Infrastructure.CQRS;

namespace InitApp.Models.Commands
{
  public class AddSampleCommand : ICommand
  {
    public int AppUserId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Text { get; set; }
    public string Category { get; set; }
  }
}
