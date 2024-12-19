using System.ComponentModel.DataAnnotations;

namespace dating_app_backend.src.Models.Dto
{
     public class UpdateUserDto
     {
          [StringLength(100)]
          public string? Name { get; set; }
          [StringLength(100)]
          public string? Username { get; set; }
          [StringLength(500)]
          public string? Bio { get; set; }
          [StringLength(50)]
          public string? Gender { get; set; }
          public IFormFile? file { get; set; }

    }


}
