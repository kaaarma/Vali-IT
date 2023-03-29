import React, { useState } from "react";
import './App.css';
import img1 from "./images/cushion1.jpg";
import img2 from "./images/cushion2.jpg";
import img3 from "./images/cushion3.jpg";
import img4 from "./images/cushion4.jpg";
import img5 from "./images/cushion5.jpg";
import img6 from "./images/cushion6.jpeg";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Popper from '@mui/material/Popper';

const products = [
  {
    img: img1,
    name: 'Cushion Velvet',
    price: '35.99'
  },
  {
    img: img2,
    name: 'Cushion Grey',
    price: '12.99'
  },
  {
    img: img3,
    name: 'Cushion Blue',
    price: '29.99'
  },
  {
    img: img4,
    name: 'Cushion Parrot',
    price: '23.99'
  },
  {
    img: img5,
    name: 'Cushion Flower',
    price: '31.99'
  },
  {
    img: img6,
    name: 'Cushion Dots',
    price: '26.99'
  }
];
function App() {

  const [cart, setCart] = useState([]);
  const addToCart= (product) => {
    setCart([...cart, product]);
  };

  const [cartOpen, setCartOpen] = useState(false);

  const totalPrice = cart.reduce((total, product) => {
    return total + parseFloat(product.price);
  }, 0);

  const priceWithoutVat = (totalPrice) => {
    return (totalPrice * 0.8).toFixed(2);
  }

  return (
      <Grid container spacing={2} style={{textAlign: "center"}}>
        {products.map((product) => (
            <Grid key={product.index}>
              <Paper>
                <img src={product.img} style={{width: "100px", padding: "70px"}}/>
                <Typography>{product.name}</Typography>
                <Typography>{product.price}</Typography>
                <Button onClick={() => addToCart(product)}>Add to cart</Button>
              </Paper>
            </Grid>
        ))}
        <Grid style={{padding: "40px"}}>
        <Button onClick={() => setCartOpen(true)}>Open Cart</Button>
        </Grid>
        <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          <div style={{ width: '300px', padding: '16px', textAlign: 'right' }}>
        <Typography style={{padding: "70px"}}>Shopping cart</Typography>
          {cart.map((product) => (
            <div key={product.index}>
                  <Typography>{product.name}</Typography>
                  <Typography>{product.price}</Typography>
            </div>
            ))
            }
            <Typography variant='subtitle2'>Price without VAT: {priceWithoutVat(totalPrice)}€</Typography>
            <Typography variant='subtitle2'>VAT: 20%</Typography>
            <Typography variant='h5'>Total Price: {totalPrice.toFixed(2)}€</Typography>
          </div>
        </Drawer>
      </Grid>


  );
}
export default App;
