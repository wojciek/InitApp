using Common.Infrastructure.CQRS;
using EnsureThat;
using InitApp.Domain.Sample;
using InitApp.Domain.UnitOfWork;
using InitApp.Models.Commands;

namespace InitApp.AppService.Sample
{
  public class DeleteSampleUseCase : ICommandHandler<DeleteSampleCommand>
  {
    private readonly ISampleRepository _sampleRepository;
    private readonly IUnitOfWork _unitOfWork;
    private readonly ISampleQuery _sampleQuery;
    public DeleteSampleUseCase(ISampleRepository sampleRepository, IUnitOfWork unitOfWork, ISampleQuery sampleQuery)
    {
      Ensure.That(sampleRepository, nameof(sampleRepository)).IsNotNull();
      Ensure.That(unitOfWork, nameof(unitOfWork)).IsNotNull();
      Ensure.That(sampleQuery, nameof(sampleQuery)).IsNotNull();
      _sampleRepository = sampleRepository;
      _unitOfWork = unitOfWork;
      _sampleQuery = sampleQuery;
    }

    public void Handle(DeleteSampleCommand command)
    {
      _sampleQuery.CheckIfSampleExist(command.SampleId);
      _sampleRepository.DeleteSample(_sampleRepository.Find(command.SampleId));
      _unitOfWork.Save();

    }
  }
}
