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
using System.Globalization;

namespace Blue_Bell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacturasController : ControllerBase
    {
        private readonly BlueBellContext _context;

        public FacturasController(BlueBellContext context)
        {
            _context = context;
        }

        // GET: api/Facturas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FacturasMV>>> GetFactura()
        {
            var facturas = await _context.Facturas.ToListAsync();
            var personas = await _context.Personas.ToListAsync();

            var query = from fac in facturas
                        join per in personas on fac.PersonaFk equals per.Idpersona
                        select new FacturasMV
                        {
                            Nofactura = fac.Nofactura,
                            Cantidad = fac.Cantidad,
                            FormaPago = fac.FormaPago,
                            Correo = per.Correo,
                            Telefono = per.Telefono,
                            TipoDocPersona = per.TipoDocPersona,
                            DocPersona = per.DocPersona,
                            Articulo = fac.Articulo,
                        };

            return Ok(query);
        }

        // GET: api/Facturas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Factura>> GetFactura(int id)
        {
            var factura = await _context.Facturas.FindAsync(id);

            if (factura == null)
            {
                return NotFound();
            }

            return factura;
        }

        // PUT: api/Facturas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public void PutFactura( FacturasMV factura)
        {
            string rstFinal = "";
            var getFkPersona = _context.Personas.Where(s => s.DocPersona == factura.DocPersona).Select(s => new
            {
                idPersona=s.Idpersona
            });

            foreach (var item in getFkPersona)
            {
                rstFinal += item.idPersona;
            }

            var query = $"UPDATE factura SET cantidad='{factura.Cantidad}',forma_pago='{factura.FormaPago}',articulo='{factura.Articulo}'," +
            $"persona_fk='{rstFinal}'" +
            $"WHERE nofactura=@nofactura";

            var xxx = new SqlParameter[] {
               new SqlParameter("@nofactura",factura.Nofactura)
           };

            _context.Database.ExecuteSqlRaw(query, xxx);

        }

        // POST: api/Facturas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Factura>> PostFactura(Factura factura)
        {
            _context.Facturas.Add(factura);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFactura", new { id = factura.Nofactura }, factura);
        }

        // DELETE: api/Facturas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFactura(int id)
        {
            var factura = await _context.Facturas.FindAsync(id);
            if (factura == null)
            {
                return NotFound();
            }

            _context.Facturas.Remove(factura);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FacturaExists(int id)
        {
            return _context.Facturas.Any(e => e.Nofactura == id);
        }
    }
}
