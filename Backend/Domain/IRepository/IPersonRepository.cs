using Domain.IModel;

namespace Domain.IRepository;

public interface IPersonRepository
{
    Task<IPerson?> GetPersonByIdAsync(Guid id);
    Task<IEnumerable<IPerson>> GetAllPersonsAsync();
    Task<IPerson?> AddPersonAsync(IPerson person);
    Task DeletePersonAsync(Guid id);
}
