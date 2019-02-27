using System;
using System.Linq;
using EnsureThat;
using InitApp.Domain.Sample;

namespace InitApp.Infrastructure.Domain
{
  public class SampleRepository : ISampleRepository
  {
    private readonly InitAppDbContext _context;
    public SampleRepository(InitAppDbContext context)
    {
      Ensure.That(context, nameof(context)).IsNotNull();
      _context = context;

    }
    public void AddSample(Sample sample)
    {
      throw new NotImplementedException();
    }

    public Sample GetSample(string sampleName)
    {
      throw new NotImplementedException();
    }

    public void DeleteSample(Sample walletCurrency)
    {
      throw new NotImplementedException();
    }

    public bool IsAnySample(string sampleName)
    {
      if (_context.Samples.Any(x => x.Name == sampleName))
      {
        return true;
      }
      throw new Exception("User not found!!!");
    }
  }
}
