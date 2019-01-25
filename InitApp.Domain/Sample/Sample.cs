namespace InitApp.Domain.Sample
{
  public class Sample
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Text { get; set; }
    public virtual AppUser.AppUser AppUser { get; set; }
  }
}
