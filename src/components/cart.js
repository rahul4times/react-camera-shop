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
    this.props.deleteFromCart(id);
  }

  render(){
    const itemList = this.props.items.map(item =>{
      return (
        <tr key={item.id}>
          <td>1</td>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td ><Icon  icon={bin}
            onClick={()=>this.handleDeleteClick(item.id)}
          /></td>
        </tr>
      );
    });

    const subTotal = this.props.items.reduce((accum, item) => {
      return accum + item.price
    },0);

    const tax = +(subTotal * .086).toFixed(2);
    const total = (subTotal + tax).toFixed(2);

    console.log('shit: ', total);

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
            Subtotal: ${subTotal}
            <br/>
            Tax: ${tax}
            <br/>
            <h5>Total: ${total}</h5>
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
