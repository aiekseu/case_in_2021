import {Switch, Route} from 'react-router-dom';
import {ThemeProvider , createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import 'fontsource-roboto';

import MainUserPage from "./panels/MainUserPage";
import SchedulePage from "./panels/SchedulePage";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1676FF'
        },
        background: {
            default: '#F6F9FD',
            paper: '#fff'
        }
    }
});

function App() {
    return (
        <ThemeProvider  theme={theme}>
            <CssBaseline />
            <Switch>
                <Route exact path="/" render={() => <MainUserPage/>}/>
                <Route exact path="/schedule" render={() => <SchedulePage />}/>
            </Switch>
        </ThemeProvider >
    );
}

export default App;
