import {Avatar, Grid, makeStyles, Typography} from "@material-ui/core";

import mentor_1 from '../../images/mentor_1.png'
import mentor_2 from '../../images/mentor_2.png'
import mentor_3 from '../../images/mentor_3.png'
import mentor_4 from '../../images/mentor_4.png'
import mentor_5 from '../../images/mentor_5.png'

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: 8
    },
    mentorName: {
        fontWeight: 600,
        color: '#4D4D4D',
        marginTop: 6,
        lineHeight: 1.2
    },
    mentorPosition: {
        fontWeight: 400,
        color: '#C6C6C6',
        marginTop: 0
    }
}));


const MentorsList = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2} direction='row' justify="space-evenly" alignItems="center">
                <Grid item>
                    <Grid container direction='column' justify="flex-start" alignItems="center">
                        <Avatar alt="Ментор 1" src={mentor_1}/>
                        <Typography className={classes.mentorName}>
                            Елена
                        </Typography>
                        <Typography className={classes.mentorPosition}>
                            Куратор
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction='column' justify="flex-start" alignItems="center">
                        <Avatar alt="Ментор 1" src={mentor_2}/>
                        <Typography className={classes.mentorName}>
                            Даша
                        </Typography>
                        <Typography className={classes.mentorPosition}>
                            HR
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction='column' justify="flex-start" alignItems="center">
                        <Avatar alt="Ментор 1" src={mentor_3}/>
                        <Typography className={classes.mentorName}>
                            Мария
                        </Typography>
                        <Typography className={classes.mentorPosition}>
                            Psych
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction='column' justify="flex-start" alignItems="center">
                        <Avatar alt="Ментор 1" src={mentor_4}/>
                        <Typography className={classes.mentorName}>
                            Адам
                        </Typography>
                        <Typography className={classes.mentorPosition}>
                            Куратор
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction='column' justify="flex-start" alignItems="center">
                        <Avatar alt="Ментор 1" src={mentor_5}/>
                        <Typography className={classes.mentorName}>
                            Наташа
                        </Typography>
                        <Typography className={classes.mentorPosition}>
                            PM
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default MentorsList