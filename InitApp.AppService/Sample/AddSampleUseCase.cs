using Common.Infrastructure.CQRS;
using EnsureThat;
using InitApp.Domain.AppUser;
using InitApp.Domain.Sample;
using InitApp.Domain.UnitOfWork;
using InitApp.Models.Commands;

namespace InitApp.AppService.Sample
{
  public class AddSampleUseCase : ICommandHandler<AddSampleCommand>
  {
    private readonly ISampleRepository _sampleRepository;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IAppUserRepository _appUserRepository;
    public AddSampleUseCase(ISampleRepository sampleRepository, IUnitOfWork unitOfWork, IAppUserRepository appUserRepository)
    {
      Ensure.That(sampleRepository, nameof(sampleRepository)).IsNotNull();
      Ensure.That(unitOfWork, nameof(unitOfWork)).IsNotNull();
      Ensure.That(appUserRepository, nameof(appUserRepository)).IsNotNull();
      _sampleRepository = sampleRepository;
      _unitOfWork = unitOfWork;
      _appUserRepository = appUserRepository;
    }
    public void Handle(AddSampleCommand command)
    {
      _sampleRepository.AddSample(new Domain.Sample.Sample(
          command.Name,
          command.Description,
          command.Text,
          command.Category,
          _appUserRepository.Find(command.AppUserId)
          ));
      _unitOfWork.Save();
    }
  }
}
