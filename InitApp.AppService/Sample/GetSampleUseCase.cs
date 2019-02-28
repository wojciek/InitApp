using Common.Infrastructure.CQRS;
using EnsureThat;
using InitApp.Models.Queries;

namespace InitApp.AppService.Sample
{
  public class GetSampleUseCase : IQueryHandler<SampleQueryParameter, SampleDTO>
  {
    private readonly ISampleQuery _samplesQuery;

    public GetSampleUseCase(ISampleQuery sampleQuery)
    {
      Ensure.That(sampleQuery, nameof(sampleQuery)).IsNotNull();
      _samplesQuery = sampleQuery;
    }
    public SampleDTO Handle(SampleQueryParameter queryCriteria)
    {
      _samplesQuery.CheckIfSampleExist(queryCriteria);
      return _samplesQuery.GetSample(queryCriteria);
    }
  }
}
