import React from 'react';
import styled from 'styled-components';
import './style.css';

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>CONTACT</h4>
                        <ul className="list-unstyled">
                            <li>XEBIA GROUP</li>
                            <li>AMSTERDAM HQ</li>
                            <li>The Netherlands</li>
                            <li><a href="https://xebia.com/contact">E:info@xebia.com</a></li>
                            <li><a href="/">T: +31 (0)35 538 1921</a></li>

                        </ul>

                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>PRODUCTS</h4>
                        <ul className="list-unstyled">
                            <li><a href="https://www.stackstate.com/">StackState</a></li>
                            <li><a href="https://instruqt.com/?__hstc=232286976.e137b3dd72700dccbfe18d2a475f67e1.1563007565412.1563007565412.1563007565412.1&__hssc=232286976.1.1563007565413&__hsfp=2187297359">Instruqt</a></li>

                        </ul>

                    </div>
                   
                   
                </div>
                <div className="footer-bottom">
                <p className="text-xs-center">
                 Xebia Group &copy;{new Date().getFullYear()}.All Rights Reserved.

                    </p> 
                   
                </div>
                </div> 
                </div>
        </FooterContainer>
     );
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background:var(--mainDark );
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;  
}
`;