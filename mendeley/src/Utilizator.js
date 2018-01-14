import React,{Component} from 'react'

class Utilizator extends Component{
    constructor(props){
        super(props)
        this.state={
            isEditing:false,
           NumeUtilizator:this.props.utilizator.NumeUtilizator,
            MailUtilizator:this.props.utilizator.MailUtilizator,
            VarstaUtilizator:this.props.utilizator.VarstaUtilizator
        }
         this.handleInputChange=(event)=>{
          let name=event.target.name
          let value=event.target.value
          this.setState({
            [name]:value
              
          })
        }
    }
    componentWillReceiveProps(newProps){
        this.setState({
            isEditing: false
        })
    }
    
    render(){
        if(!this.state.isEditing){
            
        return(
            <div>Nume: {this.props.utilizator.NumeUtilizator} Mail: {this.props.utilizator.MailUtilizator} Varsta:{this.props.utilizator.VarstaUtilizator}
            <form>
            <input type="button" className="btt" value="edit" onClick={()=>this.setState({isEditing:true})}/>
            <input type="button" className="btt" value="delete" onClick={()=>this.props.onDelete(this.props.utilizator.id)}/>
            </form>
            </div>
            )
        }else{
            return(<div>
            <input type="text" className="util" name="NumeUtilizator" onChange={this.handleInputChange} value={this.state.NumeUtilizator}/>
            <input type="text" className="util" name="MailUtilizator" onChange={this.handleInputChange}value={this.state.MailUtilizator}/>
            <input type="text" className="util" name="VarstaUtilizator" onChange={this.handleInputChange}value={this.state.VarstaUtilizator}/>
            <form>
            <input type="button" className="btt" value="cancel" onClick={()=>this.setState({isEditing:false})}/>
            <input type="button" className="btt" value="save" onClick={()=>this.props.onSave(this.props.utilizator.id,{NumeUtilizator:this.state.NumeUtilizator
            ,MailUtilizator:this.state.MailUtilizator,VarstaUtilizator:this.state.VarstaUtilizator})}/>
            </form>
            </div>)
        }
    }
}
export default Utilizator