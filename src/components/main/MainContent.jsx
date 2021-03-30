import {
    Box,
    Button,
    Grid,
    Hidden,
    IconButton,
    InputBase,
    makeStyles,
    Paper,
    Typography,
    withStyles
} from "@material-ui/core";
import {borders} from '@material-ui/system';

import mulish from "@fontsource/mulish"
import logo from '../../images/logo.png'

import SearchIcon from '@material-ui/icons/Search';
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import StoriesList from "./StoriesList";
import ProgressesList from "./ProgressesList";
import FilesList from "./FilesList";


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

const ChangeButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        maxWidth: 140,
        height: 40,
        fontSize: 16,
        fontWeight: 400,
        color: '#fff',
        padding: '4px 12px',
        border: '0px solid',
        lineHeight: 1.5,
        backgroundColor: '#6672FB',
        borderRadius: "8px 8px 8px 8px",
        borderColor: '#6672FB',
    },
})(Button);


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        background: "#fff",
        paddingLeft: 56,
        paddingRight: 56
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
    }
}));


const MainContent = () => {

    const classes = useStyles();


    return (
        <Box borderRadius={40} className={classes.root}>
            <Grid container direction='column'>
                <Grid item>
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

                <Grid item className={classes.stories}>
                    <Grid container direction='row' justify="space-between" alignItems="center">
                        <Typography variant='h5' className={classes.title}>
                            Истории
                        </Typography>
                        <ViewAllButton style={{marginRight: 48}}>
                            Все <NavigateNextIcon fontSize='small' style={{color: '#4D4D4D'}}/>
                        </ViewAllButton>
                    </Grid>

                    <Grid item style={{marginTop: 12}}>
                        <StoriesList/>
                    </Grid>
                </Grid>

                <Grid item>
                    <Box borderRadius={20} className={classes.greetingsCard}>
                        <Grid container direction='row'>
                            <Grid item container direction='column' justify="space-evenly" xs={12} md={9}>
                                <Typography variant='h4' className={classes.hello}>
                                    Здравствуй, Мария!
                                </Typography>
                                <Typography variant='subtitle1' className={classes.hello2}>
                                    Добро пожаловать в систему для адаптации новых сотрудников в компании РОСАТОМ.
                                </Typography>
                                <ChangeButton className={classes.changeButton}>
                                    Изменить
                                </ChangeButton>
                            </Grid>

                            <Hidden mdDown>
                                <Grid item xs={3}>
                                    <img src={logo} className={classes.logo}/>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item className={classes.progress}>
                    <Grid container direction='row' justify="space-between" alignItems="center">
                        <Typography variant='h5' className={classes.title}>
                            Что-то важное
                        </Typography>
                        <ViewAllButton style={{marginRight: 48}}>
                            Все <NavigateNextIcon fontSize='small' style={{color: '#4D4D4D'}}/>
                        </ViewAllButton>
                    </Grid>

                    <Grid item style={{marginTop: 12}}>
                        <ProgressesList/>
                    </Grid>
                </Grid>

                <Grid item className={classes.files}>
                    <Typography variant='h5' className={classes.title}>
                        Важные файлы
                    </Typography>

                    <Grid item style={{marginTop: 12}}>
                        <FilesList/>
                    </Grid>
                </Grid>


            </Grid>
        </Box>
    )

}

export default MainContent