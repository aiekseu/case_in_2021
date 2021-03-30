import {Avatar, Box, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {AvatarGroup} from "@material-ui/lab";

import mentor_1 from '../../images/mentor_1.png'
import mentor_2 from '../../images/mentor_2.png'
import mentor_3 from '../../images/mentor_3.png'
import mentor_4 from '../../images/mentor_4.png'
import mentor_5 from '../../images/mentor_5.png'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 8
    },
    task: {
        fontWeight: 700,
        color: '#383D4A',
        fontSize: '1.04rem'
    },
    clockIcon: {
        marginRight: 6,
        marginLeft: -4,
        height: '1.2rem'
    },
    time: {
        fontWeight: 400,
        color: '#4D4D4D',
        fontSize: '0.98rem'
    },
    participants: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        fontSize: '0.8rem'
    }
}));

const YourTask = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid container direction='row' justify="space-between" alignItems="center">
                <Typography variant='subtitle1' className={classes.task}>
                    Заполнить информацию о себе
                </Typography>
                <IconButton size='small'>
                    <MoreVertIcon/>
                </IconButton>
            </Grid>
            <Grid container direction='row' justify="flex-start" alignItems="center">
                <ScheduleIcon className={classes.clockIcon}/>
                <Typography variant='subtitle2' className={classes.time}>
                    4 апреля, 2021 | 23:59
                </Typography>
            </Grid>
            <AvatarGroup max={3} classes={{avatar: classes.participants}}>
                <Avatar alt="1"  src={mentor_1} />
                <Avatar alt="2"  src={mentor_2} />
                <Avatar alt="3"  src={mentor_3} />
                <Avatar alt="4"  src={mentor_4} />
            </AvatarGroup>
        </div>


    )

}

export default YourTask