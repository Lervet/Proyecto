using System;
using System.Collections.Generic;

namespace Blue_Bell.Models;

public partial class ModuloPermiso
{
    public int IdmoduloPermisos { get; set; }

    public string? Modulo { get; set; }

    public string? Permisos { get; set; }

    public int? PersonasFk { get; set; }

    public virtual Persona? PersonasFkNavigation { get; set; }
}
