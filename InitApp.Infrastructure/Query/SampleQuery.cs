using System;
using System.Collections.Generic;
using System.Linq;
using EnsureThat;
using InitApp.AppService.Sample;
using InitApp.Models.Queries;

namespace InitApp.Infrastructure.Query
{
  public class SampleQuery : ISampleQuery
  {
    private readonly InitAppDbContext _context;
    public SampleQuery(InitAppDbContext context)
    {
      Ensure.That(context, nameof(context)).IsNotNull();
      _context = context;
    }
    public List<SampleDTO> GetSamples(int userId)
    {
      try
      {
        return _context.Samples.Where(s => s.AppUser.Id == userId).Select(sample => new SampleDTO()
        {
          Id = sample.Id,
          Name = sample.Name,
          Text = sample.Text,
          Description = sample.Description,
          Category = sample.Category
        }).ToList();
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }

    }

    public SampleDTO GetSample(int sampleId)
    {
      try
      {
        return _context.Samples.Select(sample => new SampleDTO()
        {
          Id = sample.Id,
          Name = sample.Name,
          Text = sample.Text,
          Description = sample.Description,
          Category = sample.Category
        }).FirstOrDefault(x => x.Id == sampleId);
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }
    }


    public bool CheckIfSampleExist(int sampleId)
    {

      if (_context.Samples.Any(x => x.Id == sampleId))
      {
        return true;
      }
      throw new Exception("Sample not found!!!");
    }
  }
}

