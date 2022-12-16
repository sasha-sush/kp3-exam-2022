using Microsoft.EntityFrameworkCore;
using WebApplication1_1.Models;

namespace WebApplication1_1.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly HairContext _dbContext;
        public CustomerRepository(HairContext dbContext) {
            _dbContext = dbContext;
        }
        public async Task<Customer> Create(Customer customer)
        {
            _dbContext.Customers.Add(customer);
            await _dbContext.SaveChangesAsync();
            return customer;
        }

        public async Task Delete(int id)
        {
            var customerToDelete = await _dbContext.Customers.FindAsync(id);
            _dbContext.Customers.Remove(customerToDelete);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<Customer>> Get()
        {
            return await _dbContext.Customers.ToListAsync();
        }

        public async Task<Customer> Get(int id)
        {
            return await _dbContext.Customers.FindAsync(id);
        }

        public async Task Update(Customer customer)
        {
            _dbContext.Entry(customer).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }
    }
}
