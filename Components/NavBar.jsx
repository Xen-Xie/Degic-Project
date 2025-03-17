import React, { useState } from "react"
import { AppBar, Toolbar,Typography,IconButton,Button,Drawer, List, ListItem, ListItemText, useMediaQuery } from "@mui/material"
import ManuIcon from '@mui/icons-material/Menu'
import { useTheme } from "@mui/material/styles"

function NavBar() {
   const [open, setOpen] = useState(false);
   const theme = useTheme();
   const manuItems = ['About', 'Services', 'Projects', 'Contacts'];
   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
        <AppBar elevation={0} className="NavBar" position="static" sx={{backgroundColor:'white', color:'black', borderBottom:"1px solid #fafafa"}}>
            <Toolbar>
                {isMobile? (
                    <div>
                        <IconButton color="inherit" onClick={()=>setOpen(true) }>
                            <ManuIcon />

                        </IconButton>
                
                    </div>

                ) : (
                    <>
                        <Typography sx={{ flexGrow: 1 }}>
                            <img src="logo.png" alt="" className="w-[135px] "/>
                        </Typography>
                        {
                            manuItems.map((item) =>(
                                <Button color="inherit" key={item} > {item}</Button>
                            ) )
                        }
                        <Button variant="outlined" sx={{color:"#2AB691", backgroundColor:"white", borderRadius:"10px", "&:hover":{
                            backgroundColor:"#2AB666",
                            color:"white"
                        }}}>Sign Up</Button>
                    </>
                )}
        
            </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={open} onClose={()=>setOpen(false)} >
            <List>
                {manuItems.map((item) =>(
                    <ListItem button key={item} onClick={()=> setOpen(false)}>
                            <ListItemText>
                                {item}
                            </ListItemText>
                    </ListItem>
                ))}
                <ListItem button>
                    <ListItemText primary="Sign Up" />
                </ListItem>
            </List>

        </Drawer>
    </>
  )
}

export default NavBar