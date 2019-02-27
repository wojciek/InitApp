using AutoMapper;
using InitApp.Domain.AppUser;
using InitApp.Models.Queries;

namespace InitApp.Models.Helpers
{
  public class AutoMapperProfile : Profile
  {
    public AutoMapperProfile()
    {
      AllowNullDestinationValues = true;

      CreateMap<AppUser, AppUserDTO>()
        .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
        .ForMember(dest => dest.Username, opts => opts.MapFrom(src => src.Username))
        .ForMember(dest => dest.Address, opts => opts.MapFrom(src => src.Address))
        .ForMember(dest => dest.Samples, opts => opts.MapFrom(src => src.Samples));


      CreateMap<AppUserDTO, AppUser>()
        .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
        .ForMember(dest => dest.Username, opts => opts.MapFrom(src => src.Username))
        .ForMember(dest => dest.Address, opts => opts.MapFrom(src => src.Address))
        .ForMember(dest => dest.Samples, opts => opts.MapFrom(src => src.Samples));
    }
  }
}
