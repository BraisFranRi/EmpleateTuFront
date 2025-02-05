export class OfferService{
    static async getAll(){
        try{
            const response = await fetch('http://localhost:3000/api/offers')
            
            if(!response.ok) {
                const errorData = await response.json().catch(()=>null)
                throw new Error(errorData?.message || 'Error inesperado')
            }
            
            return await response.json()
        }catch(error){
            const msg = error instanceof Error ? error.message : 'Error inesperado'
            throw new Error(msg)
        }
    }
}



