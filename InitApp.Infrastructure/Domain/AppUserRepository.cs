using System;
using System.Linq;
using EnsureThat;
using InitApp.Domain.AppUser;

namespace InitApp.Infrastructure.Domain
{
  public class AppUserRepository : IAppUserRepository
  {
    private readonly InitAppDbContext _context;
    public AppUserRepository(InitAppDbContext context)
    {
      Ensure.That(context, nameof(context)).IsNotNull();
      _context = context;
    }
    public void Add(AppUser user)
    {
      try
      {
        _context.AppUsers.Add(user);
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }
    }

    public AppUser Find(int? userId)
    {
      AppUser user = _context.AppUsers.FirstOrDefault(u => u.Id == userId);

      Ensure.That(user, nameof(user)).IsNotNull();
      return user;
    }

    public void Delete(AppUser user)
    {
      Ensure.That(user, nameof(user)).IsNotNull();
      _context.AppUsers.Remove(user);
    }

    public bool IsAny(string username)
    {
      if (_context.AppUsers.Any(x => x.Username == username))
      {
        return true;
      }
      return false;

    }

    public bool Exist(int id)
    {
      if (_context.AppUsers.Any(x => x.Id == id))
      {
        return true;
      }
      throw new Exception("User not found!!!");
    }

    public void AddUserAddress(AppUserAddress userAddress)
    {
      throw new NotImplementedException();
    }

    public void UpdateUserAddress(AppUserAddress userAddress)
    {
      throw new NotImplementedException();
    }

    public void DeleteUserAddress(AppUserAddress userAddress)
    {
      throw new NotImplementedException();
    }
  }
}
