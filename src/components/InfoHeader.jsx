import React from 'react'
import {Box, Typography,makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    info:{
        display:"flex",
        justifyContent:"center",
        backgroundColor:"tomato",
        color:"#fff",
        width:"80%",
        margin:"0 auto",
        fontWeight:"700",
        padding:"5px ",
        marginBottom:"30px",
        [theme.breakpoints.down("md")]: {
            display:"none"
        }
    }
}))

const InfoHeader = () => {
    const classes = useStyles();

    return (
        <Box>
            <Typography className={classes.info} >
                Hi this is OneWord News for description !
            </Typography>
        </Box>
    )
}

export default InfoHeader;
