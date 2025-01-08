using dating_app_backend.src.DB;
using Microsoft.EntityFrameworkCore;

namespace dating_app_backend.src.Service
{
    public class CommentService
    {
        private readonly AppDbContext _context;

        public CommentService(AppDbContext context )
        {
            _context = context;
            
        }
    }
}
