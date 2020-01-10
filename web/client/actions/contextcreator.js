/*
 * Copyright 2019, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const SET_CREATION_STEP = 'CONTEXTCREATOR:SET_CREATION_STEP';
export const MAP_VIEWER_LOAD = 'CONTEXTCREATOR:MAP_VIEWER_LOAD';
export const MAP_VIEWER_LOADED = 'CONTEXTCREATOR:MAP_VIEWER_LOADED';
export const MAP_VIEWER_RELOAD = 'CONTEXTCREATOR:MAP_VIEWER_RELOAD';
export const SHOW_MAP_VIEWER_RELOAD_CONFIRM = 'CONTEXTCREATOR:SHOW_MAP_VIEWER_RELOAD_CONFIRM';
export const CLEAR_CONTEXT_CREATOR = 'CONTEXTCREATOR:CLEAR_CONTEXT_CREATOR';
export const CHANGE_ATTRIBUTE = 'CONTEXTCREATOR:CHANGE_ATTRIBUTE';
export const SET_FILTER_TEXT = 'CONTEXTCREATOR:SET_FILTER_TEXT';
export const SET_SELECTED_PLUGINS = 'CONTEXTCREATOR:SET_SELECTED_PLUGINS';
export const SAVE_PLUGIN_CFG = 'CONTEXTCREATOR:SAVE_PLUGIN_CFG';
export const EDIT_PLUGIN = 'CONTEXTCREATOR:EDIT_PLUGIN';
export const SET_EDITED_PLUGIN = 'CONTEXTCREATOR:SET_EDITED_PLUGIN';
export const SET_EDITED_CFG = 'CONTEXTCREATOR:SET_EDITED_CFG';
export const UPDATE_EDITED_CFG = 'CONTEXTCREATOR:UPDATE_EDITED_CFG';
export const SET_PARSED_CFG = 'CONTEXTCREATOR:SET_PARSED_CFG';
export const VALIDATE_EDITED_CFG = 'CONTEXTCREATOR:VALIDATE_EDITED_CFG';
export const SET_VALIDATION_STATUS = 'CONTEXTCREATOR:SET_VALIDATION_STATUS';
export const SET_CFG_ERROR = 'CONTEXTCREATOR:SET_CFG_ERROR';
export const CHANGE_PLUGINS_KEY = 'CONTEXTCREATOR:CHANGE_PLUGINS_KEY';
export const ENABLE_MANDATORY_PLUGINS = 'CONTEXTCREATOR:ENABLE_MANDATORY_PLUGINS';
export const ENABLE_PLUGINS = 'CONTEXTCREATOR:ENABLE_PLUGINS';
export const DISABLE_PLUGINS = 'CONTEXTCREATOR:DISABLE_PLUGINS';
export const SET_RESOURCE = 'CONTEXTCREATOR:SET_RESOURCE';
export const LOAD_CONTEXT = 'CONTEXTCREATOR:LOAD_CONTEXT';
export const START_RESOURCE_LOAD = 'CONTEXTCREATOR:START_RESOURCE_LOAD';
export const LOAD_FINISHED = 'CONTEXTCREATOR:LOAD_FINISHED';
export const CONTEXT_LOAD_ERROR = 'CONTEXTCREATOR:CONTEXT_LOAD_ERROR';
export const LOADING = 'CONTEXTCREATOR:LOADING';
export const CONTEXT_SAVED = 'CONTEXTCREATOR:CONTEXT_SAVED';
export const SAVE_CONTEXT = 'CONTEXTCREATOR:SAVE_CONTEXT';

export const setCreationStep = (stepId) => ({
    type: SET_CREATION_STEP,
    stepId
});

export const mapViewerLoad = () => ({
    type: MAP_VIEWER_LOAD
});

export const mapViewerLoaded = (status) => ({
    type: MAP_VIEWER_LOADED,
    status
});

export const mapViewerReload = () => ({
    type: MAP_VIEWER_RELOAD
});

export const showMapViewerReloadConfirm = (show) => ({
    type: SHOW_MAP_VIEWER_RELOAD_CONFIRM,
    show
});

export const changeAttribute = (key, value) => ({
    type: CHANGE_ATTRIBUTE,
    key,
    value
});

/**
 * Sets current filter field text
 * @param {string} propName one of filter field names: `availablePlugins`, `enabledPlugins`
 * @param {string} text text to set
 */
export const setFilterText = (propName, text) => ({
    type: SET_FILTER_TEXT,
    propName,
    text
});

/**
 * Sets currently selected plugins
 * @param {string[]} ids names of plugins that are selected
 */
export const setSelectedPlugins = (ids) => ({
    type: SET_SELECTED_PLUGINS,
    ids
});

/**
 * Trigger plugin configuration editor
 * @param {string} pluginName the name of the plugin to edit
 */
export const editPlugin = (pluginName) => ({
    type: EDIT_PLUGIN,
    pluginName
});

/**
 * Save currently edited plugin's cfg
 */
export const savePluginCfg = () => ({
    type: SAVE_PLUGIN_CFG
});

/**
 * Set the name of currently edited plugin
 * @param {string} pluginName the name of the plugin
 */
export const setEditedPlugin = (pluginName) => ({
    type: SET_EDITED_PLUGIN,
    pluginName
});

/**
 * Parse the configuration of a plugin and set it for editing
 * @param {string} pluginName
 */
export const setEditedCfg = (pluginName) => ({
    type: SET_EDITED_CFG,
    pluginName
});

/**
 * Update text context of currently edited configuration
 * @param {string} cfg configuration text context
 */
export const updateEditedCfg = (cfg) => ({
    type: UPDATE_EDITED_CFG,
    cfg
});

/**
 * Set parsed cfg json
 * @param {object} parsedCfg parsed cfg object
 */
export const setParsedCfg = (parsedCfg) => ({
    type: SET_PARSED_CFG,
    parsedCfg
});

/**
 * Performs cfg validation
 */
export const validateEditedCfg = () => ({
    type: VALIDATE_EDITED_CFG
});

/**
 * Set current validation status
 * @param {boolean} status status
 */
export const setValidationStatus = (status) => ({
    type: SET_VALIDATION_STATUS,
    status
});

/**
 * Set cfg parsing error
 * @param {object} error object that describes the error
 */
export const setCfgError = (error) => ({
    type: SET_CFG_ERROR,
    error
});

/**
 * Set a property of specified plugins to a specified value
 * @param {string[]} ids names of plugins to modify
 * @param {string} key name of the property
 * @param {any} value new value
 */
export const changePluginsKey = (ids, key, value) => ({
    type: CHANGE_PLUGINS_KEY,
    ids,
    key,
    value
});

/**
 * Enables all mandatory plugins
 */
export const enableMandatoryPlugins = () => ({
    type: ENABLE_MANDATORY_PLUGINS
});

/**
 * Enable specified plugins
 * @param {string[]} plugins plugins to enable
 * @param {boolean} isInitial true if action is triggered on load of context
 * (when an already exisiting context is edited this action is used to enable plugins, in `enableInitialPlugins` epic)
 */
export const enablePlugins = (plugins, isInitial) => ({
    type: ENABLE_PLUGINS,
    plugins,
    isInitial
});

/**
 * Disable specified plugins
 * @param {string[]} plugins plugins to disable
 */
export const disablePlugins = (plugins) => ({
    type: DISABLE_PLUGINS,
    plugins
});

export const setResource = (resource, pluginsConfig) => ({
    type: SET_RESOURCE,
    resource,
    pluginsConfig
});

export const loadContext = (id) => ({
    type: LOAD_CONTEXT,
    id
});

// when this action is emitted, feedback mask is shown
export const startResourceLoad = () => ({
    type: START_RESOURCE_LOAD
});

export const loadFinished = () => ({
    type: LOAD_FINISHED
});

export const contextLoadError = ({ error }) => ({
    type: CONTEXT_LOAD_ERROR,
    error
});

export const loading = (value, name = "loading") => ({
    type: LOADING,
    name,
    value
});

export const clearContextCreator = () => ({
    type: CLEAR_CONTEXT_CREATOR
});

export const contextSaved = (id) => ({
    type: CONTEXT_SAVED,
    id
});

export const saveNewContext = (destLocation) => ({
    type: SAVE_CONTEXT,
    destLocation
});