(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(4),i=n(9),r=(n(0),n(318)),o={},l={unversionedId:"generated-config/typescript-graphql-request",id:"generated-config/typescript-graphql-request",isDocsHomePage:!1,title:"typescript-graphql-request",description:"This plugin generates graphql-request ready-to-use SDK, which is fully-typed.",source:"@site/docs/generated-config/typescript-graphql-request.md",permalink:"/docs/generated-config/typescript-graphql-request",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-graphql-request.md"},p=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>rawRequest</code>",id:"rawrequest",children:[]},{value:"<code>noGraphQLTag</code>",id:"nographqltag",children:[]},{value:"<code>gqlImport</code>",id:"gqlimport",children:[]},{value:"<code>noExport</code>",id:"noexport",children:[]},{value:"<code>dedupeOperationSuffix</code>",id:"dedupeoperationsuffix",children:[]},{value:"<code>omitOperationSuffix</code>",id:"omitoperationsuffix",children:[]},{value:"<code>operationResultSuffix</code>",id:"operationresultsuffix",children:[]},{value:"<code>documentVariablePrefix</code>",id:"documentvariableprefix",children:[]},{value:"<code>documentVariableSuffix</code>",id:"documentvariablesuffix",children:[]},{value:"<code>fragmentVariablePrefix</code>",id:"fragmentvariableprefix",children:[]},{value:"<code>fragmentVariableSuffix</code>",id:"fragmentvariablesuffix",children:[]},{value:"<code>documentMode</code>",id:"documentmode",children:[]},{value:"<code>importOperationTypesFrom</code>",id:"importoperationtypesfrom",children:[]},{value:"<code>importDocumentNodeExternallyFrom</code>",id:"importdocumentnodeexternallyfrom",children:[]},{value:"<code>pureMagicComment</code>",id:"puremagiccomment",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]}]}],c={rightToc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This plugin generates ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql-request"}),Object(r.b)("inlineCode",{parentName:"a"},"graphql-request"))," ready-to-use SDK, which is fully-typed."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("div",{className:"admonition admonition-shell"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(r.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(r.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/typescript-graphql-request\n")))),Object(r.b)("h2",{id:"api-reference"},"API Reference"),Object(r.b)("h3",{id:"rawrequest"},Object(r.b)("inlineCode",{parentName:"h3"},"rawRequest")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"By default the ",Object(r.b)("inlineCode",{parentName:"p"},"request")," method return the ",Object(r.b)("inlineCode",{parentName:"p"},"data")," or ",Object(r.b)("inlineCode",{parentName:"p"},"errors")," key from the response. If you need to access the ",Object(r.b)("inlineCode",{parentName:"p"},"extensions")," key you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"rawRequest")," method."),Object(r.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-graphql-request\n config:\n   rawRequest: true\n")),Object(r.b)("h3",{id:"nographqltag"},Object(r.b)("inlineCode",{parentName:"h3"},"noGraphQLTag")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Deprecated. Changes the documentMode to ",Object(r.b)("inlineCode",{parentName:"p"},"documentNode"),"."),Object(r.b)("h3",{id:"gqlimport"},Object(r.b)("inlineCode",{parentName:"h3"},"gqlImport")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"gql#graphql-tag")),Object(r.b)("p",null,"Customize from which module will ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," be imported from.\nThis is useful if you want to use modules other than ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tag"),", e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"graphql.macro"),"."),Object(r.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(r.b)("h5",{id:"graphqlmacro"},"graphql.macro"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: graphql.macro#gql\n")),Object(r.b)("h5",{id:"gatsby"},"Gatsby"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: gatsby#graphql\n")),Object(r.b)("h3",{id:"noexport"},Object(r.b)("inlineCode",{parentName:"h3"},"noExport")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Set this configuration to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you wish to tell codegen to generate code with no ",Object(r.b)("inlineCode",{parentName:"p"},"export")," identifier."),Object(r.b)("h3",{id:"dedupeoperationsuffix"},Object(r.b)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Set this configuration to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),Object(r.b)("h3",{id:"omitoperationsuffix"},Object(r.b)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Set this configuration to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",Object(r.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Mutation"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Subscription"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Fragment"),"."),Object(r.b)("h3",{id:"operationresultsuffix"},Object(r.b)("inlineCode",{parentName:"h3"},"operationResultSuffix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",null,"Adds a suffix to generated operation result type names"),Object(r.b)("h3",{id:"documentvariableprefix"},Object(r.b)("inlineCode",{parentName:"h3"},"documentVariablePrefix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",null,"Changes the GraphQL operations variables prefix."),Object(r.b)("h3",{id:"documentvariablesuffix"},Object(r.b)("inlineCode",{parentName:"h3"},"documentVariableSuffix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"Document")),Object(r.b)("p",null,"Changes the GraphQL operations variables suffix."),Object(r.b)("h3",{id:"fragmentvariableprefix"},Object(r.b)("inlineCode",{parentName:"h3"},"fragmentVariablePrefix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",null,"Changes the GraphQL fragments variables prefix."),Object(r.b)("h3",{id:"fragmentvariablesuffix"},Object(r.b)("inlineCode",{parentName:"h3"},"fragmentVariableSuffix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"FragmentDoc")),Object(r.b)("p",null,"Changes the GraphQL fragments variables suffix."),Object(r.b)("h3",{id:"documentmode"},Object(r.b)("inlineCode",{parentName:"h3"},"documentMode")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"DocumentMode"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"graphQLTag")),Object(r.b)("p",null,"Declares how DocumentNode are created:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"graphQLTag"),": ",Object(r.b)("inlineCode",{parentName:"li"},"graphql-tag")," or other modules (check ",Object(r.b)("inlineCode",{parentName:"li"},"gqlImport"),") will be used to generate document nodes. If this is used, document nodes are generated on client side i.e. the module used to generate this will be shipped to the client"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"documentNode"),": document nodes will be generated as objects when we generate the templates."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"documentNodeImportFragments"),": Similar to documentNode except it imports external fragments instead of embedding them."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"external"),": document nodes are imported from an external file. To be used with ",Object(r.b)("inlineCode",{parentName:"li"},"importDocumentNodeExternallyFrom"))),Object(r.b)("h3",{id:"importoperationtypesfrom"},Object(r.b)("inlineCode",{parentName:"h3"},"importOperationTypesFrom")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",null,"This config is used internally by presets, but you can use it manually to tell codegen to prefix all base types that it's using.\nThis is useful if you wish to generate base types from ",Object(r.b)("inlineCode",{parentName:"p"},"typescript-operations")," plugin into a different file, and import it from there."),Object(r.b)("h3",{id:"importdocumentnodeexternallyfrom"},Object(r.b)("inlineCode",{parentName:"h3"},"importDocumentNodeExternallyFrom")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",null,"This config should be used if ",Object(r.b)("inlineCode",{parentName:"p"},"documentMode")," is ",Object(r.b)("inlineCode",{parentName:"p"},"external"),". This has 2 usage:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"any string: This would be the path to import document nodes from. This can be used if we want to manually create the document nodes e.g. Use ",Object(r.b)("inlineCode",{parentName:"li"},"graphql-tag")," in a separate file and export the generated document"),Object(r.b)("li",{parentName:"ul"},"'near-operation-file': This is a special mode that is intended to be used with ",Object(r.b)("inlineCode",{parentName:"li"},"near-operation-file")," preset to import document nodes from those files. If these files are ",Object(r.b)("inlineCode",{parentName:"li"},".graphql")," files, we make use of webpack loader.")),Object(r.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: path/to/document-node-file\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: near-operation-file\n")),Object(r.b)("h3",{id:"puremagiccomment"},Object(r.b)("inlineCode",{parentName:"h3"},"pureMagicComment")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"This config adds PURE magic comment to the static variables to enforce treeshaking for your bundler."),Object(r.b)("h3",{id:"scalars"},Object(r.b)("inlineCode",{parentName:"h3"},"scalars")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(r.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(r.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(r.b)("h3",{id:"namingconvention"},Object(r.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(r.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(r.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(r.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(r.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(r.b)("h5",{id:"override-all-names"},"Override All Names"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(r.b)("h5",{id:"upper-case-enum-values"},"Upper-case enum values"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(r.b)("h5",{id:"keep-names-as-is"},"Keep names as is"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(r.b)("h5",{id:"remove-underscores"},"Remove Underscores"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(r.b)("h3",{id:"typesprefix"},Object(r.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",null,"Prefixes all the generated types."),Object(r.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(r.b)("h3",{id:"skiptypename"},Object(r.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(r.b)("h4",{id:"usage-examples-6"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(r.b)("h3",{id:"nonoptionaltypename"},Object(r.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Automatically adds ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(r.b)("h4",{id:"usage-examples-7"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(r.b)("h3",{id:"usetypeimports"},Object(r.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Will use ",Object(r.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(r.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'))}b.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||s[m]||r;return n?i.a.createElement(u,l(l({ref:t},c),{},{components:n})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);