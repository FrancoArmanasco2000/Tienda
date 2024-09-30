import styles from './App.module.css'
import { Navbar } from './components/Navbar'
import { ListProducts } from './components/ListProducts'
import { useEffect, useState } from 'react'

function App() {

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

  return (
    <main className={styles.contenedor}>
      <Navbar filtrar={filtrarProductos} />
      <ListProducts productos={productosFiltrados} />
    </main>
  )
}

export default App
