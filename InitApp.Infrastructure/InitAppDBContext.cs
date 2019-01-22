using System.IO;
using InitApp.Domain.AppUser;
using InitApp.Domain.Sample;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace InitApp.Infrastructure
{
  public class InitAppDbContext : DbContext
  {
    public InitAppDbContext(DbContextOptions<InitAppDbContext> options) : base(options)
    { }

    public DbSet<AppUser> AppUsers { get; set; }
    public DbSet<AppUserAddress> AppUserAddresses { get; set; }
    public DbSet<Sample> Samples { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);
      builder.ApplyConfiguration(new AppUserConfiguration());
      builder.ApplyConfiguration(new AppUserAddressConfiguration());
      builder.ApplyConfiguration(new SampleConfiguration());
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        IConfiguration configuration = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json")
        .Build();

        optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
      }
    }
  }

}
