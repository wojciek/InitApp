namespace InitApp.Domain.AppUser
{
  public interface IAppUserRepository
  {
    void Add(AppUser user);
    AppUser Find(int? userId);
    AppUser FindWithAddress(int? userId);
    void Delete(AppUser user);

    bool IsAny(string username);
    bool Exist(int id);
    void AddUserAddress(int userId, AppUserAddress userAddress);
    void UpdateUserAddress(int userId, AppUserAddress userAddress);

  }
}
