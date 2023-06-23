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
    public class ProveedorsController : ControllerBase
    {
        private readonly BlueBellContext _context;

        public ProveedorsController(BlueBellContext context)
        {
            _context = context;
        }

        // GET: api/Proveedors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProveedoresMV>>> GetClientes()
        {
            var proveedor = await _context.Proveedors.ToListAsync();
            var personas = await _context.Personas.ToListAsync();
            var query = from pro in proveedor
                        join per in personas on pro.PersonaFk equals per.Idpersona
                        select new ProveedoresMV
                        {
                            Codproveedor=pro.Codproveedor,
                            Telefono = per.Telefono,
                            TipoDocPersona = per.TipoDocPersona,
                            DocPersona = per.DocPersona,
                            Nit = pro.Nit,
                            Estatus = pro.Estatus,

                        };

            return Ok(query);

        }

        // GET: api/Proveedors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Proveedor>> GetProveedor(int id)
        {
            var proveedor = await _context.Proveedors.FindAsync(id);

            if (proveedor == null)
            {
                return NotFound();
            }

            return proveedor;
        }

        // PUT: api/Proveedors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProveedor(int id, Proveedor proveedor)
        {
            if (id != proveedor.Codproveedor)
            {
                return BadRequest();
            }

            _context.Entry(proveedor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProveedorExists(id))
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

        // POST: api/Proveedors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Proveedor>> PostProveedor(Proveedor proveedor)
        {
            _context.Proveedors.Add(proveedor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProveedor", new { id = proveedor.Codproveedor }, proveedor);
        }

        [HttpPatch]
        public object SwStatus(ProveedoresMV proveedorid)
        {

            string statusGet = proveedorid.Estatus == "0" ? "1" : "0";

            var updateSw = $"UPDATE proveedor SET estatus='{statusGet}' WHERE codproveedor=@codproveedor";

            var parames = new SqlParameter[]
            {
                new SqlParameter("@codproveedor",proveedorid.Codproveedor) // 1,2
            };

            _context.Database.ExecuteSqlRaw(updateSw, parames);


            return _context.Proveedors.ToList();

        }

        // DELETE: api/Proveedors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProveedor(int id)
        {
            var proveedor = await _context.Proveedors.FindAsync(id);
            if (proveedor == null)
            {
                return NotFound();
            }

            _context.Proveedors.Remove(proveedor);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProveedorExists(int id)
        {
            return _context.Proveedors.Any(e => e.Codproveedor == id);
        }
    }
}
