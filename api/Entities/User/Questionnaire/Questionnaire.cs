using System.ComponentModel.DataAnnotations;

namespace project_fusion.Entities.User;

public class Questionnaire
{
    [Key]
    public string UserLogin { get; set; }
    public UserMain User { get; set; }
    
    public DesirableProjectTime DesirableProjectTime { get; set; }
    public string DesirableProjectType { get; set; }
    public DateTime QuestionnaireCreationDate { get; set; }
    public QuestionnaireStatus QuestionnaireStatus { get; set; }
    
    public List<Offer> Offers { get; set; }
}