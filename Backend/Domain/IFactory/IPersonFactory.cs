using Domain.IModel;
using Domain.Visitor;

namespace Domain.Factory;

public interface IPersonFactory
{
    IPerson CreatePerson(string name, int age);
    IPerson CreatePerson(IPersonVisitor personVisitor);
}
