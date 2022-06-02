import PropTypes from "prop-types";
import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

// third party
import PerfectScrollbar from "react-perfect-scrollbar";

// project imports
import MainCard from "./../../../ui-component/cards/MainCard";

// style constant
const useStyles = makeStyles((theme) => ({
  ScrollHeight: {
    height: "345px",
    padding: 0,
  },
}));

// table data
function createData(sales, product, price) {
  return { sales, product, price };
}

const rows = [
  createData("2136", "HeadPhone", "$ 926.23"),
  createData("2546", "Iphone 6", "$ 485.85"),
  createData("2681", "Jacket", "$ 786.4"),
  createData("2756", "HeadPhone", "$ 563.45"),
  createData("8765", "Sofa", "$ 769.45"),
  createData("3652", "Iphone 7", "$ 754.45"),
  createData("7456", "Jacket", "$ 743.23"),
  createData("6502", "T-Shirt", "$ 642.23"),
];

//===========================|| DATA WIDGET - PRODUCT SALES CARD ||===========================//

const ProductSales = ({ title }) => {
  const classes = useStyles();

  return (
    <MainCard title={title} content={false}>
      <CardContent sx={{ p: 0, pb: "0 !important" }}>
        <Grid
          sx={{ p: 2.5 }}
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Typography component="div" variant="subtitle2">
                  Earning
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="div" variant="h3">
                  20,569$
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Typography component="div" variant="subtitle2">
                  Yesterday
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="div" variant="h3">
                  580$
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Typography component="div" variant="subtitle2">
                  This Week
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="div" variant="h3">
                  5,789$
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <PerfectScrollbar className={classes.ScrollHeight}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ pl: 3 }}>Last Sales</TableCell>
                  <TableCell>Name Product</TableCell>
                  <TableCell align="right" sx={{ pr: 3 }}>
                    Price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow hover key={index}>
                    <TableCell sx={{ pl: 3 }}>
                      <span className={row.colorclass}>{row.sales}</span>
                    </TableCell>
                    <TableCell>{row.product}</TableCell>
                    <TableCell align="right" sx={{ pr: 3 }}>
                      <span className={row.colorclass}>{row.price}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </PerfectScrollbar>
      </CardContent>
    </MainCard>
  );
};

ProductSales.propTypes = {
  title: PropTypes.string,
};

export default ProductSales;