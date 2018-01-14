import React, { Component } from 'react'
import {EventEmitter} from 'fbemitter'
import DocumenteStore from './stores/DocumenteStore'

const emitter=new EventEmitter()
const store=new DocumenteStore(emitter)
const addDocument=(document)=>{
    store.addOneDoc(document)
}
var idDocument=71;
var idUtil=3;
var idCat=3;
class DocumenteList extends Component {
  constructor(props){
    super(props)
   this.state={
       documente:[],
       NumeDocument:' ',
       SpatiuOcupat:' ',
       Utilizator_idUtilizator:' ',
       Categorie_idCategorie:' '
   }
   this.handleDocChange=this.handleDocChange.bind(this)
  }
  componentDidMount(){
      store.getDocumente()
      emitter.addListener('DOCUMENT_LOAD',()=>{
          this.setState({
              documente:store.content
          })
      })
  }
  handleDocChange(event){
      let value=event.target.value
      let name=event.target.names
      this.setState({[name]:value})
  }
  render() {
    return (
      <div >
       <ul>
       {this.state.documente.map((e)=>
       <li>{'Nume documente: '+e.NumeDocument+ ' '+'Dimensiune: '+e.SpatiuOcupat+'GB'}</li>)} </ul>
      <form>
      Nume:<input type="text" onChange={this.handleDocChange} name="NumeDocument"/>
      Dimensiune:<input type="text" onChange={this.handleDocChange} name="SpatiuOcupat"/>
      <input type="button" className="btt" value="Adaugare document" onClick={()=>addDocument({id:idDocument,
          NumeDocument:this.state.NumeDocument,SpatiuOcupat:this.state.SpatiuOcupat,
          Utilizator_idUtilizator:idUtil,Categorie_idCategorie:idCat},idDocument++ )}/>
      </form>
      </div>
    );
  }
}

export default DocumenteList
