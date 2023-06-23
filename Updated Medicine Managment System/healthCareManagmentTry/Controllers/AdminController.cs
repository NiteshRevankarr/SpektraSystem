using healthCareManagmentDB.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace healthCareManagmentDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {

        private readonly CustomerDBContext _context;
        public AdminController(CustomerDBContext context)
        {
            _context = context;
        }

        // GET: api/<AdminController>
        [HttpGet]
        public IEnumerable<Admins> Get()
        {
            var resall = _context.Admin.ToList();
            return resall;
        }

        // GET: api/<AdminController>/email/test@example.com
        [HttpGet("email/{email}")]
        public IActionResult GetByEmail(string email)
        {
            var admin = _context.Admin.FirstOrDefault(a => a.Email == email);
            if (admin == null)
            {
                return NotFound();
            }

            return Ok(admin);
        }

        // PUT: api/<AdminController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Admins admin)
        {
            var ad = _context.Admin.Find(id);
            if (ad == null)
            {
                return NotFound();
            }

            ad.Status = admin.Status;
            _context.SaveChanges();

            return Ok("Success");
        }
    }

}
