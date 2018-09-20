using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Utopia_Trips.Models
{
    public class WishListModel
    {
        public string WishListID { get; set; }
        public string EventId { get; set; }
        public string EventTitle {get;set;}
        public string EmailId {get;set;}
        public string Image { get; set; }
        public string Price { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public DateTime Date {get;set;}
        public string Status {get;set;}
    }
}