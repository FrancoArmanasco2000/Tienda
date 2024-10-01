import styles from './Navbar.module.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch, FaSortDown } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { useBusqueda } from '../hooks/useBusqueda';

interface Props {
    filtrar: (text: string) => void,
    handleCarrito: () => void,
    carrito: Producto[]
}

export const Navbar = ({ filtrar, handleCarrito, carrito }: Props) => {
    
    const { busqueda, handleChangeBusqueda } = useBusqueda()

    return (
        <nav className={styles.navbarContenedor}>
            <h1 className={styles.titulo}>Mi tienda</h1>
            <div className={styles.contenedorBuscador}>
                <input type='text' placeholder='Buscar producto' className={styles.buscar} onChange={handleChangeBusqueda}></input>
                <button className={styles.lupa} onClick={() => filtrar(busqueda)}><FaSearch /></button>
            </div>
            <div className={styles.botonesExtra}>
                <button className={styles.carrito} onClick={handleCarrito}>
                    <FaCartShopping />
                    <div className={styles.cantidadEnElCarrito}>{carrito.length}</div>
                </button>
                <button className={styles.carrito}><IoIosNotifications/></button>
                <div className={styles.usuario}>Franco Armanasco <FaSortDown /></div>
            </div>
        </nav>
    )
}