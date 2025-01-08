using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace dating_app_backend.src.Models.Entity
{
    [Table("Likes")]
    public class LikesModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        [Required]
        public Guid UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public UserModel User { get; set; } = null!;
        [Required]
        public Guid PostId { get; set; }
        [ForeignKey(nameof(PostId))]
        public PostModel Post { get; set; } = null!;
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedDate { get; set; }
    }
}
