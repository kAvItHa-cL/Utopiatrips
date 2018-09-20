using System.Web.Mvc;
using Utopia_Trips.Dal;

namespace Utopia_Trips.Controllers
{
    public class OneDayTrekkingController : Controller
    {
        MailModule objMail = new MailModule();
        LeadsDal objLeads = new LeadsDal();

        // GET: OneDayTrekking
        public ActionResult AntharagangeTrek()
        {
            return View();
        }
      
        public ActionResult SavandurgaTrek()
        {
            return View();
        }

        public ActionResult HariHaraTrek()
        {
            return View();
        }

        public ActionResult KabbalDurgaTrek()
        {
            return View();
        }

        public ActionResult KuntiBettaTrek()
        {
            return View();
        }

        public ActionResult MaklidurgaTrek()
        {
            return View();
        }

        public ActionResult RamadevaraBettaTrek()
        {
            return View();
        }

        public ActionResult RangaswamyBettaTrek()
        {
            return View();
        }

        public ActionResult NarayanagiriTrek()
        {
            return View();
        }
    }
}