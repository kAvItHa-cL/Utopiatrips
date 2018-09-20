using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Utopia_Trips.Dal;
using Utopia_Trips.Models;

namespace Utopia_Trips.Controllers
{
    public class LoginController : Controller
    {

        LoginDal objLogin = new LoginDal();
        // GET: Login
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(LoginModel model)
        {
            //LoginError
            if(model.Password!=null && model.Username!=null)
                {
                int temp = objLogin.CheckLogin(model);
                if (temp > 0)
                {
                    Session["User"] = model.Username;
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    ViewBag.LoginError = "Invalid Username and Password, Please try again!";
                    return View();
                }
            }
            else
            {
                ViewBag.LoginError = "Username/Password cannot blank!";
                return View();
            }

           
        }



    }
}