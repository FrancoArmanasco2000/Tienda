import { useState } from 'react'

export const useBusqueda = () => {
    
    const [busqueda, setBusqueda] = useState('')

    const handleChangeBusqueda = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusqueda(e.target.value)
    }

    return {busqueda, handleChangeBusqueda}
}