import React from "react";
import { Card, Form, ListGroup } from "react-bootstrap";
import DB from "../../utils/db";

class index extends React.Component {
    state = {
        specs: [],
        value: "Crustacean"
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
    render() {
        return (
            <>
                <Form.Select aria-label="Default select example" onChange={this.handleChange}>
                    {Object.keys(this.state.specs).map((desc, descKey) => {
                        return(
                            <option key={descKey} value={desc}>{desc}</option>
                        )
                        
                    })}
                </Form.Select>
                <br />
                <div className="row">
                    {this.state.specs[this.state.value]?.map((data, key) => {
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