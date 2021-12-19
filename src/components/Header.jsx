import {AppBar,Toolbar,makeStyles } from "@material-ui/core";
import ListIcon from '@mui/icons-material/List';

const useStyles = makeStyles({
    header: {
        background:"#fff",
        height:70
    },
    logo:{
        height:40,
        margin:"auto",
        color:"red"
    },
    menuIcon:{
        color:"red"
    }
})

const Header = () => {
    const classes = useStyles();


    return(
        <AppBar className={classes.header}>
            <Toolbar>
                <ListIcon className={classes.menuIcon} />
                <h1 className={classes.logo} >OneWord</h1>
            </Toolbar>
        </AppBar>
    )
}

export default Header;