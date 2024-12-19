using System.ComponentModel.DataAnnotations;

namespace dating_app_backend.src.Models.Dto
{
    public class CreatePostDto
    {
        [Required]
        public string Content { get; set; } 
        [Required]
        public IFormFile Image { get; set; }
        public string? Location { get; set; }
    }
}
