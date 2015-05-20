/**
 * Created by mz on 15-05-19.
 */
"use strict";

/**
 * Style injection module. Adds a custom stylesheet to each browser window.
 * @module style-injector
 * @author MalayaZemlya
 */

module.metadata = {
    "author": "Malaya Zemlya",
    "stability": "experimental",
    "engines": {
        "Firefox": "> 34"
    }
};

const isBrowser  = require("sdk/window/utils").isBrowser;
const WindowTracker = require("sdk/deprecated/window-utils").WindowTracker;

/**
 * Location of the stylesheet to inject
 * @cosntant {string}
 */
const STYLESHEET_URL = "chrome://copypasta/content/copypasta.css";

const STYLESHEET_INSTRUCTION = "type=\"text/css\" href=\"" + STYLESHEET_URL + "\"";

/**
 * The set of all windows that we have modified.
 */
var globalWindows = new WeakSet();

/**
 * Invoked when a new window is opened.
 * Adds the stylesheet instruction to the top of the browser document.
 * @param {ChromeWindow} window new window
 */
function onTrack(window) {
    console.log(Object.prototype.toString.call(window));
    if (!isBrowser(window)) return;
    if (globalWindows.has(window)) return;
    let document = window.document;
    document.insertBefore(
        document.createProcessingInstruction("xml-stylesheet", STYLESHEET_INSTRUCTION),
        document.firstChild);
    globalWindows.add(window);
}

/**
 * Invoked when a window is about to be discarded.
 * @param {ChromeWindow} window window to be discarded
 */
function onUntrack(window) {
    console.log(Object.prototype.toString.call(window));
    if (!isBrowser(window)) return;
    if (!globalWindows.has(window)) return;
    globalWindows.delete(window);
}

/**
 * Sets up automatic window tracking.
 */
exports.initModule = function initModule() {
    WindowTracker({
        onTrack: onTrack,
        onUntrack: onUntrack
    });
};


