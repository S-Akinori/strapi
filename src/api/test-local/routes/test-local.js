'use strict';

/**
 * test-local router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-local.test-local');
