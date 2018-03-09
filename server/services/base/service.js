const { Service } = require('happy-node');
const ServiceError = require('./service_error');

class BaseService extends Service {

  constructor(ctx) {
    super(ctx);
    this.ServiceError = ServiceError;
  }

}

module.exports = BaseService;