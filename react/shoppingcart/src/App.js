import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import img1 from "./images/cushion1.jpg";
import img2 from "./images/cushion2.jpg";
import img3 from "./images/cushion3.jpg";
import img4 from "./images/cushion4.jpg";
import img5 from "./images/cushion5.jpg";
import img6 from "./images/cushion6.jpeg";
import Cart from './components/Cart';
import Button from '@mui/material/Button';

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


function ProductCards() {

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };
    return (
        <Grid container spacing={2} style={{padding: "50px"}}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={2} lg={2} key={product.name}>
                    <Paper>
                        <img src={product.img} alt={product.name} style={{width: "100px"}} />
                        <Typography variant="h6">{product.name}</Typography>
                        <Typography variant="subtitle1">{product.price}</Typography>
                        <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                    </Paper>
                </Grid>
            ))}
            <Cart cartItems={cartItems} setCartItems={setCartItems} />

        </Grid>


);
}



export default ProductCards;
