namespace healthCareManagmentDB.Models
{
    public class Order
    {

            public int OrderId { get; set; }

            public int UserId { get; set; }

            public string FullName { get; set; }

            public string Email { get; set; }

            public string Phone { get; set; }

            public string Address { get; set; }

            public string City { get; set; }

            public string State { get; set; }

            public string Zip { get; set; }

            public decimal TotalAmount { get; set; }

            public decimal ShippingCharges { get; set; }

            public DateTime OrderDate { get; set; }

            public List<OrderItem> OrderItems { get; set; }

        }
    }
