using Microsoft.AspNetCore.Mvc;
using WebApi.Data;
using WebApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace WebApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles ="user")]
    public class CartController : ControllerBase
    {
        private readonly WebApiContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public CartController(WebApiContext context, IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> AddToCart(AddCartModel addCartModel)
        {
            int drugID = addCartModel.drugID;
            int quantity = addCartModel.ReqQuantity;
            double price = 0;
            string userID = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
         
            DrugModel drug = _context.Drugs.Find(drugID);
            if (drug != null && quantity != 0 && quantity < drug.DrugQuantityAvailable)
            {
                price = (drug.DrugPrice * quantity);
            }
            else
            {
                return BadRequest("Drug Not Found or Quantity invalid");
            }


            CartDrugs cart = new CartDrugs
            {
                DrugID = drugID,
                UserEmail = userID,
                Quantity = quantity,
                Amount = price,
                DateAdded = DateTime.Now
            };

          
            if(quantity<drug.DrugQuantityAvailable)
            {
                _context.Carts.Add(cart);
                _context.SaveChanges();

                return Ok("Product added to cart");
            }
            return BadRequest("Failed to Add to Cart");
            
        }

      
        [HttpGet]
        public async Task<IActionResult> GetCartItems()
        {
            
            string userID = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);

          
            var cartItems = _context.Carts.Where(c => c.UserEmail == userID).ToList();
            //if(cartItems == null)

            return Ok(cartItems);
        }

      
        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveFromCart(int id)
        {
            
            CartDrugs cart = _context.Carts.Find(id);

            if (cart == null)
            {
                return BadRequest();
            }
            else
            {
                _context.Carts.Remove(cart);
                _context.SaveChanges();

                return Ok("Product removed from cart");
            }
        
            
        }

        
        
    }

}


