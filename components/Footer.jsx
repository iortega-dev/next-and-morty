import React from 'react';
import { Container } from 'reactstrap';

const Footer = props => {
    return (
        <footer className="text-muted">
            <Container>
                <p className="float-right">
                    <a href="#">Back to top</a>
                </p>
                <p>
                    NextJS adaptation based on {' '}
                    <a href="https://github.com/nas5w/react-bootstrap-album-template">
                        react-bootstrap-album-template
                    </a>
                    .
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
