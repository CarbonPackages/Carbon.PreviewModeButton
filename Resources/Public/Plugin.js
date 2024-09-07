var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty;var __esm=(fn,res)=>function(){return fn&&(res=(0,fn[__getOwnPropNames(fn)[0]])(fn=0)),res};var __commonJS=(cb,mod)=>function(){return mod||(0,cb[__getOwnPropNames(cb)[0]])((mod={exports:{}}).exports,mod),mod.exports};var __copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:!0}):target,mod));function readFromConsumerApi(key){return(...args)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${key}`])return window["@Neos:HostPluginAPI"][`@${key}`](...args);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var init_readFromConsumerApi=__esm({"node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.9/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"(){}});var require_react_redux=__commonJS({"node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.9/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js"(exports,module){init_readFromConsumerApi();module.exports=readFromConsumerApi("vendor")().reactRedux}});var require_neos_ui_redux_store=__commonJS({"node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.9/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js"(exports,module){init_readFromConsumerApi();module.exports=readFromConsumerApi("NeosProjectPackages")().NeosUiReduxStore}});var require_react=__commonJS({"node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.9/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports,module){init_readFromConsumerApi();module.exports=readFromConsumerApi("vendor")().React}});var require_react_ui_components=__commonJS({"node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.9/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports,module){init_readFromConsumerApi();module.exports=readFromConsumerApi("NeosProjectPackages")().ReactUiComponents}});init_readFromConsumerApi();var dist_default=readFromConsumerApi("manifest");var import_react_redux=__toESM(require_react_redux()),import_neos_ui_redux_store=__toESM(require_neos_ui_redux_store());var import_react=__toESM(require_react()),import_react_ui_components=__toESM(require_react_ui_components());function makeButton({viewEditModeName,settings,i18nRegistry,nodeTypesRegistry}){return function({documentNode,editPreviewMode,setEditPreviewMode}){let[shouldRender,setShouldRender]=(0,import_react.useState)(!1),icon=settings?.icon||"fas fa-pencil",label=settings?.label||null,nodeTypeName=settings.nodeTypeName,registry=nodeTypesRegistry?._registry,documentNodeType=documentNode.nodeType;if((0,import_react.useEffect)(()=>{setShouldRender(hasMixin({documentNodeType,nodeTypeName,registry})),shouldRender===!1&&editPreviewMode===viewEditModeName&&setEditPreviewMode("inPlace")},[documentNode]),!shouldRender)return null;let title=label?i18nRegistry.translate(label):null;return import_react.default.createElement(import_react_ui_components.IconButton,{icon,isPressed:editPreviewMode===viewEditModeName,"aria-label":title,title,onClick:()=>{setEditPreviewMode(editPreviewMode===viewEditModeName?"inPlace":viewEditModeName)}})}}function hasMixin({documentNodeType,nodeTypeName,registry}){if(documentNodeType===nodeTypeName)return!0;for(let item of registry){if(item.key!==documentNodeType)continue;let superTypes=item?.value?.superTypes;if(!superTypes)return!1;for(let key in superTypes)if(key==nodeTypeName)return superTypes[key];return!1}return!1}var connector=(0,import_react_redux.connect)(state=>({documentNode:import_neos_ui_redux_store.selectors.CR.Nodes.documentNodeSelector(state),editPreviewMode:import_neos_ui_redux_store.selectors.UI.EditPreviewMode.currentEditPreviewMode(state)}),{setEditPreviewMode:import_neos_ui_redux_store.actions.UI.EditPreviewMode.set});dist_default("Carbon.PreviewMode:Button",{},(globalRegistry,{frontendConfiguration})=>{let configurations=frontendConfiguration["Carbon.PreviewMode:Button"];if(!configurations||typeof configurations!="object")return;let containerRegistry=globalRegistry.get("containers"),i18nRegistry=globalRegistry.get("i18n"),nodeTypesRegistry=globalRegistry.get("@neos-project/neos-ui-contentrepository"),fallbackNodeTypeName="Neos.Neos:Document";for(let viewEditModeName in configurations){let settings=configurations[viewEditModeName];settings===!0&&(settings={nodeTypeName:fallbackNodeTypeName}),settings?.nodeTypeName||(settings.nodeTypeName=fallbackNodeTypeName);let position=settings?.position||"start",Button=makeButton({viewEditModeName,settings,i18nRegistry,nodeTypesRegistry});containerRegistry.set(`SecondaryToolbar/Right/${viewEditModeName}`,connector(Button),position)}});
//# sourceMappingURL=Plugin.js.map
