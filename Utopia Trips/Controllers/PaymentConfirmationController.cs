using InstamojoAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Reflection;
using System.Web;
using System.Web.Mvc;
using Utopia_Trips.Dal;
using Utopia_Trips.Models;

namespace Utopia_Trips.Controllers
{
    public class PaymentConfirmationController : Controller
    {
        PaymentResponseDal objPayment = new PaymentResponseDal();
        // GET: PaymentConfirmation

        public ActionResult Confirmation(string id, string transaction_id, string payment_id)
        {
            string Insta_client_id = "dpcYyygkuivQPQJgVtgsvC3BJszm33dNjvDyaG05",
           Insta_client_secret = "7I8bL4glbB4oVBnwUEkS0NBPpFRyC6Yw8TvhID7LXZeCAFLfjYvaN2iGj2Z13emD1OgxfT7SKNr5lEzoOQiSKAvX57PiCGIGtdSvYD6vAjdnPG5e1CDAqGovJ1DoAeIL",
           Insta_Endpoint = InstamojoConstants.INSTAMOJO_API_ENDPOINT,
           Insta_Auth_Endpoint = InstamojoConstants.INSTAMOJO_AUTH_ENDPOINT;
            Instamojo objClass = InstamojoImplementation.getApi(Insta_client_id, Insta_client_secret, Insta_Endpoint, Insta_Auth_Endpoint);

            PaymentOrderDetailsResponse objPaymentRequestDetailsResponse = objClass.getPaymentOrderDetailsByTransactionId(transaction_id);
            string temp = objPaymentRequestDetailsResponse.status;
            if(temp== "COMPLETED" || temp=="Completed" || temp=="completed")
            {
                return View();
            }
            return View("Failure");
        }


        public ActionResult Failure()
        {
            return View();
        }
    }
}