import React, { Component } from 'react'
import {EventEmitter} from 'fbemitter'
import UtilizatorStore from './stores/UtilizatorStore'
import Utilizator from './Utilizator'
import UtilizatorForm from './UtilizatorForm'

const emitter=new EventEmitter()
const store=new UtilizatorStore(emitter)
const addUtilizator=(utilizator)=>{ store.addOne(utilizator)}

let deleteUtilizator=(id)=>{
    store.deleteOne(id)
}
let saveUtilizator=(id,utilizator)=>{
    store.saveOne(id,utilizator)
}
  class UtilizatorList extends Component {
    constructor(props){
        super(props)
        this.state={
            utilizatori : []
            
        }
        
    }
    componentDidMount(){
        store.getAll()
        emitter.addListener('UTILIZATOR_LOAD',()=>{
            this.setState({
            utilizatori : store.content})
        })
    }
 
  render() {
    return (
      <div>
      <div>
      {this.state.utilizatori.map((e) =>
      <Utilizator utilizator={e} key={e.id} onDelete={deleteUtilizator} onSave={saveUtilizator}/>
      //<li>{e.NumeUtilizator+' '+e.MailUtilizator+' '+e.VarstaUtilizator} </li>
      )}
      </div>
      <UtilizatorForm onAdd={addUtilizator}/>
      </div>
    );
  }
}

export default UtilizatorList
