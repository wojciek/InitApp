using System;
using System.Linq;
using EnsureThat;
using InitApp.Domain.AppUser;
using Microsoft.EntityFrameworkCore;

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
    public AppUser FindWithAddress(int? userId)
    {
      AppUser user = _context.AppUsers.Include(x => x.Address).FirstOrDefault(u => u.Id == userId);

      Ensure.That(user, nameof(user)).IsNotNull();
      return user;
    }

    public void Delete(AppUser user)
    {
      Ensure.That(user, nameof(user)).IsNotNull();
      _context.AppUserAddresses.RemoveRange(_context.AppUserAddresses.Where(x => x.AppUsers == user));
      _context.Samples.RemoveRange(_context.Samples.Where(x => x.AppUser == user));
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

    public void AddUserAddress(int userId, AppUserAddress userAddress)
    {
      try
      {
        AppUser user = Find(userId);
        user.CreateAppUserAddress(userAddress.Line1, userAddress.Line2, userAddress.Line3, userAddress.City, userAddress.ZipCode, userAddress.Country);
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }
    }

    public void UpdateUserAddress(int userId, AppUserAddress userAddress)
    {
      try
      {
        AppUser user = Find(userId);
        user.UpdateAppUserAddress(userAddress.Line1, userAddress.Line2, userAddress.Line3, userAddress.City, userAddress.ZipCode, userAddress.Country);
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }
    }
  }
}
