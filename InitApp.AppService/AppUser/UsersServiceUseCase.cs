using EnsureThat;
using InitApp.Domain.AppUser;
using InitApp.Domain.UnitOfWork;
using InitApp.Models.Queries;

namespace InitApp.AppService.AppUser
{
  public class UsersServiceUseCase
  {
    private readonly IAppUserRepository _appUserRepository;
    private readonly IAppUserService _appUserService;
    private readonly IUnitOfWork _unitOfWork;
    public UsersServiceUseCase(IAppUserRepository appUserRepository, IAppUserService appUserService, IUnitOfWork unitOfWork)
    {
      Ensure.That(appUserRepository, nameof(appUserRepository)).IsNotNull();
      Ensure.That(appUserService, nameof(appUserService)).IsNotNull();
      Ensure.That(unitOfWork, nameof(unitOfWork)).IsNotNull();

      _appUserRepository = appUserRepository;
      _appUserService = appUserService;
      _unitOfWork = unitOfWork;
    }

    public Domain.AppUser.AppUser Authenticate(AppUserAuthenticateParameters parameters)
    {
      return _appUserService.Authenticate(parameters.Username, parameters.Password);
    }

    public void Create(Domain.AppUser.AppUser user, string password)
    {
      _appUserService.Create(user, password);
      _unitOfWork.Save();
    }

    public void Delete(int userId)
    {
      _appUserService.Delete(userId);
      _unitOfWork.Save();
    }

    public void Update(Domain.AppUser.AppUser user, string password)
    {
      _appUserService.Update(user, password);
      _unitOfWork.Save();
    }

    public Domain.AppUser.AppUser GetById(int id)
    {
      return _appUserService.GetById(id);
    }


  }
}
