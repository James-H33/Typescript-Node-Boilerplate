import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});

module.exports = app;