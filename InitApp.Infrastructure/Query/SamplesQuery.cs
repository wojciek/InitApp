using System.Collections.Generic;
using System.Linq;
using InitApp.AppService.Sample;
using InitApp.Models.Queries;

namespace InitApp.Infrastructure.Query
{
  public class SamplesQuery : ISamplesQuery
  {
    private readonly InitAppDbContext _context;
    public SamplesQuery(InitAppDbContext context)
    {
      _context = context;
    }
    public List<SampleDTO> GetSamples(AppUserIdQueryParameter queryCriteria)
    {
      return _context.Samples.Where(s => s.AppUser.Id == queryCriteria.AppUserIdQuery).Select(sample => new SampleDTO()
      {
        Name = sample.Name,
        Text = sample.Text,
        Description = sample.Description,
        Category = sample.Category
      }).ToList();
    }
  }
}
