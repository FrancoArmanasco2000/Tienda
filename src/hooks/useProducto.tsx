import { useState, useEffect } from 'react'

export const useProducto = () => {
    const [productos, setProductos] = useState<Producto[]>([])
    const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>([])

    const filtrarProductos = (text: string) => {
        const productosFiltrados = productos.filter(producto => producto.title.toLowerCase().includes(text.toLowerCase()))
        setProductosFiltrados(productosFiltrados)
    }
    
    useEffect(():void => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
          .then(data => {
            setProductos(data)
            setProductosFiltrados(data)
          })
    },[])

    return {productos, productosFiltrados, filtrarProductos}
}