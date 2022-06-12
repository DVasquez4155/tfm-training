import React from "react";
import { Button, Card, Form, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import DB from "../../utils/db";

class index extends React.Component {
    state = {
        specs: [],
        value: "all"
    }
    componentDidMount() {
        DB.getFish()
        .then((res) => {
            // this.state.specs =  res.data
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
                <Form.Select aria-label="Default select example" onChange={this.handleChange}>
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
                        
                            {this.state.specs[data]?.map((data1, key1) => {
                                return (
                                    <div className="col-sm-4" key={key1}>
                                    <Card className="m-1" bg={"Light"}>
                                        <Card.Img onError={({ currentTarget }) => {
                                                currentTarget.onerror = null;
                                                currentTarget.src="https://dvasquez4155.github.io/TFM/photos/NA.png";
                                                }} variant="top" src={"https://dvasquez4155.github.io/TFM/photos/" + data + "/" + data1.Name + ".jpg"} />
                                        <Card.Header><Card.Title>{data1.Name}</Card.Title></Card.Header>
                                        <Card.Body>
                                            <ListGroup variant="flush" >
                                                {Object.keys(data1)?.filter(title => title !== "Name").map((desc, descKey) => {
                                                    return(
                                                        <ListGroup.Item key={descKey}><strong>{desc}:</strong> {data1[desc]}</ListGroup.Item>
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