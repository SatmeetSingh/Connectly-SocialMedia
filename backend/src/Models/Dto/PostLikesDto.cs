using dating_app_backend.src.Models.Entity;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace dating_app_backend.src.Models.Dto
{
    public class PostLikesDto
    {
        public Guid UserId { get; set; }
        public Guid PostId { get; set; }
    }
}
