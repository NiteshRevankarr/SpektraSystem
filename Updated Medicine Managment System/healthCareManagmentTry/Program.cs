
using healthCareManagmentDB.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;

namespace healthCareManagmentDB
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddHttpContextAccessor();

            builder.Services.AddDbContext<CustomerDBContext>(Options => Options.UseSqlServer(builder.Configuration.GetConnectionString("con")));
            builder.Services.AddDbContext<MedicineDbContext>(Options => Options.UseSqlServer(builder.Configuration.GetConnectionString("con")));




            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();




            app.UseCors(options =>
            {
                options.WithOrigins("http://localhost:4200") // Replace with your localhost URL and port
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            });


         

            app.UseAuthorization();


            app.MapControllers();
            
            app.Run();
        }
    }
}