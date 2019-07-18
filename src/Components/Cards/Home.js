import React from 'react';
import Main from './Components/Cards/main';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = ({property}) => {

    return(
        <div className="page">
            <section>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>React Transition Group classes breakdown.</h1>
            </section>
            
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