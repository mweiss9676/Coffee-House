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
        public ActionResult AddToCart(int beanId, int userId)
        {
            // Go to the database, add a bean id to the shopping cart

            return Json(new HttpStatusCodeResult(200));
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