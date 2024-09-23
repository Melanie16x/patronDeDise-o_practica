interface Equipo {
    tipo: string;
    nombre: string;
    ram: string;
    procesador: string;
    detalles(): string;
}

class Notebook implements Equipo {
    tipo: string;
    nombre: string;
    ram: string;
    procesador: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.tipo = "Notebook";
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Desktop implements Equipo {
    tipo: string;
    nombre: string;
    ram: string;
    procesador: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.tipo = "Desktop";
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Servidor implements Equipo {
    tipo: string;
    nombre: string;
    ram: string;
    procesador: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.tipo = "Servidor";
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo {
        if (tipo === "Notebook") {
            return new Notebook(nombre, ram, procesador)
        } else if (tipo === "Desktop") {
            return new Desktop(nombre, ram, procesador)
        }else if (tipo === "Servidor") {
            return new Servidor(nombre, ram, procesador)
        } else {
            throw new Error("Tipo de equipo no reconocido")
        }
    }
}

const factory = new EquipoFactory();

const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());

const desktop = factory.crearEquipo("Desktop", "HP Pavilion", "32GB", "i9");
console.log(desktop.detalles());

const servidor = factory.crearEquipo("Servidor", "Lenovo", "64GB", "Xeon");
console.log(servidor.detalles());