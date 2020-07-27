(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(4),a=n(9),p=(n(0),n(318)),i={id:"near-operation-file",title:"near-operation-file"},o={unversionedId:"presets/near-operation-file",id:"presets/near-operation-file",isDocsHomePage:!1,title:"near-operation-file",description:"This preset generates a file per each operation file.",source:"@site/docs/presets/near-operation-file.md",permalink:"/docs/presets/near-operation-file",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/presets/near-operation-file.md",sidebar:"sidebar",previous:{title:"All Presets",permalink:"/docs/presets/presets-index"},next:{title:"import-types",permalink:"/docs/presets/import-types"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Example",id:"example",children:[]},{value:"Configuration",id:"configuration",children:[]}],c={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"This preset generates a file per each operation file."),Object(p.b)("h2",{id:"installation"},"Installation"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add @graphql-codegen/near-operation-file-preset\n")),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("p",null,"In order to use this preset, you need to add 2 outputs to your ",Object(p.b)("inlineCode",{parentName:"p"},"codegen.yml")," file:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"The first, is the base types, generated by ",Object(p.b)("inlineCode",{parentName:"li"},"typescript")," plugin."),Object(p.b)("li",{parentName:"ul"},"The second, is the one that in charge of generating types per operation.")),Object(p.b)("p",null,"This following example generates operation typings and ",Object(p.b)("inlineCode",{parentName:"p"},"react-apollo")," component per each operation file, near the original file of the operation:"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"schema: src/schema.json\ndocuments: 'src/**/*.graphql'\ngenerates:\n  src/types.ts:\n    - typescript\n  src/:\n    preset: near-operation-file\n    presetConfig:\n      extension: .generated.tsx\n      baseTypesPath: types.ts\n    plugins:\n      - typescript-operations\n      - typescript-react-apollo\n")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"How does it work?")),Object(p.b)("p",null,"The first output is simple, and it only generates the base schema types to ",Object(p.b)("inlineCode",{parentName:"p"},"src/types.ts"),"."),Object(p.b)("p",null,"The second output refers to the base directory of the project (",Object(p.b)("inlineCode",{parentName:"p"},"./src/"),") and it uses the ",Object(p.b)("inlineCode",{parentName:"p"},"near-operation-file")," preset to generate a file per each operation found under ",Object(p.b)("inlineCode",{parentName:"p"},"./src/**/*.graphql"),"."),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"presetConfig")," section contains a key for setting the output files extension (in our case, ",Object(p.b)("inlineCode",{parentName:"p"},".generated.tsx")," because of ",Object(p.b)("inlineCode",{parentName:"p"},"react-apollo"),"), and the location of the base schema types file we created in the first section of this file (it will look for it in the base directory)."),Object(p.b)("h2",{id:"configuration"},"Configuration"),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"baseTypesPath (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),")"),Object(p.b)("p",{parentName:"p"},"Required, should point to the base schema types file. The key of the output is used a the base path for this file."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n plugins:\n   - typescript-operations\n")),Object(p.b)("h3",{parentName:"p"},"extension (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},".generates.ts"),")"),Object(p.b)("p",{parentName:"p"},"Optional, sets the extension for the generated files. Use this to override the extension if you are using plugins that requires a different type of extensions (such as ",Object(p.b)("inlineCode",{parentName:"p"},"typescript-react-apollo"),")"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n   extension: .generated.tsx\n plugins:\n   - typescript-operations\n   - typescript-react-apollo\n")),Object(p.b)("h3",{parentName:"p"},"cwd (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"process.cwd()"),")"),Object(p.b)("p",{parentName:"p"},"Optional, override the ",Object(p.b)("inlineCode",{parentName:"p"},"cwd")," of the execution. We are using ",Object(p.b)("inlineCode",{parentName:"p"},"cwd")," to figure out the imports between files. Use this if your execuion path is not your project root directory."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n   cwd: /some/path\n plugins:\n   - typescript-operations\n")),Object(p.b)("h3",{parentName:"p"},"folder (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"''"),")"),Object(p.b)("p",{parentName:"p"},"Optional, defines a folder, (Relative to the source files) where the generated files will be created."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n   folder: __generated__\n plugins:\n   - typescript-operations\n")),Object(p.b)("h3",{parentName:"p"},"importTypesNamespace (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"Types"),")"),Object(p.b)("p",{parentName:"p"},"Optional, override the name of the import namespace used to import from the ",Object(p.b)("inlineCode",{parentName:"p"},"baseTypesPath")," file."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n   importTypesNamespace: SchemaTypes\n plugins:\n   - typescript-operations\n"))))}l.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||p;return n?a.a.createElement(d,o(o({ref:t},c),{},{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<p;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);