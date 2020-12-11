import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';

import './InventoryTable.css';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  table: {
    minWidth: 700,
  }
});

function PizzaTable(props) {
  const { classes } = props;
  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Time Order Placed</CustomTableCell>
            <CustomTableCell>Type</CustomTableCell>
            <CustomTableCell>Cost</CustomTableCell>
            <CustomTableCell>&nbsp;</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.orderHistory.map(item =>
            <TableRow key={item.id}>
              <TableCell>{item.customer_name}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.total}</TableCell>
              <TableCell>
                {/* <Button variant="outlined" className={classes.button} onClick={() => props.editItem(item)}>
                  <CreateIcon className={classes.icon} />Edit
                </Button> */}
                <Button variant="outlined" className={classes.button} onClick={() => props.deletePizza(item.id)}>
                  <DeleteIcon className={classes.icon} />Delete
                  </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}

PizzaTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PizzaTable);
