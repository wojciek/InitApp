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
    public List<SampleDTO> GetSamples(AppUserIdQueryParameter queryCriteria)
    {
      try
      {
        return _context.Samples.Where(s => s.AppUser.Id == queryCriteria.AppUserIdQuery).Select(sample => new SampleDTO()
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

    public SampleDTO GetSample(SampleQueryParameter queryCriteria)
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
        }).FirstOrDefault(x => x.Id == queryCriteria.SampleId);
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }
    }


    public bool CheckIfSampleExist(SampleQueryParameter queryCriteria)
    {

      if (_context.Samples.Any(x => x.Id == queryCriteria.SampleId))
      {
        return true;
      }
      throw new Exception("Sample not found!!!");
    }
  }
}
}
