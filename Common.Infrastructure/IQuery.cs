using System;
using System.Collections.Generic;
using System.Text;

namespace Common.Infrastructure
{
    public class IQuery
    {
      public interface IQuery<out TResultType>
      {
      }
  }
}
