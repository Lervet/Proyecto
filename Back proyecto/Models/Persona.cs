using System;
using System.Collections.Generic;

namespace blue_bell.Models;

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

    public int? RolFk { get; set; }

    public virtual ICollection<Cliente> Clientes { get; set; } = new List<Cliente>();

    public virtual ICollection<Factura> Facturas { get; set; } = new List<Factura>();

    public virtual ICollection<Proveedor> Proveedors { get; set; } = new List<Proveedor>();

    public virtual Rol? RolFkNavigation { get; set; }

    public virtual ICollection<Usuario> Usuarios { get; set; } = new List<Usuario>();
}
