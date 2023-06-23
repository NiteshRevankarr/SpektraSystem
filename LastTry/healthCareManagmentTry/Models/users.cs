using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using loginnew.Model;
using Microsoft.EntityFrameworkCore.SqlServer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace loginnew.Model
{
    public class users
    {
        public string email { get; set; }
        public string password { get; set; }
    }
}
