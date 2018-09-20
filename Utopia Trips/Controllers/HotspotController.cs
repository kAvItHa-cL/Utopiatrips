using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Utopia_Trips.Controllers
{
    public class HotspotController : Controller
    {
        // GET: Hotspot
        public ActionResult Hotspots()
        {
            return View();
        }
    }
}