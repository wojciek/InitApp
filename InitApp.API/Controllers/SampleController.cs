using System.Collections.Generic;
using EnsureThat;
using InitApp.AppService.Sample;
using InitApp.Models.Queries;
using Microsoft.AspNetCore.Mvc;

namespace InitApp.API.Controllers
{
  [Produces("application/json")]
  [Route("api")]
  public class SampleController : Controller
  {
    private readonly GetAppUserSamplesUseCase _getAppUserSamplesUseCase;
    private readonly GetSampleUseCase _getSampleUseCase;

    public SampleController(
      GetAppUserSamplesUseCase getAppUserSamplesUseCase,
      GetSampleUseCase getSampleUseCase
      )
    {
      Ensure.That(getAppUserSamplesUseCase, nameof(getAppUserSamplesUseCase)).IsNotNull();
      Ensure.That(getSampleUseCase, nameof(getSampleUseCase)).IsNotNull();

      _getAppUserSamplesUseCase = getAppUserSamplesUseCase;
      _getSampleUseCase = getSampleUseCase;
    }
    [HttpGet]
    [Route("samples/{appUserIdQuery}")]
    public List<SampleDTO> GetAppUserSamples(AppUserIdQueryParameter queryCriteria)
    {
      return _getAppUserSamplesUseCase.Handle(queryCriteria);
    }

    [HttpGet]
    [Route("sample/{sampleNameQuery}")]
    public SampleDTO GetSample(SampleQueryParameter queryCriteria)
    {
      return _getSampleUseCase.Handle(queryCriteria);
    }

    [HttpPost]
    [Route("sample/{id}")]
    public void AddSample(int appUserId, SampleDTO sample)
    {
      
    }

    [HttpPut]
    [Route("sample")]
    public void UpdateSample(int id, SampleDTO sample)
    {

    }

    [HttpDelete]
    [Route("sample")]
    public void DeleteSample(int id, SampleDTO sample)
    {

    }
  }
}
