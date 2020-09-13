import React,{Component} from 'react';
import Header from './Header.js';
import './AddSubscriber.css';
class AddSubscriber extends Component
{
constructor()
{ 
    super();
    this.state={
        
        id:0,
        name:'',
        phone:'',
    }
}

inputChangedHandler=(e)=>
{
    const state=this.state;
    state[e.target.name]=e.target.value;
    this.setState(state);
    console.log(this.state);
}
    render()
    {
        return(
            <div>
                <Header heading="Add subscriber"/>
                <div className="component-body-container">
                 <button className="custom-btn">Back</button>
                 <form className="subscriber-form">
                     <label htmlFor="name" className="label-control">Name</label> <br/>
                     <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}/> <br/> <br/>
                     <label htmlFor="phone" className="label-control">phone</label> <br/>
                     <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler}/>
     <div className="subscriber-info-container">
         <span className="subscriber-to-add-heading">Subscriber to be added</span><br/>
        <span className="subscriber-info">Name:{this.state.name}</span> <br/>
        <span className="subscriber-info">phone:{this.state.phone}</span>

         </div>             
         <button type="submit" className="custom-btn add-btn">Add</button>   
                 </form>
                </div>
            </div>
        )
        }
    }
export default AddSubscriber;