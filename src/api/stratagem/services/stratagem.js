'use strict';

/**
 * stratagem service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stratagem.stratagem');
