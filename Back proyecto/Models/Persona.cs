using System;
using System.Collections.Generic;

namespace Blue_Bell.Models;

public partial class Persona
{
    public int Idpersona { get; set; }

    public string? Nombre { get; set; }

    public string? Apellidos { get; set; }

    public string? Rol { get; set; }

    public string? Correo { get; set; }

    public string? Telefono { get; set; }

    public string? TipoDocPersona { get; set; }

    public string? DocPersona { get; set; }

    public string? Estatus { get; set; }

    public virtual ICollection<Cliente> Clientes { get; } = new List<Cliente>();

    public virtual ICollection<Factura> Facturas { get; } = new List<Factura>();

    public virtual ICollection<ModuloPermiso> ModuloPermisos { get; } = new List<ModuloPermiso>();

    public virtual ICollection<Proveedor> Proveedors { get; } = new List<Proveedor>();

    public virtual ICollection<Usuario> Usuarios { get; } = new List<Usuario>();
}
