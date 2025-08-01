namespace Domain.IModel;

public interface IPerson
{
    Guid Id { get; }
    string Name { get; }
    int Age { get; }

    bool UpdateName(string newName);
    bool UpdateAge(int newAge);
}
