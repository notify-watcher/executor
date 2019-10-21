const axios = require('axios');
const cheerio = require('cheerio');
const lodash = require('lodash');
const puppeteer = require('puppeteer');

const PRELOADED_LIBS = {
  axios,
  cheerio,
  lodash,
  puppeteer,
};

/**
 * Executes watchers
 */
class Executor {
  /**
   * Create a new watcher executor with provided libs
   * @param {Object} extraLibs Any extra libs to provide to watchers
   */
  constructor(extraLibs = {}) {
    this.libs = {
      ...PRELOADED_LIBS,
      ...extraLibs,
    };
  }

  /**
   * Runs a watcher with the notify-watcher/core libs
   * and the extra libs provided at the creation of
   * this `Executor`
   * @param {Object} watcher Watcher to be executed
   * @param {Object} options Options to pass to the watcher
   */
  run(watcher, options) {
    return watcher({
      ...options,
      libs: this.libs,
    });
  }

  hasLib(libName) {
    return !!this.libs[libName];
  }
}

module.exports = Executor;
