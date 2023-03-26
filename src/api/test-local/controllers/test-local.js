'use strict';

/**
 * test-local controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-local.test-local');
