using project_fusion.Database;
using project_fusion.Entities;
using project_fusion.Entities.User;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<DatabaseContext>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// app.UseAuthorization();

app.MapControllers();


var db = new DatabaseContext();

// var Offers = new List<Offer>
// {
//     new Offer
//     {
//         Description = "масло, раздевалка, мужики",
//         Status = OfferStatus.Consideration
//     }
// };
//
// var parReq = new ParticipationRequest
// {
//     CreationDate = DateTime.UtcNow,
//     Desctiption = "хочю ничего не делать",
//     Status = OfferStatus.Consideration,
//     
// };
//
// var Slot = new Slot
// {
//     Offers = Offers,
//     ParticipationRequests = new List<ParticipationRequest>
//     {
//         parReq
//     },
//     ProjectRole = ProjectRoles.Contributor,
//     RequiredAbility = Abilities.Angular,
// };
//
// parReq.ProjectSlot = Slot;
//
// var questionnaire = new Questionnaire
// {
//     DesirableProjectTime = DesirableProjectTime.Month,
//     DesirableProjectType = "хочу питсы",
//     Offers = Offers
// };
//
// Offers[0].Slot = Slot;
// Offers[0].Questionnaire = questionnaire;
//
// var slots = new List<Slot>
// {
//     Slot
// };
// var project = new Project
// {
//     CreationDate = DateTime.UtcNow,
//     Description = "строим дорогу до луны из пеноппласта",
//     EstimatedTime = DateTime.UtcNow,
//     Offers = Offers,
//     Slots = slots
// };
//
// slots[0].Project = project;
//
// var user = new UserMain
// {
//     Login = "eblan2.0",
//     Contacts = new Contacts
//     {
//         Discord = "hueta"
//     },
//     LastTimeOnline = DateTime.UtcNow,
//     ProfileCreationDate = DateTime.UtcNow,
//     Reputation = 10,
//     Specialization = Specializations.Web,
//     Stack = new List<UserAbility>
//     {
//         new UserAbility
//         {
//             Type = Abilities.Laravel,
//             KnowingPercent = 100
//         },
//         new UserAbility
//         {
//             Type = Abilities.CakePhp,
//             KnowingPercent = 200
//         }
//     },
//     Questionnaire = questionnaire,
//     Projects = new List<Slot>
//     {
//         Slot
//     },
//     ParticipationRequests = new List<ParticipationRequest>
//     {
//         parReq
//     },
// };
// db.Users.Add(user);

db.SaveChanges();


app.Run();