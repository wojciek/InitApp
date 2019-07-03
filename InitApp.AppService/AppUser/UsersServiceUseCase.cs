using EnsureThat;
using InitApp.Domain.AppUser;
using InitApp.Domain.UnitOfWork;
using InitApp.Models.Commands;
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

        public AuthenticatedAppUserHelper Authenticate(AppUserAuthenticateParameters parameters)
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

        public void UpdatePassword(int userId, string password)
        {
            _appUserService.UpdatePassword(userId, password);
            _unitOfWork.Save();
        }
        public Domain.AppUser.AppUser GetById(int userId)
        {
            return _appUserService.GetById(userId);
        }

        public AppUserAddressDTO GetAppUserAddressByAppUserId(int userId)
        {
            var userAddress = _appUserRepository.GetUserAddress(userId);
            return new AppUserAddressDTO()
            {
                Line1 = userAddress.Line1,
                Line2 = userAddress.Line2,
                Line3 = userAddress.Line3,
                City = userAddress.City,
                Country = userAddress.Country,
                ZipCode = userAddress.ZipCode
            };
        }


        public void UpdateData(int userId, UpdateAppUserAddressCommand command)
        {
            _appUserService.UpdateData(
              userId,
              command.Line1,
              command.Line2,
              command.Line3,
              command.City,
              command.ZipCode,
              command.Country);
            _unitOfWork.Save();
        }


    }
}
