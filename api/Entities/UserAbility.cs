using System.ComponentModel.DataAnnotations;
using project_fusion.Entities.User;

namespace project_fusion.Entities;

public class UserAbility
{
    [Key]
    public long Id { get; set; }
    
    public UserMain User { get; set; } 
    public string UserLogin { get; set; }
    
    public Abilities Type { get; set; }
    public int KnowingPercent { get; set; }
}