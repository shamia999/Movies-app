import React,{Component} from 'react';
import Header from './Header.js';
import './AddSubscriber.css';
class AddSubscriber extends Component
{
    render()
    {
        return(
            <div>
                <Header heading="Add subscriber"/>
                <div className="component-body-container">
                 <button className="custom-btn">Back</button>
                 <form className="subscriber-form">
                     <label htmlFor="name" className="label-control">Name</label> <br/>
                     <input id="name" type="text" className="input-control"/> <br/> <br/>
                     <label htmlFor="phone" className="label-control">phone</label> <br/>
                     <input id="phone" type="text" className="input-control" name="phone"/>
     <div className="subscriber-info-container">
         <span className="subscriber-to-add-heading">Subscriber to be added</span><br/>
         <span className="subscriber-info">Name</span> <br/>
         <span className="subscriber-info">phone</span>

         </div>             
         <button type="submit" className="custom-btn add-btn">Add</button>   
                 </form>
                </div>
            </div>
        )
    }
}
export default AddSubscriber;