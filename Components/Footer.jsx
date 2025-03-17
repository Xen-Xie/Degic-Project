import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import {Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import React from 'react'

function Footer() {
    const FooterData = [
        {
            Title: 'Home',
            links: ['Become Affiliate','Go Unlimited','Services']
        },
        {
            Title: 'Products',
            links: ['Design Systems','Themes & Templates','Mockups','Presentations','Wireframes Kits','UI Kits']
        },
        {
            Title: 'Legals',
            links: ['License','Refund Policy','About Us','Contacts']
        },
        {
            Title: 'Blog',
            links: ['Business Stories','Digital Store','Learning','Social Media']
        }

    ];
    const SocialIcons = [
        {icon: <Facebook />, href: 'https://www.facebook.com'},
        {icon: <Twitter />, href: 'https://www.twitter.com'},
        {icon: <Instagram />, href: 'https://www.instagram.com'},
        {icon: <LinkedIn />, href: 'https://www.linkedin.com'}
    ]
  return (
    <Box sx={{backgroundColor: '#000000', py: 6,color:"#ffff"}}>
        <Container maxWidth="lg">
           <Grid container spacing={4}>
           <Grid item xs={12} md={3}>
                <Typography>
                    <img src="degic(1) 1.svg" alt="" />
                </Typography>
            </Grid>
            {
                FooterData.map((section, index) => (
                    <Grid item xs={6} md={2} key={index}>
                        <Typography>
                            {section.Title}
                        </Typography>
                        {section.links.map((link, linkIndex)=>(
                            <Box key={linkIndex}>
                                <Link href={link} underline="none" color='inherit' display="block" sx={{my:1}}>
                                    {link}
                                </Link>
                            </Box>
                        ))}
                    </Grid>
                ))
            }
           </Grid>
           <hr className='mt-10 mb-2 text-[#C4C4C4]'/>
           <Box mt={6} display='flex' justifyContent='center'>
            {
                SocialIcons.map((social, index) => (
                    <IconButton key={index} color='inherit' href={social.href}>
                        {social.icon}
                    </IconButton>
                ))
            }

            </Box> 
            <Box mt={4} textAlign="center">
                    <Typography>
                        &copy; {new Date().getFullYear()} Degic. All rights reserved.
                    </Typography>
            </Box>
        </Container>
        
    </Box>
  )
}

export default Footer