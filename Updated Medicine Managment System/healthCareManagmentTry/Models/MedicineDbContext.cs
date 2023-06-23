
using healthCareManagmentDB.Models;
using loginnew.Model;
using Microsoft.EntityFrameworkCore;

namespace healthCareManagmentDB.Models
{
    public class MedicineDbContext:DbContext
    {
        public MedicineDbContext(DbContextOptions<MedicineDbContext> options) : base(options)
        {
        }

        public virtual DbSet<GetAllMedicine> GetAllMedicine { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<GetAllMedicine>(entity =>
            {
                entity.HasNoKey();
            });
        }

 
        public DbSet<Category> Categories { get; set; }

        public DbSet<Medicine> Medicines { get; set; }
    }
}
    


