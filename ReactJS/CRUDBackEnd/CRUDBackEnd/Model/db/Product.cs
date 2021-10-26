using System;
using System.Collections.Generic;

#nullable disable

namespace CRUDBackEnd.Model.db
{
    public partial class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public double? ProductPrice { get; set; }
    }
}
