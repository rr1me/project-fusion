using System.ComponentModel.DataAnnotations;

namespace project_fusion.Entities.User;

public class Contacts
{
    [Key]
    public string UserLogin { get; set; }
    public UserMain User { get; set; }
    
    public string? Github { get; set; }
    public string? Telegram { get; set; }
    public string? Discord { get; set; }
}