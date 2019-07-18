import React from 'react';
import './card.css';
import Home from './Components/Cards';
import data from './data/data';
import {CSSTransition} from "react-transition-group";

class Card extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            appearHome:true,
            property: data.properties[0]
        }
    }

    toggleAppear = ()=>{
        this.setState({
            appearHome:this.state.appearHome
        })

    }
    nextProperty = ()=>{
        const newIndex=this.state.property.index+1;
        this.setState({
            property:data.properties[newIndex]
        })


    }
    prevProperty = ()=>{
        const newIndex=this.state.property.index-1;
        this.setState({
            property:data.properties[newIndex]
        })

    }

    render(){
         const{appearHome,property}=this.state;
         return(
             <div className="App">
                 <button onClick={()=>this.toggleAppear()}>Appear:{`${appearHome}`}</button>
                 <button onClick={()=>this.nextProperty()}>disabled={property.index===data.properties.length-1}>Next</button>
                 <button onClick={()=>this.prevProperty()} disabled={property.index===0}>Prev</button>

                <CSSTransition
                in={appearHome}
                appear={true}
                timeout={1000}
                classNames="fade"
                >
                 <Home property={property}/>
                 </CSSTransition>
             </div>
         );
    }
}

export default Card;