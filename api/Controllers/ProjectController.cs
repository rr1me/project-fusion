using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Scaffolding.Metadata;
using project_fusion.Database;
using project_fusion.Entities;

namespace project_fusion.Controllers;

[ApiController]
[Route("project")]
public class ProjectController : ControllerBase
{
    [HttpGet("{id}")]
    public Project GetProject(long id)
    {
        var db = new DatabaseContext();
        return db.Projects.FirstOrDefault(x => x.Id == id);
    }

    [HttpGet("all")]
    public List<Project> GetAllProjects()
    {
        var db = new DatabaseContext();
        return db.Projects.ToList();
    }
}