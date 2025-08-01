using System.ComponentModel.DataAnnotations.Schema;
using Domain.IModel;
using Domain.Visitor;

namespace Infrastructure.DataModel;

[Table("Persons")]
public class PersonDataModel : IPersonVisitor
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public int Age { get; set; }

    public PersonDataModel(IPerson person)
    {
        Id = person.Id;
        Name = person.Name;
        Age = person.Age;
    }

    public PersonDataModel()
    {
    }
}
