import React from 'react';
import logo from './assets/logo.svg';
import Card from './Components/Card';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = ({property}) => {

    return(
        <div className="page">    
            <TransitionGroup className="card-container">
                <CSSTransition
                    key={property._id}
                    timeout={4500}
                    classNames="slide"
                >
                    <Card property={property} />
                </CSSTransition>
            </TransitionGroup>

        </div>   
    )
}

export default Home;
