using Domain.IModel;
using Domain.Model;
using Domain.Visitor;

namespace Domain.Factory;

public class PersonFactory : IPersonFactory
{
    public IPerson CreatePerson(string name, int age)
    {
        return new Person(name, age);
    }

    public IPerson CreatePerson(IPersonVisitor personVisitor)
    {
        return new Person(
            personVisitor.Id,
            personVisitor.Name,
            personVisitor.Age
        );
    }
}
