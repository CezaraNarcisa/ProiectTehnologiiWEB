import axios from 'axios'
const SERVER='https://proiect-narcisa.c9users.io'
class CategorieStore{
    constructor(ee){
        this.emitter=ee
        this.const=[]
    }
    
    getCategorii(){
        axios(SERVER+'/categorie')
        .then((response)=>{
            this.content=response.data
            this.emitter.emit('CATEGORIE_LOAD')
        })
        .catch((error)=>console.warn(error)) 
    }
    addCategorie(categorie){
         axios({
            method:'post',
            url:SERVER+'/categorie',
            headers:{'Content-Type':'application/json'},
            data:categorie
        })
        .then(()=>this.getCategorii())
        .catch((error)=>console.warn(error))
    }
}
export default CategorieStore