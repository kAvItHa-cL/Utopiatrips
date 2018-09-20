using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Utopia_Trips.Models
{
    public class RegisterModel
    {
        public string EmailId { get; set; }
        public string Password {get;set;}
        public string Fullname {get;set;}
        public string RegisterDate { get; set; }
    }
}