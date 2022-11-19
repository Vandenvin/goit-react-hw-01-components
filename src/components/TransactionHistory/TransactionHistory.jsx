import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  Table,
  TableRow,
  TableHeader,
  TableData,
  ControlButton,
} from './TransactionHistory.styled';

// export const TransactionHistory = ({ items }) => {

//     return (
//         <Table>
//             <thead>
//                 <TableRow>
//                     <TableHeader>Type</TableHeader>
//                     <TableHeader>Amount</TableHeader>
//                     <TableHeader>Currency</TableHeader>
//                 </TableRow>
//             </thead>

//             <tbody>
//                 {items.map(({ id, type, amount, currency })   => (
//                     <TableRow key={id}>
//                         <TableData>{type}</TableData>
//                         <TableData>{amount}</TableData>
//                         <TableData>{currency}</TableData>
//                     </TableRow>
//                 ))}
//             </tbody>
//         </Table>
//     )
// }

export class TransactionHistory extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { items } = this.props;
    const { visible } = this.state;

    return (
      <>
        <ControlButton type="button" onClick={this.toggle}>
          {visible ? 'Hide' : 'Show'}
        </ControlButton>

        {visible && (
          <Table>
            <thead>
              <TableRow>
                <TableHeader>Type</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Currency</TableHeader>
              </TableRow>
            </thead>

            <tbody>
              {items.map(({ id, type, amount, currency }) => (
                <TableRow key={id}>
                  <TableData>{type}</TableData>
                  <TableData>{amount}</TableData>
                  <TableData>{currency}</TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
        )}
      </>
    );
  }
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
