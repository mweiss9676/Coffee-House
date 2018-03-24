using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Coffee.Models
{
    public class Bean
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Region { get; set; }
        public string Farm { get; set; }
        public string Variety { get; set; }
        public int Altitude { get; set; }
        public string Roast { get; set; }
        public string Flavor { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public string ImageName { get; set; }

    }
}