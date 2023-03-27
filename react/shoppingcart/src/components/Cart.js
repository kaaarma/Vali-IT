import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cart({ cartItems, setCartItems }) {
    const [cartOpen, setCartOpen] = useState(false);

    const totalPrice = cartItems.reduce((total, item) => {
        return total + parseFloat(item.price);
    }, 0);

    const handleRemoveItem = (item) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
        setCartItems(updatedCartItems);
    };

    return (
        <>
            <Button onClick={() => setCartOpen(true)}>Open Cart</Button>

            <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
                <div style={{ width: '300px', padding: '16px' }}>
                    <Typography variant='h6'>Shopping Cart</Typography>

                    {cartItems.length === 0 ? (
                        <Typography>Your cart is empty</Typography>
                    ) : (
                        <>
                            {cartItems.map((item) => (
                                <div key={item.name}>
                                    <Typography variant='subtitle1'>{item.name}</Typography>
                                    <Typography variant='subtitle2'>{item.price}</Typography>
                                    <Button onClick={() => handleRemoveItem(item)}>Remove</Button>
                                </div>
                            ))}

                            <Typography variant='h6'>Total Price: {totalPrice.toFixed(2)}€</Typography>
                        </>
                    )}
                </div>
            </Drawer>
        </>
    );
}

export default Cart;
