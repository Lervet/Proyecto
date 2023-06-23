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
    public class DetallesProductoesController : ControllerBase
    {
        private readonly BlueBellContext _context;

        public DetallesProductoesController(BlueBellContext context)
        {
            _context = context;
        }

        // GET: api/DetallesProductoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DetallesProducto>>> GetDetallesProductos()
        {
          if (_context.DetallesProductos == null)
          {
              return NotFound();
          }
            return await _context.DetallesProductos.ToListAsync();
        }

        // GET: api/DetallesProductoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DetallesProducto>> GetDetallesProducto(int id)
        {
          if (_context.DetallesProductos == null)
          {
              return NotFound();
          }
            var detallesProducto = await _context.DetallesProductos.FindAsync(id);

            if (detallesProducto == null)
            {
                return NotFound();
            }

            return detallesProducto;
        }

        // PUT: api/DetallesProductoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetallesProducto(int id, DetallesProducto detallesProducto)
        {
            if (id != detallesProducto.Iddetallesprod)
            {
                return BadRequest();
            }

            _context.Entry(detallesProducto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetallesProductoExists(id))
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

        // POST: api/DetallesProductoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DetallesProducto>> PostDetallesProducto(DetallesProducto detallesProducto)
        {
          if (_context.DetallesProductos == null)
          {
              return Problem("Entity set 'BlueBellContext.DetallesProductos'  is null.");
          }
            _context.DetallesProductos.Add(detallesProducto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetallesProducto", new { id = detallesProducto.Iddetallesprod }, detallesProducto);
        }

        // DELETE: api/DetallesProductoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDetallesProducto(int id)
        {
            if (_context.DetallesProductos == null)
            {
                return NotFound();
            }
            var detallesProducto = await _context.DetallesProductos.FindAsync(id);
            if (detallesProducto == null)
            {
                return NotFound();
            }

            _context.DetallesProductos.Remove(detallesProducto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DetallesProductoExists(int id)
        {
            return (_context.DetallesProductos?.Any(e => e.Iddetallesprod == id)).GetValueOrDefault();
        }
    }
}
