import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// Product Blocks

const products = [
    { id: 1, name: 'Yule Spice Soy Aromatherapy Candle | Cinnamon & Orange', description: 'A warm, festive scent with rich, spicy notes and a hint of citrus. Made with essential oils of Cinnamon, Clove and Orange', price: '£29.95', image: 'https://veo-cdn.imgix.net/products/1395/s_files_1_0034_2930_2385_products_Yule-Spice-Group.jpeg?fit=fill&width=450&height=450&ar=5%3A3&auto=format&w=384' },
    { id: 2, name: 'Eco-Friendly Dishwasher Powder', description: 'Start your zero waste clean living journey with our non-toxic plastic-free dishwasher powder.', price: '£5.25', image: 'https://veo-cdn.imgix.net/products/36586/s_files_1_0448_4294_2632_products_bide-dishwasher-powder-web4copy.jpeg?fit=clip&auto=format&w=640' },
    { id: 3, name: 'Recycled Silver Scattered Sparkly Dog Tag Necklace', description: 'Cubic zirconia stars and geometric shapes this silver dog tag necklace is versatile and pretty to wear on repeat', price: '£50.00', image: 'https://veo.world/_next/image?url=https%3A%2F%2Fdevapi.veo.world%2Fimages%2Fproducts%2F19561%2Fs_files_1_0974_2822_products_ClaireHillDesignsMysticSparkly925RecycledSilverDogTagNecklaceCloseUp.jpeg&w=1080&q=75' },
    { id: 4, name: 'Full Vegan Makeup Brush Set | Bamboo and Silver', description: 'Beautifully hand crafted eco-friendly and sustainable bamboo Vegan makeup brushes.', price: '£43.00', image: 'https://veo-cdn.imgix.net/products/9127/s_files_1_0033_5324_7857_products_RGwood_1.jpeg?fit=fill&width=450&height=450&ar=5%3A3&auto=format&w=384' },
    { id: 5, name: 'Organic Chia & Mulberry Muffin Mix | Makes 9 Large Muffins', description: 'The UKs first ever Organic, Allergen Free, Refined Sugar Free, Superfood Home Baking Muffin Mix!', price: '£5.49', image: 'https://veo-cdn.imgix.net/products/12884/wp-content_uploads_2017_08_MulberryMuffin_Edited-1.jpeg?fit=fill&ar=5%3A3&auto=format&w=640' },
    { id: 6, name: 'Hemp and Organic Cotton  T-Shirt | Blanc/White', description: 'White Colour A blend of 53% Hemp and 44% Organic Cotton. 222 GSM True to size fit.', price: '£49.00', image: 'https://veo-cdn.imgix.net/products/15713/s_files_1_0535_6027_9203_products_blanc-hemp-cotton-white-tshirt-7319-front.jpeg?fit=clip&auto=format&w=640' },
    { id: 7, name: 'Vegan Insulated Biker Boots | Black', description: 'Italian vegan leather made with 69% biobased content Lined with Primaloft insulation made from 90% recycled content.', price: '£115.00', image: 'https://veo-cdn.imgix.net/products/26778/s_files_1_0530_4097_1940_products_5_9fcbdd1a-d84d-4373-a1d4-1785881176ad.jpeg?fit=clip&auto=format&w=640' },
    { id: 8, name: '100% Natural Restore Multi-Purpose Beauty Oil | Oil Free', description: 'Restore, a 100% natural, fast-absorbing oil that restores balance in your skin and supports a healthy skin barrier.', price: '£36.00', image: 'https://veo-cdn.imgix.net/products/12213/s_files_1_0268_0002_9730_products_9_ae9a4798-5bb2-4926-b512-21bfd5314f99.png?fit=clip&auto=format&w=640' },
];

const Products = () => {
    const classes = useStyles();
    return(
        <main className={classes.content}> 
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;