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

    public SampleController(GetAppUserSamplesUseCase getAppUserSamplesUseCase)
    {
      Ensure.That(getAppUserSamplesUseCase, nameof(getAppUserSamplesUseCase)).IsNotNull();

      _getAppUserSamplesUseCase = getAppUserSamplesUseCase;
    }
    [HttpGet]
    [Route("samples/{appUserIdQuery}")]
    public List<SampleDTO> GetAppUserSamples(AppUserIdQueryParameter queryCriteria)
    {
      return _getAppUserSamplesUseCase.Handle(queryCriteria);
    }

    [HttpGet]
    [Route("sample")]
    public SampleDTO GetSample()
    {
      SampleDTO sample = new SampleDTO();
      sample.Name = "Nazwa1";
      sample.Category = "Kategoria 1";
      sample.Description = "Opis sampla";
      sample.Text = "Text text text text";
      return sample;
    }

    [HttpPost]
    [Route("sample")]
    public void AddNewSample()
    {

    }
  }
}
