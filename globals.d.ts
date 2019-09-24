/**
 * js
 */
declare module '*.js'


/**
 * style
 */
declare module '*.css'
declare module '*.less'
declare module '*.scss'


/**
 * 图片
 */
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'


/**
 * json
 */
// This will allow you to load `.json` files from disk
declare module "*.json"
{ const value: any;
    export default value;
}
// This will allow you to load JSON from remote URL responses
declare module "json!*"
{ const value: any;
    export default value;
}
