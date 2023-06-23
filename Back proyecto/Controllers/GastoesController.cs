using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Blue_Bell.ModelViews;
using blue_bell.Models;
using Microsoft.Data.SqlClient;

namespace Blue_Bell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GastoesController : ControllerBase
    {
        private readonly BlueBellContext _context;

        public GastoesController(BlueBellContext context)
        {
            _context = context;
        }

        // GET: api/Gastoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GastosMV>>> GetGasto()
        {
            var gastos = await _context.Gastos.ToListAsync();
            var publicidad = await _context.Publicidads.ToListAsync();
            var proveedor = await _context.Proveedors.ToListAsync();
            var query = from gas in gastos
                        join pub in publicidad on gas.PublicidadFk equals pub.Idpublicidad
                        join pro in proveedor on gas.ProveedorFk equals pro.Codproveedor

                        select new GastosMV
                        {
                            Idcaja = gas.Idcaja,
                            CompraMercancia = gas.CompraMercancia,
                            CostoPublicidad = gas.CostoPublicidad,
                            NomPubli = pub.NomPubli,
                            TipoPubli = pub.TipoPubli,
                            NomEmpresa = pro.NomEmpresa,
                        };

            return Ok(query);
        }
        // GET: api/Gastoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Gasto>> GetGasto(int id)
        {
            var gasto = await _context.Gastos.FindAsync(id);

            if (gasto == null)
            {
                return NotFound();
            }

            return gasto;
        }

        // PUT: api/Gastoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGasto(int id, Gasto gasto)
        {
            if (id != gasto.Idcaja)
            {
                return BadRequest();
            }

            _context.Entry(gasto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GastoExists(id))
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

        // POST: api/Gastoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Gasto>> PostGasto(Gasto gasto)
        {
            _context.Gastos.Add(gasto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGasto", new { id = gasto.Idcaja }, gasto);
        }


        // DELETE: api/Gastoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGasto(int id)
        {
            var gasto = await _context.Gastos.FindAsync(id);
            if (gasto == null)
            {
                return NotFound();
            }

            _context.Gastos.Remove(gasto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GastoExists(int id)
        {
            return _context.Gastos.Any(e => e.Idcaja == id);
        }
    }
}
