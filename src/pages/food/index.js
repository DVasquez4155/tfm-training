import React from "react";
import { Card, Form, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import DB from "../../utils/db";

class index extends React.Component {
    state = {
        food: [],
        specs: [],
        value: "all"
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
        var result = paths[1];
        if (path === undefined) {
            return paths[1];
        }
        path.forEach(item => {
            if (item.Name === paths[1]) {
                result = <Modal props={item} path={"/fish" + ingredient}/>
            }
        })
        return result;
    }
    checkIfAllFilter(value) {
        if (value === "all") {
            return Object.keys(this.state.food);
        }
        else {
            return [value];
        }
    }
    render() {
        return (
            <>
                <div className="col-12" >
                    <Link variant="outline-*" className="navbar-brand logo" to="/">
                        <Button className='p-2 w-100' variant="primary">Return</Button>
                    </Link>
                </div>
                <br />
                <Form.Select aria-label="Default select example" onChange={this.handleChange}>
                    <option value="all">All</option>
                    {Object.keys(this.state.food).map((desc, descKey) => {
                        return(
                            <option key={descKey} value={desc}>{desc}</option>
                        )
                        
                    })}
                </Form.Select>
                <br />
                <div className="row">
                {this.checkIfAllFilter(this.state.value).map((data,key) => {
                    return (
                        <div key={key} className="row">
                            <h1>
                                {data}
                            </h1>
                        
                            {this.state.food[data]?.map((data, key1) => {
                                return (
                                    <div className="col-sm-4" key={key1}>
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
                    )
                })}
                </div>
            </>
        )
    }
}

export default index;