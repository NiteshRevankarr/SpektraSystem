using healthCareManagmentDB.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Data;

namespace healthCareManagmentDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetAllMedicineController : ControllerBase
    {
        //declares _context of type MedicineDbContext.
        private readonly MedicineDbContext _context;


        public GetAllMedicineController(MedicineDbContext context)
        {
            _context = context;
        }

        // GET: api/GetAllMedicine
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GetAllMedicine>>> GetMedicines()
        {
            var medicines = await _context.GetAllMedicine.FromSqlRaw("EXEC GetAllData").ToListAsync();

            return medicines;
        }

        // GET: api/GetAllMedicine/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GetAllMedicine>> GetMedicine(int id)
        {
            var medicines = await _context.GetAllMedicine
                .FromSqlRaw("EXEC GetAllData")
                .ToListAsync();


            var medicine = medicines.FirstOrDefault(m => m.MedicineID == id);

            if (medicine == null)
            {
                return NotFound();
            }

            return medicine;
        }


        // POST: api/Medicines
        [HttpPost]
        public async Task<ActionResult<GetAllMedicine>> CreateMedicine(GetAllMedicine medicine)
        {
            var categoryNameParam = new SqlParameter("@CategoryName", SqlDbType.NVarChar, 100);
            categoryNameParam.Value = medicine.CategoryName;

            var nameParam = new SqlParameter("@Name", SqlDbType.NVarChar, 100);
            nameParam.Value = medicine.Name;

            var priceParam = new SqlParameter("@Price", SqlDbType.Decimal);
            priceParam.Value = medicine.Price;

            var quantityParam = new SqlParameter("@Quantity", SqlDbType.Int);
            quantityParam.Value = medicine.Quantity;

            var expirationDateParam = new SqlParameter("@ExpirationDate", SqlDbType.Date);
            expirationDateParam.Value = medicine.ExpirationDate;

            var sellerParam = new SqlParameter("@Seller", SqlDbType.NVarChar, 100);
            sellerParam.Value = medicine.Seller;

            var descriptionParam = new SqlParameter("@Description", SqlDbType.NVarChar, -1);
            descriptionParam.Value = medicine.Description;

            var imageParam = new SqlParameter("@Image", SqlDbType.NVarChar, -1);
            imageParam.Value = medicine.Image;

            await _context.Database.ExecuteSqlRawAsync("EXEC InsertMedicine @CategoryName, @Name, @Price, @Quantity, @ExpirationDate, @Seller, @Description, @Image",
                categoryNameParam, nameParam, priceParam, quantityParam, expirationDateParam, sellerParam, descriptionParam, imageParam);

            var createdMedicine = await _context.Medicines.OrderByDescending(m => m.MedicineID).FirstOrDefaultAsync();

            if (createdMedicine == null)
            {
                return BadRequest();
            }

            var category = await _context.Categories.FindAsync(createdMedicine.CategoryID);

            var medicineResponse = new
            {
                createdMedicine.MedicineID,
                createdMedicine.CategoryID,
                CategoryName = category?.CategoryName,    
                createdMedicine.Name,
                createdMedicine.Price,
                createdMedicine.Quantity,
                createdMedicine.ExpirationDate,
                createdMedicine.Seller,
                createdMedicine.Description,
                createdMedicine.Image
            };

            return CreatedAtAction("GetMedicine", new { id = createdMedicine.MedicineID }, medicineResponse);
        }


        // PUT: api/Medicines/5
        [HttpPut("{id}")]
        public async Task<ActionResult<GetAllMedicine>> UpdateMedicine(int id, GetAllMedicine medicine)
        {
            var categoryNameParam = new SqlParameter("@CategoryName", SqlDbType.NVarChar, 100);
            categoryNameParam.Value = medicine.CategoryName;

            var medicineIDParam = new SqlParameter("@MedicineID", SqlDbType.Int);
            medicineIDParam.Value = id;

            var nameParam = new SqlParameter("@Name", SqlDbType.NVarChar, 100);
            nameParam.Value = medicine.Name;

            var priceParam = new SqlParameter("@Price", SqlDbType.Decimal);
            priceParam.Value = medicine.Price;

            var quantityParam = new SqlParameter("@Quantity", SqlDbType.Int);
            quantityParam.Value = medicine.Quantity;

            var expirationDateParam = new SqlParameter("@ExpirationDate", SqlDbType.Date);
            expirationDateParam.Value = medicine.ExpirationDate;

            var sellerParam = new SqlParameter("@Seller", SqlDbType.NVarChar, 100);
            sellerParam.Value = medicine.Seller;

            var descriptionParam = new SqlParameter("@Description", SqlDbType.NVarChar, -1);
            descriptionParam.Value = medicine.Description;

            var imageParam = new SqlParameter("@Image", SqlDbType.NVarChar, -1);
            imageParam.Value = medicine.Image;

            var result = await _context.Database.ExecuteSqlRawAsync("EXEC UpdateMedicine @MedicineID, @CategoryName, @Name, @Price, @Quantity, @ExpirationDate, @Seller, @Description, @Image",
                medicineIDParam, categoryNameParam, nameParam, priceParam, quantityParam, expirationDateParam, sellerParam, descriptionParam, imageParam);

            if (result == 0)
            {
                return NotFound();
            }

            var medicines = await _context.GetAllMedicine
                .FromSqlRaw("EXEC GetAllData")
                .ToListAsync();

            var updatedMedicine = medicines.FirstOrDefault(m => m.MedicineID == id);

            if (updatedMedicine == null)
            {
                return NotFound();
            }

            return updatedMedicine;
        }




        // DELETE: api/GetAllMedicine/5

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicine(int id)
        {
            var medicine = await _context.Database.ExecuteSqlInterpolatedAsync($"EXEC DeleteMedicine {id}");

            if (medicine == 0)
            {
                return NotFound();
            }

            return NoContent();
        }

    }
}



