import styles from './Carrito.module.css'
import { motion } from 'framer-motion'

interface Props {
    productos: Producto[],
    mostrarCarrito: boolean
}

export const Carrito = ({ productos, mostrarCarrito }: Props) => {
    

    const productosTotal = (() => {
        let total = 0
        productos.forEach(producto => {
            total += producto.price
        })
        return total
    })

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: mostrarCarrito ? '25rem' : '0px' }}
            transition={{ duration: 0.5 }}
            className={styles.contenedor}
        >
            <div className={styles.todoslosproductos}>
                   {
                    productos.length === 0 ? 
                        <div className={styles.nohayproductos}>
                            NO HAY PRODUCTOS EN EL CARRITO
                        </div>
                        :
                    productos.map((producto, index) => {
                        return (    
                            <div key={index} className={styles.contenedorProducto}>
                                <div className={styles.contenedorImagen}>
                                    <img src={producto.image} className={styles.imagen} />
                                </div>
                                <div className={styles.informacion}>
                                    <h3 className={styles.titulo}>{producto.title}</h3>
                                    <p className={styles.precio}>${producto.price}</p>
                                </div>
                            </div>
                            
                        )
                    })
                    }
            </div>
            {
                productos.length > 0 &&
                <div className={styles.contenedorPagar}>
                    <p>${productosTotal()}</p>
                    <button className={styles.botonPagar}>PAGAR</button>
                </div>
            }
            
        </motion.div>
    )
}