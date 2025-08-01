using Application.DTO;

namespace Application.IService
{
    public interface IPersonService
    {
        Task<PersonDTO?> GetPersonByIdAsync(int id);
        Task<IEnumerable<PersonDTO>> GetAllPersonsAsync();
        Task<CreatedPersonDTO?> AddPersonAsync(CreatePersonDTO person);
        Task DeletePersonAsync(int id);
    }
}