import styles from './ListProducts.module.css';
import { FaCartShopping } from "react-icons/fa6";

interface Props {
    productos: Producto[];
    agregarAlCarrito: (producto: ProductoCarrito) => void;
}

export const ListProducts = ({ productos , agregarAlCarrito }: Props) => {
    
    return (
        <div className={styles.contenedor}>
            {
                productos.map((producto, index) => {
                    return (
                        <div key={index}>
                            <div className={styles.contenedorImagen}>
                                <img src={producto.image} alt={producto.title} className={styles.imagen} />
                            </div>
                            <div className={styles.contenedorContenido}>
                                <h3 className={styles.tituloArticulo}>{producto.title}</h3>
                                <p className={styles.precioArticulo}>
                                    ${producto.price}
                                    <button className={styles.comprar}>Buy</button>
                                    <button className={styles.agregar} onClick={() => agregarAlCarrito({ ...producto, cantidad: 1 })}>+<FaCartShopping /></button>
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}