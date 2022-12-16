using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1_1.Models;
using WebApplication1_1.Repositories;

namespace WebApplication1_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;
        public OrdersController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }
        [HttpGet]
        public async Task<IEnumerable<Order>> Get()
        {
            return await _orderRepository.Get();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> Get(int id)
        {
            return await _orderRepository.Get(id);
        }
        [HttpPost]
        public async Task<ActionResult<Order>> Post([FromBody] Order order)
        {
            var newOrder = await _orderRepository.Create(order);
            return CreatedAtAction(nameof(Get), new { id = newOrder.Id }, newOrder);
        }
        [HttpPut]
        public async Task<ActionResult> Put(int id, [FromBody] Order order)
        {
            if (id != order.Id)
            {
                return BadRequest();
            }
            await _orderRepository.Update(order);

            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var orderToDelete = await _orderRepository.Get(id);
            if (orderToDelete == null)
            {
                return NotFound();
            }
            await _orderRepository.Delete(orderToDelete.Id);
            return NoContent();
        }
    }
}
