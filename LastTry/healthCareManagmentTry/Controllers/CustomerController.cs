using healthCareManagmentDB.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;


namespace healthCareManagmentDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {


        //declares _context of type MedicineDbContext.
        private readonly CustomerDBContext _context;

        public CustomerController(CustomerDBContext context)
        {
            _context = context;
        }


        [HttpGet("totalsales")]
        public async Task<ActionResult<decimal>> GetTotalSales()
        {
            var totalSales = await _context.Orders.SumAsync(o => o.TotalAmount);
            return Ok(totalSales);
        }


        [HttpGet("totalorders")]
        public async Task<ActionResult<int>> GetTotalOrders()
        {
            var totalOrders = await _context.Orders.CountAsync();
            return Ok(totalOrders);
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()

        {

            return await _context.Orders.Include(o => o.OrderItems).ToListAsync();

        }

        [HttpPost]

        public async Task<IActionResult> SubmitOrder(Order order)

        {

            using (var transaction = _context.Database.BeginTransaction())

            {

                try

                {
                    // converts AN objct to its json representation as  a string
                    var orderItemsJson = JsonConvert.SerializeObject(order.OrderItems);

                    var parameters = new[]
                    {

                    new SqlParameter("@UserId", order.UserId),

                    new SqlParameter("@FullName", order.FullName),

                    new SqlParameter("@Email", order.Email),

                    new SqlParameter("@Phone", order.Phone),

                    new SqlParameter("@Address", order.Address),

                    new SqlParameter("@City", order.City),

                    new SqlParameter("@State", order.State),

                    new SqlParameter("@Zip", order.Zip),

                    new SqlParameter("@TotalAmount", order.TotalAmount),

                    new SqlParameter("@ShippingCharges", order.ShippingCharges),

                    new SqlParameter("@OrderDate", DateTime.Now),

                    new SqlParameter("@OrderItems", orderItemsJson)

                };
               await _context.Database.ExecuteSqlRawAsync("EXEC InsertOrder @UserId, @FullName, @Email, @Phone, @Address, @City, @State, @Zip, @TotalAmount, @ShippingCharges, @OrderDate, @OrderItems", parameters);

                    await transaction.CommitAsync();   // Commit the transaction to save the changes to the database

                    return Ok();

                }

                catch (Exception ex)

                {

                    await transaction.RollbackAsync();     // Rollback the transaction to undo any changes made within the transaction

                    return BadRequest(ex.Message);

                }

            }

        }

    }
}