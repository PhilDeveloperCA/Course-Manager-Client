import ReactDOM from 'react-dom';
import {ThemeProvider, Button, CssBaseline} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import {darkTheme, lightTheme} from './material-theme';
import {useSelector} from 'react-redux';
import LayoutComponent from './template/index';

//Pages 
import Home from './views/home/index';
import CoursePage from './views/course/index';
import QuizPage from './views/quiz/index';
import LinkPage from './views/topic/index';

const ThemedApp = () => {
    const lightState = useSelector((state:any) => state.theme);
    return(
        <ThemeProvider theme={lightState.colorMode ===false?darkTheme:lightTheme}>
            <CssBaseline />
            <Router>
            <LayoutComponent> 
                    <Switch>
                        <Route exact path = '/' component={Home}/>
                    </Switch>
                    <Switch>
                        <Route exact path = '/course/:courseid/:coursename?' component={CoursePage} />
                    </Switch>
                    <Switch>
                        <Route path ='/quiz/:quizid/:quizname?' component={QuizPage} />
                    </Switch>
                    <Switch>
                        <Route path='/course/:courseid/:coursename?/topic/:topicid' component={LinkPage} />
                    </Switch>
            </LayoutComponent>
            </Router>
        </ThemeProvider>
    );
}

const App = () => {
    return(
        <Provider store={store}>
            <ThemedApp />
        </Provider>
    );
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

export {}