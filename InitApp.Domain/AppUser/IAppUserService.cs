namespace InitApp.Domain.AppUser
{
  public interface IAppUserService
  {
    void Create(AppUser user, string password);
    AppUser Authenticate(string username, string password);
    void Update(AppUser userParam, string password);
    void Delete(int id);
    AppUser GetById(int id);
    void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt);
    bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt);

  }
}
