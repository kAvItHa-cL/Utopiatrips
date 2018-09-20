using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Web;
using System.Web.Mvc;
using Utopia_Trips.Dal;
using Utopia_Trips.Models;

namespace Utopia_Trips.Controllers
{
    public class CorporateDiscountController : Controller
    {

        MailModule objMail = new MailModule();
        // GET: CorporateDiscount
        public ActionResult CorporateOuting()
        {
            ViewBag.Message = "";
            return View();
        }

        [HttpPost]
        public ActionResult CorporateOuting(CorporateModel model)
        {
            objMail.CorporateSendMail(model);
            ViewBag.Message = "Sent";
            return View();
        }
    }
}