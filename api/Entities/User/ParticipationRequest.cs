using System.ComponentModel.DataAnnotations;

namespace project_fusion.Entities.User;

public class ParticipationRequest
{
    [Key]
    public long Id { get; set; }
    
    public UserMain User { get; set; }
    public string UserLogin { get; set; }

    public Slot ProjectSlot { get; set; }
    public long ProjectSlotId { get; set; }

    public string Desctiption { get; set; }
    public OfferStatus Status { get; set; }
    public DateTime CreationDate { get; set; }
}