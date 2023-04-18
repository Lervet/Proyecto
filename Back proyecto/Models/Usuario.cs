using System;
using System.Collections.Generic;

namespace Blue_Bell.Models;

public partial class Usuario
{
    public int Idusuario { get; set; }

    public string? Username { get; set; }

    public string? Password { get; set; }

    public string? Rol { get; set; }

    public int? PersonaFk { get; set; }

    public virtual ICollection<Login> Logins { get; } = new List<Login>();

    public virtual Persona? PersonaFkNavigation { get; set; }
}
