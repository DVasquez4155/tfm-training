import React from "react";
import { Card, Form, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import DB from "../../utils/db";

class index extends React.Component {
    state = {
        cocktail: [],
        liquor: [],
        value: "all"
    }
    componentDidMount() {
        DB.getLiquor()
        .then((res) => {
            this.setState({liquor: res.data})
        })
        .catch((err) => console.log(err));
        DB.getCocktails()
        .then((res) => {
            this.setState({cocktail: res.data})
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
        const path = this.state.liquor[paths[0]];
        var result = paths[1];
        if (path === undefined) {
            return paths[1];
        }
        path.forEach(item => {
            if (item.Name === paths[1]) {
                result = <Modal props={item} path={"liquor" + ingredient}/>
            }
        })
        return result;
    }
    checkIfAllFilter(value) {
        if (value === "all") {
            return Object.keys(this.state.cocktail);
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
                    {Object.keys(this.state.cocktail).map((desc, descKey) => {
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
                        
                            {this.state.cocktail[data]?.map((data1, key1) => {
                                return (
                                    <div className="col-sm-4" key={key1}>
                                    <Card className="m-1" bg={"Light"}>
                                        
                                        <Card.Img onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src="https://dvasquez4155.github.io/TFM/photos/NA.png";
                                        }} variant="top" src={"https://dvasquez4155.github.io/TFM/photos/cocktail/" + data + "/" + data1.Name + ".png"} />
                                        <Card.Header><Card.Title>{data1.Name}</Card.Title></Card.Header>
                                        <Card.Body>
                                            <ListGroup variant="flush" >
                                                {Object.keys(data1)?.filter(title => title !== "Name").map((desc, descKey) => {
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
                                                            {data1[desc]}
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