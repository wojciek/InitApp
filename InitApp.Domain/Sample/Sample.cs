namespace InitApp.Domain.Sample
{
  public class Sample
  {
    public int Id { get; set; }
    public string ZipCode { get; set; }
    public string City { get; set; }
    public string Street { get; set; }
    public string HomeNumber { get; set; }
    public virtual AppUser.AppUser AppUser { get; set; }
  }
}
