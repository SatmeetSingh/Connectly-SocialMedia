using dating_app_backend.src.Models.Entity;
using Microsoft.EntityFrameworkCore;

namespace dating_app_backend.src.DB
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<UserModel> Users { get; set; }
        public DbSet<PostModel> Posts { get; set; }
        //public DbSet<CommentModel> Comments { get; set; }
        //public DbSet<LikesModel> Likes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Many-many RelationShip
            modelBuilder.Entity<FollowModel>()
           .HasKey(f => new { f.FollowerId, f.FolloweeId });

            modelBuilder.Entity<FollowModel>()
                .HasOne(f => f.Follower)
                .WithMany(u => u.Following)
                .HasForeignKey(f => f.FollowerId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<FollowModel>()
                .HasOne(f => f.Following)
                .WithMany(u => u.Followers)
                .HasForeignKey(f => f.FolloweeId)
                .OnDelete(DeleteBehavior.Cascade);

            // One-to-Many Relationships
            modelBuilder.Entity<UserModel>(entity =>
            {
                entity.ToTable("Users");
                entity.HasKey(x => x.Id);
                entity.HasIndex(u => u.Email).IsUnique();
                entity.HasIndex(u => u.Username).IsUnique();
            });

            modelBuilder.Entity<PostModel>(entity =>
            {
                entity.ToTable("Posts");
                entity.HasOne(p => p.User)
                      .WithMany(b => b.Posts)
                      .HasForeignKey(p => p.UserId)
                      .OnDelete(DeleteBehavior.Cascade);
            });

            modelBuilder.Entity<CommentModel>(entity =>
             {
                 entity.ToTable("Comments");
                 entity.HasOne(c => c.User)
                      .WithMany(u => u.Comments)
                      .HasForeignKey(c => c.UserId)
                      .OnDelete(DeleteBehavior.Cascade);
             });

            modelBuilder.Entity<CommentModel>(entity =>
            {
                entity.ToTable("Comments");
                entity.HasOne(c => c.Post)
                .WithMany(p => p.Comments)
                .HasForeignKey(c => c.PostId)
                .OnDelete(DeleteBehavior.NoAction);
            });

            modelBuilder.Entity<LikesModel>(entity =>
            {
                entity.ToTable("Likes");
                entity.HasOne(c => c.User)
                     .WithMany(u => u.Likes)
                     .HasForeignKey(c => c.UserId)
                     .OnDelete(DeleteBehavior.Cascade);
            });

            modelBuilder.Entity<LikesModel>(entity =>
            {
                entity.ToTable("Likes");
                entity.HasOne(c => c.Post)
                .WithMany(p => p.Likes)
                .HasForeignKey(c => c.PostId)
                .OnDelete(DeleteBehavior.NoAction);
            });
        }
    } 
}