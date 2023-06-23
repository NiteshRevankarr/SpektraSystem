using System.ComponentModel.DataAnnotations;

namespace healthCareManagmentDB.Models
{
    public class Admins
    {
        [Key]
        public int AdminId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Status { get; set; }
    }
}
