declare module '*module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

interface Producto {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

interface ProductoCarrito extends Producto {
    cantidad: number;
}