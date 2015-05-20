/**
 * Created by mz on 15-05-19.
 */
"use strict";

/**
 * Main module.
 * @module main
 * @author Malaya Zemlya
 */

module.metadata = {
    "author": "Malaya Zemlya",
    "stability": "experimental",
    "engines": {
        "Firefox": "> 28"
    }
};

const StyleInjector = require("./style-injector");

/**
 * Entry point
 * @param options command line options
 * @param callbacks system callbacks
 */
exports.main = function main(options, callbacks) {
    console.log("Welcome to CopyPasta");
    StyleInjector.initModule();
};

/**
 * The add-on was unloaded.
 * @param {string} reason for unloading.
 */
exports.onUnload = function onUnload(reason) {
    console.log("Main.onUnload", reason);
};
