using System.ComponentModel.DataAnnotations;

namespace WebApplication1_1.Models
{
    public class Customer
    {
        [Required]
        public int Id { get; set; }
        [MaxLength(100)]
        public string Name { get; set; }
    }
}
