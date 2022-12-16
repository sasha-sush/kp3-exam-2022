using System.ComponentModel.DataAnnotations;

namespace WebApplication1_1.Models
{
    public class Order
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int CustomerId { get; set; }
        [MaxLength(100)]
        public string WorkerName { get; set; }
        public DateTime DateTime { get; set; }
    }
}
