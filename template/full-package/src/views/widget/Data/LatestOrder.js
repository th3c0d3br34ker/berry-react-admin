import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

// project imports
import { gridSpacing } from "./../../../store/constant";

// assets
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

import Phone1 from "./../../../assets/images/widget/PHONE1.jpg";
import Phone2 from "./../../../assets/images/widget/PHONE2.jpg";
import Phone3 from "./../../../assets/images/widget/PHONE3.jpg";
import Phone4 from "./../../../assets/images/widget/PHONE4.jpg";
import MainCard from "./../../../ui-component/cards/MainCard";

// style constant
const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
  imgProduct: {
    width: "20px",
    height: "auto",
  },
});

// table data
function createData(
  customer,
  cid,
  photo,
  product,
  quantity,
  date,
  status,
  statuscolor
) {
  return { customer, cid, photo, product, quantity, date, status, statuscolor };
}

const rows = [
  createData(
    "John Deo",
    "#81412314",
    Phone1,
    "Moto G5",
    "10",
    "17-2-2017",
    "Pending",
    "secondary"
  ),
  createData(
    "Jenny William",
    "#68457898",
    Phone2,
    "iPhone 8",
    "16",
    "20-2-2017",
    "Paid",
    "primary"
  ),
  createData(
    "Lori Moore",
    "#45457898",
    Phone3,
    "Redmi 4",
    "20",
    "17-2-2017",
    "Success",
    "secondary"
  ),
  createData(
    "Austin Pena",
    "#62446232",
    Phone4,
    "Jio",
    "15",
    "25-4-2017",
    "Failed",
    "primary"
  ),
];

//=========================|| LATEST ORDER CARD ||=========================//

export default function LatestOrder() {
  const classes = useStyles();

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <MainCard title="Latest Order" content={false}>
          <CardContent sx={{ p: 0 }}>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ pl: 3 }}>Customer</TableCell>
                    <TableCell>Order Id</TableCell>
                    <TableCell>Photo</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell align="right">Total</TableCell>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center" sx={{ pr: 3 }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow hover key={index}>
                      <TableCell sx={{ pl: 3 }}>{row.customer}</TableCell>
                      <TableCell>{row.cid}</TableCell>
                      <TableCell>
                        <CardMedia
                          component="img"
                          image={row.photo}
                          title="image"
                          className={classes.imgProduct}
                        />
                      </TableCell>
                      <TableCell>{row.product}</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">
                        <Chip
                          color={row.statuscolor}
                          label={row.status}
                          size="small"
                        />
                      </TableCell>
                      <TableCell align="center" sx={{ pr: 3 }}>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <IconButton color="primary">
                            <EditOutlinedIcon />
                          </IconButton>
                          <IconButton color="inherit">
                            <DeleteOutlineOutlinedIcon />
                          </IconButton>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button variant="text" size="small" color="primary">
              View all Orders
            </Button>
          </CardActions>
        </MainCard>
      </Grid>
    </Grid>
  );
}