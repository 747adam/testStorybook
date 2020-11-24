(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1278:function(module,exports,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(50),__webpack_require__(45),__webpack_require__(525),__webpack_require__(526),__webpack_require__(6),__webpack_require__(46),__webpack_require__(3),__webpack_require__(50),__webpack_require__(45),__webpack_require__(525),__webpack_require__(526),__webpack_require__(6),__webpack_require__(46);var _clientApi=__webpack_require__(59),_clientLogger=__webpack_require__(39),_configFilename=__webpack_require__(1279);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1279:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1280)},1280:function(module,exports,__webpack_require__){var api=__webpack_require__(1281),content=__webpack_require__(1282);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1282:function(module,exports,__webpack_require__){(exports=__webpack_require__(1283)(!1)).push([module.i,"@import url(https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,800);"]),exports.push([module.i,'/* Reset.less\n * Props to Eric Meyer (meyerweb.com) for his CSS reset file. We\'re using an adapted version here\tthat cuts out some of the reset HTML elements we will never need here (i.e., dfn, samp, etc).\n * ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */\n html,\n body {\n   margin: 0;\n   padding: 0;\n }\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n p,\n blockquote,\n pre,\n a,\n abbr,\n acronym,\n address,\n cite,\n code,\n del,\n dfn,\n em,\n img,\n q,\n s,\n samp,\n small,\n strike,\n strong,\n sub,\n sup,\n tt,\n var,\n dd,\n dl,\n dt,\n li,\n ol,\n ul,\n fieldset,\n form,\n label,\n legend,\n button,\n table,\n caption,\n tbody,\n tfoot,\n thead,\n tr,\n th,\n td {\n   margin: 0;\n   padding: 0;\n   border: 0;\n   font-weight: normal;\n   font-style: normal;\n   font-size: 100%;\n   line-height: 1;\n   font-family: inherit;\n }\n table {\n   border-collapse: collapse;\n   border-spacing: 0;\n }\n ol,\n ul {\n   list-style: none;\n }\n q:before,\n q:after,\n blockquote:before,\n blockquote:after {\n   content: "";\n }\n html {\n   font-size: 100%;\n   -webkit-text-size-adjust: 100%;\n   -ms-text-size-adjust: 100%;\n }\n a:focus {\n   outline: thin dotted;\n }\n a:hover,\n a:active {\n   outline: 0;\n }\n article,\n aside,\n details,\n figcaption,\n figure,\n footer,\n header,\n hgroup,\n nav,\n section {\n   display: block;\n }\n audio,\n canvas,\n video {\n   display: inline-block;\n   *display: inline;\n   *zoom: 1;\n }\n audio:not([controls]) {\n   display: none;\n }\n sub,\n sup {\n   font-size: 75%;\n   line-height: 0;\n   position: relative;\n   vertical-align: baseline;\n }\n sup {\n   top: -0.5em;\n }\n sub {\n   bottom: -0.25em;\n }\n img {\n   border: 0;\n   -ms-interpolation-mode: bicubic;\n }\n button,\n input,\n select,\n textarea {\n   font-size: 100%;\n   margin: 0;\n   vertical-align: baseline;\n   *vertical-align: middle;\n }\n button,\n input {\n   line-height: normal;\n   *overflow: visible;\n }\n button::-moz-focus-inner,\n input::-moz-focus-inner {\n   border: 0;\n   padding: 0;\n }\n button,\n input[type="button"],\n input[type="reset"],\n input[type="submit"] {\n   cursor: pointer;\n   -webkit-appearance: button;\n }\n input[type="search"] {\n   -webkit-appearance: textfield;\n   box-sizing: content-box;\n }\n input[type="search"]::-webkit-search-decoration {\n   -webkit-appearance: none;\n }\n textarea {\n   overflow: auto;\n   vertical-align: top;\n }\n @-webkit-keyframes spin {\n   0% {\n     transform: rotate(0deg);\n   }\n   100% {\n     transform: rotate(359deg);\n   }\n }\n @keyframes spin {\n   0% {\n     transform: rotate(0deg);\n   }\n   100% {\n     transform: rotate(359deg);\n   }\n }\n @-webkit-keyframes glow {\n   0%,\n   100% {\n     opacity: 1;\n   }\n   50% {\n     opacity: 0.5;\n   }\n }\n @keyframes glow {\n   0%,\n   100% {\n     opacity: 1;\n   }\n   50% {\n     opacity: 0.5;\n   }\n }\n .force-wrap {\n   word-wrap: break-word;\n   word-break: break-all;\n   -ms-word-break: break-all;\n   word-break: break-word;\n   -webkit-hyphens: auto;\n       -ms-hyphens: auto;\n           hyphens: auto;\n }\n .type-light {\n   font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n   font-weight: 300;\n }\n .type-bold {\n   font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n   font-weight: 800;\n }\n .type-italic {\n   font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n   font-weight: 400;\n   font-style: italic;\n }\n * {\n   box-sizing: border-box;\n   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n   -webkit-tap-highlight-color: transparent;\n }\n html,\n button,\n input,\n textarea,\n select {\n   outline: none;\n   -webkit-font-smoothing: antialiased;\n   -moz-osx-font-smoothing: grayscale;\n }\n body {\n   font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n   font-style: 400;\n   color: #333;\n   font-size: 16px;\n   background-color: #26c6da;\n }\n h1,\n h2,\n h3,\n h4,\n h5,\n h6 {\n   font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n   font-style: 400;\n   margin: 0;\n   padding: 0;\n }\n h1 {\n   font-size: 40px;\n   line-height: 48px;\n }\n h2 {\n   font-size: 28px;\n   line-height: 32px;\n }\n h3 {\n   font-size: 24px;\n   line-height: 28px;\n }\n h4 {\n   font-size: 20px;\n   line-height: 24px;\n }\n h5 {\n   font-size: 14px;\n   line-height: 20px;\n   color: #ccc;\n   text-transform: uppercase;\n }\n h6 {\n   color: #aaa;\n }\n p {\n   font-size: 16px;\n   line-height: 24px;\n }\n sub,\n sup {\n   font-size: 0.8em;\n }\n sub {\n   bottom: -0.2em;\n }\n sup {\n   top: -0.2em;\n }\n b {\n   font-weight: bold;\n }\n em {\n   font-style: italic;\n }\n input[type="text"],\n input[type="email"],\n input[type="password"],\n textarea {\n   font-size: 14px;\n   line-height: 20px;\n   font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n   font-style: 400;\n   padding: .75rem 0;\n   line-height: 1.5rem !important;\n   border: none;\n   border-radius: 0;\n   box-sizing: border-box;\n   color: #333;\n   outline: none;\n }\n input[type="text"] ::-moz-placeholder, input[type="email"] ::-moz-placeholder, input[type="password"] ::-moz-placeholder, textarea ::-moz-placeholder {\n   color: #778b91;\n }\n input[type="text"] :-ms-input-placeholder, input[type="email"] :-ms-input-placeholder, input[type="password"] :-ms-input-placeholder, textarea :-ms-input-placeholder {\n   color: #778b91;\n }\n input[type="text"] ::placeholder,\n input[type="email"] ::placeholder,\n input[type="password"] ::placeholder,\n textarea ::placeholder {\n   color: #778b91;\n }\n input[type="text"][disabled],\n input[type="email"][disabled],\n input[type="password"][disabled],\n textarea[disabled] {\n   opacity: .5;\n }\n input:-webkit-autofill {\n   -webkit-box-shadow: 0 0 0 1000px white inset;\n }\n .checkbox {\n   display: inline-block;\n   height: 3rem;\n   position: relative;\n   vertical-align: middle;\n   width: 44px;\n }\n .checkbox input[type="checkbox"] {\n   font-size: 1em;\n   visibility: hidden;\n }\n .checkbox input[type="checkbox"] + span:before {\n   position: absolute;\n   top: 50%;\n   right: auto;\n   bottom: auto;\n   left: 50%;\n   width: 0.85em;\n   height: 0.85em;\n   transform: translate3d(-50%, -50%, 0);\n   background: transparent;\n   box-shadow: #2cc5d2 0 0 0 1px inset;\n   content: \'\';\n   display: block;\n }\n .checkbox input[type="checkbox"]:checked + span:before {\n   font-size: 16px;\n   line-height: 24px;\n   box-shadow: none;\n   color: #2cc5d2;\n   margin-top: -1px;\n   font-family: \'percolate\';\n   speak: none;\n   font-style: normal;\n   font-weight: normal;\n   font-variant: normal;\n   text-transform: none;\n   line-height: 1;\n   -webkit-font-smoothing: antialiased;\n   -moz-osx-font-smoothing: grayscale;\n   content: "\\e65e";\n }\n .input-symbol {\n   display: inline-block;\n   position: relative;\n }\n .input-symbol.error [class^="icon-"],\n .input-symbol.error [class*=" icon-"] {\n   color: #ff4400;\n }\n .input-symbol [class^="icon-"],\n .input-symbol [class*=" icon-"] {\n   left: 1em;\n }\n .input-symbol input {\n   padding-left: 3em;\n }\n .input-symbol input {\n   width: 100%;\n }\n .input-symbol input:focus + [class^="icon-"],\n .input-symbol input:focus + [class*=" icon-"] {\n   color: #2cc5d2;\n }\n .input-symbol [class^="icon-"],\n .input-symbol [class*=" icon-"] {\n   transition: all 300ms ease-in;\n   transform: translate3d(0, -50%, 0);\n   background: transparent;\n   color: #aaa;\n   font-size: 1em;\n   height: 1em;\n   position: absolute;\n   top: 50%;\n   width: 1em;\n }\n @font-face {\n   font-family: "percolate";\n   src: url("/icon/percolate.eot?-5w3um4");\n   src: url("/icon/percolate.eot?#iefix5w3um4") format("embedded-opentype"), url("/icon/percolate.woff?5w3um4") format("woff"), url("/icon/percolate.ttf?5w3um4") format("truetype"), url("/icon/percolate.svg?5w3um4") format("svg");\n   font-weight: normal;\n   font-style: normal;\n }\n [class^="icon-"],\n [class*=" icon-"] {\n   font-family: "percolate";\n   speak: none;\n   font-style: normal;\n   font-weight: normal;\n   font-variant: normal;\n   text-transform: none;\n   line-height: 1;\n   /* Better Font Rendering =========== */\n   -webkit-font-smoothing: antialiased;\n   -moz-osx-font-smoothing: grayscale;\n }\n .icon-graphql:before {\n   content: "\\e90a";\n }\n .icon-redux:before {\n   content: "\\e908";\n }\n .icon-grid:before {\n   content: "\\e909";\n }\n .icon-redirect:before {\n   content: "\\e907";\n }\n .icon-grow:before {\n   content: "\\e903";\n }\n .icon-lightning:before {\n   content: "\\e904";\n }\n .icon-request-change:before {\n   content: "\\e905";\n }\n .icon-transfer:before {\n   content: "\\e906";\n }\n .icon-calendar:before {\n   content: "\\e902";\n }\n .icon-sidebar:before {\n   content: "\\e900";\n }\n .icon-tablet:before {\n   content: "\\e901";\n }\n .icon-atmosphere:before {\n   content: "\\e671";\n }\n .icon-browser:before {\n   content: "\\e672";\n }\n .icon-database:before {\n   content: "\\e673";\n }\n .icon-expand-alt:before {\n   content: "\\e674";\n }\n .icon-mobile:before {\n   content: "\\e675";\n }\n .icon-watch:before {\n   content: "\\e676";\n }\n .icon-home:before {\n   content: "\\e600";\n }\n .icon-user-alt:before {\n   content: "\\e601";\n }\n .icon-user:before {\n   content: "\\e602";\n }\n .icon-user-add:before {\n   content: "\\e603";\n }\n .icon-users:before {\n   content: "\\e604";\n }\n .icon-profile:before {\n   content: "\\e605";\n }\n .icon-bookmark:before {\n   content: "\\e606";\n }\n .icon-bookmark-hollow:before {\n   content: "\\e607";\n }\n .icon-star:before {\n   content: "\\e608";\n }\n .icon-star-hollow:before {\n   content: "\\e609";\n }\n .icon-circle:before {\n   content: "\\e60a";\n }\n .icon-circle-hollow:before {\n   content: "\\e60b";\n }\n .icon-heart:before {\n   content: "\\e60c";\n }\n .icon-heart-hollow:before {\n   content: "\\e60d";\n }\n .icon-face-happy:before {\n   content: "\\e60e";\n }\n .icon-face-sad:before {\n   content: "\\e60f";\n }\n .icon-face-neutral:before {\n   content: "\\e610";\n }\n .icon-lock:before {\n   content: "\\e611";\n }\n .icon-unlock:before {\n   content: "\\e612";\n }\n .icon-key:before {\n   content: "\\e613";\n }\n .icon-arrow-left-alt:before {\n   content: "\\e614";\n }\n .icon-arrow-right-alt:before {\n   content: "\\e615";\n }\n .icon-sync:before {\n   content: "\\e616";\n }\n .icon-reply:before {\n   content: "\\e617";\n }\n .icon-expand:before {\n   content: "\\e618";\n }\n .icon-arrow-left:before {\n   content: "\\e619";\n }\n .icon-arrow-up:before {\n   content: "\\e61a";\n }\n .icon-arrow-down:before {\n   content: "\\e61b";\n }\n .icon-arrow-right:before {\n   content: "\\e61c";\n }\n .icon-chevron-down:before {\n   content: "\\e61d";\n }\n .icon-back:before {\n   content: "\\e61e";\n }\n .icon-download:before {\n   content: "\\e61f";\n }\n .icon-upload:before {\n   content: "\\e620";\n }\n .icon-proceed:before {\n   content: "\\e621";\n }\n .icon-info:before {\n   content: "\\e622";\n }\n .icon-question:before {\n   content: "\\e623";\n }\n .icon-alert:before {\n   content: "\\e624";\n }\n .icon-edit:before {\n   content: "\\e625";\n }\n .icon-paintbrush:before {\n   content: "\\e626";\n }\n .icon-close:before {\n   content: "\\e627";\n }\n .icon-trash:before {\n   content: "\\e628";\n }\n .icon-cross:before {\n   content: "\\e629";\n }\n .icon-delete:before {\n   content: "\\e62a";\n }\n .icon-power:before {\n   content: "\\e62b";\n }\n .icon-add:before {\n   content: "\\e62c";\n }\n .icon-plus:before {\n   content: "\\e62d";\n }\n .icon-document:before {\n   content: "\\e62e";\n }\n .icon-graph-line:before {\n   content: "\\e62f";\n }\n .icon-doc-chart:before {\n   content: "\\e630";\n }\n .icon-doc-list:before {\n   content: "\\e631";\n }\n .icon-category:before {\n   content: "\\e632";\n }\n .icon-copy:before {\n   content: "\\e633";\n }\n .icon-book:before {\n   content: "\\e634";\n }\n .icon-certificate:before {\n   content: "\\e636";\n }\n .icon-print:before {\n   content: "\\e637";\n }\n .icon-list-unordered:before {\n   content: "\\e638";\n }\n .icon-graph-bar:before {\n   content: "\\e639";\n }\n .icon-menu:before {\n   content: "\\e63a";\n }\n .icon-filter:before {\n   content: "\\e63b";\n }\n .icon-ellipsis:before {\n   content: "\\e63c";\n }\n .icon-cog:before {\n   content: "\\e63d";\n }\n .icon-wrench:before {\n   content: "\\e63e";\n }\n .icon-nut:before {\n   content: "\\e63f";\n }\n .icon-camera:before {\n   content: "\\e640";\n }\n .icon-eye:before {\n   content: "\\e641";\n }\n .icon-photo:before {\n   content: "\\e642";\n }\n .icon-video:before {\n   content: "\\e643";\n }\n .icon-speaker:before {\n   content: "\\e644";\n }\n .icon-phone:before {\n   content: "\\e645";\n }\n .icon-flag:before {\n   content: "\\e646";\n }\n .icon-pin:before {\n   content: "\\e647";\n }\n .icon-compass:before {\n   content: "\\e648";\n }\n .icon-globe:before {\n   content: "\\e649";\n }\n .icon-location:before {\n   content: "\\e64a";\n }\n .icon-search:before {\n   content: "\\e64b";\n }\n .icon-timer:before {\n   content: "\\e64c";\n }\n .icon-time:before {\n   content: "\\e64d";\n }\n .icon-dashboard:before {\n   content: "\\e64e";\n }\n .icon-hourglass:before {\n   content: "\\e64f";\n }\n .icon-play:before {\n   content: "\\e650";\n }\n .icon-stop:before {\n   content: "\\e651";\n }\n .icon-email:before {\n   content: "\\e652";\n }\n .icon-comment:before {\n   content: "\\e653";\n }\n .icon-link:before {\n   content: "\\e654";\n }\n .icon-paperclip:before {\n   content: "\\e655";\n }\n .icon-box:before {\n   content: "\\e656";\n }\n .icon-structure:before {\n   content: "\\e657";\n }\n .icon-commit:before {\n   content: "\\e658";\n }\n .icon-cpu:before {\n   content: "\\e659";\n }\n .icon-memory:before {\n   content: "\\e65a";\n }\n .icon-outbox:before {\n   content: "\\e65b";\n }\n .icon-share:before {\n   content: "\\e65c";\n }\n .icon-button:before {\n   content: "\\e65d";\n }\n .icon-check:before {\n   content: "\\e65e";\n }\n .icon-form:before {\n   content: "\\e65f";\n }\n .icon-admin:before {\n   content: "\\e660";\n }\n .icon-paragraph:before {\n   content: "\\e661";\n }\n .icon-bell:before {\n   content: "\\e662";\n }\n .icon-rss:before {\n   content: "\\e663";\n }\n .icon-basket:before {\n   content: "\\e664";\n }\n .icon-credit:before {\n   content: "\\e665";\n }\n .icon-support:before {\n   content: "\\e666";\n }\n .icon-shield:before {\n   content: "\\e667";\n }\n .icon-beaker:before {\n   content: "\\e668";\n }\n .icon-google:before {\n   content: "\\e669";\n }\n .icon-gdrive:before {\n   content: "\\e66a";\n }\n .icon-youtube:before {\n   content: "\\e66b";\n }\n .icon-facebook:before {\n   content: "\\e66c";\n }\n .icon-thumbs-up:before {\n   content: "\\e66d";\n }\n .icon-twitter:before {\n   content: "\\e66e";\n }\n .icon-github:before {\n   content: "\\e66f";\n }\n .icon-meteor:before {\n   content: "\\e670";\n }\n a {\n   transition: all 200ms ease-in;\n   color: #5db9ff;\n   cursor: pointer;\n   text-decoration: none;\n }\n a:hover {\n   color: #239da8;\n }\n a:active {\n   color: #555;\n }\n a:focus {\n   outline: none;\n }\n .list-heading {\n   letter-spacing: .3em;\n   text-indent: .3em;\n   text-transform: uppercase;\n   font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n   font-weight: 800;\n   font-size: 11px;\n   padding-left: 15px;\n   line-height: 40px;\n   background: #f8f8f8;\n   color: #aaa;\n }\n .list-heading .icon-sync {\n   opacity: 1;\n   -webkit-animation: spin 2s infinite linear;\n           animation: spin 2s infinite linear;\n   display: inline-block;\n   margin-right: 4px;\n }\n .list-item {\n   font-size: 14px;\n   line-height: 20px;\n   display: flex;\n   flex-wrap: wrap;\n   height: 3rem;\n   width: 100%;\n   background: white;\n   transition: all ease-out 150ms;\n }\n .list-item .title {\n   overflow: hidden;\n   text-overflow: ellipsis;\n   white-space: nowrap;\n   flex: 1 1;\n }\n .list-item input[type="text"] {\n   background: transparent;\n   width: 100%;\n }\n .list-item input[type="text"]:focus {\n   cursor: text;\n }\n .list-item .actions {\n   transition: all 200ms ease-in;\n   padding-right: 20px;\n }\n .list-item .actions a {\n   display: inline-block;\n   vertical-align: top;\n   text-align: center;\n   color: #eee;\n }\n .list-item .actions a:hover {\n   color: #2cc5d2;\n }\n .list-item .actions a:active {\n   color: #555;\n }\n .list-item .actions [class^="icon-"] {\n   font-size: 16px;\n   line-height: 24px;\n   line-height: 3rem;\n   text-align: center;\n }\n .list-item.TASK_PINNED .icon-star {\n   color: #2cc5d2;\n }\n .list-item.TASK_ARCHIVED input[type="text"] {\n   color: #aaa;\n }\n .list-item:hover {\n   background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);\n }\n .list-item:hover .checkbox {\n   cursor: pointer;\n }\n .list-item + .list-item {\n   border-top: 1px solid #f0f9fb;\n }\n .list-item.checked input[type="text"] {\n   color: #ccc;\n   text-decoration: line-through;\n }\n .list-item.checked .delete-item {\n   display: inline-block;\n }\n .loading-item {\n   height: 3rem;\n   width: 100%;\n   background: white;\n   display: flex;\n   align-items: center;\n   line-height: 1rem;\n   padding-left: 16px;\n }\n .loading-item .glow-checkbox,\n .loading-item .glow-text span {\n   -webkit-animation: glow 1.5s ease-in-out infinite;\n           animation: glow 1.5s ease-in-out infinite;\n   background: #eee;\n   color: transparent;\n   cursor: progress;\n   display: inline-block;\n }\n .loading-item .glow-checkbox {\n   margin-right: 16px;\n   width: 12px;\n   height: 12px;\n }\n .loading-item + .loading-item {\n   border-top: 1px solid #f0f9fb;\n }\n .list-items {\n   position: relative;\n   background: white;\n   min-height: 288px;\n }\n .list-items .select-placeholder {\n   border: none;\n   width: 48px;\n }\n .wrapper-message {\n   position: absolute;\n   top: 45%;\n   right: 0;\n   bottom: auto;\n   left: 0;\n   width: auto;\n   height: auto;\n   transform: translate3d(0, -50%, 0);\n   text-align: center;\n }\n .wrapper-message [class^="icon-"],\n .wrapper-message [class*=" icon-"] {\n   font-size: 48px;\n   line-height: 56px;\n   color: #2cc5d2;\n   display: block;\n }\n .wrapper-message .title-message {\n   font-size: 16px;\n   line-height: 24px;\n   font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n   font-weight: 800;\n   color: #555;\n }\n .wrapper-message .subtitle-message {\n   font-size: 14px;\n   line-height: 20px;\n   color: #666;\n }\n .page.lists-show {\n   min-height: 100vh;\n   background: white;\n }\n .page.lists-show nav {\n   background: #d3edf4;\n   padding: 1.5rem 1.25rem;\n   text-align: center;\n }\n @media screen and (min-width: 40em) {\n   .page.lists-show nav {\n     text-align: left;\n   }\n }\n .page.lists-show nav .title-page {\n   font-size: 20px;\n   line-height: 24px;\n   line-height: 2rem;\n   cursor: pointer;\n   white-space: nowrap;\n }\n .page.lists-show nav .title-page .title-wrapper {\n   overflow: hidden;\n   text-overflow: ellipsis;\n   white-space: nowrap;\n   font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n   font-weight: 800;\n   color: #1c3f53;\n   display: inline-block;\n   vertical-align: top;\n   max-width: 100%;\n }',""]),module.exports=exports},1284:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(416).configure)([__webpack_require__(1285)],module,!1)}).call(this,__webpack_require__(112)(module))},1285:function(module,exports,__webpack_require__){var map={"./PureInboxScreen.stories.js":1289,"./PureTaskList.stories.js":334,"./Task.stories.js":94};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1285},1289:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"store",(function(){return store})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Error",(function(){return Error}));__webpack_require__(6),__webpack_require__(4);var vue_esm=__webpack_require__(139),vuex_esm=__webpack_require__(140),components_TaskListvue_type_script_lang_js_={components:{PureTaskList:__webpack_require__(171).a},methods:Object(vuex_esm.b)(["archiveTask","pinTask"]),computed:Object(vuex_esm.c)(["tasks"])},componentNormalizer=__webpack_require__(106);const __vuedocgen_export_0=Object(componentNormalizer.a)(components_TaskListvue_type_script_lang_js_,(function(){var _h=this.$createElement;return(this._self._c||_h)("PureTaskList",this._g({attrs:{tasks:this.tasks},on:{"archive-task":this.archiveTask,"pin-task":this.pinTask}},this.$listeners))}),[],!1,null,null,null).exports;var TaskList=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"TaskList",description:"",tags:{}};var components_PureInboxScreenvue_type_script_lang_js_={name:"PureInboxScreen",components:{TaskList:TaskList},props:{error:{type:Boolean,default:!1}}};const PureInboxScreen_vuedocgen_export_0=Object(componentNormalizer.a)(components_PureInboxScreenvue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",[this.error?_c("div",{staticClass:"page lists-show"},[this._m(0)]):_c("div",{staticClass:"page lists-show"},[this._m(1),this._v(" "),_c("TaskList")],1)])}),[function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"wrapper-message"},[_c("span",{staticClass:"icon-face-sad"}),this._v(" "),_c("div",{staticClass:"title-message"},[this._v("Oh no!")]),this._v(" "),_c("div",{staticClass:"subtitle-message"},[this._v("Something went wrong")])])},function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("nav",[_c("h1",{staticClass:"title-page"},[_c("span",{staticClass:"title-wrapper"},[this._v("Taskbox")])])])}],!1,null,null,null).exports;var PureInboxScreen=PureInboxScreen_vuedocgen_export_0;PureInboxScreen_vuedocgen_export_0.__docgenInfo={displayName:"PureInboxScreen",exportName:"default",description:"",tags:{},props:[{name:"error",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};var dist=__webpack_require__(105),PureTaskList_stories=__webpack_require__(334);vue_esm.default.use(vuex_esm.a);var store=new vuex_esm.a.Store({state:{tasks:PureTaskList_stories.Default.args.tasks},actions:{pinTask:function pinTask(context,id){Object(dist.action)("pin-task")(id)},archiveTask:function archiveTask(context,id){Object(dist.action)("archive-task")(id)}}}),PureInboxScreen_stories_Template=(__webpack_exports__.default={title:"PureInboxScreen",component:PureInboxScreen,excludeStories:/.*store$/},function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{PureInboxScreen:PureInboxScreen},props:Object.keys(argTypes),template:'<PureInboxScreen v-bind="$props" />',store:store}}),Default=PureInboxScreen_stories_Template.bind({}),Error=PureInboxScreen_stories_Template.bind({});Error.args={error:!0},Default.parameters=Object.assign({storySource:{source:"(args, { argTypes }) => ({\n  components: { PureInboxScreen },\n  props: Object.keys(argTypes),\n  template: '<PureInboxScreen v-bind=\"$props\" />',\n  store,\n})"}},Default.parameters),Error.parameters=Object.assign({storySource:{source:"(args, { argTypes }) => ({\n  components: { PureInboxScreen },\n  props: Object.keys(argTypes),\n  template: '<PureInboxScreen v-bind=\"$props\" />',\n  store,\n})"}},Error.parameters)},171:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(13),__webpack_require__(50);var toConsumableArray=__webpack_require__(170),components_PureTaskListvue_type_script_lang_js_={name:"TaskList",components:{Task:__webpack_require__(172).a},props:{tasks:{type:Array,required:!0,default:function _default(){return[]}},loading:{type:Boolean,default:!1}},computed:{tasksInOrder:function tasksInOrder(){return[].concat(Object(toConsumableArray.a)(this.tasks.filter((function(t){return"TASK_PINNED"===t.state}))),Object(toConsumableArray.a)(this.tasks.filter((function(t){return"TASK_PINNED"!==t.state}))))},isEmpty:function isEmpty(){return 0===this.tasks.length}}},componentNormalizer=__webpack_require__(106);const __vuedocgen_export_0=Object(componentNormalizer.a)(components_PureTaskListvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"list-items"},[_vm.loading?_vm._l(6,(function(n){return _c("div",{key:n,staticClass:"loading-item"},[_c("span",{staticClass:"glow-checkbox"}),_vm._v(" "),_vm._m(0,!0)])})):_vm.isEmpty?_c("div",{staticClass:"list-items"},[_vm._m(1)]):_vm._l(_vm.tasksInOrder,(function(task){return _c("Task",_vm._g({key:task.id,attrs:{task:task}},_vm.$listeners))}))],2)}),[function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("span",{staticClass:"glow-text"},[_c("span",[this._v("Loading")]),this._v(" "),_c("span",[this._v("cool")]),this._v(" "),_c("span",[this._v("state")])])},function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"wrapper-message"},[_c("span",{staticClass:"icon-check"}),this._v(" "),_c("div",{staticClass:"title-message"},[this._v("沒有待辨事項")])])}],!1,null,null,null).exports;__webpack_exports__.a=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"TaskList",exportName:"default",description:"",tags:{},props:[{name:"tasks",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]}},172:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(137);var components_Taskvue_type_script_lang_js_={name:"Task",props:{task:{type:Object,required:!0,default:function _default(){return{id:"",state:"",title:""}},validator:function validator(task){return["id","state","title"].every((function(key){return key in task}))}}},computed:{isChecked:function isChecked(){return"TASK_ARCHIVED"===this.task.state}}},componentNormalizer=__webpack_require__(106);const __vuedocgen_export_0=Object(componentNormalizer.a)(components_Taskvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"list-item",class:_vm.task.state},[_c("label",{staticClass:"checkbox"},[_c("input",{attrs:{type:"checkbox",disabled:"",name:"checked"},domProps:{checked:_vm.isChecked}}),_vm._v(" "),_c("span",{staticClass:"checkbox-custom",on:{click:function($event){return _vm.$emit("archive-task",_vm.task.id)}}})]),_vm._v(" "),_c("div",{staticClass:"title"},[_c("input",{attrs:{type:"text",readonly:"",placeholder:"Input title"},domProps:{value:_vm.task.title}})]),_vm._v(" "),_c("div",{staticClass:"actions"},[_vm.isChecked?_vm._e():_c("a",{on:{click:function($event){return _vm.$emit("pin-task",_vm.task.id)}}},[_c("span",{staticClass:"icon-star"})])])])}),[],!1,null,null,null).exports;__webpack_exports__.a=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"Task",exportName:"default",description:"",tags:{},props:[{name:"task",type:{name:"object"},required:!0,defaultValue:{func:!1,value:"{ id: '', state: '', title: '' }"}}],events:[{name:"archive-task"},{name:"pin-task"}]}},334:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithPinnedTasks",(function(){return WithPinnedTasks})),__webpack_require__.d(__webpack_exports__,"Loading",(function(){return Loading})),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));__webpack_require__(13),__webpack_require__(8),__webpack_require__(6),__webpack_require__(4);var _Users_adam_lai_test_storybook_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(170),_PureTaskList__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(171),_Task_stories__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(94);__webpack_exports__.default={component:_PureTaskList__WEBPACK_IMPORTED_MODULE_5__.a,title:"PureTaskList",decorators:[function(){return'<div style="padding: 3rem;"><story /></div>'}]};var Template=function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{PureTaskList:_PureTaskList__WEBPACK_IMPORTED_MODULE_5__.a},props:Object.keys(argTypes),methods:_Task_stories__WEBPACK_IMPORTED_MODULE_6__.actionsData,template:'<PureTaskList v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />'}},Default=Template.bind({});Default.args={tasks:[Object.assign({},_Task_stories__WEBPACK_IMPORTED_MODULE_6__.Default.args.task,{id:"1",title:"Task 1"}),Object.assign({},_Task_stories__WEBPACK_IMPORTED_MODULE_6__.Default.args.task,{id:"2",title:"Task 2"}),Object.assign({},_Task_stories__WEBPACK_IMPORTED_MODULE_6__.Default.args.task,{id:"3",title:"Task 3"}),Object.assign({},_Task_stories__WEBPACK_IMPORTED_MODULE_6__.Default.args.task,{id:"4",title:"Task 4"}),Object.assign({},_Task_stories__WEBPACK_IMPORTED_MODULE_6__.Default.args.task,{id:"5",title:"Task 5"}),Object.assign({},_Task_stories__WEBPACK_IMPORTED_MODULE_6__.Default.args.task,{id:"6",title:"Task 6"})]};var WithPinnedTasks=Template.bind({});WithPinnedTasks.args={tasks:[].concat(Object(_Users_adam_lai_test_storybook_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__.a)(Default.args.tasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)第六組更換為置頂",state:"TASK_PINNED"}]),loading:!1};var Loading=Template.bind({});Loading.args={tasks:[],loading:!0};var Empty=Template.bind({});Empty.args=Object.assign({},Loading.args,{loading:!1}),Default.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  components: { PureTaskList },\n  props: Object.keys(argTypes),\n  // We are reusing our actions from task.stories.js\n  methods: TaskStories.actionsData,\n  template: \'<PureTaskList v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />\',\n})'}},Default.parameters),WithPinnedTasks.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  components: { PureTaskList },\n  props: Object.keys(argTypes),\n  // We are reusing our actions from task.stories.js\n  methods: TaskStories.actionsData,\n  template: \'<PureTaskList v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />\',\n})'}},WithPinnedTasks.parameters),Loading.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  components: { PureTaskList },\n  props: Object.keys(argTypes),\n  // We are reusing our actions from task.stories.js\n  methods: TaskStories.actionsData,\n  template: \'<PureTaskList v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />\',\n})'}},Loading.parameters),Empty.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  components: { PureTaskList },\n  props: Object.keys(argTypes),\n  // We are reusing our actions from task.stories.js\n  methods: TaskStories.actionsData,\n  template: \'<PureTaskList v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />\',\n})'}},Empty.parameters)},537:function(module,exports,__webpack_require__){__webpack_require__(538),__webpack_require__(857),__webpack_require__(858),__webpack_require__(1022),__webpack_require__(1241),__webpack_require__(1249),__webpack_require__(1257),__webpack_require__(1269),__webpack_require__(1271),__webpack_require__(1276),__webpack_require__(1278),module.exports=__webpack_require__(1284)},650:function(module,exports){},858:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(416)},94:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"actionsData",(function(){return actionsData})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pinned",(function(){return Pinned})),__webpack_require__.d(__webpack_exports__,"Archived",(function(){return Archived}));__webpack_require__(6),__webpack_require__(4);var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(105),_Task__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(172);__webpack_exports__.default={title:"Task",component:_Task__WEBPACK_IMPORTED_MODULE_3__.a,excludeStories:/.*Data$/};var actionsData={onPinTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("pin-task"),onArchiveTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("archive-task")},Template=function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{Task:_Task__WEBPACK_IMPORTED_MODULE_3__.a},props:Object.keys(argTypes),methods:actionsData,template:'<Task v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />'}},Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task 標題",state:"TASK_INBOX",updatedAt:new Date(2018,0,1,9,0)}};var Pinned=Template.bind({});Pinned.args={task:Object.assign({},Default.args.task,{state:"TASK_PINNED"})};var Archived=Template.bind({});Archived.args={task:Object.assign({},Default.args.task,{state:"TASK_ARCHIVED"})},Default.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  components: { Task },\n  props: Object.keys(argTypes),\n  methods: actionsData,\n  template: \'<Task v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />\',\n})'}},Default.parameters),Pinned.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  components: { Task },\n  props: Object.keys(argTypes),\n  methods: actionsData,\n  template: \'<Task v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />\',\n})'}},Pinned.parameters),Archived.parameters=Object.assign({storySource:{source:'(args, { argTypes }) => ({\n  components: { Task },\n  props: Object.keys(argTypes),\n  methods: actionsData,\n  template: \'<Task v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />\',\n})'}},Archived.parameters)}},[[537,1,2]]]);
//# sourceMappingURL=main.3b6d8e5b9e8c2ec09338.bundle.js.map