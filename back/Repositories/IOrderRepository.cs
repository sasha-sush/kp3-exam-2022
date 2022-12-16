using WebApplication1_1.Models;

namespace WebApplication1_1.Repositories
{
    public interface IOrderRepository
    {
        Task<IEnumerable<Order>> Get();
        Task<Order> Get(int id);
        Task<Order> Create(Order order);
        Task Update(Order order);
        Task Delete(int id);
    }
}
