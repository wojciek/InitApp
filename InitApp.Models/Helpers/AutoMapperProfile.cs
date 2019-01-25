using AutoMapper;
using InitApp.Domain.AppUser;
using InitApp.Models.Queries;

namespace InitApp.Models.Helpers
{
  public class AutoMapperProfile : Profile
  {
    public AutoMapperProfile()
    {
      CreateMap<AppUser, AppUserDTO>();
      CreateMap<AppUserDTO, AppUser>();
    }
  }
}
