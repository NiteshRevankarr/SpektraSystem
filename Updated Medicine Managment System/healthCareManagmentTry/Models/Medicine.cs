using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace healthCareManagmentDB.Models
{
    public class Medicine
    {
        [Key]
        public int MedicineID { get; set; }

        [ForeignKey("CategoryID")]
        public int CategoryID { get; set; }

        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public DateTime ExpirationDate { get; set; }
        public string Seller { get; set; }
        public string Description { get; set; }

        public string Image { get; set; }
    }
}
