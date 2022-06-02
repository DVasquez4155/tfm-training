import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardGroup } from "react-bootstrap";
import { Outlet } from "react-router-dom";


function Nav(props) {
    return (
        <>
            <CardGroup>
                <Card>
                    <Card.Header>
                        <Card.Title>Food Menu Items</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Find the list of ingredients of each menu item
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" href="/food">View</Button>
                    </Card.Footer>
                </Card>
                <Card >
                    <Card.Header>
                        <Card.Title>Fish Specifications</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                        A list of all species we have offered recently.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary"  href="/specs">View</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Title>Cocktail Menu Items</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Find the list of ingredients and serving sizes for our cocktail items
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary"  href="/cocktail">View</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header>
                        <Card.Title>Wine Menu Items</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Figure out details of our wine listings
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary"  href="/wine">View</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <Outlet />
        </>
    );
}

export default Nav;