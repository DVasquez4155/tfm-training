import React from "react";
import { Card, Form, ListGroup } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import specs from '../../files/fish.json';

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
                                        <ListGroup.Item><strong>Origin:</strong> {data.Origin}</ListGroup.Item>
                                        <ListGroup.Item><strong>Similar To:</strong> {data["Similar to"]}</ListGroup.Item>
                                        <ListGroup.Item><strong>Color:</strong> {data.Color}</ListGroup.Item>
                                        <ListGroup.Item><strong>Flavor:</strong> {data.Flavor}</ListGroup.Item>
                                        <ListGroup.Item><strong>Texture:</strong> {data.Texture}</ListGroup.Item>
                                        <ListGroup.Item><strong>Marketable Name:</strong> {data["Marketable Name"]}</ListGroup.Item>
                                        <ListGroup.Item><strong>Family:</strong> {data.Family}</ListGroup.Item>
                                        <ListGroup.Item><strong>Size:</strong> {data.Size}</ListGroup.Item>
                                        <ListGroup.Item><strong>Fun Facts:</strong> {data["Fun facts"]}</ListGroup.Item>
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