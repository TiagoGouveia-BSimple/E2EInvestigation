using Domain.IModel;
using Domain.IRepository;
using Infrastructure.DataModel;
using Infrastructure.Mapper;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repository;

public class PersonRepository : IPersonRepository
{
    private readonly PersonContext _context;

    public PersonRepository(PersonContext context)
    {
        _context = context;
    }

    public async Task<IPerson?> AddPersonAsync(IPerson person)
    {
        var personDM = new PersonDataModel(person);

        var entity = await _context.Persons.AddAsync(personDM);

        return PersonMapper.MapToDomainModel(entity.Entity);
    }

    public async Task DeletePersonAsync(Guid id)
    {
        var person = await _context.Persons.FindAsync(id);
        if (person != null)
        {
            _context.Persons.Remove(person);
        }
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<IPerson>> GetAllPersonsAsync()
    {
        var personDMs = await _context.Persons.ToListAsync();
        var persons = personDMs.Select(PersonMapper.MapToDomainModel);
        
        return persons;
    }

    public async Task<IPerson?> GetPersonByIdAsync(Guid id)
    {
        var personDM = await _context.Persons.FindAsync(id);
        if (personDM == null)
            return null;
        
        return PersonMapper.MapToDomainModel(personDM);
    }
}
