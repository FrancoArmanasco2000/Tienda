import { useState } from 'react'

export const useCarrito = () => {
    const [mostrarCarrito, setMostrarCarrito] = useState(false)
    const [carrito, setCarrito] = useState<ProductoCarrito[]>([])

    const handleMostrarCarrito = () => {
        setMostrarCarrito(!mostrarCarrito)
    }
    
    const agregarProductoAlCarrito = (producto: ProductoCarrito) => {
        console.log(producto)
        console.log(carrito)
        const index = carrito.findIndex(p => p.id === producto.id)
        if (index !== -1) {
            const carritoCopia = [...carrito]
            carritoCopia[index].cantidad += 1
            setCarrito(carritoCopia)
            console.log('Hola')
        } else {
            const carritoCopia = [...carrito, producto]
            setCarrito(carritoCopia)
        }
    }

    const eliminarProductoDelCarrito = (id: number) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id)
        setCarrito(nuevoCarrito)
    }

    return {mostrarCarrito, handleMostrarCarrito, carrito, agregarProductoAlCarrito, eliminarProductoDelCarrito}
}