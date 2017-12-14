// DO NOT EDIT THIS FILE, EDIT THE WEBPACK COMMON CONFIG INSTEAD, WHICH WILL MODIFY THIS FILE
/* tslint:disable */
let _VERSION = '0.0.1-SNAPSHOT'; // This value will be overwritten by Webpack
let _DEBUG_INFO_ENABLED = true; // This value will be overwritten by Webpack
let _SERVER_API_URL = 'api/'; // This value will be overwritten by Webpack
/* @toreplace VERSION */
/* @toreplace DEBUG_INFO_ENABLED */
/* @toreplace SERVER_API_URL */
/* tslint:enable */
export const VERSION = _VERSION;
export const DEBUG_INFO_ENABLED = _DEBUG_INFO_ENABLED;
export const SERVER_API_URL = _SERVER_API_URL;



/*** 返回消息类型 info */
export const MSG_TYPE_INFO = 0;
/*** 返回消息类型 success */
export const MSG_TYPE_SUCCESS = 1;
/*** 返回消息类型 warning */
export const MSG_TYPE_WARNING = 2;
/*** 返回消息类型 error */
export const MSG_TYPE_ERROR = -1;