using Microsoft.AspNetCore.Mvc;
using project_fusion.Database;
using project_fusion.Entities.User;

namespace project_fusion.Controllers;

[ApiController]
[Route("user")]
public class UserController : ControllerBase
{
    [HttpGet("{login}")]
    public UserMain GetUser(string Login)
    {
        var db = new DatabaseContext();
        return db.Users.FirstOrDefault(x => x.Login == Login);
    }

    [HttpGet("all")]
    public List<UserMain> GetAllUsers()
    {
        var db = new DatabaseContext();
        return db.Users.ToList();
    }
}