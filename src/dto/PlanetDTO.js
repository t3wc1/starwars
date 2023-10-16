export class PlanetDTO{
    nombre;
    periodo_rotacion;
    periodo_orbital;
    diametro;
    clima;
    gravedad;
    terreno;
    superficie_agua;
    poblacion;
    residentes;

    constructor(data) {
        this.nombre = data.name;
        this.periodo_rotacion = data.rotation_period;
        this.periodo_orbital = data.orbital_period;
        this.diametro = data.diameter;
        this.clima = data.climate;
        this.gravedad = data.gravity;
        this.terreno = data.terrain;
        this.superficie_agua = data.surface_water;
        this.poblacion = data.population;
        this.residentes = data.residents;
    }
}