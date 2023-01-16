using System.ComponentModel.DataAnnotations;

namespace project_fusion.Entities.User;

public class UserMain
{
    [Key]
    public string Login { get; set; }
    
    public DateTime ProfileCreationDate { get; set; }
    public List<UserAbility>? Stack { get; set; }
    public Specializations? Specialization { get; set; }
    public DateTime LastTimeOnline { get; set; }
    public int Reputation { get; set; }
    
    public Contacts Contacts { get; set; }
    public Questionnaire? Questionnaire { get; set; }
    public List<Slot>? Projects { get; set; }
    public List<ParticipationRequest>? ParticipationRequests { get; set; }
}