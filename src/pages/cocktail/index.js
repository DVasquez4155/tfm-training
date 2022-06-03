import React from "react";
import { Card, ListGroup } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import specs from '../../db/cocktails.json';

class index extends React.Component {
    render() {
        return (
            <>
                <br />
                <h1 className="App-header">
                    Cocktails
                </h1>
                <hr />
                <div className="row">
                    {specs.map((data, key) => {
                        return (
                            <div className="col-sm-4" key={key}>
                            <Card className="m-1" bg={"Light"}>
                                <Card.Header><Card.Title>{data.Name}</Card.Title></Card.Header>
                                <Card.Body>
                                    <ListGroup variant="flush" >
                                        {Object.keys(data)?.filter(title => title !== "Name").map((desc, descKey) => {
                                            return(
                                                <ListGroup.Item key={descKey}><strong>{desc}:</strong> {data[desc]}</ListGroup.Item>
                                            )
                                        })}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                            </div>
                        );
                    })}
                </div>
            </>
        )
    }
}

export default index;