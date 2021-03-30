import {useState} from "react";
import {
    Avatar,
    Badge,
    Box,
    Button,
    Grid,
    IconButton,
    makeStyles,
    Paper,
    Typography,
    withStyles
} from "@material-ui/core";
import Calendar from "react-calendar";
import '../../styles/MyCalendar.css';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import MentorsList from "./MentorsList";
import YourTask from "./YourTask";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        marginRight: 8
    },
    name: {
        fontFamily: 'mulish, sans-serif',
        color: '#4D4D4D',
        fontWeight: 700,
        marginLeft: 32
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        margin: 8,
        marginLeft: 16,
        marginRight: 0
    },
    moreButton: {
        margin: 4,
        marginRight: 40,
    },
    calendar: {
        border: 'none',
    },
    calendarBox: {
        padding: 24,
        paddingTop: 18,
        background: "#ffffff",
        marginBottom: 16
    },
    calendarBoxClosed: {
        padding: 12,
        background: "#ffffff",
        marginBottom: 16
    },
    mentorBox: {
        padding: 16,
        paddingTop: 12,
        background: "#ffffff",
        marginBottom: 16
    },
    taskBoxOuter: {
        background: "#E8523F",
        marginBottom: 12,
        marginTop: 6
    },
    taskBoxInner: {
        padding: 16,
        paddingTop: 12,
        background: "#fff",
        marginLeft: 12
    },
    title: {
        marginLeft: 8,
        marginBottom: 8,
        fontWeight: 500,
        color: '#333539',
    },
    section: {
        marginTop: 16
    },
}));


const ViewAllButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 300,
        padding: '4px 12px',
        border: '0px solid',
        lineHeight: 1.5,
        backgroundColor: '#EFF3FB',
        borderRadius: "9px 9px 9px 9px",
        borderColor: '#EFF3FB',
    },
})(Button);


const RightContentPanel = () => {

    const classes = useStyles();
    const [date, setDate] = useState(new Date());
    const [calendarIsHidden, setCalendarIsHidden] = useState(true)

    const onChange = date => {
        setDate(date);
    };


    return (
        <Box className={classes.root}>
            <Grid container direction='column'>
                <Grid item style={{marginTop: 8}}>
                    <Grid container direction='row' justify="flex-end" alignItems="center">
                        <IconButton aria-label="show 11 new notifications" color="#4D4D4D">
                            <Badge badgeContent={11} color="secondary">
                                <NotificationsNoneIcon/>
                            </Badge>
                        </IconButton>
                        <Typography className={classes.name}>
                            Мария Ким
                        </Typography>
                        <Avatar alt="Мария Ким" className={classes.small}/>
                        <ExpandMoreIcon className={classes.moreButton}/>
                    </Grid>
                </Grid>

                <Grid item className={classes.section} >
                    <Box borderRadius={16} className={(calendarIsHidden) ? classes.calendarBox : classes.calendarBoxClosed}>
                        <Grid container direction='row' justify="space-between" alignItems="center">
                            <Typography variant='h5' className={classes.title}>
                                Календарь
                            </Typography>
                            <IconButton style={{padding: 4}} onClick={() => {setCalendarIsHidden(!calendarIsHidden)}}>
                                {(calendarIsHidden) ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
                            </IconButton>
                        </Grid>
                        {calendarIsHidden &&
                        <Calendar
                            onChange={onChange}
                            value={date}
                            className={classes.calendar}
                            nextLabel={<NavigateNextIcon/>}
                            next2Label=''
                            prevLabel={<NavigateBeforeIcon/>}
                            prev2Label=''
                        />}
                    </Box>

                    <Grid item className={classes.section}>
                        <Grid container direction='row' justify="space-between" alignItems="center">
                            <Typography variant='h5' className={classes.title}>
                                Твои наставники
                            </Typography>
                        </Grid>
                        <Box borderRadius={16} className={classes.mentorBox}>
                            <Grid item>
                                <MentorsList />
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item className={classes.section}>
                        <Grid container direction='row' justify="space-between" alignItems="center">
                            <Typography variant='h5' className={classes.title}>
                                Твои задания
                            </Typography>
                            <ViewAllButton>
                                Все <NavigateNextIcon fontSize='small' style={{color: '#4D4D4D'}}/>
                            </ViewAllButton>
                        </Grid>
                        <Box borderRadius={16} className={classes.taskBoxOuter}>
                            <Box className={classes.taskBoxInner}>
                                <Grid item>
                                    <YourTask/>
                                </Grid>
                            </Box>
                        </Box>
                        <Box borderRadius={16} className={classes.taskBoxOuter}>
                            <Box className={classes.taskBoxInner}>
                                <Grid item>
                                    <YourTask/>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    )

}

export default RightContentPanel