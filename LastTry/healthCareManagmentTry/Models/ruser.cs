using System;
using System.ComponentModel.DataAnnotations;



namespace loginnew.Model
{

    //[Table("Users1")]
    public class ruser
    {
        [Key]
        public int UserId { get; set; }
        public string Name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string cpassword { get; set; }
    }
}
