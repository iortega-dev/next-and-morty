import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Album from './Album';
import { Button, Container, Jumbotron } from 'reactstrap';

const Main = ({ allCharactersData, onLoadMorePSSR, onLoadMoreSSR }) => {
    const router = useRouter()
    return (
        <main role="main">
            <Jumbotron className="text-center p-2">
                <Container>
                    <h1 className="jumbotron-heading">Characters Album</h1>
                    <p className="text-muted">
                        {router.route === '/swr' 
                            ? 'Esta web que estás visitando es servida de manera progresiva, primero tienes la información provista por el servidor, como por ejemplo este texto, y luego aparecerá el resultado con los personajes (incluye un timeout de 2 segundos)'
                            : 'Esta web que estás visitando es servida de manera estática con información pre-renderizada en el servidor (excepto imágenes).'
                        }
                    </p>
                    <p>
                        <Link href="/">
                            <Button color="primary" className="mx-1 my-2">
                                Home (SSR)
                            </Button>
                        </Link>
                        <Link href="/swr-pssr">
                            <Button color="info" className="mx-1">
                                SWR Test (PSSR)
                            </Button>
                        </Link>
                        <Link href="/swr-ssr">
                            <Button color="secondary" className="mx-1">
                                SWR Test (SSR)
                            </Button>
                        </Link>
                        {router.route === '/swr-pssr' &&
                            <Button color="success" className="mx-1" onClick={onLoadMorePSSR}>
                                Load Page 2 of Characters (PSSR)
                            </Button>
                        }
                        {router.route === '/swr-ssr' && 
                            <Button color="success" className="mx-1" onClick={onLoadMoreSSR}>
                                Load Page 2 of Characters (SSR)
                            </Button>
                        }
                    </p>
                </Container>
            </Jumbotron>
            {allCharactersData.data && <Album allCharactersData={allCharactersData} />}
        </main>
    );
};

export default Main;
