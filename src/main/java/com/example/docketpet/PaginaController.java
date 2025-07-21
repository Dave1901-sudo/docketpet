package com.example.docketpet;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PaginaController {

    // Página de inicio
    @GetMapping("/")
    public String index() {
        return "index";
    }

    // Página de baño y corte
    @GetMapping("/bano-y-corte")
    public String banoYCorte() {
        return "Baño_y_corte";
    }

    // Página de consulta veterinaria
    @GetMapping("/consulta-veterinaria")
    public String consultaVeterinaria() {
        return "consultaveterinaria";
    }

    @GetMapping("/contacto")
    public String contacto() {
        return "contacto";
    }

    // Página de desparasitación
    @GetMapping("/desparasitacion")
    public String desparasitacion() {
        return "desparasitacion";
    }

    @GetMapping("/equipo")
    public String equipo() {
        return "equipo";
    }

    // Página de esterilización
    @GetMapping("/esterilizacion")
    public String esterilizacion() {
        return "esterilizacion";
    }

    @GetMapping("/nosotros")
    public String nosotros() {
        return "nosotros";
    }

    @GetMapping("/preguntas")
    public String preguntas() {
        return "preguntas";
    }

    // Página de reclamaciones
    @GetMapping("/reclamaciones")
    public String reclamaciones() {
        return "reclamaciones";
    }

    // Página de reclamaciones
    @GetMapping("/tienda")
    public String tienda() {
        return "tienda";
    }

    @GetMapping("/vacunacion")
    public String vacunacion() {
        return "vacunacion";
    }

}