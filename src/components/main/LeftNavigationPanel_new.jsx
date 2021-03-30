import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline, Divider, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core/';

import "@fontsource/mulish"

import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import {Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    color: {
        backgroundColor: '#121432',
        height: '100%',
    },
    appName: {
        fontFamily: 'mulish, sans-serif' ,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 200,
        color: '#FFF',
        paddingTop: 16,
        marginBottom: 64,
        marginLeft: 16
    },
    icon: {
        color: '#FFF',
        fontWeight: 700,
        minWidth: 36,
        width: 24,
        height: 24,
        marginLeft: 16
    },
    text: {
        fontFamily: 'mulish, sans-serif',
        color: '#FFF',
        fontWeight: 700,
        margin: 8,
        marginTop: 12,
        marginBottom: 12
    },
    text_notActive: {
        fontFamily: 'mulish',
        color: '#C1BEBE',
        fontWeight: 700,
        margin: 8,
        marginTop: 12,
        marginBottom: 12
    },
}));

const LeftNavigationPanel_new = () => {
    const classes = useStyles();

    return (
        <div className={classes.color}>
            <CssBaseline/>
            <Typography className={classes.appName}>ROSATOM</Typography>
            <List>
                <ListItem button key='main' >
                    <ListItemIcon className={classes.icon}><CloudQueueIcon /></ListItemIcon>
                    <ListItemText primary='Главная' className={classes.text} />
                </ListItem>
                <ListItem button key='main' >
                    <ListItemIcon className={classes.icon}><CloudQueueIcon /></ListItemIcon>
                    <ListItemText primary='Главная' className={classes.text_notActive}/>
                </ListItem>
                <ListItem button key='main'>
                    <ListItemIcon className={classes.icon}><CloudQueueIcon /></ListItemIcon>
                    <ListItemText primary='Главная' className={classes.text_notActive}/>
                </ListItem>
                <ListItem button key='main'>
                    <ListItemIcon className={classes.icon}><CloudQueueIcon /></ListItemIcon>
                    <ListItemText primary='Главная' className={classes.text_notActive}/>
                </ListItem>
                <ListItem button key='main'>
                    <ListItemIcon className={classes.icon}><CloudQueueIcon /></ListItemIcon>
                    <ListItemText primary='Главная' className={classes.text_notActive}/>
                </ListItem>
                <ListItem button key='main'>
                    <ListItemIcon className={classes.icon}><CloudQueueIcon /></ListItemIcon>
                    <ListItemText primary='Главная' className={classes.text_notActive}/>
                </ListItem>
                <ListItem button key='main'>
                    <ListItemIcon className={classes.icon}><CloudQueueIcon /></ListItemIcon>
                    <ListItemText primary='Главная' className={classes.text_notActive}/>
                </ListItem>
                <ListItem button key='main'>
                    <ListItemIcon className={classes.icon}><CloudQueueIcon /></ListItemIcon>
                    <ListItemText primary='Главная' className={classes.text_notActive} />
                </ListItem>
            </List>
        </div>
    );
}

export default LeftNavigationPanel_new