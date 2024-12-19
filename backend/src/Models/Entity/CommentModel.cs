using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace dating_app_backend.src.Models.Entity
{
    [Table("Comments")]
    public class CommentModel
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

        [Required]
        [MaxLength(5000)]
        public string Content { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedDate { get; set; }


    }
}
