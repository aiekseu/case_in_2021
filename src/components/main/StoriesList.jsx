import {Backdrop, Box, Grid, Hidden, makeStyles, Paper} from "@material-ui/core";
import Stories from "react-insta-stories";
import React, {useState} from "react";

const useStyles = makeStyles((theme) => ({
    storiesCard: {
        height: 130,
        width: 115
    },

}));


const StoriesList = () => {

    const classes = useStyles();
    const [isShown, setIsShown] = useState(false)

    const stories = [
        'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkDgjyD_EOBP2HyQjCG6kTC6aKTM5SRkZCeTgDn6uOyic',
        'https://iliad.ru/wp-content/uploads/rekl_modul_110x175_eng-01.jpg',
    ];

    return (
        <div>
            <Grid container direction='row' justify="space-around">
                <Hidden>
                    <Box borderRadius={22} onClick={() => {setIsShown(!isShown)}} className={classes.storiesCard} style={{background: 'linear-gradient(15deg, rgba(122,64,242,1) 0%, rgba(148,100,252,1) 100%)'}}/>
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

            <Backdrop className={classes.backdrop} open={isShown} onClick={() => {setIsShown(!isShown)}}>
                <Stories
                    stories={stories}
                    defaultInterval={3500}
                    width={432}
                    height={768}
                    />
            </Backdrop>

        </div>
    )

}

export default StoriesList