import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Icon from 'react-icons-kit';
import { bin } from 'react-icons-kit/icomoon';
import { Table } from 'reactstrap';
import { deleteFromCart } from '../actions/cameras'
import {
  Card,
  CardBody,
  Button,
  CardHeader,
  CardFooter
} from 'reactstrap';

class Cart extends Component{

  handleDeleteClick = (id) => {
    console.log('id is: ', id);
    this.props.deleteFromCart(id);
  }

  render(){

    console.log('Items in cart: ', this.props.items);

    const itemList = this.props.items.map(item =>{
      return (
        <tr key={item.id}>
          <td>1</td>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td><Icon icon={bin}
            onClick={this.handleDeleteClick}
          /></td>
        </tr>
      );
    })

    return(
      <div>
        <br/>
        <Card>
          <CardHeader><h3>Your Cart</h3></CardHeader>
          <CardBody>
            <br/>
            <Table hover>
              <tbody>
                {itemList}
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

function mapDispatchToProps(dispatch){
  return {
    deleteFromCart: bindActionCreators(deleteFromCart, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Cart);
