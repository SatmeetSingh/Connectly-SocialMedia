using dating_app_backend.src.Service;
using Microsoft.AspNetCore.Mvc;

namespace dating_app_backend.src.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LikesController : ControllerBase
    {
       private LikesService _likesService { get; set; }

        public LikesController(LikesService likesService) {
            _likesService = likesService;
        }

        [HttpPost("like")]
        public async Task<IActionResult> LikePost(Guid userId, Guid postId)
        {
            if (userId == Guid.Empty || postId == Guid.Empty)
            {
                return BadRequest("Invalid user or post ID.");
            }

            var success = await _likesService.AddPostLikeAsync(userId, postId);
            if (!success)
            {
                return Conflict("User has already liked this post.");
            }

            return Ok(new { Message = "Post liked successfully." });
        }


        [HttpPost("unlike")]
        public async Task<IActionResult> UnlikePost(Guid userId, Guid postId)
        {
            if (userId == Guid.Empty || postId == Guid.Empty)
            {
                return BadRequest("Invalid user or post ID.");
            }

            var success = await _likesService.UnlikePostAsync(userId, postId);
            if (!success)
            {
                return NotFound("Like not found.");
            }

            return Ok(new { Message = "Post unliked successfully." });
        }
    }
}

