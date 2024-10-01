import styles from './App.module.css'
import { Navbar } from './components/Navbar'
import { ListProducts } from './components/ListProducts'
import { Carrito } from './components/Carrito'
import { useProducto } from './hooks/useProducto'
import { useCarrito } from './hooks/useCarrito'

function App() {

  const {productosFiltrados, filtrarProductos} = useProducto()
  const {mostrarCarrito, handleMostrarCarrito, carrito, agregarProductoAlCarrito, eliminarProductoDelCarrito} = useCarrito()  

  return (
    <main className={styles.contenedor}>
      <Navbar filtrar={filtrarProductos} handleCarrito={handleMostrarCarrito} carrito={carrito} />
      <ListProducts productos={productosFiltrados} agregarAlCarrito={agregarProductoAlCarrito} />
      <Carrito productos={carrito} mostrarCarrito={mostrarCarrito} eliminarProducto={eliminarProductoDelCarrito} />
    </main>
  )
}

export default App
