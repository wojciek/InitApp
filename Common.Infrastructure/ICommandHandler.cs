using System;
using System.Collections.Generic;
using System.Text;

namespace Common.Infrastructure
{
    public class ICommandHandler
    {
      public interface ICommandHandler<in TCommand> where TCommand : ICommand
      {
        void Handle(TCommand command);
      }
  }
}
