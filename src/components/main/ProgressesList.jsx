import {Box, Grid, Hidden, LinearProgress, makeStyles, Paper, Typography} from "@material-ui/core";

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import community from '../../images/community.svg'
import coubes from '../../images/coubes.svg'
import star from '../../images/star.svg'

const useStyles = makeStyles((theme) => ({
    progressBox: {
        height: 100,
        width: 240,
        padding: 8,
        marginTop: 8
    },
    image: {
        height: 64,
        width: 64,
        marginTop: 8,
        marginLeft: 8
    },
    moreIcon: {
        marginLeft: 'auto',
        paddingRight: 4,
        marginBottom: -12,
        marginTop: -4

    },
    text: {
        fontWeight: 500,
        color: '#61657E',
        maxWidth: '70%',
        lineHeight: '1.4'
    },
    progress: {
        marginTop: 8,
        paddingRight: 12
    },
}));


const ProgressesList = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid container direction='row' justify="space-around">

                <Box borderRadius={16} boxShadow={4} borderColor='#D3DFF7' border={3} className={classes.progressBox}>
                    <Grid container direction='row' justify="space-between" alignItems="center">
                        <Grid item xs={3}>
                            <img src={community} className={classes.image}/>
                        </Grid>

                        <Grid item container direction='column' justify="space-between" xs={7}>
                            <Grid item className={classes.moreIcon}>
                                <MoreHorizIcon/>
                            </Grid>
                            <Grid item>
                                <Typography variant='subtitle1' className={classes.text}>
                                    Командная работа
                                </Typography>
                            </Grid>
                            <Grid item className={classes.progress}>
                                <LinearProgress variant="determinate" value={40}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Box borderRadius={16} boxShadow={4} borderColor='#D3DFF7' border={3} className={classes.progressBox}>
                    <Grid container direction='row' justify="space-between" alignItems="center">
                        <Grid item xs={3}>
                            <img src={coubes} className={classes.image}/>
                        </Grid>

                        <Grid item container direction='column' justify="space-between" xs={7}>
                            <Grid item className={classes.moreIcon}>
                                <MoreHorizIcon/>
                            </Grid>
                            <Grid item>
                                <Typography variant='subtitle1' className={classes.text}>
                                    О компании
                                </Typography>
                            </Grid>
                            <Grid item className={classes.progress}>
                                <LinearProgress variant="determinate" value={90}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Box borderRadius={16} boxShadow={4} borderColor='#D3DFF7' border={3} className={classes.progressBox}>
                    <Grid container direction='row' justify="space-between" alignItems="center">
                        <Grid item xs={3}>
                            <img src={star} className={classes.image}/>
                        </Grid>

                        <Grid item container direction='column' justify="space-between" xs={7}>
                            <Grid item className={classes.moreIcon}>
                                <MoreHorizIcon/>
                            </Grid>
                            <Grid item>
                                <Typography variant='subtitle1' className={classes.text}>
                                    Карьерный рост
                                </Typography>
                            </Grid>
                            <Grid item className={classes.progress}>
                                <LinearProgress variant="determinate" value={20}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

            </Grid>
        </div>
    )

}

export default ProgressesList