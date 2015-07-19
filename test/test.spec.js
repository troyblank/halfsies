process.env.NODE_ENV = 'production';

require('./app/self.spec');
require('./app/server.spec');
require('./app/controllers/index.controller.spec');
require('./app/controllers/log.controller.spec');
require('./app/controllers/user.controller.spec');
require('./app/models/balance.spec');
require('./app/models/log.spec');
require('./app/models/user.spec');
require('./app/utils/mongooseError.spec');