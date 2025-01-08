using Asp.Versioning;
using dating_app_backend.src.DB;
using dating_app_backend.src.Service;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<PostService>();
builder.Services.AddScoped<LikesService>();
builder.Services.AddScoped<FileService>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>    
    {
        builder.AllowAnyOrigin() 
               .AllowAnyHeader()  
               .AllowAnyMethod(); 
    });
});

builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.Configure<IISServerOptions>(options =>
{
    options.MaxRequestBodySize = int.MaxValue; // Allow files up to 2 GB
});

builder.Services.AddSwaggerGen(c =>     
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Dating Api", Version = "v1" });
    c.MapType<IFormFile>(() => new OpenApiSchema { Type = "string", Format = "binary" });

});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseStaticFiles();
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "Upload/images")),
    RequestPath = "/Upload/images"
});

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "Upload/Posts")),
    RequestPath = "/Upload/Posts"
});

app.UseCors("AllowAll");
//app.UseAuthentication();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
