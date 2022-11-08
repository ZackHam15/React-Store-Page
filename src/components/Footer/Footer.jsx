import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const Footer = () => {
    return <footer>
        <Box 
            px={{ xs: 3, sm: 10}} 
            py={{xs: 5, sm: 10}}
            bgcolor="#efc2ff" // background colour of the footer (same as the navbar)
            color="black"
        >
            {/* creating buttons inside of the footer */}
            {/* 3 different sections side by side  */}
            <Container maxWidth='lg'>
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Privacy
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                FAQs
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Veo</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                About us
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Join as a Brand
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Blog
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Our sustainability
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Follow us</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Twitter
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Facebook
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Instagram
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Youtube
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" ></Box>
            </Container>
        </Box>
    </footer>;
}

export default Footer