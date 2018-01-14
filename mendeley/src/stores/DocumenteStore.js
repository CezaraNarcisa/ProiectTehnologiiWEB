import axios from 'axios'
const SERVER='https://proiect-narcisa.c9users.io'
class DocumenteStore{
    constructor(ee){
        this.emitter=ee
        this.const=[]
    }
    
    getDocumente(){
        axios(SERVER+'/documente')
        .then((response)=>{
            this.content=response.data
            this.emitter.emit('DOCUMENT_LOAD')
        }) 
        .catch((error)=>console.warn(error))
    }
    addOneDoc(){
        axios({
            method:'post',
            url:SERVER+'/document',
            headers:{'Content-Type':'application/json'},
            data:document
        })
         .then(()=>this.getDocumente())
        .catch((error)=>console.warn(error))
    }
}
export default DocumenteStore