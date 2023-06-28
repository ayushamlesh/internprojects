using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models;

namespace WebApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    
    public class DrugsController : ControllerBase
    {
        private readonly WebApiContext _context;

        public DrugsController(WebApiContext context)
        {
            _context = context;
        }



        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetDrugs()
        {
          if (_context.Drugs == null)
          {
              return NotFound();
          }
            var drug = await _context.Drugs.ToListAsync();
          return Ok(drug);
        }



        [AllowAnonymous]
        [HttpGet]
        [Route("{id:int}")]
        public async Task<ActionResult<DrugModel>> GetDrugModelById([FromRoute] int id)
        {
          if (_context.Drugs == null)
          {
              return NotFound();
          }
            var drugModel = await _context.Drugs.FindAsync(id);

            if (drugModel == null)
            {
                return NotFound();
            }

            return drugModel;
        }


        [AllowAnonymous]
        [HttpGet("{drugname}")]
        public async Task<ActionResult> GetDrugModelByName(string drugname)
        {
            if (_context.Drugs == null)
            {
                return NotFound();
            }
            if(drugname == "")
            {
                var drugModel1 = _context.Drugs.ToList();
                return Ok(drugModel1);
            }
            var drugModel = _context.Drugs.Where(w=>w.DrugName.Contains(drugname)).ToList();

            if (drugModel == null)
            {
                return NotFound();
            }

            return Ok(drugModel);
        }


        [Authorize(Roles = "admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDrugModel(int id, DrugModel drugModel)
        {
            if (id != drugModel.DrugId)
            {
                return BadRequest();
            }

            _context.Entry(drugModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DrugModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        


        [Authorize(Roles = "admin")]
        [HttpPost]
        public async Task<ActionResult<DrugModel>> PostDrugModel(DrugModel drugModel)
        {
          if (_context.Drugs == null)
          {
              return Problem("Entity set 'WebApiContext.Drugs'  is null.");
          }
            _context.Drugs.Add(drugModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDrugModelById", new { id = drugModel.DrugId }, drugModel);
        }



        [Authorize(Roles = "admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDrugModel(int id)
        {
            if (_context.Drugs == null)
            {
                return NotFound();
            }
            var drugModel = await _context.Drugs.FindAsync(id);
            if (drugModel == null)
            {
                return NotFound();
            }

            _context.Drugs.Remove(drugModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DrugModelExists(int id)
        {
            return (_context.Drugs?.Any(e => e.DrugId == id)).GetValueOrDefault();
        }
        

    }
}
