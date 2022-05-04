import  React, { useState } from 'react'; 
import { Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemText,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    CssBaseline,
    Box
} from '@mui/material'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; 
import { theme } from '../../Theme/themes'; 
import { DataTable } from '../../components'; 
import turbine_image from '../../assets/images/cloudy-turbines.jpg'; 



const drawerWidth = 240;

const myStyles = {
    appBar : {
          transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        // backgroundColor: theme.palette.secondary.dark 
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth})`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide : {
        display: 'none'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.primary.contrastText,
      },
    drawerHeader: {
        display: 'flex',
        width: drawerWidth, 
        alignItmes: 'center',
        padding: theme.spacing(0,1),
        // Neccessary for content below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    content: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${turbine_image});`,
        height: '1000px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // position: 'absolute',
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: 0,
        marginTop: theme.spacing(6)
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    toolbar: {
        display: 'flex'
    },
    toolbarButton: {
        marginLeft: '20px',
        backgroundColor: theme.palette.primary.contrastText,
        "&:hover": {
            color: 'white',
            backgroundColor: theme.palette.primary.light 
        } 
    }

}


export const Dashboard = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false); 

    const handleDrawerOpen = () => {
        setOpen(true); 
    }

    const handleDrawerClose = () => {
        setOpen(false); 
    }

    const itemsList = [
        {
            text: 'Home',
            onClick: () => navigate('/')
        },
        {
            text: 'Log In',
            onClick: () => navigate('login')
        }
    ]

    return (
        <Box sx = {{display: 'flex'}}>
            <CssBaseline />
            <AppBar
                sx = {open ? myStyles.appBarShift: myStyles.appBar}
                position='fixed'>
                <Toolbar sx= {myStyles.toolbar}>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick={handleDrawerOpen}
                        edge='start'
                        sx={open ? myStyles.hide: myStyles.menuButton}>
                            <MenuIcon />

                    </IconButton>
                    <Typography variant = 'h6' noWrap> Dashboard  </Typography>
                    <Button sx={myStyles.toolbarButton}>Create New Drone</Button>
                </Toolbar>
            </AppBar>
            <MUIDrawer
                sx={ open ? myStyles.drawer: myStyles.hide}
                variant ='persistent'
                anchor = 'left'
                open={open}
                style={{width: drawerWidth}}>
                    <Box sx={myStyles.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeft />: <ChevronRight />}
                        </IconButton>
                    </Box>
                    <Divider />
                    <List>
                        {itemsList.map((item, index)=>{
                            const {text, onClick} = item; 
                            return(
                                <ListItem button key={text} onClick={onClick}>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            )
                        })}
                    </List>

            </MUIDrawer>
            <Box sx={myStyles.content}>
                    <DataTable /> 
                
            </Box>
        
        </Box>
    )
}