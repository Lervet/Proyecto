using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using blue_bell.Models;

namespace blue_bell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublicidadsController : ControllerBase
    {
        private readonly BlueBellContext _context;

        public PublicidadsController(BlueBellContext context)
        {
            _context = context;
        }

        // GET: api/Publicidads
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Publicidad>>> GetPublicidads()
        {
          if (_context.Publicidads == null)
          {
              return NotFound();
          }
            return await _context.Publicidads.ToListAsync();
        }

        // GET: api/Publicidads/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Publicidad>> GetPublicidad(int id)
        {
          if (_context.Publicidads == null)
          {
              return NotFound();
          }
            var publicidad = await _context.Publicidads.FindAsync(id);

            if (publicidad == null)
            {
                return NotFound();
            }

            return publicidad;
        }

        // PUT: api/Publicidads/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPublicidad(int id, Publicidad publicidad)
        {
            if (id != publicidad.Idpublicidad)
            {
                return BadRequest();
            }

            _context.Entry(publicidad).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PublicidadExists(id))
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

        // POST: api/Publicidads
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Publicidad>> PostPublicidad(Publicidad publicidad)
        {
          if (_context.Publicidads == null)
          {
              return Problem("Entity set 'BlueBellContext.Publicidads'  is null.");
          }
            _context.Publicidads.Add(publicidad);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPublicidad", new { id = publicidad.Idpublicidad }, publicidad);
        }

        // DELETE: api/Publicidads/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePublicidad(int id)
        {
            if (_context.Publicidads == null)
            {
                return NotFound();
            }
            var publicidad = await _context.Publicidads.FindAsync(id);
            if (publicidad == null)
            {
                return NotFound();
            }

            _context.Publicidads.Remove(publicidad);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PublicidadExists(int id)
        {
            return (_context.Publicidads?.Any(e => e.Idpublicidad == id)).GetValueOrDefault();
        }
    }
}
