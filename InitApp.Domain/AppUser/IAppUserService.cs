namespace InitApp.Domain.AppUser
{
  public interface IAppUserService
  {
    void Create(AppUser user, string password);
    AuthenticatedAppUserHelper Authenticate(string username, string password);
    void UpdatePassword(int userId, string password);
    void UpdateData(int userId, string line1, string line2, string line3, string city, string zipCode, string country);
    void Delete(int id);
    AppUser GetById(int? id);
    void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt);
    bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt);

  }
}
