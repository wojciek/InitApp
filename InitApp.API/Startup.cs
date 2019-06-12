using System.Text;
using AutoMapper;
using InitApp.AppService.AppUser;
using InitApp.AppService.Sample;
using InitApp.Domain.AppUser;
using InitApp.Domain.UnitOfWork;
using InitApp.Infrastructure;
using InitApp.Infrastructure.Domain;
using InitApp.Infrastructure.Query;
using InitApp.Models.Helpers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

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
      services.AddAutoMapper();

      IConfigurationSection appSettingsSection = Configuration.GetSection("AppSettings");
      services.Configure<AppSettings>(appSettingsSection);

      AppSettings appSettings = appSettingsSection.Get<AppSettings>();
      byte[] key = Encoding.ASCII.GetBytes(appSettings.Secret);
      services.AddAuthentication(x =>
        {
          x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
          x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        })
        .AddJwtBearer(x =>
        {
          x.RequireHttpsMetadata = false;
          x.SaveToken = true;
          x.TokenValidationParameters = new TokenValidationParameters
          {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = false,
            ValidateAudience = false
          };
        });

      services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
      services.AddSingleton(Configuration);
      services.AddDbContext<InitAppDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));


      RegisterPatternsDependencies(services);
      RegisterSampleDependencies(services);
      RegisterAppUserDependencies(services);
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
      app.UseAuthentication();
      app.UseMvc();
    }

    public static void RegisterPatternsDependencies(IServiceCollection services) // patterns
    {
      services.AddTransient<IUnitOfWork, UnitOfWork>();
    }

    public static void RegisterSampleDependencies(IServiceCollection sampleServices) // sample
    {
      sampleServices.AddTransient<ISampleQuery, SampleQuery>();
      sampleServices.AddTransient<GetAppUserSamplesUseCase, GetAppUserSamplesUseCase>();
      sampleServices.AddTransient<GetSampleUseCase, GetSampleUseCase>();
      sampleServices.AddTransient<AddSampleUseCase, AddSampleUseCase>();
      sampleServices.AddTransient<UpdateSampleUseCase, UpdateSampleUseCase>();
      sampleServices.AddTransient<DeleteSampleUseCase, DeleteSampleUseCase>();
    }

    public static void RegisterAppUserDependencies(IServiceCollection appUserServices) // appUser
    {
      appUserServices.AddTransient<IAppUserRepository, AppUserRepository>();
      appUserServices.AddTransient<IAppUserService, AppUserService>();
      appUserServices.AddTransient<UsersServiceUseCase, UsersServiceUseCase>();
    }
  }
}



