using System.ComponentModel.DataAnnotations;
using project_fusion.Entities.User;

namespace project_fusion.Entities;

public class Offer
{
    [Key]
    public long Id { get; set; }

    public Questionnaire Questionnaire { get; set; }
    public string UserLogin { get; set; }

    public Slot Slot { get; set; }
    public long SlotId { get; set; }
    
    public string Description { get; set; }
    public OfferStatus Status { get; set; }
}