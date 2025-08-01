using Application.DTO;
using Application.IService;
using Domain.Factory;
using Domain.IRepository;

namespace Application.Service;

public class PersonService : IPersonService
{
    private readonly IPersonRepository _personRepository;
    private readonly IPersonFactory _personFactory;

    public PersonService(IPersonRepository personRepository, IPersonFactory personFactory)
    {
        _personRepository = personRepository;
        _personFactory = personFactory;
    }

    public async Task<PersonDTO?> GetPersonByIdAsync(int id)
    {
        var person = await _personRepository.GetPersonByIdAsync(id);

        if (person == null)
        {
            return null;
        }

        return new PersonDTO(person.Id, person.Name, person.Age);
    }

    public async Task<IEnumerable<PersonDTO>> GetAllPersonsAsync()
    {
        var persons = await _personRepository.GetAllPersonsAsync();
        return persons.Select(p => new PersonDTO(p.Id, p.Name, p.Age));
    }

    public async Task<CreatedPersonDTO?> AddPersonAsync(CreatePersonDTO personDto)
    {
        var person = _personFactory.CreatePerson(personDto.Name, personDto.Age);
        
        var createdPerson = await _personRepository.AddPersonAsync(person);
        if (createdPerson == null)
        {
            return null;
        }
        
        return new CreatedPersonDTO(createdPerson.Id, createdPerson.Name, createdPerson.Age);
    }

    public async Task DeletePersonAsync(int id)
    {
        await _personRepository.DeletePersonAsync(id);
    }
}
