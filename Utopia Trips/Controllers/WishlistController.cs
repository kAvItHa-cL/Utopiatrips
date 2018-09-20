using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Utopia_Trips.Dal;
using Utopia_Trips.Models;

namespace Utopia_Trips.Controllers
{
    public class WishlistController : Controller
    {
        //Declare object
        WishListModel model = new WishListModel();
        WishListDal objWishlist = new WishListDal();
        List<WishListModel> modelList = new List<WishListModel>();

        // GET: Wishlist
        public ActionResult BucketList()
        {
            if (Session["User"] == null)
                return RedirectToAction("Login", "Login");
            else
            {
                var userName = Session["User"];
                modelList = objWishlist.GetWishlist(userName.ToString());
                return View(modelList);
            }
        }

        [HttpPost]
        public string AddToWishlist(string title, string image, string price, string description, string id, string url)
        {
            if (Session["User"] == null)
            {
                ViewBag.LoginError = "Please login to Add to Wishlist";
                return "Redirect";
            }
            else
            {
                var userName = Session["User"];
                model.EventTitle = title;
                model.Image = image.Replace('~', ' ');
                model.Price = price;
                model.Description = description;
                model.EmailId = userName.ToString();
                model.EventId = id;
                model.Date = DateTime.Now;
                model.Url = url;
                model.Status = "Active";
                string temp = objWishlist.AddToWishList(model);
                if (temp == "Exists")
                    return "Exists";
                else
                    return "Success";
            }

        }
        [HttpPost]
        public string RemoveFromWishlist(string EventId)
        {
            
            var emailid = Session["User"];
            string Eventid = EventId;
            //objWishlist.RemoveWishlist(eventid,emailid);
            objWishlist.RemoveWishlist(Eventid, emailid);
            return "success";
         }
    }
}