import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { bin } from 'react-icons-kit/icomoon';
import { Table } from 'reactstrap';
import {
  Card,
  CardBody,
  Button,
  CardHeader,
  CardFooter
} from 'reactstrap';

class Cart extends Component{
  render(){
    return(
      <div>
        <br/>
        <Card>
          <CardHeader><h3>Your Cart</h3></CardHeader>
          <CardBody>
            <br/>
            <Table hover>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Nikon</td>
                  <td>500</td>
                  <td><Icon icon={bin}/></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Nikon</td>
                  <td>500</td>
                  <td><Icon icon={bin}/></td>
                </tr>
              </tbody>
            </Table>
            <br/>
          </CardBody>
          <CardFooter className="total">
            Subtotal:
            <br/>
            Tax:
            <br/>
            <h5>Total:</h5>
            <br/>
            <Button color="primary" size="lg" block>Checkout</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Cart;
