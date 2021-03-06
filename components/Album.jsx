import React from 'react';
import {
    Button,
    ButtonGroup,
    Card,
    CardImg,
    CardText,
    CardBody,
    Col,
    Container,
    Row
} from 'reactstrap';

const Album = ({ allCharactersData, error }) => {
    return (
        <div className="album py-5 bg-light">
            <Container>
                <Row>
                    {error && <div>There was an error.</div>}
                    {!error && allCharactersData && allCharactersData.data.map((item, key) => {
                        return (
                            <Col md="3" key={key}>
                                <Card className="mb-4 box-shadow">
                                    <CardImg
                                        top
                                        width="100%"
                                        src={item.image}
                                        alt={item.species}
                                    />
                                    <CardBody>
                                        <CardText>{item.name}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Album;
