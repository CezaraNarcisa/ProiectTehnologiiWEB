import React, { Component } from 'react'
import {EventEmitter} from 'fbemitter'
import CategorieStore from './stores/CategorieStore'

const emitter=new EventEmitter()
const store=new CategorieStore(emitter)
const adaugaCategorie=(categorie)=>{
  store.addCategorie(categorie)
}
var idCategorie=50;
class CategorieList extends Component {
  constructor(props){
    super(props)
   this.state={
       categorie:[],
       NumeCategorie:'',
       NumarDocumente:'',
       Descriere:''
   }
   this.handleChange=this.handleChange.bind(this)
  }
  componentDidMount(){
      store.getCategorii()
      emitter.addListener('CATEGORIE_LOAD',()=>{
          this.setState({
              categorie:store.content
          })
      })
  }
  handleChange(event){
   let value=event.target.value
   let name=event.target.name
   this.setState({
     [name]:value})
  }
  render() {
    return (
      <div >
      <ul>
       {this.state.categorie.map((e)=>
       <li>{'Nume categorie: '+e.NumeCategorie+ ' '+' Numar documente: '+e.NumarDocumente+' Descriere: '+e.Descriere}</li>)} </ul>
     <form>
     Nume:<input type="text" onChange={this.handleChange} name="NumeCategorie"/>
     Numar:<input type="text" onChange={this.handleChange} name="NumarDocumente"/>
     Descriere:<input type="text" onChange={this.handleChange} name="Descriere"/>
     <input type="button" className="btt" value="Adaugare categorie" onClick={
       ()=>adaugaCategorie({id:idCategorie,NumeCategorie:this.state.NumeCategorie, NumarDocumente:this.state.NumarDocumente,
         Descriere:this.state.Descriere
       },idCategorie++)
     }/>
     </form>
      </div>
    );
  }
}

export default CategorieList
