using System.Collections.Generic;
using InitApp.Models.Queries;

namespace InitApp.AppService.Sample
{
  public interface ISamplesQuery
  {
    List<SampleDTO> GetSamples(AppUserIdQueryParameter queryCriteria);

    SampleDTO GetSample(SampleQueryParameter queryCriteria);
  }
}
