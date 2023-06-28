using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;
using WebApi.Data;
using Microsoft.AspNetCore.Authorization;
using WebApi.server;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminOrders : ControllerBase
    {
        private readonly WebApiContext _context;
        public AdminOrders(WebApiContext context)
        {
            _context = context;
        }
        [Authorize(Roles = "admin")]
        [HttpGet()]
        public async Task<IActionResult> GetOrdersForAdmin()
        {
            if (_context.OrderModels == null)
            {
                return NotFound();
            }
            var order = await _context.OrderModels.ToListAsync();
            return Ok(order);
        }
        [Authorize(Roles = "admin")]
        [HttpGet("{useremail}")]
        public async Task<IActionResult> GetOrdersForAdminByUser(string useremail)
        {
            if (_context.OrderModels == null)
            {
                return NotFound();
            }
            if (useremail == "")
            {
                var drugModel1 = _context.OrderModels.ToList();
                return Ok(drugModel1);
            }
            var drugModel = _context.OrderModels.Where(w => w.UserEmail.Contains(useremail)).ToList();

            if (drugModel == null)
            {
                return NotFound();
            }

            return Ok(drugModel);
        }
    }
}
