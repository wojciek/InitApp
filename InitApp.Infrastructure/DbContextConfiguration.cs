using System.IO;
using InitApp.Domain.AppUser;
using InitApp.Domain.Sample;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.Extensions.Configuration;

namespace InitApp.Infrastructure
{
  public class SampleConfiguration : IEntityTypeConfiguration<Sample>
  {
    public void Configure(EntityTypeBuilder<Sample> builder)
    {
      builder.ToTable("Sample");
      builder.HasKey(sample => sample.Id);
      builder.Property(sample => sample.Name).IsRequired();
    }
  }

  public class AppUserAddressConfiguration : IEntityTypeConfiguration<AppUserAddress>
  {
    public void Configure(EntityTypeBuilder<AppUserAddress> builder)
    {
      builder.ToTable("AppUserAddress");
      builder.HasKey(appuseraddress => appuseraddress.Id);
    }
  }

  public class AppUserConfiguration : IEntityTypeConfiguration<AppUser>
  {
    public void Configure(EntityTypeBuilder<AppUser> builder)
    {
      builder.ToTable("AppUser");
      builder.HasKey(appuser => appuser.Id);
      builder.HasIndex(appuser => appuser.Username).IsUnique();
      builder.Property(appuser => appuser.Username).IsRequired();

    }
  }
  public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<InitAppDbContext>
  {
    public InitAppDbContext CreateDbContext(string[] args)
    {
      IConfigurationRoot configuration = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json")
        .Build();
      var builder = new DbContextOptionsBuilder<InitAppDbContext>();
      var connectionString = configuration.GetConnectionString("DefaultConnection");
      builder.UseSqlServer(connectionString);
      return new InitAppDbContext(builder.Options);
    }
  }
}
