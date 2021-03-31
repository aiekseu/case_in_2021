import {
    Avatar,
    Badge,
    Box,
    Button,
    Grid,
    IconButton,
    InputBase,
    makeStyles,
    Typography,
    withStyles
} from "@material-ui/core";


import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ActivitiesFilters from "./ActivitiesFilters";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        background: "#fff",
        paddingLeft: 56,
        paddingRight: 56
    },
    name: {
        fontFamily: 'mulish, sans-serif',
        color: '#4D4D4D',
        fontWeight: 700,
        marginLeft: 16
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
    },
    searchBar: {
        display: 'flex',
        maxWidth: 360,
        marginTop: 24
    },
    iconBG: {
        background: '#D3DEF4',
        padding: 6,
        paddingTop: 12,
        height: 48,
        width: 48,
        textAlign: 'center',
        zIndex: 1
    },
    icon: {
        color: '#6672FB',
        padding: 1
    },
    searchInput: {
        background: '#EFF3FB',
        flex: 1,
        paddingLeft: 42,
        marginLeft: -24,
    },
    searchShape: {
        borderRadius: 15,
        fontWeight: 600,
        color: '#4D4D4D'
    },
    stories: {
        marginTop: 18
    },
    title: {
        fontWeight: 500,
        color: '#333539'
    },
    greetingsCard: {
        background: '#dee6f8',
        width: '100%',
        padding: 18,
        paddingBottom: 10,
        paddingRight: 24,
        paddingLeft: 24,
        marginTop: 24
    },
    hello: {
        fontWeight: 600,
        color: '#4D4D4D',
        marginBottom: 8,
    },
    hello2: {
        fontWeight: 400,
        color: '#6d6d6d',
        fontSize: '1.1rem'
    },
    changeButton: {
        marginTop: 20
    },
    logo: {
        maxHeight: 160,
        paddingLeft: 16
    },
    progress: {
        marginTop: 24
    },
    files: {
        marginTop: 24
    },
    activity: {
        width: 200,
        height: 170
    },
    activitiesGrid: {
        marginTop: 16
    }
}));


const Schedule = () => {

    const classes = useStyles();

    return (
        <Box borderRadius={40} className={classes.root}>
            <Grid container direction='column'>

                <Grid item style={{marginTop: 8}}>
                    <Grid container direction='row' justify="space-around" alignItems="center">
                        <Grid item xs={12} sm={8} md={8}>
                            <Box borderRadius={15} className={classes.searchBar}>
                                <Box borderRadius={15} className={classes.iconBG}>
                                    <SearchIcon className={classes.icon}/>
                                </Box>
                                <InputBase
                                    className={classes.searchInput}
                                    classes={{root: classes.searchShape}}
                                    borderRadius={15}
                                    placeholder="Поиск"
                                />
                            </Box>
                        </Grid>

                        <Grid item container direction='row' justify="flex-end" alignItems="center" xs={12} sm={4}
                              md={4}>
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
                </Grid>

                <Grid item className={classes.stories}>
                    <Grid container direction='row' justify="space-between" alignItems="center">
                        <Typography variant='h4' className={classes.title}>
                            Мероприятия
                        </Typography>
                    </Grid>


                    <Grid item style={{marginTop: 12}}>
                        <ActivitiesFilters/>
                    </Grid>
                </Grid>

                <Grid item container direction='row' xs={12} spacing={2} className={classes.activitiesGrid}>
                    <Grid item>
                        <Box borderRadius={12} borderColor='#DDDDDD' border={2} className={classes.activity}/>
                    </Grid>
                    <Grid item>
                        <Box borderRadius={12} borderColor='#DDDDDD' border={2} className={classes.activity}/>
                    </Grid>
                    <Grid item>
                        <Box borderRadius={12} borderColor='#DDDDDD' border={2} className={classes.activity}/>
                    </Grid>
                    <Grid item>
                        <Box borderRadius={12} borderColor='#DDDDDD' border={2} className={classes.activity}/>
                    </Grid>
                    <Grid item>
                        <Box borderRadius={12} borderColor='#DDDDDD' border={2} className={classes.activity}/>
                    </Grid>
                    <Grid item>
                        <Box borderRadius={12} borderColor='#DDDDDD' border={2} className={classes.activity}/>
                    </Grid>
                    <Grid item>
                        <Box borderRadius={12} borderColor='#DDDDDD' border={2} className={classes.activity}/>
                    </Grid>
                    <Grid item>
                        <Box borderRadius={12} borderColor='#DDDDDD' border={2} className={classes.activity}/>
                    </Grid>
                    <Grid item>
                        <Box borderRadius={12} borderColor='#DDDDDD' border={2} className={classes.activity}/>
                    </Grid>
                    <Grid item>
                        <Box borderRadius={12} borderColor='#DDDDDD' border={2} className={classes.activity}/>
                    </Grid>
                    <Grid item>
                        <Box borderRadius={12} borderColor='#DDDDDD' border={2} className={classes.activity}/>
                    </Grid>
                    <Grid item>
                        <Box borderRadius={12} borderColor='#DDDDDD' border={2} className={classes.activity}/>
                    </Grid>



                </Grid>


            </Grid>
        </Box>
    )

}

export default Schedule