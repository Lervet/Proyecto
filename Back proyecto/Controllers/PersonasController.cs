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
    public class PersonasController : ControllerBase
    {
        private readonly BlueBellContext _context;

        public PersonasController(BlueBellContext context)
        {
            _context = context;
        }

        // GET: api/Personas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PersonaMV>>> GetPersonas()
        {
            var persona = await _context.Personas.ToListAsync();
            var query = from per in persona
                        select new PersonaMV
                        {
                            Idpersona=per.Idpersona,
                            Nombre = per.Nombre,
                            Apellidos = per.Apellidos,
                            Rol = per.Rol,
                            Correo = per.Correo,
                            Telefono = per.Telefono,
                            TipoDocPersona = per.TipoDocPersona,
                            DocPersona = per.DocPersona,
                            Estatus = per.Estatus
                        };

            return Ok(query);
        }

        // GET: api/Personas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Persona>> GetPersona(int id)
        {
            var persona = await _context.Personas.FindAsync(id);

            if (persona == null)
            {
                return NotFound();
            }

            return persona;
        }


        // PUT: api/Personas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPersona(int id, Persona persona)
        {


            if (id != persona.Idpersona)
            {
                return BadRequest();
            }

            _context.Entry(persona).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonaExists(id))
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

        // POST: api/Personas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Persona>> PostPersona(Persona persona)
        {
            _context.Personas.Add(persona);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPersona", new { id = persona.Idpersona }, persona);
        }

        [HttpPatch]
        public object SwStatus(PersonaMV personaid)
        {

            string statusGet = personaid.Estatus == "0"  ? "1": "0";

            var updateSw = $"UPDATE persona SET estatus='{statusGet}' WHERE idpersona=@idpersona";

            var parames = new SqlParameter[]
            {
                new SqlParameter("@idpersona",personaid.Idpersona) 
            };

            _context.Database.ExecuteSqlRaw(updateSw, parames);


            return _context.Personas.ToList();
            
        }

        // DELETE: api/Personas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePersona(int id)
        {
            var persona = await _context.Personas.FindAsync(id);
            if (persona == null)
            {
                return NotFound();
            }

            _context.Personas.Remove(persona);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PersonaExists(int id)
        {
            return _context.Personas.Any(e => e.Idpersona == id);
        }
    }
}
