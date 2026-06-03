import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';

const Product = () => {
    const [user, setuser] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setuser(res.data)
            })
            .catch((err) => {
                console.error("Error fetching products:", err)
            })
    }, [])

    return (
        <div style={{ padding: '20px' }}>
            
            <h3>Products</h3>
            
       
            
            <Grid container spacing={2}>
        {user.map((val) => {
                    return (
                        <Card key={val.id} sx={{ width: 300 }}> 
                            <CardMedia
                                sx={{ height: 140, backgroundSize: 'contain' }}
                                image={val.image}
                                title={val.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {val.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {val.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    )
                })}
                </Grid>
            </div>
       
    )
}

export default Product