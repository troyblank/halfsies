process.env.NODE_ENV = 'production';

require('./app/self.spec');
require('./app/server.spec');
require('./app/controllers/balance.spec');
require('./app/controllers/index.spec');
require('./app/controllers/log.spec');
require('./app/controllers/user.spec');
require('./app/models/balance.spec');
require('./app/models/log.spec');
require('./app/models/user.spec');
require('./app/utils/mongooseError.spec');