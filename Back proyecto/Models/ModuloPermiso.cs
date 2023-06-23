using System;
using System.Collections.Generic;

namespace blue_bell.Models;

public partial class ModuloPermiso
{
    public int IdmoduloPermisos { get; set; }

    public string? Modulo { get; set; }

    public string? Permisos { get; set; }

    public int? RolFk { get; set; }

    public virtual Rol? RolFkNavigation { get; set; }
}
