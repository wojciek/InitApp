namespace InitApp.Domain.AppUser
{
  public interface IAppUserRepository
  {
    void Add(AppUser user);
    AppUser Find(int? userId);
    void Delete(AppUser user);

    bool IsAny(string username);
    void AddUserAddress(AppUserAddress userAddress);
    void UpdateUserAddress(AppUserAddress userAddress);
    void DeleteUserAddress(AppUserAddress userAddress);

  }
}
