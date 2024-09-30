import styles from './Navbar.module.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { useState } from 'react';

interface Props {
    filtrar: (text: string) => void,
    handleCarrito: () => void
}

export const Navbar = ({ filtrar, handleCarrito }: Props) => {
    
    const [busqueda, setBusqueda] = useState('')

    const handleChangeBusqueda = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusqueda(e.target.value)
    }

    return (
        <nav className={styles.navbarContenedor}>
            <h1 className={styles.titulo}>Mi tienda</h1>
            <div className={styles.contenedorBuscador}>
                <input type='text' placeholder='Buscar producto' className={styles.buscar} onChange={handleChangeBusqueda}></input>
                <button className={styles.lupa} onClick={() => filtrar(busqueda)}><FaSearch /></button>
            </div>
            <div className={styles.botonesExtra}>
                <button className={styles.carrito} onClick={handleCarrito}><FaCartShopping /></button>
                <button className={styles.carrito}><IoIosNotifications/></button>
                <div className={styles.usuario}>Franco Armanasco <FaSortDown /></div>
            </div>
        </nav>
    )
}