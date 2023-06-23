
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using loginnew.Model;



// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace healthCareManagmentDB.Models
{
    [Route("api/[controller]")]
    [ApiController]
    // [EnableCors("AllowOrigin")]
    public class logincontroller : ControllerBase

    {

        //declares _context of type CustomerDBContext.
        private readonly CustomerDBContext _context;
        public logincontroller(CustomerDBContext context)
        {
            _context = context;
        }


        [HttpGet("users")]
        public IActionResult GetUsers()
        {
            var result = _context.Users.Select(u => new
            {
                u.UserId,
                u.Name,
                u.email,
                u.password
            }).ToList();
            return Ok(result);

        }



        [HttpGet("totalusers")]
        public async Task<ActionResult<int>> GetTotalUsers()
        {
            var totalUsers = await _context.Users.CountAsync();
            return Ok(totalUsers);
        }


        // GET: api/<logincontroller>
        [HttpGet]
        public IEnumerable<ruser> Get()
        {
            var resall = _context.Users.ToList();
            return resall;

        }


        // GET: api/<Controller>
        [HttpPost("user")]
        public IActionResult Get(users user)
        {
            var us = _context.Users.Where(u => u.email == user.email && u.password == user.password).FirstOrDefault();
            if (us != null)
            {

                var data = _context.Users.Where(u => u.email == user.email).FirstOrDefault();

                return Ok(data.UserId);
            }

            return Ok("Failure");
        }
        [HttpPost("ruser")]

        public IActionResult ruser(ruser ru)
        {

            if (_context.Users.Where(u => u.email == ru.email).FirstOrDefault() != null)
            {
                return Ok("Already Exists");
            }
            _context.Users.Add(ru);
            _context.SaveChanges();
            return Ok("Success");
        }
    }
}

    

 
