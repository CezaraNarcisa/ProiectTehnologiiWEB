import axios from 'axios'
const SERVER='https://proiect-narcisa.c9users.io'

class UtilizatorStore{
    constructor(ee){
        this.emitter=ee
        this.content = []
    }
    
    getAll(){
        axios(SERVER + '/utilizator')
        .then((response)=>{
            this.content=response.data
            this.emitter.emit('UTILIZATOR_LOAD')
        })
        .catch((error)=>console.warn(error))
    }
    getOne(id){}
    addOne(utilizator){
        axios({
            method:'post',
            url:SERVER+'/utilizator',
            headers:{'Content-Type':'application/json'},
            data:utilizator
        })
        .then(()=>this.getAll())
        .catch((error)=>console.warn(error))
    }
    saveOne(id,utilizator){
        axios({
            method:'put',
            url:SERVER+'/utilizator/'+id,
            headers:{'Content-Type':'application/json'},
            data:utilizator
        })
        .then(()=>this.getAll())
        .catch((error)=>console.warn(error))
    }
    deleteOne(id){
        axios.delete(SERVER+/utilizator/+id)
        .then(()=>this.getAll())
        .catch((error)=>console.warn(error))
    }
    
}
export default UtilizatorStore