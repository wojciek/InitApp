using System.Collections.Generic;
using InitApp.Models.Queries;

namespace InitApp.AppService.Sample
{
  public interface ISampleQuery
  {
    List<SampleDTO> GetSamples(int userId);
    SampleDTO GetSample(int sampleId);
    bool CheckIfSampleExist(int sampleId);
  }
}
