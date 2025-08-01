namespace Domain.Visitor;

public interface IPersonVisitor
{
    Guid Id { get; }
    string Name { get; }
    int Age { get; }
}
