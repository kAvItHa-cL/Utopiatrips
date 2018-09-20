using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Utopia_Trips.Dal;
using Utopia_Trips.Models;

namespace Utopia_Trips.Controllers
{
    public class PasswordResetController : Controller
    {

        PasswordDal objPassword = new PasswordDal();
        // GET: PasswordReset
        public ActionResult ForgotPassword()
        {
            return View();
        }

        [HttpPost]
        public ActionResult ForgotPassword(ForgotPasswordModel model)
        {
            objPassword.SendPassword(model);
            ViewBag.ForgotPasswordstatus = "Sent";
            return View();
        }

        public ActionResult ResetPassword()
        {
            return View();
        }

        [HttpPost]
        public ActionResult ResetPassword(ResetPasswordModel model)
        {
            var userName = Session["User"];
            int temp = objPassword.UpdatePassword(model, userName.ToString());
            if (temp == 1)
                return View("Login", "Login");
            else
            {
                ViewBag.ResetPasswordError = "User Not Exist. Please Register To Stay Updated!";
                return View();
            }
        }
    }
}