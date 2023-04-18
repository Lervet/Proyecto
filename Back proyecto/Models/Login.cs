﻿using System;
using System.Collections.Generic;

namespace Blue_Bell.Models;

public partial class Login
{
    public int Idlogin { get; set; }

    public DateTime? FechaLogin { get; set; }

    public string? Reporte { get; set; }

    public int? UsuarioFk { get; set; }

    public virtual Usuario? UsuarioFkNavigation { get; set; }
}
