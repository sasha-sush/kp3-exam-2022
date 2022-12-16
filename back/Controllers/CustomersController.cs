using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1_1.Models;
using WebApplication1_1.Repositories;

namespace WebApplication1_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly ICustomerRepository _customerRepository;
        public CustomersController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }
        [HttpGet]
        public async Task<IEnumerable<Customer>> Get()
        {
            return await _customerRepository.Get();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> Get(int id)
        {
            return await _customerRepository.Get(id);
        }
        [HttpPost]
        public async Task<ActionResult<Customer>> Post([FromBody] Customer customer)
        {
            var newCustomer = await _customerRepository.Create(customer);
            return CreatedAtAction(nameof(Get), new { id = newCustomer.Id }, newCustomer);
        }
        [HttpPut]
        public async Task<ActionResult> Put(int id, [FromBody] Customer customer)
        {
            if(id != customer.Id)
            {
                return BadRequest();
            }
            await _customerRepository.Update(customer);

            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var customerToDelete = await _customerRepository.Get(id);
            if(customerToDelete == null) {
                return NotFound();
            }
            await _customerRepository.Delete(customerToDelete.Id);
            return NoContent();
        }
    }
}
