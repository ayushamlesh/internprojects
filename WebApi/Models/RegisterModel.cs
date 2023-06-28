using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class RegisterModel
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string UserName { get; set; }
        [Required(ErrorMessage ="Password Required")]
        [Column(TypeName = "varchar(100)")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required]

        [Column(TypeName = "varchar(100)")]
        [RegularExpression(@"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", ErrorMessage = "Invalid email format")]
        public string UserEmail { get; set; }
    }
}
