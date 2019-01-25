using System;
using EnsureThat;
using InitApp.Domain.UnitOfWork;

namespace InitApp.Infrastructure.Domain
{
  public class UnitOfWork : IUnitOfWork
  {
    private readonly InitAppDbContext _context;
    public UnitOfWork(InitAppDbContext context)
    {
      Ensure.That(context, nameof(context)).IsNotNull();
      _context = context;
    }
    public void Save()
    {
      try
      {
        _context.SaveChanges();
      }
      catch (Exception exceptionEF)
      {
        throw new Exception(exceptionEF.Message);
      }
    }
  }
}

