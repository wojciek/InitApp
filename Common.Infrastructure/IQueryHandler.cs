using System;
using System.Collections.Generic;
using System.Text;

namespace Common.Infrastructure
{
    public class IQueryHandler
    {
      public interface IQueryHandler<in TQuery, out TResult> where TQuery : IQuery<TResult>
      {
        TResult Handle(TQuery queryCriteria);
      }
  }
}
