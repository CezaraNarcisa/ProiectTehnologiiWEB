import React, { Component } from 'react';
var idUtilizator=70;

class UtilizatorForm extends Component {
   constructor(props){
        super(props)
        this.state={
            NumeUtilizator:'',
            MailUtilizator:'',
            VarstaUtilizator:''
            
        }
        //this.handleInputChange=this.handleInputChange.bind(this)
         this.handleInputChange=(event)=>{
          let name=event.target.name
          let value=event.target.value
          this.setState({
            [name]:value
              
          })
        }
        
    }
  render() {
    return (
      <div >
        <form>
      Nume:<input type="text" className="util" onChange={this.handleInputChange} name="NumeUtilizator"/>
      Mail:<input type="text" className="util" onChange={this.handleInputChange} name="MailUtilizator"/>
      Age:<input type="number"className="util" onChange={this.handleInputChange} name="VarstaUtilizator"/>
      <input type="button" className="btt" value="Adauga utilizator" onClick={()=>this.props.onAdd({id:idUtilizator, NumeUtilizator: this.state.NumeUtilizator,
      MailUtilizator:this.state.MailUtilizator, VarstaUtilizator:this.state.VarstaUtilizator},idUtilizator++)}/>
      </form>
      </div>
    );
  }
}

export default UtilizatorForm
