using Domain.IModel;

namespace Domain.Model;

public class Person : IPerson
{
    public Guid Id { get; private set; }
    public string Name { get; private set; }
    public int Age { get; private set; }

    public Person(string name, int age)
    {
        Id = Guid.NewGuid();
        Name = name;
        Age = age;
    }

    public Person(Guid id, string name, int age)
    {
        Id = id;
        Name = name;
        Age = age;
    }

    public bool UpdateName(string newName)
    {
        Name = newName;

        return true;
    }

    public bool UpdateAge(int newAge)
    {
        if (newAge < 0)
        {
            return false;
        }

        Age = newAge;

        return true;
    }
}
