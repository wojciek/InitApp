namespace Common.Infrastructure.CQRS
{
  public interface IQueryHandler<in TQuery, out TResult> where TQuery : IQuery<TResult>
  {
    TResult Handle(TQuery queryCriteria);
  }
}
