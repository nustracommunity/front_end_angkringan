if(!self.define){let e,s={};const i=(i,f)=>(i=new URL(i+".js",f).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(f,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let n={};const d=e=>i(e,a),r={module:{uri:a},exports:n,require:d};s[a]=Promise.all(f.map((e=>r[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"angkringan"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.35d221f2.js",revision:"0e2e138dcef90fb789d2bc29be135579"},{url:"assets/dom.cb8d26a2.js",revision:"096291dc6d02df87299ca5b021aac90f"},{url:"assets/ErrorNotFound.58b8d486.js",revision:"a95b583a53fda11658d0ba359adc172d"},{url:"assets/ExternalLayout.c4e2fa0e.js",revision:"b839732295c1aec121e68bb99b2d1b1b"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.ec108d34.js",revision:"05915f4f50a1903b7fb3631ccaff1796"},{url:"assets/index.fd07b849.css",revision:"fed8aced9e9a770f323585da454c2e95"},{url:"assets/IndexPage.55b3dd51.js",revision:"be02348c3ff4e569b905522dcf56eb10"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.d240a9ae.woff",revision:"d93054bf1c6d3002897ac09e0e7b9a6f"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.6ba203eb.woff",revision:"30ef7351c99d2cd25159e6fc71e6c6fc"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.80684728.woff",revision:"5001486802025ac686973542fdeeea60"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.2df244f6.woff",revision:"064a5568b49ac29f2e9ea88a1f25fbc3"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.742ce02b.woff",revision:"c2818baea5d2506dd4c2843836b9bff6"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f00fa16d.woff",revision:"1ac185dda7da331babe18e8d84ec6984"},{url:"assets/LoginPage.55b01b7f.js",revision:"2bb490b1b14dc2e7d4270554ce7a1b20"},{url:"assets/MainLayout.fc62e6e3.js",revision:"c5b887bc4b0c561227825b8e2ce28c7b"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/QBtn.d4243007.js",revision:"1e628935ac05409bc65d9af24d603900"},{url:"assets/QForm.19f8ffce.js",revision:"223012269b3c0ad02780dd00ff2c7eee"},{url:"assets/QLayout.1eee2727.js",revision:"f4518ffeeaab52848db38bff9d5e7e91"},{url:"assets/QPage.fb6df090.js",revision:"494fed4eb658ddff5e3f92bc4e50ebe9"},{url:"assets/quasar-logo-vertical.55e9c854.svg",revision:"ef0c03f0d188f763626d94f6d2318d5d"},{url:"assets/RegisterPage.5c1cb7d9.js",revision:"f8461fe9b9608e878ec01894ba5fc1fc"},{url:"assets/render.6ad79ad1.js",revision:"6b97b75fe3644b6cad8edb498323b6c7"},{url:"assets/use-dark.69c3e692.js",revision:"ba99147fe6b1e1d0fedd6d521381a818"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"3329e74e3aa5c1bcaf1aeebce0ed6870"},{url:"manifest.json",revision:"6ca9d8abeccba40aff93c89406df4b9c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
