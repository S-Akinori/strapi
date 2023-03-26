'use strict';

/**
 * test-local service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-local.test-local');
