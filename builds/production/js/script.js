!function e(o,i,n){function t(r,c){if(!i[r]){if(!o[r]){var l="function"==typeof require&&require;if(!c&&l)return l(r,!0);if(a)return a(r,!0);throw new Error("Cannot find module '"+r+"'")}var s=i[r]={exports:{}};o[r][0].call(s.exports,function(e){var i=o[r][1][e];return t(i||e)},s,s.exports,e,o,i,n)}return i[r].exports}for(var a="function"==typeof require&&require,r=0;r<n.length;r++)t(n[r]);return t}({1:[function(e,o,i){$.urlParam=function(e){var o=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.href);return null!=o?o[1]||0:null};var n=$.urlParam("chart");null!=n&&($(".slide").hide(),$("#"+n).show()),d3.json("./data/invasion.geojson",function(e,o){d3.json("./data/invasion.json",function(e,i){d3.json("./shapefiles/waters.json",function(e,n){d3.json("./shapefiles/extent.json",function(e,t){d3.json("./shapefiles/species.json",function(e,a){d3.json("./data/lookup.json",function(e,r){var c=(i.waters,r.targets);mapboxgl.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA";var l=new mapboxgl.Map({container:"map",style:"mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf",center:[-53.964844,35.380093],zoom:2,minZoom:2});l.addControl(new mapboxgl.NavigationControl),l.scrollZoom.disable(),l.on("load",function(){function e(e,o){l.addLayer({id:e+"-layer",interactive:!0,source:e,layout:{},type:"fill",paint:{"fill-antialias":!0,"fill-opacity":1,"fill-color":o,"fill-outline-color":"#333333"}},"place-neighbourhood")}function i(e,o,i){function n(o){setTimeout(function(){requestAnimationFrame(n),s+=(u-s)/t,r-=.9/t,r>=0&&(l.setPaintProperty("invasion-layer-"+e,"circle-radius",s),l.setPaintProperty("invasion-layer-"+e,"circle-opacity",r)),r<=0&&(s=c,r=a)},2e3/t)}cap=e;var t=15,a=1,r=a,c=5,s=c,u=18;l.addLayer({id:"invasion-layer-"+e,type:"circle",source:"invasion",paint:{"circle-radius":c,"circle-radius-transition":{duration:0},"circle-opacity-transition":{duration:0},"circle-color":"rgba("+o+", 0.45)"},filter:["==","collectionYear",e]}),l.addLayer({id:"invasion-layer1-"+e,type:"circle",source:"invasion",paint:{"circle-radius":c,"circle-color":"rgba("+o+", 0.8)"},filter:["==","collectionYear",e]}),n(0),l.setLayoutProperty("invasion-layer1-"+e,"visibility","none"),l.setLayoutProperty("invasion-layer-"+e,"visibility","none")}l.addSource("waters",{type:"geojson",data:n}),l.addSource("species",{type:"geojson",data:a}),l.addSource("extent",{type:"geojson",data:t}),l.addSource("invasion",{type:"geojson",data:o}),index=0;!function(){for(var e=1986;e<=2016;e++)i(e,"178,78,73",e)}(),e("extent","#b24e49"),e("waters","#b24e49"),e("species","#333333"),i(u,"178,78,73",2016);$(document).ready(function(){}),$("#fullpage").show()});for(var s=["contours","museums"],u=0;u<s.length;u++){var d=s[u],p=document.createElement("a");p.href="#",p.className="active",p.textContent=d,p.onclick=function(e){var o=this.textContent;e.preventDefault(),e.stopPropagation(),"visible"===l.getLayoutProperty(o,"visibility")?(l.setLayoutProperty(o,"visibility","none"),this.className=""):(this.className="active",l.setLayoutProperty(o,"visibility","visible"))}}mapboxgl.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA";var y=new mapboxgl.Map({container:"mapLookup",style:"mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf",center:[-96.95459,46.489884],zoom:5.4,minZoom:4});y.addControl(new mapboxgl.NavigationControl),y.scrollZoom.disable(),y.on("load",function(){function e(e){for(var o=0;o<c.length;o++)if(e==c[o].target)return y.flyTo({center:[c[o].longitude,c[o].latitude],zoom:12}),void i(c[o].longitude,c[o].latitude,"<div class='lakename'>"+e+"</div><div>Since: "+c[o].since+"</div/>")}function i(e,o,i){s.setLngLat([e,o]).setHTML(i).addTo(y)}function r(e,o,i){function n(o){setTimeout(function(){requestAnimationFrame(n),l+=(s-l)/t,r-=.9/t,r>=0&&(y.setPaintProperty("invasion-layer-"+e,"circle-radius",l),y.setPaintProperty("invasion-layer-"+e,"circle-opacity",r)),r<=0&&(l=c,r=a)},2e3/t)}cap=e;var t=15,a=1,r=a,c=5,l=c,s=18;y.addLayer({id:"invasion-layer-"+e,type:"circle",source:"invasion",paint:{"circle-radius":c,"circle-radius-transition":{duration:0},"circle-opacity-transition":{duration:0},"circle-color":"rgba("+o+", 0.45)"},filter:["==","collectionYear",e]}),y.addLayer({id:"invasion-layer1-"+e,type:"circle",source:"invasion",paint:{"circle-radius":c,"circle-color":"rgba("+o+", 0.8)"},filter:["==","collectionYear",e]}),n(0),y.setLayoutProperty("invasion-layer1-"+e,"visibility","none"),y.setLayoutProperty("invasion-layer-"+e,"visibility","none")}function l(){$(window).width()<=500?y.flyTo({center:[-94,46],zoom:4.5}):y.flyTo({center:[-96.95459,46.489884],zoom:5.4}),$(window).resize(function(){$(window).width()<=500?y.flyTo({center:[-94,46],zoom:4.5}):y.flyTo({center:[-96.95459,46.489884],zoom:5.4})}),s.remove()}y.addSource("waters",{type:"geojson",data:n}),y.addSource("species",{type:"geojson",data:a}),y.addSource("extent",{type:"geojson",data:t}),y.addSource("invasion",{type:"geojson",data:o});var s=new mapboxgl.Popup({closeOnClick:!1});$(function(){$("#filter_box").on("keyup search",function(e){$(".lakeselect").hide();var o=$("#filter_box").val();$(".lakeselect").each(function(){-1!=$(this).text().toUpperCase().indexOf(o.toUpperCase())&&$(this).show()}),s.remove(),l()})}),$(".lakeselect").on("click",function(){e($(this).text())}),function(e,o){y.addLayer({id:e+"-layer",interactive:!0,source:e,layout:{},type:"fill",paint:{"fill-antialias":!0,"fill-opacity":1,"fill-color":o,"fill-outline-color":"#333333"}},"place-neighbourhood")}("waters","#b24e49"),function(){for(var e=1986;e<=2016;e++)r(e,"178,78,73",e)}(),l()})})})})})})})},{}]},{},[1]);