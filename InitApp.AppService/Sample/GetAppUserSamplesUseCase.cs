using System.Collections.Generic;
using Common.Infrastructure.CQRS;
using EnsureThat;
using InitApp.Domain.AppUser;
using InitApp.Models.Queries;

namespace InitApp.AppService.Sample
{
  public class GetAppUserSamplesUseCase : IQueryHandler<AppUserIdQueryParameter, List<SampleDTO>>
  {
    private readonly ISampleQuery _sampleQuery;
    private readonly IAppUserRepository _appUserRepository;
    public GetAppUserSamplesUseCase(ISampleQuery samplesQuery, IAppUserRepository appUserRepository)
    {
      Ensure.That(samplesQuery, nameof(samplesQuery)).IsNotNull();
      Ensure.That(appUserRepository, nameof(appUserRepository)).IsNotNull();

      _sampleQuery = samplesQuery;
      _appUserRepository = appUserRepository;
    }
    public List<SampleDTO> Handle(AppUserIdQueryParameter queryCriteria)
    {
      Ensure.That(queryCriteria, nameof(queryCriteria)).IsNotNull();
      _appUserRepository.Exist(queryCriteria.AppUserIdQuery);
      return _sampleQuery.GetSamples(queryCriteria.AppUserIdQuery);
    }
  }
}
