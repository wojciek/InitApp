namespace InitApp.Domain.Sample
{
  public interface ISampleRepository
  {
    void AddSample(Sample sample);
    Sample GetSample(string sampleName);
    void DeleteSample(Sample walletCurrency);
    bool IsAnySample(string sampleName);
  }
}
