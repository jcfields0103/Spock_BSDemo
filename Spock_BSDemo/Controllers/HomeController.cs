using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Spock_BSDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult BSDemo()
        {
            ViewBag.Message = "Your demo page.";

            return View();
        }

        public ActionResult JSDemo()
        {
            return View();
        }
        public ActionResult MathExercise()
        {
            return View();
        }
        public ActionResult CodingChallenges()
        {
            return View();
        }
        public ActionResult Factorial()
        {
            return View();
        }
       public ActionResult Palindrome()
        {
            return View();
        }
        public ActionResult FizzBuzz()
        {
            return View();
        }
        public ActionResult SumofAllFears()
        {
            return View();
        }
    }
}