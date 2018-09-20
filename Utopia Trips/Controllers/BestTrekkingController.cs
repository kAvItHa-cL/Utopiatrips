using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Utopia_Trips.Controllers
{
    public class BestTrekkingController : Controller
    {
        // GET: BestTrekking
        public ActionResult AgumbeTrekking()
        {
            return View();
        }

        public ActionResult KundariTrekking()
        {
            return View();
        }

        public ActionResult KavaledurgaTrekking()
        {
            return View();
        }

        public ActionResult DabbeFallsTrekking()
        {
            return View();
        }

        //Dandeli

        public ActionResult Dandeli()
        {
            return View();
        }
        public ActionResult Kodachadri()
        {
            return View();
        }
    }
}