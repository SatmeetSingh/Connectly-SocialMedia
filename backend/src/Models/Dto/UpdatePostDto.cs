namespace dating_app_backend.src.Models.Dto
{
    public class UpdatePostDto
    {
        public int? LikesCount { get; set; } 
        public int? CommentCount { get; set; } 
        public int? ShareCount { get; set; }
    }
}
