using Domain.IModel;
using Domain.Model;
using Domain.Visitor;
using Infrastructure.DataModel;

namespace Infrastructure.Mapper;

public class PersonMapper
{
    public static IPersonVisitor? MapToDataModel(IPerson? person)
    {
        if (person == null) return null;

        return new PersonDataModel
        {
            Id = person.Id,
            Name = person.Name,
            Age = person.Age,
        };
    }

    public static IPerson MapToDomainModel(IPersonVisitor dataModel)
    {
        return new Person(
            dataModel.Id,
            dataModel.Name,
            dataModel.Age
        );
    }
}
