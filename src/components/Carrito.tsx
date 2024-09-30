import styles from './Carrito.module.css'
import { motion } from 'framer-motion'

interface Props {
    productos: Producto[],
    mostrarCarrito: boolean
}

export const Carrito = ({ productos, mostrarCarrito}: Props) => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: mostrarCarrito ? '20rem' : 0 }}
            transition={{ duration: 0.5 }}
            className={styles.contenedor}
        >
            {
                productos.map((producto, index) => {
                    return (    
                        <div key={index}>
                            <h3>{producto.title}</h3>
                            <p>{producto.price}</p>
                        </div>
                    )
                })
            }
        </motion.div>
    )
}