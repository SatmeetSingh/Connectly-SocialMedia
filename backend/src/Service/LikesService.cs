using dating_app_backend.src.DB;
using dating_app_backend.src.Models.Dto;
using dating_app_backend.src.Models.Entity;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;
/*
 * POST / likes(to add a like),
 * DELETE / likes /{ id} (to remove a like),
 * GET /likes?postId={postId} (to fetch likes for a specific post).
 */
namespace dating_app_backend.src.Service
{
    public class LikesService
    {
        private readonly AppDbContext _context;

        public LikesService(AppDbContext context)
        {
            _context = context;

        }

        public async Task<bool> AddPostLikeAsync(Guid postId,Guid userId)
        {
            var postExists = await _context.Posts.AnyAsync(p => p.Id == postId);
            if (!postExists)
            {
                throw new KeyNotFoundException("Post does not exist.");
            }


            var like = new LikesModel
            {
                UserId = userId,
                PostId = postId,
                CreatedDate = DateTime.UtcNow,
            };

            _context.Likes.Add(like);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> UnlikePostAsync(Guid userId, Guid postId)
        {
            var like = await _context.Likes
                .FirstOrDefaultAsync(l => l.UserId == userId && l.PostId == postId);

            if (like == null)
            {
                return false; // No like to remove
            }

            _context.Likes.Remove(like);
            await _context.SaveChangesAsync();
            return true;
        }
        public async Task<bool> HasUserLikedPostAsync(Guid userId, Guid postId)
        {
            return await _context.Likes
                .AnyAsync(l => l.UserId == userId && l.PostId == postId);
        }
    }
}
