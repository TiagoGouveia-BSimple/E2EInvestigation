using Domain.IModel;
using Domain.Visitor;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

public class PersonContext : DbContext
{
    public DbSet<IPersonVisitor> Persons { get; set; }

    public PersonContext(DbContextOptions<PersonContext> options) : base(options)
    {
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<IPersonVisitor>();
        base.OnModelCreating(modelBuilder);
    }
}
