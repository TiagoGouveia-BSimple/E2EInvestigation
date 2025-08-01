using Domain.IModel;
using Domain.Visitor;
using Infrastructure.DataModel;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

public class PersonContext : DbContext
{
    public DbSet<PersonDataModel> Persons { get; set; }

    public PersonContext(DbContextOptions<PersonContext> options) : base(options)
    {
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<PersonDataModel>();
        base.OnModelCreating(modelBuilder);
    }
}
