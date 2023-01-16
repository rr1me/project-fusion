using System.ComponentModel.DataAnnotations;

namespace project_fusion.Entities.User;

public class UserAuth
{
    [Key]
    public string Login { get; set; }
    
    public string Password { get; set; }
    public string Email { get; set; }
    public UserRoles Role { get; set; }
}