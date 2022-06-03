import React from "react";
import { Card, Form, ListGroup } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import specs from '../../db/food.json';
import fish from '../../db/fish.json';
import Modal from "../../components/Modal";

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Bread & Chowder'};

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    findIngredient(ingredient) {
        const paths = ingredient.split("/");
        paths.shift();
        const path = fish[paths[0]];
        var result = "";
        path.forEach(item => {
            if (item.Name === paths[1]) {
                result = <Modal props={item} />
            }
        })
        return result;
    }
    render() {
        return (
            <>
                <Form.Select aria-label="Default select example" onChange={this.handleChange}>
                    {Object.keys(specs).map((desc, descKey) => {
                        return(
                            <option key={descKey} value={desc}>{desc}</option>
                        )
                        
                    })}
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
                                                <ListGroup.Item key={descKey}>
                                                    <strong>
                                                        {desc.startsWith("/") ? (
                                                            <>
                                                                {this.findIngredient(desc)}
                                                            </>
                                                        ) : (
                                                            <>{desc}</>
                                                        )}
                                                    : </strong>
                                                    {data[desc]}
                                                </ListGroup.Item>
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