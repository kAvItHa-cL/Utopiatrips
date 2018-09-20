using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Utopia_Trips.Dal;
using Utopia_Trips.Models;

namespace Utopia_Trips.Controllers
{
    public class RegisterController : Controller
    {
        //Decleare Objects

        RegisterDal objRegister = new RegisterDal();
        MailModule objMil = new MailModule();
        // GET: Register
        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Register(RegisterModel model)
        {
            Guid id = Guid.NewGuid();
            string temp = objRegister.CreateUser(model,id.ToString());
            if (temp == "Success")
            { 
                objMil.SendActivationCode(model,id.ToString());
                objMil.SendRegisterMail(model);
               // objRegister.StoreCode(model,id.ToString());
                Session["User"] = model.EmailId;
              //  objMil.WelcomeSendMail(model);
                return RedirectToAction("Index", "Home");
            }
            else
            {
                ViewBag.Error = "User Exists!";
                return View();
            }
        }

    }
}