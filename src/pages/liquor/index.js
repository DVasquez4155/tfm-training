import React from "react";
import { Card, Form, ListGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"; 
import DB from "../../utils/db";

class index extends React.Component {
    state = {
        specs: [],
        value: "all"
    }
    componentDidMount() {
        DB.getLiquor()
        .then((res) => {
            this.setState({specs: res.data})
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
    checkIfAllFilter(value) {
        if (value === "all") {
            return Object.keys(this.state.specs);
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
                <Form.Select className="selectpicker" aria-label="Default select example" onChange={this.handleChange}>
                    <option value="all">All</option>
                    {Object.keys(this.state.specs).map((desc, descKey) => {
                        return(
                            <option key={descKey} value={desc}>{desc}</option>
                        )
                        
                    })}
                </Form.Select>
                <br />
                {this.checkIfAllFilter(this.state.value).map((data,key) => {
                    return (
                        <div key={key} className="row">
                            <h1>
                                {data}
                            </h1>
                        
                            {this.state.specs[data]?.map((data, key1) => {
                                return (
                                    <div className="col-sm-4" key={key1}>
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
                    )
                })}
            </>
        )
    }
}

export default index;