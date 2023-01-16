using Microsoft.EntityFrameworkCore;
using project_fusion.Entities;
using project_fusion.Entities.User;

namespace project_fusion.Database;

public class DatabaseContext : DbContext
{
    public DbSet<UserMain> Users { get; set; }
    public DbSet<Contacts> Contacts { get; set; }
    public DbSet<UserAbility> UserAbilities { get; set; }
    public DbSet<Questionnaire> Questionnaires { get; set; }
    public DbSet<ParticipationRequest> ParticipationRequests { get; set; }

    public DbSet<Project> Projects { get; set; }
    public DbSet<Slot> Slots { get; set; }
    public DbSet<Offer> Offers { get; set; }

    public DatabaseContext()
    {
        Database.EnsureCreated();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=projectFusionDB;Username=root;Password=123");
        optionsBuilder.LogTo(Console.WriteLine, LogLevel.Information);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseSerialColumns();

        //userMain
        modelBuilder.Entity<UserMain>().HasOne(x => x.Contacts).WithOne(x => x.User)
            .HasForeignKey<Contacts>(x => x.UserLogin).OnDelete(DeleteBehavior.Cascade);
        modelBuilder.Entity<UserMain>().HasMany(x => x.Stack).WithOne(x => x.User)
            .HasForeignKey(x => x.UserLogin).OnDelete(DeleteBehavior.Cascade);
        modelBuilder.Entity<UserMain>().HasOne(x => x.Questionnaire).WithOne(x => x.User)
            .HasForeignKey<Questionnaire>(x => x.UserLogin).OnDelete(DeleteBehavior.Cascade);
        modelBuilder.Entity<UserMain>().HasMany(x => x.Projects).WithOne(x => x.User)
            .HasForeignKey(x => x.UserLogin).OnDelete(DeleteBehavior.SetNull);
        modelBuilder.Entity<UserMain>().HasMany(x => x.ParticipationRequests).WithOne(x => x.User)
            .HasForeignKey(x => x.UserLogin).OnDelete(DeleteBehavior.Cascade);

        //project
        modelBuilder.Entity<Project>().HasMany(x => x.Slots).WithOne(x => x.Project)
            .HasForeignKey(x => x.ProjectId).OnDelete(DeleteBehavior.Cascade);

        //offer
        modelBuilder.Entity<Offer>().HasOne(x => x.Questionnaire).WithMany(x => x.Offers)
            .HasForeignKey(x => x.UserLogin).OnDelete(DeleteBehavior.SetNull);

        //slot
        modelBuilder.Entity<Slot>().HasMany(x => x.ParticipationRequests).WithOne(x => x.ProjectSlot)
            .HasForeignKey(x => x.ProjectSlotId).OnDelete(DeleteBehavior.Cascade);
        modelBuilder.Entity<Slot>().HasMany(x => x.Offers).WithOne(x => x.Slot)
            .HasForeignKey(x => x.SlotId).OnDelete(DeleteBehavior.Cascade);
    }
}