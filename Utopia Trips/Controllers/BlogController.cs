using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Utopia_Trips.Controllers
{
    public class BlogController : Controller
    {
        // GET: Blog
        public ActionResult Blog()
        {
            return View();
        }
        public ActionResult AnthargangeBlog()
        {
            return View();
        }

        public ActionResult KuntiBlog()
        {
            return View();
        }
    }
}