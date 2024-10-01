import styles from './App.module.css'
import { Navbar } from './components/Navbar'
import { ListProducts } from './components/ListProducts'
import { useEffect, useState } from 'react'
import { Carrito } from './components/Carrito'

function App() {

  const [productos, setProductos] = useState<Producto[]>([])
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>([])
  const [mostrarCarrito, setMostrarCarrito] = useState(false)
  const [carrito, setCarrito] = useState<Producto[]>([])

  const filtrarProductos = (text: string) => {
    const productosFiltrados = productos.filter(producto => producto.title.toLowerCase().includes(text.toLowerCase()))
    setProductosFiltrados(productosFiltrados)
  }

  const handleMostrarCarrito = () => {
    setMostrarCarrito(!mostrarCarrito)
  }

  const agregarProductoAlCarrito = (producto: Producto) => {
    const nuevoCarrito = [...carrito, producto]
    setCarrito(nuevoCarrito)
  }

  useEffect(():void => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
      .then(data => {
        setProductos(data)
        setProductosFiltrados(data)
      })
},[])

  return (
    <main className={styles.contenedor}>
      <Navbar filtrar={filtrarProductos} handleCarrito={handleMostrarCarrito} carrito={carrito} />
      <ListProducts productos={productosFiltrados} agregarAlCarrito={agregarProductoAlCarrito} />
      <Carrito productos={carrito} mostrarCarrito={mostrarCarrito} />
    </main>
  )
}

export default App
