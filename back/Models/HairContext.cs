using Microsoft.EntityFrameworkCore;

namespace WebApplication1_1.Models
{
    public class HairContext: DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Orders { get; set; }
        public HairContext(DbContextOptions<HairContext> options) : base(options) { 
            Database.EnsureCreated();
        }
    }
}
