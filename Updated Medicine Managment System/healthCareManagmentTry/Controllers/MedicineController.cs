using healthCareManagmentDB.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace healthCareManagmentDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineController : ControllerBase
    {
        private readonly MedicineDbContext _context;

        public MedicineController(MedicineDbContext context)
        {
            _context = context;
        }

        // GET: api/Medicine
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Medicine>>> GetMedicines()
        {
            return await _context.Medicines.ToListAsync();
        }

        // GET: api/Medicine/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Medicine>> GetMedicine(int id)
        {
            var medicine = await _context.Medicines.FindAsync(id);

            if (medicine == null)
            {
                return NotFound();
            }

            return medicine;
        }

        // PUT: api/Medicine/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMedicine(int id, Medicine medicine)
        {
            if (id != medicine.MedicineID)
            {
                return BadRequest();
            }

            _context.Entry(medicine).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MedicineExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Medicine
        [HttpPost]
        public async Task<ActionResult<Medicine>> AddMedicine(Medicine medicine)
        {
            using (var command = _context.Database.GetDbConnection().CreateCommand())
            {
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "Medicine";
                command.Parameters.Add(new SqlParameter("@CategoryID", medicine.CategoryID));
                command.Parameters.Add(new SqlParameter("@Name", medicine.Name));
                command.Parameters.Add(new SqlParameter("@Price", medicine.Price));
                command.Parameters.Add(new SqlParameter("@Quantity", medicine.Quantity));
                command.Parameters.Add(new SqlParameter("@ExpirationDate", medicine.ExpirationDate));
                command.Parameters.Add(new SqlParameter("@Seller", medicine.Seller));
                command.Parameters.Add(new SqlParameter("@Description", medicine.Description));
                command.Parameters.Add(new SqlParameter("@Image", medicine.Image));

                await _context.Database.OpenConnectionAsync();
                await command.ExecuteNonQueryAsync();
            }

            return CreatedAtAction("GetMedicine", new { id = medicine.MedicineID }, medicine);
        }

        // DELETE: api/Medicine/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Medicine>> DeleteMedicine(int id)
        {
            var medicine = await _context.Medicines.FindAsync(id);
            if (medicine == null)
            {
                return NotFound();
            }

            _context.Medicines.Remove(medicine);
            await _context.SaveChangesAsync();

            return medicine;
        }

        private bool MedicineExists(int id)
        {
            return _context.Medicines.Any(e => e.MedicineID == id);
        }
    }

}