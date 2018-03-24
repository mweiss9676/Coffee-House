using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Coffee.Data
{
    public class CoffeeContext : DbContext
    {
        public CoffeeContext(): base()
        {

        }

        public DbSet<Bean> Beans { get; set; }

    }
}