using Microsoft.EntityFrameworkCore;
using WebApplication1_1.Models;

namespace WebApplication1_1.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly HairContext _dbContext;
        public OrderRepository(HairContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Order> Create(Order order)
        {
            _dbContext.Orders.Add(order);
            await _dbContext.SaveChangesAsync();
            return order;
        }

        public async Task Delete(int id)
        {
            var orderToDelete = await _dbContext.Orders.FindAsync(id);
            _dbContext.Orders.Remove(orderToDelete);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<Order>> Get()
        {
            return await _dbContext.Orders.ToListAsync();
        }

        public async Task<Order> Get(int id)
        {
            return await _dbContext.Orders.FindAsync(id);
        }

        public async Task Update(Order order)
        {
            _dbContext.Entry(order).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }
    }
}
