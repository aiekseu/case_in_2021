import {Box, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    button_checked: {
        background: '#EFF3FB',
        borderColor: '#7A40F2',
        color: '#979797',
        padding: 8,
    },
    button: {
        background: '#EFF3FB',
        borderColor: 'transparent',
        color: '#979797',
        padding: 8
    }
}));


const ActivitiesFilters = () => {

    const classes = useStyles();

    const [allCheck, setAllCheck] = useState(true)
    const [importantCheck, setImportantCheck] = useState(false)
    const [additionalCheck, setAdditionalCheck] = useState(false)
    const [individualCheck, setIndividualCheck] = useState(false)


    const handleAllClick = () => {
        if (allCheck) {
            setAllCheck(false)
            setImportantCheck(false)
            setAdditionalCheck(false)
            setIndividualCheck(false)
        } else {
            setAllCheck(true)
            setImportantCheck(false)
            setAdditionalCheck(false)
            setIndividualCheck(false)
        }
    }

    const handleImportantClick = () => {
        if (importantCheck) {
            setAllCheck(true)
            setImportantCheck(false)
            setAdditionalCheck(false)
            setIndividualCheck(false)
        } else {
            setAllCheck(false)
            setImportantCheck(true)
            setAdditionalCheck(false)
            setIndividualCheck(false)
        }
    }

    const handleAdditionalClick = () => {
        if (additionalCheck) {
            setAllCheck(true)
            setImportantCheck(false)
            setAdditionalCheck(false)
            setIndividualCheck(false)
        } else {
            setAllCheck(false)
            setImportantCheck(false)
            setAdditionalCheck(true)
            setIndividualCheck(false)
        }
    }

    const handleIndividualClick = () => {
        if (individualCheck) {
            setAllCheck(true)
            setImportantCheck(false)
            setAdditionalCheck(false)
            setIndividualCheck(false)
        } else {
            setAllCheck(false)
            setImportantCheck(false)
            setAdditionalCheck(false)
            setIndividualCheck(true)
        }
    }


    return (
        <div>
            <Grid container direction='row' spacing={2}>
                <Grid item>
                    <Box borderRadius={9} onClick={handleAllClick} border={2} borderColor='#7A40F2' className={(allCheck) ? classes.button_checked : classes.button}>
                        <Grid item container direction='row' justify='space-between' xs={12}>
                            <Grid item>
                                <Typography>
                                    Все
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{color: '#FFB200', paddingLeft: 12}}>
                                    36
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item>
                    <Box borderRadius={9} onClick={handleImportantClick} border={2} className={(importantCheck) ? classes.button_checked : classes.button}>
                        <Grid item container direction='row' justify='space-between' xs={12}>
                            <Grid item>
                                <Typography>
                                    Обязательные
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{color: '#007B42', paddingLeft: 12}}>
                                    10
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item>
                    <Box borderRadius={9} onClick={handleAdditionalClick} border={2} className={(additionalCheck) ? classes.button_checked : classes.button}>
                        <Grid item container direction='row' justify='space-between' xs={12}>
                            <Grid item>
                                <Typography>
                                    Дополнительные
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{color: '#4339F2', paddingLeft: 12}}>
                                    14
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item>
                    <Box borderRadius={9} onClick={handleIndividualClick} border={2} className={(individualCheck) ? classes.button_checked : classes.button}>
                        <Grid item container direction='row' justify='space-between' xs={12}>
                            <Grid item>
                                <Typography>
                                    Индивидуальные
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{color: '#FF3A29', paddingLeft: 12}}>
                                    12
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

        </div>
    )

}


export default ActivitiesFilters