(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{311:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const styled_components_1=__webpack_require__(180),styled_normalize_1=__webpack_require__(737),GlobalStyle=styled_components_1.createGlobalStyle`
  ${styled_normalize_1.normalize}
  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 10px simplification 62.5% of 16px = for 10px we can use simply 1rem */
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -o-font-feature-settings: 'salt' 1;
    -ms-font-feature-settings: 'salt' 1;
    -webkit-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'salt' 1;
    -webkit-font-feature-settings: 'salt' 1;
    font-feature-settings: 'salt' 1;
    text-rendering: optimizeLegibility;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;exports.default=GlobalStyle},315:function(module,exports,__webpack_require__){__webpack_require__(316),__webpack_require__(466),__webpack_require__(467),module.exports=__webpack_require__(732)},381:function(module,exports){},467:function(module,exports,__webpack_require__){"use strict";__webpack_require__(468),(0,__webpack_require__(99).addParameters)({options:{theme:(0,__webpack_require__(726).create)({base:"light",brandTitle:"Blocchi puzzle"})}})},732:function(module,exports,__webpack_require__){"use strict";(function(module){var _react=__webpack_require__(99);module._StorybookPreserveDecorators=!0,(0,_react.configure)([__webpack_require__(733)],module)}).call(this,__webpack_require__(60)(module))},733:function(module,exports,__webpack_require__){var map={"./App.stories.tsx":734};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=733},734:function(module,exports,__webpack_require__){"use strict";(function(module){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__webpack_require__(99),React=__importStar(__webpack_require__(1)),storybook_1=__webpack_require__(735),App_1=__webpack_require__(738);react_1.storiesOf("App",module).addDecorator(storybook_1.globalStylesDecorator).add("base",()=>React.createElement(App_1.App,null))}).call(this,__webpack_require__(60)(module))},735:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.globalStylesDecorator=void 0;const react_1=__importDefault(__webpack_require__(1)),GlobalStyle_1=__importDefault(__webpack_require__(311));exports.globalStylesDecorator=story=>react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(GlobalStyle_1.default,null),story())},738:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;const React=__importStar(__webpack_require__(1)),GlobalStyle_1=__importDefault(__webpack_require__(311)),styled_components_1=__importDefault(__webpack_require__(180));exports.App=function App(){return React.createElement(React.Fragment,null,React.createElement(GlobalStyle_1.default,null),React.createElement(AppS,null,"Hello world!😎"))};const AppS=styled_components_1.default.div`
  font-size: 2rem;
`}},[[315,1,2]]]);
//# sourceMappingURL=main.406aace6ed2104030687.bundle.js.map