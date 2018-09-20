using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Utopia_Trips.Models
{
    public class PaymentModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get;set;}
        public string Phone { get;set;}
        public string Description { get;set;}
        public decimal Amount { get;set;}
        public string Currency { get;set;}
        public string TripDate { get; set; }
        public decimal Tickets { get; set; }
        public string Total { get; set; }
        public string TrekType { get; set; }
        public string GiftCode { get; set; }
    }


    public class Payment_Response
    {
        public string id { get; set; }
        public string status { get; set; }
        public string instrument_type { get; set; }
    }
}