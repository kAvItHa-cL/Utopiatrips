using InstamojoAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;
using Utopia_Trips.Dal;
using Utopia_Trips.Models;

namespace Utopia_Trips.Controllers
{
    public class PaymentController : Controller
    {
        PaymentDal objPayment = new PaymentDal();
        LeadsDal objLeads = new LeadsDal();
        MailModule objMail = new MailModule();
        // GET: Payment
        [HttpPost]
        public ActionResult Payment(PaymentModel objClass)
        {
         
            decimal temp = objClass.Tickets * objClass.Amount;
            if (objClass.GiftCode != "" && objClass.GiftCode!=null)
            {
                try
                {
                    if (objClass.GiftCode.ToUpper() == "ROAMFREE")
                    {
                        if (temp > 10000)
                            temp = temp - 523;
                    }
                }
                catch (Exception)
                {
                }
              
            }
            else
            {
                objClass.GiftCode = "NOCODE";
            }
            objClass.Currency = "INR";
            objClass.Total = temp.ToString();
            objLeads.StoreBooking(objClass);
            objMail.SendLeadsMail(objClass);
            string longUrl = objPayment.Payment(objClass);

            if (longUrl != "Error")
                return Redirect(longUrl);
            else
            {
                ViewBag.PaymentError = "Something went wrong, please try again!";
                return View();
            }

        }
    }
}