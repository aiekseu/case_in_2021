import {Box, Grid, Hidden, makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    storiesCard: {
        height: 130,
        width: 115
    },

}));


const StoriesList = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid container direction='row' justify="space-around">
                <Hidden>
                    <Box borderRadius={22} className={classes.storiesCard} style={{background: 'linear-gradient(15deg, rgba(122,64,242,1) 0%, rgba(148,100,252,1) 100%)'}}/>
                </Hidden>
                <Hidden>
                    <Box borderRadius={22} className={classes.storiesCard} style={{background: 'linear-gradient(15deg, rgba(249,78,57,1) 0%, rgba(255,123,107,1) 100%)'}}/>
                </Hidden>
                <Hidden xsDown>
                    <Box borderRadius={22} className={classes.storiesCard} style={{background: 'linear-gradient(15deg, rgba(1,135,246,1) 0%, rgba(62,166,251,1) 100%)'}}/>
                </Hidden>
                <Hidden smDown>
                    <Box borderRadius={22} className={classes.storiesCard} style={{background: 'linear-gradient(15deg, rgba(43,170,93,1) 0%, rgba(51,202,186,1) 100%)'}}/>
                </Hidden>
                <Hidden mdDown>
                    <Box borderRadius={22} className={classes.storiesCard} style={{background: 'linear-gradient(15deg, rgba(122,64,242,1) 0%, rgba(148,100,252,1) 100%)'}}/>
                </Hidden>
                <Hidden lgDown>
                    <Box borderRadius={22} className={classes.storiesCard} style={{background: 'linear-gradient(15deg, rgba(1,135,246,1) 0%, rgba(62,166,251,1) 100%)'}}/>
                </Hidden>
            </Grid>
        </div>
    )

}

export default StoriesList