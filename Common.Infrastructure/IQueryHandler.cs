﻿namespace Common.Infrastructure
{
  public interface IQueryHandler<in TQuery, out TResult> where TQuery : IQuery<TResult>
  {
    TResult Handle(TQuery queryCriteria);
  }
}
