using System;
using System.Collections.Generic;

namespace blue_bell.Models;

public partial class Rol
{
    public int Idrol { get; set; }

    public string? NomRol { get; set; }

    public virtual ICollection<ModuloPermiso> ModuloPermisos { get; set; } = new List<ModuloPermiso>();

    public virtual ICollection<Persona> Personas { get; set; } = new List<Persona>();
}
