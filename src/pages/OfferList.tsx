import { useEffect, useState } from "react"
import  Offer  from "../models/Offer"
import { OfferService } from "../services/offer.service"
import { Link } from "react-router-dom"


function OfferList() {

    const [offers,setOffers]= useState<Offer[]>()
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        OfferService.getAll()
            .then(setOffers)
            .catch((error)=> setError(error.message))
            .finally(()=>setLoading(false))
    },[])

    if(loading) return <p>Loading...</p> 

    return (
        <div>
            <h1>Listado de ofertas</h1>
            <Link to="/offers/new">Añadir nueva Oferta</Link>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {offers?.length === 0 && <p>No hay ofertas disponibles</p>}
            {offers?.map(offer => 
                <div key={offer.id}>
                    {offer.title}
                    <Link to={`/offers/${offer.id}`}>Ver</Link>
                    <Link to={`/offers/edit/${offer.id}`}>Editar</Link>
                    <button>Borrar</button>
                </div>
            )}
        </div>
    )
}

export default OfferList