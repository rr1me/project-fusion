using System.ComponentModel.DataAnnotations;
using project_fusion.Entities.User;

namespace project_fusion.Entities;

public class Slot
{
    [Key]
    public long Id { get; set; }
    
    public Project Project { get; set; }
    public long ProjectId { get; set; }
    
    public ProjectRoles ProjectRole { get; set; }
    public Abilities RequiredAbility { get; set; }
    
    public UserMain? User { get; set; }
    public string? UserLogin { get; set; }
    
    public List<ParticipationRequest> ParticipationRequests { get; set; }
    
    public List<Offer> Offers { get; set; }
}