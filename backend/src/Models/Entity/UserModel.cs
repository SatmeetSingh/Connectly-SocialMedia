using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dating_app_backend.src.Models.Entity
{
    public interface IUser
    {
        Guid Id { get; set; }
        string Username { get; set; }
        string Email { get; set; }
        string Password { get; set; }
        string Name { get; set; }
        string Gender { get; set; }
        string ProfilePicture { get; set; }
        string Bio { get; set; }
        DateTime CreatedDate { get; set; }
        DateTime? UpdatedDate { get; set; }
        int FollowersCount { get; set; }
        int FollowingCount { get; set; }
        bool IsActive { get; set; }
        List<PostModel> Posts { get; set; }
    }



    [Table("Users")]
    public class UserModel : IUser
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        [Required]
        [StringLength(100)]
        public string Username { get; set; } = string.Empty;
        [Required]
        [StringLength(254)]
        public string Email { get; set; } = string.Empty;
        [Required]
        [StringLength(100)]
        public string Password { get; set; } = string.Empty;
        [StringLength(80)]
        public string Name { get; set; } = string.Empty;
   
        public string ProfilePicture { get; set; } = string.Empty;

        [MaxLength(500)]
        public string Bio { get; set; } = string.Empty;

        public string Gender { get; set; } = string.Empty;

        [Precision(3)]
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        [Precision(3)]
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime? UpdatedDate { get; set; } = DateTime.UtcNow;
        public int FollowersCount { get; set; } = 0;
        public int FollowingCount { get; set; } = 0;
        public bool IsActive { get; set; } = true;
        public List<PostModel> Posts { get; set; } = new List<PostModel>();
        public List<CommentModel> Comments { get; set; } = new List<CommentModel>();
        public List<LikesModel> Likes { get; set; } = new List<LikesModel>();
        public List<FollowModel> Following { get; set; } = new List<FollowModel>();
        public List<FollowModel> Followers { get; set; } = new List<FollowModel>();
    }

}
