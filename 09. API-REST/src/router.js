import user from './routes/me';
import music from './routes/music';
import auth from './routes/auth';
import home from './routes/home';

export default app => {
    app.use('/', home);
    app.use('/auth', auth);
    app.use('/me', user);
    app.use('/music', music)
}