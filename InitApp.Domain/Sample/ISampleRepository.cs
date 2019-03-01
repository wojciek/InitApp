namespace InitApp.Domain.Sample
{
  public interface ISampleRepository
  {
    void AddSample(Sample sample);
    void DeleteSample(Sample sample);
    Sample Find(int sampleId);
  }
}
