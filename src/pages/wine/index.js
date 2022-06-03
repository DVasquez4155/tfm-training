import React from "react";
import { Card, Form, ListGroup } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import specs from '../../db/wine.json';

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Chardonnay'};

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <>
                <Form.Select aria-label="Default select example" onChange={this.handleChange}>
                    <option value="Chardonnay">Chardonnay</option>
                    <option value="Sauvignon Blanc">Sauvignon Blanc</option>
                    <option value="Other Whites">Other Whites</option>
                    <option value="Bubbles">Bubbles</option>
                    <option value="Cabernet Sauvignon">Cabernet Sauvignon</option>
                    <option value="Pinot Noir">Pinot Noir</option>
                    <option value="Other Reds">Other Reds</option>
                </Form.Select>
                <br />
                <div className="row">
                    
                    {specs[this.state.value]?.map((data, key) => {
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