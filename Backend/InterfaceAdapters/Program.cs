using Application.IService;
using Application.Service;
using Domain.Factory;
using Domain.IRepository;
using Domain.Model;
using Infrastructure;
using Infrastructure.DataModel;
using Infrastructure.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddDbContext<PersonContext>(options =>
    options.UseInMemoryDatabase("PersonDatabase"));

// Register the services 
builder.Services.AddTransient<IPersonService, PersonService>();

// Register the factories
builder.Services.AddTransient<IPersonFactory, PersonFactory>();

// Register the repositories
builder.Services.AddTransient<IPersonRepository, PersonRepository>();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder => builder
                .AllowAnyHeader()
                .AllowAnyMethod()
                .SetIsOriginAllowed((host) => true)
                .AllowCredentials());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<PersonContext>();
    db.Persons.Add(new PersonDataModel
    {
        Id = Guid.Parse("98d63c86-a373-44ab-b37f-0be9df33023f"),
        Name = "Test",
        Age = 30
    });
    db.SaveChanges();
}

app.Run();

public partial class Program { }
