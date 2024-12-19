using dating_app_backend.src.Models.Dto;
using dating_app_backend.src.Models.Entity;
using dating_app_backend.src.Service;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;

namespace dating_app_backend.src.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        public PostService _postService { get; set; }

        public PostsController(PostService postService)
        {
            _postService = postService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPosts()
        {
            var posts = await _postService.GetAllPosts();
            if(posts.Count == 0)
            {
                return Ok(new { status = "success", posts = posts, message = "No posts found" });
            }
            return Ok(new {status = "success", posts = posts, count = posts.Count }); 
        }

        [EnableCors("AllowAll")]
        [HttpGet("{id}")]
        public async  Task<IActionResult> GetPostById(Guid id)
        {
            try
            { 
            var post = await _postService.GetPostById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
            }catch(Exception ex)
            {
                return StatusCode(500, "An unexpected error occurred: " + ex.Message);
            }
        }

        [EnableCors("AllowAll")]
        [HttpGet("user/{id}")]
        public async Task<IActionResult> GetPostsByUserId(Guid id)
        {
            try
            {
                var posts = await _postService.GetAllPostByUser(id);
                if (posts.Count == 0)
                {
                    return NotFound(new {message = "It looks like you haven't posted anything yet" });
                }
                return Ok(new { posts = posts , count = posts.Count});
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An unexpected error occurred: " + ex.Message);
            }
        }


        [HttpPost]
        public async Task<IActionResult> CreatePost(CreatePostDto createPost , Guid id)
        {
            try
            {
                var post = await _postService.AddPost(createPost , id);
                return Ok(new { message = "Post created Successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred: " + ex.Message);
            }

        }
    }
}
