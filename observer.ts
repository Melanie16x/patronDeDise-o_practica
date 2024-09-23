interface Observador {
    notificar(cambio: string): void;
}

class Soporte implements Observador {
    notificar(cambio: string): void {
        console.log(`Soporte notificado: ${cambio}`);
    }
}

class Equipo {
    private nombre: string;
    private tipo: string;
    private estado: string;
    private observadores: Observador[] = [];

    constructor(nombre: string, tipo: string, estado: string) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
    }

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        const mensaje = `${this.nombre} ha cambiado su estado a '${this.estado}'`;
        this.observadores.forEach(observador => observador.notificar(mensaje));
    }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portatil", "Disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparacion")