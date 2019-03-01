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
      try
      {
        _context.Samples.Add(sample);
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }
    }

    public void DeleteSample(Sample sample)
    {
      try
      {
        _context.Samples.Remove(sample);
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }
    }

    public Sample Find(int sampleId)
    {
      try
      {
        Sample sample = _context.Samples.FirstOrDefault(x => x.Id == sampleId);
        return sample;
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }

    }
  }
}
