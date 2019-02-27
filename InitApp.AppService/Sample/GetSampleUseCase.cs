using Common.Infrastructure.CQRS;
using EnsureThat;
using InitApp.Models.Queries;

namespace InitApp.AppService.Sample
{
  public class GetSampleUseCase : IQueryHandler<SampleQueryParameter, SampleDTO>
  {
    private readonly ISamplesQuery _samplesQuery;

    public GetSampleUseCase(ISamplesQuery samplesQuery)
    {
      Ensure.That(samplesQuery, nameof(samplesQuery)).IsNotNull();
      _samplesQuery = samplesQuery;
    }
    public SampleDTO Handle(SampleQueryParameter queryCriteria)
    {
      return _samplesQuery.GetSample(queryCriteria);
    }
  }
}
