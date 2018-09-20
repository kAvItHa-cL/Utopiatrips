using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Utopia_Trips.Dal;

namespace Utopia_Trips.Controllers
{
    public class ActivateController : Controller
    {
        MailModule objMil = new MailModule();
        // GET: Activate
        public ActionResult Verification(string user,string code)
        {
            objMil.WelcomeSendMail(user);
            return RedirectToAction("Index","Home");
        }

        public ActionResult ResetPassword(string user, string code)
        {
            Session["User"] = user;
            return RedirectToAction("ResetPassword", "PasswordReset");
        }
    }
}