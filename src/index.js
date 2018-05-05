import dva from 'dva';
// import browserHistory from 'history/createBrowserHistory';
import './index.css';

// 1. Initialize
const app = dva({
    // history: browserHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/login').default);
app.model(require('./models/register').default);
app.model(require('./models/forgetPas').default);
app.model(require('./models/handlestyle').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
