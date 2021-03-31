import {Grid, makeStyles, Typography} from "@material-ui/core";
import React from "react";
import ClearLogo from '../images/clearLogo.png'
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";


const useStyles = makeStyles((theme) => ({
    bg: {
        background: '#121432',
        height: "100vh",
    },
    logo: {
        height: 180
    },
    titleBold: {
        fontFamily: "'Mulish', sans-serif",
        textTransform: "uppercase",
        color: "white",
        display: "inline",
        fontWeight: "700"
    },
    title: {
        fontFamily: "'Mulish', sans-serif",
        textTransform: "uppercase",
        color: "white",
        display: "inline",
    },
    textField: {
        width: "20vw",
        backgroundColor: "#F1F6FF",
        color: "#7D86A9",
        borderRadius: 40
    },
    inputLabel: {
        borderRadius: 40
    },
    btn: {
        fontFamily: "'Roboto Medium', sans-serif",
        width: "20vw",
        backgroundColor: "#4949C9",
        borderRadius: 40
    }
}));


const LoginPage = () => {

    const classes = useStyles();
    const history = useHistory()

    const handleLogin = () => {
        history.push('/main')
    }

    return (
        <div className={classes.bg}>
            <Box pt={20}>
                <Grid container>
                    <Grid item md={4}/>
                    <Grid
                        container
                        item
                        md={4}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <img src={ClearLogo} alt="sd" className={classes.logo}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.titleBold}>
                                Ros
                            </Typography>
                            <Typography variant="h5" className={classes.title}>
                                atom
                            </Typography>
                        </Grid>
                        <Box mt={4}/>
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                id="input-email"
                                placeholder="Email"
                                className={classes.textField}
                                margin="dense"
                                variant="outlined"
                                InputProps={{
                                    classes: {
                                        root: classes.inputLabel,
                                        focused: classes.inputLabel,
                                    }
                                }}
                            />
                            <Box mt={1}/>
                            <TextField
                                id="input-password"
                                placeholder="Пароль"
                                className={classes.textField}
                                margin="dense"
                                variant="outlined"
                                InputProps={{
                                    classes: {
                                        root: classes.inputLabel,
                                        focused: classes.inputLabel,
                                    }
                                }}
                            />

                        </Grid>
                        <Box mt={4}/>
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={handleLogin} fullWidth color="primary" className={classes.btn}>
                                Войти
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item md={4}/>
                </Grid>
            </Box>
        </div>
    )

}

export default LoginPage