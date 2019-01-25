using InitApp.AppService.AppUser;
using InitApp.Domain.AppUser;
using InitApp.Domain.UnitOfWork;
using InitApp.Infrastructure;
using InitApp.Infrastructure.Domain;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace InitApp.API
{
  public class Startup
  {
    public IConfiguration Configuration { get; }
    public Startup(IHostingEnvironment env)
    {
      var builder = new ConfigurationBuilder()
        .SetBasePath(env.ContentRootPath)
        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
        .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
        .AddEnvironmentVariables();

      Configuration = builder.Build();
    }

    public void ConfigureServices(IServiceCollection services)
    {
      var appSettingsSection = Configuration.GetSection("AppSettings");

      services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
      services.AddSingleton(Configuration);
      services.AddDbContext<InitAppDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));


      RegisterDependencies(services);
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      else
      {
        app.UseHsts();
      }

      app.UseHttpsRedirection();
      app.UseCors(b => b.WithOrigins(Configuration["AppUrls:ClientUrl"])
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials());
      app.UseStaticFiles();
      app.UseMvc();
    }

    public static void RegisterDependencies(IServiceCollection services)
    {
      services.AddTransient<IUnitOfWork, UnitOfWork>();
      services.AddTransient<IAppUserRepository, AppUserRepository>();
      services.AddTransient<IAppUserService, AppUserService>();
      services.AddTransient<UsersServiceUseCase, UsersServiceUseCase>();

      //services.AddTransient<ISomeRepo, SomeRepo>();
    }
  }


}
