'use strict';

/**
 * happy-marriage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::happy-marriage.happy-marriage');
