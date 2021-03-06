﻿namespace InitApp.Domain.Sample
{
  public class Sample
  {
    public Sample(string name, string description, string text, string category, AppUser.AppUser appUser)
    {
      Merge(name, description, text, category, appUser);
    }
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Text { get; set; }
    public string Category { get; set; }
    public virtual AppUser.AppUser AppUser { get; set; }

    private void Merge(string name, string description, string text, string category, AppUser.AppUser appUser)
    {
      Name = name;
      Description = description;
      Text = text;
      Category = category;
      AppUser = appUser;
    }

    public void Update(string name, string description, string text, string category)
    {
      Name = name;
      Description = description;
      Text = text;
      Category = category;
    }
  }
}
