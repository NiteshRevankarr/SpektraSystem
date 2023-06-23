using loginnew.Model;
using Microsoft.EntityFrameworkCore;

namespace healthCareManagmentDB.Models
{
    public class CustomerDBContext : DbContext
    {
        public CustomerDBContext(DbContextOptions<CustomerDBContext> options) : base(options)
        {

        }

        public DbSet<Admins> Admin { get; set; }
        public DbSet<ruser> Users { get; set; }
        public DbSet<Order> Orders { get; set; }

        public DbSet<OrderItem> OrderItems { get; set; }
}

}
