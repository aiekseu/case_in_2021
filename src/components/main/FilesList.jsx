import {Box, Grid, Hidden, LinearProgress, makeStyles, Paper, Typography} from "@material-ui/core";

import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    fileBox: {
        height: 100,
        width: 240,
        padding: 8
    },
    fileGray: {
        background: '#F7F7F7',
        padding: 12,
        marginBottom: 12
    },
    fileBlue: {
        background: '#6672FB',
        padding: 12,
        marginBottom: 12
    },
    format: {
        height: 36,
        width: 36,
        color: '#FFF',
        verticalAlign: 'middle',
        textAlign: 'center',
        paddingTop: 8,
        fontWeight: 500,
        display: 'inline-block'
    },
    fileName: {
        color: '#383D4A',
        fontWeight: 600
    },
    fileName_blue: {
        color: '#fff',
        fontWeight: 600
    },
    gray: {
        color: '#61657E',
        fontWeight: 300,
        fontSize: '0.9rem'
    },
    blue: {
        color: '#F3EDED',
        fontWeight: 300,
        fontSize: '0.9rem'
    },
    buttonsGroup: {
        color: '#61657E',
        fontWeight: 300,
        textAlign: 'right'
    },
    buttonsGroup_blue: {
        color: '#F3EDED',
        fontWeight: 300,
        textAlign: 'right'
    },
    button: {
        marginLeft: 8,
        marginTop: 4
    }
}));


const FilesList = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid container direction='column' >
                <Grid item container direction='row' alignItems="center" justify="space-evenly" xs={12}
                      component={Box} borderRadius={16} className={classes.fileGray}>

                    <Grid item xs='auto' sm={1}>
                        <Box borderRadius={10} style={{background: '#E8523F'}} className={classes.format}>
                            pdf
                        </Box>
                    </Grid>
                    <Grid item xs='auto' sm={4}>
                        <Typography className={classes.fileName}>
                            Первые шаги в РОСАТОМ
                        </Typography>
                    </Grid>
                    <Grid item xs='auto' sm={2}>
                        <Typography className={classes.gray}>
                            only you
                        </Typography>
                    </Grid>
                    <Grid item xs='auto' sm={2}>
                        <Typography className={classes.gray}>
                            28.12.2020
                        </Typography>
                    </Grid>
                    <Grid item xs='auto' sm={1}>
                        <Typography className={classes.gray}>
                            2 MB
                        </Typography>
                    </Grid>
                    <Grid item className={classes.buttonsGroup} xs={2}>
                        <AddIcon className={classes.button}/>
                        <ShareIcon className={classes.button}/>
                        <MoreVertIcon className={classes.button}/>
                    </Grid>
                </Grid>


                <Grid item container direction='row' alignItems="center" justify="space-evenly" xs={12}
                      component={Box} boxShadow={2} borderRadius={16} className={classes.fileBlue}>

                    <Grid item xs='auto' sm={1}>
                        <Box borderRadius={10} style={{background: '#F8B849'}} className={classes.format}>
                            png
                        </Box>
                    </Grid>
                    <Grid item xs='auto' sm={4}>
                        <Typography className={classes.fileName_blue}>
                            Карта офиса
                        </Typography>
                    </Grid>
                    <Grid item xs='auto' sm={2}>
                        <Typography className={classes.blue}>
                            10 человек
                        </Typography>
                    </Grid>
                    <Grid item xs='auto' sm={2}>
                        <Typography className={classes.blue}>
                            14.10.2015
                        </Typography>
                    </Grid>
                    <Grid item xs='auto' sm={1}>
                        <Typography className={classes.blue}>
                            10 MB
                        </Typography>
                    </Grid>
                    <Grid item className={classes.buttonsGroup_blue} xs={2}>
                        <AddIcon className={classes.button}/>
                        <ShareIcon className={classes.button}/>
                        <MoreVertIcon className={classes.button}/>
                    </Grid>
                </Grid>


                <Grid item container direction='row' alignItems="center" justify="space-evenly" xs={12}
                      component={Box} borderRadius={16} className={classes.fileGray}>

                    <Grid item xs='auto' sm={1}>
                        <Box borderRadius={10} style={{background: '#1F998E'}} className={classes.format}>
                            zip
                        </Box>
                    </Grid>
                    <Grid item xs='auto' sm={4}>
                        <Typography className={classes.fileName}>
                            Корпоративная культура
                        </Typography>
                    </Grid>
                    <Grid item xs='auto' sm={2}>
                        <Typography className={classes.gray}>
                            25 человек
                        </Typography>
                    </Grid>
                    <Grid item xs='auto' sm={2}>
                        <Typography className={classes.gray}>
                            31.03.2021
                        </Typography>
                    </Grid>
                    <Grid item xs='auto' sm={1}>
                        <Typography className={classes.gray}>
                            50 MB
                        </Typography>
                    </Grid>
                    <Grid item className={classes.buttonsGroup} xs={2}>
                        <AddIcon className={classes.button}/>
                        <ShareIcon className={classes.button}/>
                        <MoreVertIcon className={classes.button}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default FilesList