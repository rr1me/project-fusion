using System.ComponentModel.DataAnnotations;

namespace project_fusion.Entities;

public class Project
{
    [Key]
    public long Id { get; set; }
    
    public List<Slot> Slots { get; set; }
    public List<Offer> Offers { get; set; }
    public DateTime EstimatedTime { get; set; }
    public DateTime CreationDate { get; set; }
    public string Description { get; set; }
    public ProjectStatus Status { get; set; }
}