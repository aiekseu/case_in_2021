import {Grid, Hidden, makeStyles} from "@material-ui/core";


import MainContent from "../components/main/MainContent";
import RightContentPanel from "../components/main/RightContentPanel";
import LeftNavigationPanel_new from "../components/main/LeftNavigationPanel_new";


const useStyles = makeStyles((theme) => ({
    bg: {
        [theme.breakpoints.up('md')]: {
            background: 'linear-gradient(to right, #121432 50%, transparent 50%);'
        },
        [theme.breakpoints.down('sm')]: {
            background: '#fff'
        },
    },
    leftPanel: {
        maxWidth: 180
    }
}));

const MainUserPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.bg}>
            <Grid container direction='row' justify="space-between">
                <Hidden smDown>
                    <Grid item md={2} className={classes.leftPanel}>
                        <LeftNavigationPanel_new/>
                    </Grid>
                </Hidden>

                <Grid item xs={12} sm={12} md={7} >
                    <MainContent/>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                    <RightContentPanel/>
                </Grid>
            </Grid>
        </div>
    )

}

export default MainUserPage