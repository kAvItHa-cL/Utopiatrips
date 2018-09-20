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
    public class ContactUsController : Controller
    {
        MailModule objMail = new MailModule();
        // GET: ContactUs
        public ActionResult FindUs()
        {
            ViewBag.Message = "";
            return View();
        }

        [HttpPost]
        public ActionResult FindUs(FindUsModel model)
        {
            objMail.SendMail(model);
            ViewBag.Message = "Sent";
            return View();

        }

    }
}