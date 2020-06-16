import React from 'react';
import Album from './Album';
import { Button, Container, Jumbotron } from 'reactstrap';

const Main = ({ allCharactersData }) => {
    return (
        <main role="main">
            <Jumbotron className="text-center p-2">
                <Container>
                    <h1 className="jumbotron-heading">Characters Album</h1>
                    <p className="text-muted">
                        Esta web que estás visitando es servida de manera estática con información pre-renderizada en el servidor.
                    </p>
                    <p className="text-muted">
                        El botón "Load Data" cargará nuevos datos de personajes.
                    </p>
                    <p className="text-muted">
                        El botón "PSSR Test" te llevará a un link donde primero verás la web estática e irán apareciendo los datos a medida que estos se carguen.
                    </p>
                    <p>
                        <Button color="primary" className="mx-1 my-2">
                            Load Data
                        </Button>
                        <Button color="secondary" className="my-2">
                            PSSR Test
                        </Button>
                    </p>
                </Container>
            </Jumbotron>
            <Album allCharactersData={allCharactersData} />
        </main>
    );
};

export default Main;
