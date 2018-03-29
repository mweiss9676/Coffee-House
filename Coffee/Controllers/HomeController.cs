using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Coffee.Controllers
{

    //Maybe use Cloudinary to resize images for each device 

    public class HomeController : Controller
    {
        //Model1 db = new CoffeeEntities1();
        db5a880438084247f18360a8af0029f810Entities db = new db5a880438084247f18360a8af0029f810Entities();

        //public IList<Bean> Cart { get; set; } = new List<Bean>();



        public ActionResult Index()
        {
            return View("Index");
        }

        public ActionResult Menu()
        {
            
            return View("Menu", db.Menus);
        }

        [HttpGet]
        public ActionResult BeansApi()
        {
            return Json(db.Beans, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddToCart(int beanId)
        {
            // Go to the database, add a bean id to the shopping cart

            var cartItem = db.Beans.FirstOrDefault(b => b.ID == beanId);

            var cart = GetActiveShoppingCart();

            cart.Add(cartItem);

            ViewBag.Total = GetTotal(cart);

            return PartialView("ShoppingCart", cart);
        }

        private IList<Bean> GetActiveShoppingCart()
        {
            List<Bean> cart = null;

            if (Session["ShoppingCart"] == null)
            {
                cart = new List<Bean>();
                Session["ShoppingCart"] = cart;
            }
            else
            {
                cart = Session["ShoppingCart"] as List<Bean>;
            }

            return cart;
        }

        private decimal GetTotal(IList<Bean> cart)
        {
            decimal total = 0;

            foreach (var item in cart)
            {
                total += item.Price;
            }

            return total;
        }


        public ActionResult Beans()
        {
            return View("Beans", db.Beans);
        }

        public ActionResult People()
        {
            return View("People");
        }
    }
}