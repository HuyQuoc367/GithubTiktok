// Modules: Import / Export

import logger, {TYPE_LOG, TYPE_WARN, TYPE_ERROR} from './logger.js';

//console.log(logger);
// logger('Hello', 'error');
logger('Hello', TYPE_ERROR);
logger('Hello', 'warn');