!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var f={},d={},a={},c={}.hasOwnProperty,b=/^\.\.?(\/|$)/,o=function(e,f){for(var d,a=[],c=(b.test(f)?e+"/"+f:f).split("/"),o=0,t=c.length;o<t;o++)d=c[o],".."===d?a.pop():"."!==d&&""!==d&&a.push(d);return a.join("/")},t=function(e){return e.split("/").slice(0,-1).join("/")},n=function(f){return function(d){var a=o(t(f),d);return e.require(a,f)}},r=function(e,f){var a=m&&m.createHot(e),c={id:e,exports:{},hot:a};return d[e]=c,f(c.exports,n(e),c),c.exports},l=function(e){return a[e]?l(a[e]):e},i=function(e,f){return l(o(t(e),f))},s=function(e,a){null==a&&(a="/");var b=l(e);if(c.call(d,b))return d[b].exports;if(c.call(f,b))return r(b,f[b]);throw new Error("Cannot find module '"+e+"' from '"+a+"'")};s.alias=function(e,f){a[f]=e};var u=/\.[^.\/]+$/,p=/\/index(\.[^\/]+)?$/,h=function(e){if(u.test(e)){var f=e.replace(u,"");c.call(a,f)&&a[f].replace(u,"")!==f+"/index"||(a[f]=e)}if(p.test(e)){var d=e.replace(p,"");c.call(a,d)||(a[d]=e)}};s.register=s.define=function(e,a){if(e&&"object"==typeof e)for(var b in e)c.call(e,b)&&s.register(b,e[b]);else f[e]=a,delete d[e],h(e)},s.list=function(){var e=[];for(var d in f)c.call(f,d)&&e.push(d);return e};var m=e._hmr&&new e._hmr(i,s,f,d);s._cache=d,s.hmr=m&&m.wrap,s.brunch=!0,e.require=s}}(),function(){var e;"undefined"==typeof window?this:window;require.register("index.js",function(e,f,d){"use strict";f("bootstrap");var a=f("./config.js"),c=f("./js/map.js"),b=f("./js/util.js"),o=f("./js/settings.js"),t=!1,n=250;document.addEventListener("DOMContentLoaded",function(){c.loadMap(),o.loadOptionalConfig(),o.loadSettings();var e=document.getElementById("the-slider");e.oninput=function(){a.currentIndex=this.value,c.updateMapData()}}),window.addEventListener("resize",function(){t||(b.configureSlider(),t=!0,setTimeout(function(){t=!1},n))})}),require.register("js/charting.js",function(e,f,d){"use strict"}),require.register("js/colors.js",function(e,f,d){"use strict";var a={YlGn:{name:"Yellow Green",3:["#f7fcb9","#addd8e","#31a354"],4:["#ffffcc","#c2e699","#78c679","#238443"],5:["#ffffcc","#c2e699","#78c679","#31a354","#006837"],6:["#ffffcc","#d9f0a3","#addd8e","#78c679","#31a354","#006837"],7:["#ffffcc","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],8:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],9:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"]},YlGnBu:{name:"Yellow Green Blue",3:["#edf8b1","#7fcdbb","#2c7fb8"],4:["#ffffcc","#a1dab4","#41b6c4","#225ea8"],5:["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],6:["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#2c7fb8","#253494"],7:["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],8:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],9:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]},GnBu:{name:"Green Blue",3:["#e0f3db","#a8ddb5","#43a2ca"],4:["#f0f9e8","#bae4bc","#7bccc4","#2b8cbe"],5:["#f0f9e8","#bae4bc","#7bccc4","#43a2ca","#0868ac"],6:["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#43a2ca","#0868ac"],7:["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],8:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],9:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"]},BuGn:{name:"Blue Green",3:["#e5f5f9","#99d8c9","#2ca25f"],4:["#edf8fb","#b2e2e2","#66c2a4","#238b45"],5:["#edf8fb","#b2e2e2","#66c2a4","#2ca25f","#006d2c"],6:["#edf8fb","#ccece6","#99d8c9","#66c2a4","#2ca25f","#006d2c"],7:["#edf8fb","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],8:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],9:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"]},PuBuGn:{name:"Purple Blue Green",3:["#ece2f0","#a6bddb","#1c9099"],4:["#f6eff7","#bdc9e1","#67a9cf","#02818a"],5:["#f6eff7","#bdc9e1","#67a9cf","#1c9099","#016c59"],6:["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#1c9099","#016c59"],7:["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],8:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],9:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"]},PuBu:{name:"Purple Blue",3:["#ece7f2","#a6bddb","#2b8cbe"],4:["#f1eef6","#bdc9e1","#74a9cf","#0570b0"],5:["#f1eef6","#bdc9e1","#74a9cf","#2b8cbe","#045a8d"],6:["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#2b8cbe","#045a8d"],7:["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],8:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],9:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"]},BuPu:{name:"Blue Purple",3:["#e0ecf4","#9ebcda","#8856a7"],4:["#edf8fb","#b3cde3","#8c96c6","#88419d"],5:["#edf8fb","#b3cde3","#8c96c6","#8856a7","#810f7c"],6:["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8856a7","#810f7c"],7:["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],8:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],9:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"]},RdPu:{name:"Yellow Green",3:["#fde0dd","#fa9fb5","#c51b8a"],4:["#feebe2","#fbb4b9","#f768a1","#ae017e"],5:["#feebe2","#fbb4b9","#f768a1","#c51b8a","#7a0177"],6:["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#c51b8a","#7a0177"],7:["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],8:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],9:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"]},PuRd:{name:"Yellow Green",3:["#e7e1ef","#c994c7","#dd1c77"],4:["#f1eef6","#d7b5d8","#df65b0","#ce1256"],5:["#f1eef6","#d7b5d8","#df65b0","#dd1c77","#980043"],6:["#f1eef6","#d4b9da","#c994c7","#df65b0","#dd1c77","#980043"],7:["#f1eef6","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],8:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],9:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"]},OrRd:{name:"Yellow Green",3:["#fee8c8","#fdbb84","#e34a33"],4:["#fef0d9","#fdcc8a","#fc8d59","#d7301f"],5:["#fef0d9","#fdcc8a","#fc8d59","#e34a33","#b30000"],6:["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#e34a33","#b30000"],7:["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],8:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],9:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},YlOrRd:{name:"Yellow Orange Red",3:["#ffeda0","#feb24c","#f03b20"],4:["#ffffb2","#fecc5c","#fd8d3c","#e31a1c"],5:["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"],6:["#ffffb2","#fed976","#feb24c","#fd8d3c","#f03b20","#bd0026"],7:["#ffffb2","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],8:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],9:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]},YlOrBr:{name:"Yellow Orange Brown",3:["#fff7bc","#fec44f","#d95f0e"],4:["#ffffd4","#fed98e","#fe9929","#cc4c02"],5:["#ffffd4","#fed98e","#fe9929","#d95f0e","#993404"],6:["#ffffd4","#fee391","#fec44f","#fe9929","#d95f0e","#993404"],7:["#ffffd4","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],8:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],9:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"]},Purples:{name:"Purples",3:["#efedf5","#bcbddc","#756bb1"],4:["#f2f0f7","#cbc9e2","#9e9ac8","#6a51a3"],5:["#f2f0f7","#cbc9e2","#9e9ac8","#756bb1","#54278f"],6:["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#756bb1","#54278f"],7:["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],8:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],9:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"]},Blues:{name:"Blues",3:["#deebf7","#9ecae1","#3182bd"],4:["#eff3ff","#bdd7e7","#6baed6","#2171b5"],5:["#eff3ff","#bdd7e7","#6baed6","#3182bd","#08519c"],6:["#eff3ff","#c6dbef","#9ecae1","#6baed6","#3182bd","#08519c"],7:["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],8:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],9:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"]},Greens:{name:"Greens",3:["#e5f5e0","#a1d99b","#31a354"],4:["#edf8e9","#bae4b3","#74c476","#238b45"],5:["#edf8e9","#bae4b3","#74c476","#31a354","#006d2c"],6:["#edf8e9","#c7e9c0","#a1d99b","#74c476","#31a354","#006d2c"],7:["#edf8e9","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],8:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],9:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"]},Oranges:{name:"Oranges",3:["#fee6ce","#fdae6b","#e6550d"],4:["#feedde","#fdbe85","#fd8d3c","#d94701"],5:["#feedde","#fdbe85","#fd8d3c","#e6550d","#a63603"],6:["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#e6550d","#a63603"],7:["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],8:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],9:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"]},Reds:{name:"Reds",3:["#fee0d2","#fc9272","#de2d26"],4:["#fee5d9","#fcae91","#fb6a4a","#cb181d"],5:["#fee5d9","#fcae91","#fb6a4a","#de2d26","#a50f15"],6:["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#de2d26","#a50f15"],7:["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],8:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],9:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"]},Greys:{name:"Greys",3:["#f0f0f0","#bdbdbd","#636363"],4:["#f7f7f7","#cccccc","#969696","#525252"],5:["#f7f7f7","#cccccc","#969696","#636363","#252525"],6:["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#636363","#252525"],7:["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],8:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],9:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"]},PuOr:{name:"Purple Orange",3:["#f1a340","#f7f7f7","#998ec3"],4:["#e66101","#fdb863","#b2abd2","#5e3c99"],5:["#e66101","#fdb863","#f7f7f7","#b2abd2","#5e3c99"],6:["#b35806","#f1a340","#fee0b6","#d8daeb","#998ec3","#542788"],7:["#b35806","#f1a340","#fee0b6","#f7f7f7","#d8daeb","#998ec3","#542788"],8:["#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788"],9:["#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788"],10:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],11:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"]},BrGn:{name:"Brown Green",3:["#d8b365","#f5f5f5","#5ab4ac"],4:["#a6611a","#dfc27d","#80cdc1","#018571"],5:["#a6611a","#dfc27d","#f5f5f5","#80cdc1","#018571"],6:["#8c510a","#d8b365","#f6e8c3","#c7eae5","#5ab4ac","#01665e"],7:["#8c510a","#d8b365","#f6e8c3","#f5f5f5","#c7eae5","#5ab4ac","#01665e"],8:["#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e"],9:["#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e"],10:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],11:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"]},PuGn:{name:"Purple Green",3:["#af8dc3","#f7f7f7","#7fbf7b"],4:["#7b3294","#c2a5cf","#a6dba0","#008837"],5:["#7b3294","#c2a5cf","#f7f7f7","#a6dba0","#008837"],6:["#762a83","#af8dc3","#e7d4e8","#d9f0d3","#7fbf7b","#1b7837"],7:["#762a83","#af8dc3","#e7d4e8","#f7f7f7","#d9f0d3","#7fbf7b","#1b7837"],8:["#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837"],9:["#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837"],10:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],11:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"]},PiGn:{name:"Pink Green",3:["#e9a3c9","#f7f7f7","#a1d76a"],4:["#d01c8b","#f1b6da","#b8e186","#4dac26"],5:["#d01c8b","#f1b6da","#f7f7f7","#b8e186","#4dac26"],6:["#c51b7d","#e9a3c9","#fde0ef","#e6f5d0","#a1d76a","#4d9221"],7:["#c51b7d","#e9a3c9","#fde0ef","#f7f7f7","#e6f5d0","#a1d76a","#4d9221"],8:["#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221"],9:["#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221"],10:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],11:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"]},RdBu:{name:"Red Blue",3:["#ef8a62","#f7f7f7","#67a9cf"],4:["#ca0020","#f4a582","#92c5de","#0571b0"],5:["#ca0020","#f4a582","#f7f7f7","#92c5de","#0571b0"],6:["#b2182b","#ef8a62","#fddbc7","#d1e5f0","#67a9cf","#2166ac"],7:["#b2182b","#ef8a62","#fddbc7","#f7f7f7","#d1e5f0","#67a9cf","#2166ac"],8:["#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac"],9:["#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac"],10:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],11:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"]},RdGy:{name:"Red Grey",3:["#ef8a62","#ffffff","#999999"],4:["#ca0020","#f4a582","#bababa","#404040"],5:["#ca0020","#f4a582","#ffffff","#bababa","#404040"],6:["#b2182b","#ef8a62","#fddbc7","#e0e0e0","#999999","#4d4d4d"],7:["#b2182b","#ef8a62","#fddbc7","#ffffff","#e0e0e0","#999999","#4d4d4d"],8:["#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d"],9:["#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d"],10:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],11:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"]},RdYlBu:{name:"Red Yellow Blue",3:["#fc8d59","#ffffbf","#91bfdb"],4:["#d7191c","#fdae61","#abd9e9","#2c7bb6"],5:["#d7191c","#fdae61","#ffffbf","#abd9e9","#2c7bb6"],6:["#d73027","#fc8d59","#fee090","#e0f3f8","#91bfdb","#4575b4"],7:["#d73027","#fc8d59","#fee090","#ffffbf","#e0f3f8","#91bfdb","#4575b4"],8:["#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4"],9:["#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4"],10:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],11:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]},Spectral:{name:"Spectral",3:["#fc8d59","#ffffbf","#99d594"],4:["#d7191c","#fdae61","#abdda4","#2b83ba"],5:["#d7191c","#fdae61","#ffffbf","#abdda4","#2b83ba"],6:["#d53e4f","#fc8d59","#fee08b","#e6f598","#99d594","#3288bd"],7:["#d53e4f","#fc8d59","#fee08b","#ffffbf","#e6f598","#99d594","#3288bd"],8:["#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"],9:["#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],10:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],11:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"]},RdYlGn:{name:"Red Yellow Green",3:["#fc8d59","#ffffbf","#91cf60"],4:["#d7191c","#fdae61","#a6d96a","#1a9641"],5:["#d7191c","#fdae61","#ffffbf","#a6d96a","#1a9641"],6:["#d73027","#fc8d59","#fee08b","#d9ef8b","#91cf60","#1a9850"],7:["#d73027","#fc8d59","#fee08b","#ffffbf","#d9ef8b","#91cf60","#1a9850"],8:["#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850"],9:["#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850"],10:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],11:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"]},Accent:{name:"Accent",3:["#7fc97f","#beaed4","#fdc086"],4:["#7fc97f","#beaed4","#fdc086","#ffff99"],5:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0"],6:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f"],7:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17"],8:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"]},Dark2:{name:"Accent Dark",3:["#1b9e77","#d95f02","#7570b3"],4:["#1b9e77","#d95f02","#7570b3","#e7298a"],5:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e"],6:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02"],7:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d"],8:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"]},Paired:{name:"Paired",3:["#a6cee3","#1f78b4","#b2df8a"],4:["#a6cee3","#1f78b4","#b2df8a","#33a02c"],5:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99"],6:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c"],7:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f"],8:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00"],9:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6"],10:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a"],11:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99"],12:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]},Pastel1:{name:"Pastel 1",3:["#fbb4ae","#b3cde3","#ccebc5"],4:["#fbb4ae","#b3cde3","#ccebc5","#decbe4"],5:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6"],6:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc"],7:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd"],8:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec"],9:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Pastel2:{name:"Pastel 2",3:["#b3e2cd","#fdcdac","#cbd5e8"],4:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4"],5:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9"],6:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae"],7:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc"],8:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"]},Set1:{name:"Set 1 - Bold",3:["#e41a1c","#377eb8","#4daf4a"],4:["#e41a1c","#377eb8","#4daf4a","#984ea3"],5:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00"],6:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33"],7:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628"],8:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf"],9:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]},Set2:{name:"Set 2 - Faded",3:["#66c2a5","#fc8d62","#8da0cb"],4:["#66c2a5","#fc8d62","#8da0cb","#e78ac3"],5:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854"],6:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"],7:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494"],8:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"]},Set3:{name:"Set 3 - Pastel",3:["#8dd3c7","#ffffb3","#bebada"],4:["#8dd3c7","#ffffb3","#bebada","#fb8072"],5:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3"],6:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462"],7:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69"],8:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5"],9:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9"],10:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd"],11:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5"],12:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]}};d.exports=a}),require.register("js/details.js",function(e,f,d){"use strict";var a=f("../config.js"),c=function(){$("#details-content").load("details.html",function(){$("[id=no-json-loaded]").show(),$("[id=no-region-selected]").hide(),$("[id=region-selected]").hide()})},b=function(){$("[id=no-region-selected]").show(),$("[id=no-json-loaded]").hide(),$("[id=region-selected]").hide()},o=function(){$("[id=no-region-selected]").show(),$("[id=region-selected]").hide(),$("[id=no-json-loaded]").hide()},t=function(e){$("[id=no-region-selected]").hide(),$("[id=no-json-loaded]").hide(),$("[id=region-name]").html(e.get("name")),$("[id=region-selected]").show(),n(e)},n=function(e){a.jsonData.forEach(function(f){f.name===a.selectedPolicy&&f.data.forEach(function(f){if(f[a.geoAreaId]==e.get(a.geoAreaId)){var d=f[a.mappedProperty],c={labels:a.timeSeries,series:[d]};new Chartist.Line(".ct-chart",c)}})})};d.exports={loadDetails:c,hideFeatureDetails:o,showFeatureDetails:t,showJsonLoaded:b}}),require.register("js/map.js",function(e,f,d){"use strict";var a,c,b,o,t,n,r,l=f("../config.js"),i=f("./util.js"),s=f("./details.js"),u=new ol.style.Style({stroke:new ol.style.Stroke({color:"#000",width:1}),text:new ol.style.Text({font:"12px Calibri,sans-serif",fill:new ol.style.Fill({color:"#000"})})}),p=new ol.style.Style({stroke:new ol.style.Stroke({color:"#000",width:2}),text:new ol.style.Text({font:"12px Calibri,sans-serif",fill:new ol.style.Fill({color:"#000"})})}),h=new ol.style.Style({stroke:new ol.style.Stroke({color:"#000",width:2}),text:new ol.style.Text({font:"12px Calibri,sans-serif",fill:new ol.style.Fill({color:"#000"})})}),m=function(){l.map=new ol.Map({target:"map",layers:[new ol.layer.Tile({source:new ol.source.XYZ({attributions:"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",url:"https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"})})],options:{numZoomLevels:15},view:new ol.View({center:ol.proj.fromLonLat([4.3668409,52.0024612]),zoom:3})}),i.buildChoroplethLegend(l)},g=function(){i.findChoroplethMinMax(l),i.setChoroplethBuckets(l),i.buildChoroplethLegend(l),i.updateSlider(l),S()},v=function(e){l.selectedPolicy=e,l.jsonData.forEach(function(f){(f.name=e)&&(l.geoAreaId=f.geoAreaId,l.mappedProperty=f.mappedProperty)})},w=function(e){var f=0,d=e.get(l.geoAreaId);l.jsonData.forEach(function(e){if(e.name=l.selectedPolicy)for(var a in e.data)if(e.data[a][l.geoAreaId]==d){f=e.data[a].choroplethNum;break}}),f=f?f:0;var a=l.choropleth[f];return i.hexToRgb(a)},y=function(e,f,d){f.getText().setText(e.get("name"));var a=w(e);return f.setFill(new ol.style.Fill({color:[a.r,a.g,a.b,d]})),f},j=function(e){return y(e,u,.4)},x=function(e){return y(e,p,.9)},P=function(e){return h},S=function(){k(),$.getJSON(l.geoJsonFile.name,function(e){}).done(function(e){s.showJsonLoaded();var f=new ol.source.Vector({features:(new ol.format.GeoJSON).readFeatures(e,{featureProjection:"EPSG:3857"})});a=new ol.layer.Vector({source:f,style:j}),l.map.addLayer(a),l.map.getView().fit(f.getExtent(),l.map.getSize()),c=new ol.layer.Vector({source:new ol.source.Vector,map:l.map,style:x}),b=new ol.layer.Vector({source:new ol.source.Vector,map:l.map,style:P}),r=l.map.on("pointermove",D),n=l.map.on("click",G)}).fail(function(e){console.error("Error rendering geojson map layer: "+e)})},D=function(e){if(!e.dragging){var f=l.map.getEventPixel(e.originalEvent),d=l.map.forEachFeatureAtPixel(f,function(e){return e});d!==t&&(t&&b.getSource().removeFeature(t),d&&b.getSource().addFeature(d),t=d)}},G=function(e){var f=l.map.forEachFeatureAtPixel(e.pixel,function(e){return e});f?(o&&c.getSource().removeFeature(o),f!==o?(s.showFeatureDetails(f),c.getSource().addFeature(f),o=f):(s.hideFeatureDetails(),o=null)):(o&&(c.getSource().removeFeature(o),o=null),s.hideFeatureDetails())},k=function(e){t&&(c.getSource().removeFeature(t),t=null),o&&(c.getSource().removeFeature(o),o=null),a&&l.map.removeLayer(a),c&&l.map.removeLayer(c),b&&l.map.removeLayer(b),r&&ol.Observable.unByKey(r),n&&ol.Observable.unByKey(n)};d.exports={loadMap:m,addGeoJSONLayer:S,updateMapData:g,setNewActivePolicy:v}}),require.register("js/settings.js",function(e,f,d){"use strict";function a(e){document.body.removeChild(e.target)}var c=f("./colors.js"),b=f("../config.js"),o=f("./map.js"),t=f("./details.js"),n=[],r="",l=function(){var e="config.json";$.getJSON(e,function(e){e.choropleth=i(e.choroplethString),Object.assign(b,e),x()}).done(function(){s()}).fail(function(e){})},i=function(e){var f=e.indexOf("["),d=e.substring(0,f),a=parseInt(e.substring(f+1,f+2));return c[d][a]},s=function(){$("#settings-content").load("settings.html",function(){P(b.choropleth),m(b.selectedPolicy),u(b.modelName),h(b.geoJsonFile),$("#name-popup").load("nameSelector.html",function(){$("[id=name-change-save]").click(function(){p()})}),$("#color-popup").load("colorSelector.html",function(){$("[id=color-number-dropdown]").change(function(){S()}),$("[id=choropleth-change-save]").click(function(){G()})}),$("#model-popup").load("modelSelector.html",function(){b.allowFileUpload?$("#add-new-policy").show():$("#add-new-policy").hide(),$("[id=policy-file-selector]").change(function(){$("[id=policy-file-selected-name]").html(this.files[0].name)}),$("[id=new-policy-button]").click(function(){w()}),$("[id=policy-data-save]").click(function(){j()})}),$("#export-popup").load("exportSelector.html",function(){$("[id=export-save]").click(function(){k()})}),b.allowFileUpload?($("[id=geojson-file-selector]").change(function(){b.geoJsonFile=this.files[0],h(b.geoJsonFile),o.updateMapData()}),$("[id=change-color-btn]").click(function(){S()}),$("[id=export-config-btn]").click(function(){})):($("[id=geojson-file-selector]").prop("disabled",!0),$("[id=geojson-upload-btn]").addClass("disabled"),$("[id=name-change-btn]").prop("disabled",!0),$("[id=change-color-btn]").prop("disabled",!0),$("[id=export-config-btn]").prop("disabled",!0)),$("[id=manage-policies]").click(function(){g(b.jsonData,b.selectedPolicy),$("#policy-row-add").on("click","tr",function(){y(this)})})})},u=function(e){$("#current-model-name").html(e),""===e&&(e="MapModelViz"),$("#model-name").html(e)},p=function(){var e=$("[id=new_model_name]")[0].value;b.modelName=e,u(e)},h=function(e){$("[id=geojson-file]").html(e.name)},m=function(e){$("#current-active-policy").html(e)},g=function(e,f){n=[],r="",$("#policy-row-add tr").remove(),0==e.length?($("[id=no-policies]").show(),$("[id=policies-exist]").hide()):($("[id=no-policies]").hide(),$("[id=policies-exist]").show(),e.forEach(function(e){var d=e.name===f;v(e,d)}))},v=function(e,f){var d="<tr>";f&&(d='<tr class="table-primary">'),d+="<td>"+e.name+"</td>",d+="<td>"+e.file.name+"</td>",d+="<td>"+e.mappedProperty+"</td>",d+="<td>"+e.geoAreaId+"</td>",d+="</tr>",$("#policy-row-add").append(d)},w=function(){var e={name:$("[id=new_policy_name]")[0].value,data:null,file:$("[id=policy-file-selector]")[0].files[0],geoAreaId:$("[id=geo_id_property]")[0].value,mappedProperty:$("[id=mapped_property_name]")[0].value};n.push(e),v(e,!1)},y=function(e){$(e).addClass("table-primary").siblings().removeClass("table-primary"),r=e.children[0].innerText},j=function(){0!==n.length&&b.jsonData.push(n),""!==r&&b.selectedPolicy!==r&&(b.selectedPolicy=r,m(b.selectedPolicy),x())},x=function(){b.jsonData.forEach(function(e){e.name===b.selectedPolicy?(b.geoAreaId=e.geoAreaId,b.mappedProperty=e.mappedProperty,$.getJSON(e.file.name,function(f){e.data=f}).done(function(){o.updateMapData(),t.loadDetails()}).fail(function(e){console.error("error loading model data: "+e),t.loadDetails()})):e.data=null})},P=function(e){$("#current-color-settings").html(D(e))},S=function(){$("#all-color-selection")[0].innerHTML="",$("#current-color-selection").html(D(b.choropleth));var e=parseInt($("#color-number-dropdown")[0].value);for(var f in c)if(void 0!==c[f][e]){var d=D(c[f][e]),a='<div class="row form-group color-radio-row"><div class="col-sm-2 form-check">';a+='<input class="form-check-input" type="radio" name="choropleth-color-selector" id="'+f+'" value="'+f+'">',a+='<label class="form-check-label" for="'+f+'">'+f+"</label>",a+="</div>",a+='<div class="col-sm-10"> <div class="col-form-label choropleth-display">'+d+"</div></div>",a+="</div>",$("#all-color-selection").append(a)}},D=function(e){var f='<div class="row">';return null!==e&&e.forEach(function(e){f+='<div class="col" style="background-color:'+e+';"/>'}),f+="</div>"},G=function(){var e=$("input[name=choropleth-color-selector]:checked").val(),f=$("#color-number-dropdown")[0].value;b.choropleth=c[e][f],b.choroplethString=e+"["+f.str()+"]",$("#current-color-selection").html(D(b.choropleth)),P(b.choropleth),o.updateMapData()},k=function(){var e={modelName:b.modelName,choroplethString:b.choroplethString,geoJsonFile:{name:b.geoJsonFile.name},jsonData:b.jsonData,selectedPolicy:b.selectedPolicy};e.jsonData.forEach(function(e){delete e.data}),e.allowFileUpload=$("[id=allow-file-change]").hasClass("active");var f=JSON.stringify(e),d=new Blob([f],{type:"text/json"}),c="config.json",o=document.createElement("a");o.download=c,o.innerHTML="Config Download",window.URL=window.URL||window.webkitURL,o.href=window.URL.createObjectURL(d),o.onclick=a,o.style.display="none",document.body.appendChild(o),o.click()};d.exports={loadSettings:s,loadOptionalConfig:l}}),require.register("js/util.js",function(e,f,d){"use strict";var a=function(e){var f=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return f?{r:parseInt(f[1],16),g:parseInt(f[2],16),b:parseInt(f[3],16)}:null},c=function(e){var f=1/0,d=-(1/0);e.jsonData.forEach(function(a){if(a.name=e.selectedPolicy)for(var c in a.data)a.data[c][e.mappedProperty][e.currentIndex]<f&&(f=a.data[c][e.mappedProperty][e.currentIndex]),a.data[c][e.mappedProperty][e.currentIndex]>d&&(d=a.data[c][e.mappedProperty][e.currentIndex])}),e.choroplethDetails.min=f,e.choroplethDetails.max=d},b=function(e){if(null!==e.choropleth){var f=e.choropleth.length,d=e.choroplethDetails.max-e.choroplethDetails.min,a=(d+0)/f;e.choroplethRanges=[];for(var c=0;c<f;c++)e.choroplethRanges[c]=e.choroplethDetails.min+a*c;e.choroplethRanges[c]=e.choroplethDetails.max,e.jsonData.forEach(function(d){if(d.name=e.selectedPolicy)for(var c in d.data){var b=f-1,o=d.data[c][e.mappedProperty][e.currentIndex];o!==e.choroplethDetails.max&&(b=Math.floor((o-e.choroplethDetails.min)/a)),d.data[c].choroplethNum=b}})}else e.choroplethDetails={min:-(1/0),max:1/0},e.choroplethRanges=[]},o=function(e){if(null!==e.choropleth){$("[id=legend]").show(),$("[id=slider]").show();var f=e.choropleth.length,d=20,a=d*f+10;$("[id=legend]").height(a),$("[id=choropleth-legend]").html("");for(var c=0;c<f;c++){var b=$("<div/>",{"class":"choropleth-details"}),o=$("<div/>",{style:"background-color:"+e.choropleth[c]+";","class":"choropleth-color"});if(b.append(o),e.choroplethRanges&&e.choroplethRanges.length==f+1){$("[id=legend]").width(130);var n=$("<div/>",{"class":"choropleth-text",html:Math.round(100*e.choroplethRanges[c])/100+" to "+Math.round(100*e.choroplethRanges[c+1])/100
});b.append(n)}else $("[id=legend]").width(30);$("[id=choropleth-legend]").append(b),t()}}else $("[id=legend]").hide(),$("[id=slider]").hide()},t=function(){if($("[id=slider]").is(":visible")){var e=parseInt($("[id=legend]").css("left").slice(0,-2)),f=$("[id=legend]").width(),d=$("[id=map-viewport]").width(),a=e+f+e,c=d-a-25-2*e;$("[id=slider]").css("width",c+"px"),$("[id=slider]").css("left",a+"px")}},n=function(e){var f=e.timeSeries.length,d=e.timeSeries[0],a=e.timeSeries[f-1];$("[id=the-slider]").attr("min",d),$("[id=the-slider]").attr("max",a),$("[id=the-slider]").attr("value",e.currentIndex)};d.exports={hexToRgb:a,findChoroplethMinMax:c,setChoroplethBuckets:b,buildChoroplethLegend:o,configureSlider:t,updateSlider:n}}),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,f,d){window.$=f("jquery"),window.jQuery=f("jquery"),window.Tether=f("tether")})}(),require("___globals___");