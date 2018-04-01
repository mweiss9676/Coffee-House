using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;


namespace Coffee.Controllers
{

    public class HomeController : Controller
    {
        db5a880438084247f18360a8af0029f810Entities db = new db5a880438084247f18360a8af0029f810Entities();


        public ActionResult Index()
        {
            return View("Index");
        }

        public ActionResult Menu()
        {
            
            return View("Menu", db.Menus);
        }

        [HttpPost]
        public ActionResult UpdateCart(int beanId, string addAmount)
        {

            var cartItem = db.Beans.FirstOrDefault(b => b.ID == beanId);

            if(cartItem == null)
            {
                return View("Beans");
            }

            var cart = GetActiveShoppingCart();


            if (addAmount == "remove")
            {
                var removeMe = cart.Where(x => x.ID == cartItem.ID).FirstOrDefault();
                
                cart.Remove(removeMe);
            }
            else if (addAmount == "add")
            {
                cart.Add(cartItem);
            }

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
            var cart = GetActiveShoppingCart();

            ViewBag.Cart = cart;

            //int[] cartIds = GetCartIds(cart);

            //ViewBag.CartIds = cartIds;

            return View("Beans", db.Beans);
        }

        public ActionResult People()
        {
            return View("People");
        }

        //private int[] GetCartIds(IList<Bean> cart)
        //{
        //    int[] cartIds = new int[cart.Count];

        //    for (int i = 0; i < cart.Count; i++)
        //    {
        //        cartIds[i] = cart[i].ID;
        //    }

        //    return cartIds;
        //}

        [HttpGet]
        public string GetIds()
        {
            var result = GetActiveShoppingCart().Select(b => b.ID).ToArray();
            string output = JsonConvert.SerializeObject(result);

            return output;
        }
    }
}