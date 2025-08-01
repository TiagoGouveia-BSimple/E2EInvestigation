using System.Threading.Tasks;
using Application.DTO;
using Application.IService;
using Microsoft.AspNetCore.Mvc;

namespace InterfaceAdapters.Controller;

[ApiController]
[Route("api/person")]
public class PersonController : ControllerBase
{
    private readonly IPersonService _personService;

    public PersonController(IPersonService personService)
    {
        _personService = personService;
    }

    [HttpGet]
    public async Task<ActionResult> GetAllPersons()
    {
        var persons = await _personService.GetAllPersonsAsync();
        return Ok(persons);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult> GetPersonById(Guid id)
    {
        var person = await _personService.GetPersonByIdAsync(id);

        if (person == null)
        {
            return NotFound();
        }

        return Ok(person);
    }

    [HttpPost]
    public async Task<ActionResult> CreatePerson([FromBody] CreatePersonDTO createPersonDTO)
    {
        if (createPersonDTO == null)
        {
            return BadRequest("Person data is required.");
        }

        var createdPerson = await _personService.AddPersonAsync(createPersonDTO);

        return Ok(createdPerson);
    }
}
