namespace Application.DTO;

public record CreatedPersonDTO(
    Guid Id,
    string Name,
    int Age
);