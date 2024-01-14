import React from 'react';
import { Navbar,Button,NavDropdown,Nav } from 'react-bootstrap';

function Header(props)
{
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" id='navbar'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

            <Button disabled={props.click} variant="outline-primary" onClick={props.genRandomArray}>Generate Random Array</Button>
            <Button disabled={props.click} variant="outline-primary" onClick={props.MergeSort}>Merge Sort</Button>
            <Button disabled={props.click} variant="outline-primary" onClick={props.QuickSort}>Quick Sort</Button>
            <Button disabled={props.click} variant="outline-primary" onClick={props.BubbleSort}>Bubble Sort</Button>
            <Button disabled={props.click} variant="outline-primary" onClick={props.InsertionSort}>Insertion Sort</Button>
            <Button disabled={props.click} variant="outline-primary" onClick={props.SelectionSort}>Selection Sort</Button>

            {/* <NavDropdown title="Animation Speed" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link>
            </Nav> */}
        </Navbar.Collapse>
        </Navbar>
    );
}
export default Header;