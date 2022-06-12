import React from "react";
import { Card, Form, ListGroup } from "react-bootstrap";
import Modal from "../../components/Modal";
import DB from "../../utils/db";

class index extends React.Component {
    state = {
        food: [],
        specs: [],
        value: "Bread & Chowder"
    }
    componentDidMount() {
        DB.getFish()
        .then((res) => {
            this.setState({specs: res.data})
        })
        .catch((err) => console.log(err));
        DB.getFood()
        .then((res) => {
            this.setState({food: res.data})
        })
        .catch((err) => console.log(err));
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    findIngredient(ingredient) {
        const paths = ingredient.split("/");
        paths.shift();
        const path = this.state.specs[paths[0]];
        var result = "";
        if (path === undefined) {
            return paths[1];
        }
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
                    {Object.keys(this.state.food).map((desc, descKey) => {
                        return(
                            <option key={descKey} value={desc}>{desc}</option>
                        )
                        
                    })}
                </Form.Select>
                <br />
                <div className="row">
                    {this.state.food[this.state.value]?.map((data, key) => {
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