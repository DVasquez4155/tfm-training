import React from "react";
import { Card, Form, ListGroup } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import specs from '../../db/fish.json';

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Crustacean'};

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <>
                <Form.Select aria-label="Default select example" onChange={this.handleChange}>
                    <option value="Crustacean">Crustacean</option>
                    <option value="FinFish">FinFish</option>
                    <option value="Shellfish">Shellfish</option>
                    <option value="Calamari">Calamari</option>
                    <option value="Smoked">Smoked</option>
                    <option value="Oysters">Oysters</option>
                </Form.Select>
                <br />
                <div className="row">
                    
                    {specs[this.state.value]?.map((data, key) => {
                        return (
                            <div className="col-sm-4" key={key}>
                            <Card className="m-3" bg={"Light"}>
                                <Card.Header><Card.Title>{data.Name}</Card.Title></Card.Header>
                                <Card.Body>
                                    <ListGroup variant="flush" >
                                        {Object.keys(data)?.map((desc, descKey) => {
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