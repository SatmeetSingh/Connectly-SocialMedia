using System.ComponentModel.DataAnnotations.Schema;

namespace dating_app_backend.src.Models.Entity
{
     [Table("Follow")]
     public class FollowModel
     {
           public Guid FollowerId { get; set; }
           public UserModel Follower { get; set; } = null!; 

           public Guid FolloweeId { get; set; }
           public UserModel Following { get; set; } = null!;
           public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
           public DateTime? UpdatedDate { get; set; }
    }
}
