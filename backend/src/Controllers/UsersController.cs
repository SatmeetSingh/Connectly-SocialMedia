using Asp.Versioning;
using dating_app_backend.src.Models.Dto;
using dating_app_backend.src.Models.Entity;
using dating_app_backend.src.Service;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileSystemGlobbing.Internal;
using System.Collections;

namespace dating_app_backend.src.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public UserService _userService { get; set; }
        public UsersController(UserService userService) {
            _userService = userService;
        }
       
        [HttpGet]
        public  async Task<IActionResult> GetAllUsers() {
            try {
                var users = await _userService.GetAllUsers();
                if (users.Count == 0)
                {
                    return NotFound("No Data Found");
                }
                return Ok(users);
            } catch(Exception ex) {
            return StatusCode(500, "An unexpected error occurred. "+ ex.Message);
            }
        }

        [EnableCors("AllowAll")]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(Guid id)
        {
            try {
                var user = await _userService.GetUserById(id);

                if (user == null) {
                    return NotFound();
                }
                return Ok(user);
            }
            catch (Exception ex) {
                return StatusCode(500, "An unexpected error occurred. " + ex.Message);
            }
        }

        [HttpGet("search")]
        public async Task<IActionResult> SearchUser(string username) {
            if(username.Length == 0)
            {
                return Ok();
            }
            try { 
            var users = await _userService.SearchUserByUsername(username);
                if (users.Count == 0)
                {
                    return NotFound("No users found matching the username.");
                }
                return Ok(users);
            } catch (Exception ex) {
                return StatusCode(500, "An unexpected error occurred. " + ex.Message);
            }
        }

        [EnableCors("AllowAll")]
        [HttpPost("signup")]
        public async Task<IActionResult> CreateUser(SignUpUserDto userDto) {
            try {
                var newUser =  await _userService.SignUpUser(userDto);
                return Ok(new { message =  "User created Successfully"});
            } catch (DbUpdateException ex) {
                return StatusCode(500, "An error occurred: " + ex.Message);
            }
        }


        [EnableCors("AllowAll")]
        [HttpPost("login")]
        public async Task<IActionResult> LoginUser(LoginDto userDto)
        {
            try
            {
                var newUser = await _userService.LoginUser(userDto);
                return Ok(new { message = "User logged in Successfully" , user = newUser  });
            }
            catch (KeyNotFoundException) {
                     return NotFound();
            }
            catch (UnauthorizedAccessException )
            {
                return Unauthorized(new Hashtable()  {
                    { "status" , 401 },
                    { "message", "Incorrect password. Please try again." }
                });
            }
        }
        
        [HttpPatch("update/{id}")]
        public async Task<IActionResult> Updateuser([FromForm] UpdateUserDto updateDto , Guid id) {
            try
            {
                var User = await _userService.UpdateUser(updateDto , id);
                if (id ==    Guid.Empty)
                {
                    return BadRequest(new { error = "Invalid or missing ID." });
                }   
                if(User == null)
                {
                    return NotFound(new { error = "User with the specified ID was not found." });
                }
                return Ok(new { message = "User logged in Successfully", user = User });
            }
            catch (Exception)
            {
                return StatusCode(500, new { error = "An error occurred while processing your request. Please try again later." });
            }

        }
    }
}       
