/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ye="srgb",rn="srgb-linear",Wr="display-p3",Ki="display-p3-linear",ki="linear",ee="srgb",Hi="rec709";const ls="300 es";class Hn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nr=Math.PI/180,Br=180/Math.PI;function Wn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[i&255]+de[i>>8&255]+de[i>>16&255]+de[i>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function ka(i,t){return(i%t+t)%t}function ir(i,t,e){return(1-e)*i+e*t}function Kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,r,s,a,o,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],M=r[0],p=r[3],d=r[6],C=r[1],v=r[4],S=r[7],F=r[2],I=r[5],P=r[8];return s[0]=a*M+o*C+c*F,s[3]=a*p+o*v+c*I,s[6]=a*d+o*S+c*P,s[1]=l*M+h*C+u*F,s[4]=l*p+h*v+u*I,s[7]=l*d+h*S+u*P,s[2]=f*M+m*C+g*F,s[5]=f*p+m*v+g*I,s[8]=f*d+m*S+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*s,m=l*s-a*c,g=e*u+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=u*M,t[1]=(r*l-h*n)*M,t[2]=(o*n-r*a)*M,t[3]=f*M,t[4]=(h*e-r*c)*M,t[5]=(r*s-o*e)*M,t[6]=m*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(rr.makeScale(t,e)),this}rotate(t){return this.premultiply(rr.makeRotation(-t)),this}translate(t,e){return this.premultiply(rr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rr=new Ot;function ua(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ha(){const i=Wi("canvas");return i.style.display="block",i}const hs={};function Gi(i){i in hs||(hs[i]=!0,console.warn(i))}function Wa(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Xa(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qa(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const us=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fs=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zn={[rn]:{transfer:ki,primaries:Hi,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ye]:{transfer:ee,primaries:Hi,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ki]:{transfer:ki,primaries:"p3",luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(fs),fromReference:i=>i.applyMatrix3(us)},[Wr]:{transfer:ee,primaries:"p3",luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(fs),fromReference:i=>i.applyMatrix3(us).convertLinearToSRGB()}},Ya=new Set([rn,Ki]),Zt={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ya.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Zn[t].toReference,r=Zn[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Zn[i].primaries},getTransfer:function(i){return i===""?ki:Zn[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Zn[t].luminanceCoefficients)}};function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yn;class Ka{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yn===void 0&&(yn=Wi("canvas")),yn.width=t.width,yn.height=t.height;const n=yn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=yn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Za=0;class fa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Za++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ar(r[a].image)):s.push(ar(r[a]))}else s=ar(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ar(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ja=0;class me extends Hn{constructor(t=me.DEFAULT_IMAGE,e=me.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=me.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ja++}),this.uuid=Wn(),this.name="",this.source=new fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}me.DEFAULT_IMAGE=null;me.DEFAULT_MAPPING=300;me.DEFAULT_ANISOTROPY=1;class $t{constructor(t=0,e=0,n=0,r=1){$t.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],g=c[9],M=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,S=(m+1)/2,F=(d+1)/2,I=(h+f)/4,P=(u+M)/4,U=(g+p)/4;return v>S&&v>F?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=I/n,s=P/n):S>F?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=I/r,s=U/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=P/s,r=U/s),this.set(n,r,s,e),this}let C=Math.sqrt((p-g)*(p-g)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(p-g)/C,this.y=(u-M)/C,this.z=(f-h)/C,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $a extends Hn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new $t(0,0,t,e),this.scissorTest=!1,this.viewport=new $t(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new me(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends $a{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class da extends me{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ja extends me{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],M=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=M;return}if(u!==M||c!==f||l!==m||h!==g){let p=1-o;const d=c*f+l*m+h*g+u*M,C=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const F=Math.sqrt(v),I=Math.atan2(F,d*C);p=Math.sin(p*I)/F,o=Math.sin(o*I)/F}const S=o*C;if(c=c*p+f*S,l=l*p+m*S,h=h*p+g*S,u=u*p+M*S,p===1-o){const F=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=F,l*=F,h*=F,u*=F}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+h*u+c*m-l*f,t[e+1]=c*g+h*f+l*u-o*m,t[e+2]=l*g+h*m+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),u=o(s/2),f=c(n/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"YZX":this._x=f*h*u+l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u-f*m*g;break;case"XZY":this._x=f*h*u-l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ds.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ds.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),h=2*(o*e-s*r),u=2*(s*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return or.copy(this).projectOnVector(t),this.sub(or)}reflect(t){return this.sub(or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const or=new B,ds=new Xn;class Mn{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ie.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ie.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ie.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ie):Ie.fromBufferAttribute(s,a),Ie.applyMatrix4(t.matrixWorld),this.expandByPoint(Ie);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gi.copy(n.boundingBox)),gi.applyMatrix4(t.matrixWorld),this.union(gi)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ie),Ie.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jn),_i.subVectors(this.max,Jn),En.subVectors(t.a,Jn),Tn.subVectors(t.b,Jn),An.subVectors(t.c,Jn),Ze.subVectors(Tn,En),Je.subVectors(An,Tn),an.subVectors(En,An);let e=[0,-Ze.z,Ze.y,0,-Je.z,Je.y,0,-an.z,an.y,Ze.z,0,-Ze.x,Je.z,0,-Je.x,an.z,0,-an.x,-Ze.y,Ze.x,0,-Je.y,Je.x,0,-an.y,an.x,0];return!cr(e,En,Tn,An,_i)||(e=[1,0,0,0,1,0,0,0,1],!cr(e,En,Tn,An,_i))?!1:(xi.crossVectors(Ze,Je),e=[xi.x,xi.y,xi.z],cr(e,En,Tn,An,_i))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ie).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ie).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ve[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ve[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ve[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ve[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ve[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ve[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ve[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ve[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ve),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ve=[new B,new B,new B,new B,new B,new B,new B,new B],Ie=new B,gi=new Mn,En=new B,Tn=new B,An=new B,Ze=new B,Je=new B,an=new B,Jn=new B,_i=new B,xi=new B,on=new B;function cr(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){on.fromArray(i,s);const o=r.x*Math.abs(on.x)+r.y*Math.abs(on.y)+r.z*Math.abs(on.z),c=t.dot(on),l=e.dot(on),h=n.dot(on);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Qa=new Mn,$n=new B,lr=new B;class fi{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qa.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$n.subVectors(t,this.center);const e=$n.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector($n,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($n.copy(t.center).add(lr)),this.expandByPoint($n.copy(t.center).sub(lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ke=new B,hr=new B,vi=new B,$e=new B,ur=new B,Mi=new B,fr=new B;class to{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ke)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ke.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ke.copy(this.origin).addScaledVector(this.direction,e),ke.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){hr.copy(t).add(e).multiplyScalar(.5),vi.copy(e).sub(t).normalize(),$e.copy(this.origin).sub(hr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(vi),o=$e.dot(this.direction),c=-$e.dot(vi),l=$e.lengthSq(),h=Math.abs(1-a*a);let u,f,m,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){const M=1/h;u*=M,f*=M,m=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(hr).addScaledVector(vi,f),m}intersectSphere(t,e){ke.subVectors(t.center,this.origin);const n=ke.dot(this.direction),r=ke.dot(ke)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ke)!==null}intersectTriangle(t,e,n,r,s){ur.subVectors(e,t),Mi.subVectors(n,t),fr.crossVectors(ur,Mi);let a=this.direction.dot(fr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$e.subVectors(this.origin,t);const c=o*this.direction.dot(Mi.crossVectors($e,Mi));if(c<0)return null;const l=o*this.direction.dot(ur.cross($e));if(l<0||c+l>a)return null;const h=-o*$e.dot(fr);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,r,s,a,o,c,l,h,u,f,m,g,M,p){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,h,u,f,m,g,M,p)}set(t,e,n,r,s,a,o,c,l,h,u,f,m,g,M,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=M,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/bn.setFromMatrixColumn(t,0).length(),s=1/bn.setFromMatrixColumn(t,1).length(),a=1/bn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,m=a*u,g=o*h,M=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=f-M*l,e[9]=-o*c,e[2]=M-f*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,m=c*u,g=l*h,M=l*u;e[0]=f+M*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=M+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,m=c*u,g=l*h,M=l*u;e[0]=f-M*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=M-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,m=a*u,g=o*h,M=o*u;e[0]=c*h,e[4]=g*l-m,e[8]=f*l+M,e[1]=c*u,e[5]=M*l+f,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=M-f*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*u+g,e[10]=f-M*u}else if(t.order==="XZY"){const f=a*c,m=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+M,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=M*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eo,t,no)}lookAt(t,e,n){const r=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),je.crossVectors(n,Ae),je.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),je.crossVectors(n,Ae)),je.normalize(),Si.crossVectors(Ae,je),r[0]=je.x,r[4]=Si.x,r[8]=Ae.x,r[1]=je.y,r[5]=Si.y,r[9]=Ae.y,r[2]=je.z,r[6]=Si.z,r[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],M=n[6],p=n[10],d=n[14],C=n[3],v=n[7],S=n[11],F=n[15],I=r[0],P=r[4],U=r[8],Q=r[12],x=r[1],y=r[5],G=r[9],Y=r[13],X=r[2],lt=r[6],K=r[10],st=r[14],O=r[3],mt=r[7],pt=r[11],gt=r[15];return s[0]=a*I+o*x+c*X+l*O,s[4]=a*P+o*y+c*lt+l*mt,s[8]=a*U+o*G+c*K+l*pt,s[12]=a*Q+o*Y+c*st+l*gt,s[1]=h*I+u*x+f*X+m*O,s[5]=h*P+u*y+f*lt+m*mt,s[9]=h*U+u*G+f*K+m*pt,s[13]=h*Q+u*Y+f*st+m*gt,s[2]=g*I+M*x+p*X+d*O,s[6]=g*P+M*y+p*lt+d*mt,s[10]=g*U+M*G+p*K+d*pt,s[14]=g*Q+M*Y+p*st+d*gt,s[3]=C*I+v*x+S*X+F*O,s[7]=C*P+v*y+S*lt+F*mt,s[11]=C*U+v*G+S*K+F*pt,s[15]=C*Q+v*Y+S*st+F*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],M=t[7],p=t[11],d=t[15];return g*(+s*c*u-r*l*u-s*o*f+n*l*f+r*o*m-n*c*m)+M*(+e*c*m-e*l*f+s*a*f-r*a*m+r*l*h-s*c*h)+p*(+e*l*u-e*o*m-s*a*u+n*a*m+s*o*h-n*l*h)+d*(-r*o*h-e*c*u+e*o*f+r*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],M=t[13],p=t[14],d=t[15],C=u*p*l-M*f*l+M*c*m-o*p*m-u*c*d+o*f*d,v=g*f*l-h*p*l-g*c*m+a*p*m+h*c*d-a*f*d,S=h*M*l-g*u*l+g*o*m-a*M*m-h*o*d+a*u*d,F=g*u*c-h*M*c-g*o*f+a*M*f+h*o*p-a*u*p,I=e*C+n*v+r*S+s*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=C*P,t[1]=(M*f*s-u*p*s-M*r*m+n*p*m+u*r*d-n*f*d)*P,t[2]=(o*p*s-M*c*s+M*r*l-n*p*l-o*r*d+n*c*d)*P,t[3]=(u*c*s-o*f*s-u*r*l+n*f*l+o*r*m-n*c*m)*P,t[4]=v*P,t[5]=(h*p*s-g*f*s+g*r*m-e*p*m-h*r*d+e*f*d)*P,t[6]=(g*c*s-a*p*s-g*r*l+e*p*l+a*r*d-e*c*d)*P,t[7]=(a*f*s-h*c*s+h*r*l-e*f*l-a*r*m+e*c*m)*P,t[8]=S*P,t[9]=(g*u*s-h*M*s-g*n*m+e*M*m+h*n*d-e*u*d)*P,t[10]=(a*M*s-g*o*s+g*n*l-e*M*l-a*n*d+e*o*d)*P,t[11]=(h*o*s-a*u*s-h*n*l+e*u*l+a*n*m-e*o*m)*P,t[12]=F*P,t[13]=(h*M*r-g*u*r+g*n*f-e*M*f-h*n*p+e*u*p)*P,t[14]=(g*o*r-a*M*r-g*n*c+e*M*c+a*n*p-e*o*p)*P,t[15]=(a*u*r-h*o*r+h*n*c-e*u*c-a*n*f+e*o*f)*P,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,f=s*l,m=s*h,g=s*u,M=a*h,p=a*u,d=o*u,C=c*l,v=c*h,S=c*u,F=n.x,I=n.y,P=n.z;return r[0]=(1-(M+d))*F,r[1]=(m+S)*F,r[2]=(g-v)*F,r[3]=0,r[4]=(m-S)*I,r[5]=(1-(f+d))*I,r[6]=(p+C)*I,r[7]=0,r[8]=(g+v)*P,r[9]=(p-C)*P,r[10]=(1-(f+M))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=bn.set(r[0],r[1],r[2]).length();const a=bn.set(r[4],r[5],r[6]).length(),o=bn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],De.copy(this);const l=1/s,h=1/a,u=1/o;return De.elements[0]*=l,De.elements[1]*=l,De.elements[2]*=l,De.elements[4]*=h,De.elements[5]*=h,De.elements[6]*=h,De.elements[8]*=u,De.elements[9]*=u,De.elements[10]*=u,e.setFromRotationMatrix(De),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=2e3){const c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),f=(n+r)/(n-r);let m,g;if(o===2e3)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===2001)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=2e3){const c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(a-s),f=(e+t)*l,m=(n+r)*h;let g,M;if(o===2e3)g=(a+s)*u,M=-2*u;else if(o===2001)g=s*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bn=new B,De=new jt,eo=new B(0,0,0),no=new B(1,1,1),je=new B,Si=new B,Ae=new B,ps=new jt,ms=new Xn;class Oe{constructor(t=0,e=0,n=0,r=Oe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ps.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ps,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ms.setFromEuler(this),this.setFromQuaternion(ms,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oe.DEFAULT_ORDER="XYZ";class pa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let io=0;const gs=new B,wn=new Xn,He=new jt,yi=new B,jn=new B,ro=new B,so=new Xn,_s=new B(1,0,0),xs=new B(0,1,0),vs=new B(0,0,1),Ms={type:"added"},ao={type:"removed"},Cn={type:"childadded",child:null},dr={type:"childremoved",child:null};class ge extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:io++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new B,e=new Oe,n=new Xn,r=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ot}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wn.setFromAxisAngle(t,e),this.quaternion.multiply(wn),this}rotateOnWorldAxis(t,e){return wn.setFromAxisAngle(t,e),this.quaternion.premultiply(wn),this}rotateX(t){return this.rotateOnAxis(_s,t)}rotateY(t){return this.rotateOnAxis(xs,t)}rotateZ(t){return this.rotateOnAxis(vs,t)}translateOnAxis(t,e){return gs.copy(t).applyQuaternion(this.quaternion),this.position.add(gs.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_s,t)}translateY(t){return this.translateOnAxis(xs,t)}translateZ(t){return this.translateOnAxis(vs,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(He.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yi.copy(t):yi.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),jn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?He.lookAt(jn,yi,this.up):He.lookAt(yi,jn,this.up),this.quaternion.setFromRotationMatrix(He),r&&(He.extractRotation(r.matrixWorld),wn.setFromRotationMatrix(He),this.quaternion.premultiply(wn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ms),Cn.child=t,this.dispatchEvent(Cn),Cn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ao),dr.child=t,this.dispatchEvent(dr),dr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),He.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),He.multiply(t.parent.matrixWorld)),t.applyMatrix4(He),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ms),Cn.child=t,this.dispatchEvent(Cn),Cn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jn,t,ro),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jn,so,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ge.DEFAULT_UP=new B(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ue=new B,We=new B,pr=new B,Xe=new B,Rn=new B,Pn=new B,Ss=new B,mr=new B,gr=new B,_r=new B,xr=new $t,vr=new $t,Mr=new $t;class Ne{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ue.subVectors(t,e),r.cross(Ue);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ue.subVectors(r,e),We.subVectors(n,e),pr.subVectors(t,e);const a=Ue.dot(Ue),o=Ue.dot(We),c=Ue.dot(pr),l=We.dot(We),h=We.dot(pr),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Xe)===null?!1:Xe.x>=0&&Xe.y>=0&&Xe.x+Xe.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,Xe)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Xe.x),c.addScaledVector(a,Xe.y),c.addScaledVector(o,Xe.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return xr.setScalar(0),vr.setScalar(0),Mr.setScalar(0),xr.fromBufferAttribute(t,e),vr.fromBufferAttribute(t,n),Mr.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(xr,s.x),a.addScaledVector(vr,s.y),a.addScaledVector(Mr,s.z),a}static isFrontFacing(t,e,n,r){return Ue.subVectors(n,e),We.subVectors(t,e),Ue.cross(We).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ue.subVectors(this.c,this.b),We.subVectors(this.a,this.b),Ue.cross(We).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ne.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ne.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ne.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ne.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ne.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Rn.subVectors(r,n),Pn.subVectors(s,n),mr.subVectors(t,n);const c=Rn.dot(mr),l=Pn.dot(mr);if(c<=0&&l<=0)return e.copy(n);gr.subVectors(t,r);const h=Rn.dot(gr),u=Pn.dot(gr);if(h>=0&&u<=h)return e.copy(r);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Rn,a);_r.subVectors(t,s);const m=Rn.dot(_r),g=Pn.dot(_r);if(g>=0&&m<=g)return e.copy(s);const M=m*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Pn,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Ss.subVectors(s,r),o=(u-h)/(u-h+(m-g)),e.copy(r).addScaledVector(Ss,o);const d=1/(p+M+f);return a=M*d,o=f*d,e.copy(n).addScaledVector(Rn,a).addScaledVector(Pn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ma={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qe={h:0,s:0,l:0},Ei={h:0,s:0,l:0};function Sr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Zt.workingColorSpace){if(t=ka(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Sr(a,s,t+1/3),this.g=Sr(a,s,t),this.b=Sr(a,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=ye){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=ma[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Zt.fromWorkingColorSpace(pe.copy(this),t),Math.round(fe(pe.r*255,0,255))*65536+Math.round(fe(pe.g*255,0,255))*256+Math.round(fe(pe.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(pe.copy(this),e);const n=pe.r,r=pe.g,s=pe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(pe.copy(this),e),t.r=pe.r,t.g=pe.g,t.b=pe.b,t}getStyle(t=ye){Zt.fromWorkingColorSpace(pe.copy(this),t);const e=pe.r,n=pe.g,r=pe.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Qe),this.setHSL(Qe.h+t,Qe.s+e,Qe.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qe),t.getHSL(Ei);const n=ir(Qe.h,Ei.h,e),r=ir(Qe.s,Ei.s,e),s=ir(Qe.l,Ei.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pe=new Ht;Ht.NAMES=ma;let oo=0;class di extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oo++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zi extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new B,Ti=new ut;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ti.fromBufferAttribute(this,e),Ti.applyMatrix3(t),this.setXY(e,Ti.x,Ti.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class ga extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _a extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let co=0;const Pe=new jt,yr=new ge,Ln=new B,be=new Mn,Qn=new Mn,he=new B;class Ce extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:co++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ua(t)?_a:ga)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return yr.lookAt(t),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ln).negate(),this.translate(Ln.x,Ln.y,Ln.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];be.setFromBufferAttribute(s),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,be.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,be.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(be.min),this.boundingBox.expandByPoint(be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(be.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Qn.setFromBufferAttribute(o),this.morphTargetsRelative?(he.addVectors(be.min,Qn.min),be.expandByPoint(he),he.addVectors(be.max,Qn.max),be.expandByPoint(he)):(be.expandByPoint(Qn.min),be.expandByPoint(Qn.max))}be.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)he.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(he));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)he.fromBufferAttribute(o,l),c&&(Ln.fromBufferAttribute(t,l),he.add(Ln)),r=Math.max(r,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new B,c[U]=new B;const l=new B,h=new B,u=new B,f=new ut,m=new ut,g=new ut,M=new B,p=new B;function d(U,Q,x){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,Q),u.fromBufferAttribute(n,x),f.fromBufferAttribute(s,U),m.fromBufferAttribute(s,Q),g.fromBufferAttribute(s,x),h.sub(l),u.sub(l),m.sub(f),g.sub(f);const y=1/(m.x*g.y-g.x*m.y);isFinite(y)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(y),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(y),o[U].add(M),o[Q].add(M),o[x].add(M),c[U].add(p),c[Q].add(p),c[x].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let U=0,Q=C.length;U<Q;++U){const x=C[U],y=x.start,G=x.count;for(let Y=y,X=y+G;Y<X;Y+=3)d(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const v=new B,S=new B,F=new B,I=new B;function P(U){F.fromBufferAttribute(r,U),I.copy(F);const Q=o[U];v.copy(Q),v.sub(F.multiplyScalar(F.dot(Q))).normalize(),S.crossVectors(I,Q);const y=S.dot(c[U])<0?-1:1;a.setXYZW(U,v.x,v.y,v.z,y)}for(let U=0,Q=C.length;U<Q;++U){const x=C[U],y=x.start,G=x.count;for(let Y=y,X=y+G;Y<X;Y+=3)P(t.getX(Y+0)),P(t.getX(Y+1)),P(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new B,s=new B,a=new B,o=new B,c=new B,l=new B,h=new B,u=new B;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),M=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let M=0,p=c.length;M<p;M++){o.isInterleavedBufferAttribute?m=c[M]*o.data.stride+o.offset:m=c[M]*h;for(let d=0;d<h;d++)f[g++]=l[m++]}return new Fe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ys=new jt,cn=new to,Ai=new fi,Es=new B,bi=new B,wi=new B,Ci=new B,Er=new B,Ri=new B,Ts=new B,Pi=new B;class Xt extends ge{constructor(t=new Ce,e=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ri.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(Er.fromBufferAttribute(u,t),a?Ri.addScaledVector(Er,h):Ri.addScaledVector(Er.sub(e),h))}e.add(Ri)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ai.copy(n.boundingSphere),Ai.applyMatrix4(s),cn.copy(t.ray).recast(t.near),!(Ai.containsPoint(cn.origin)===!1&&(cn.intersectSphere(Ai,Es)===null||cn.origin.distanceToSquared(Es)>(t.far-t.near)**2))&&(ys.copy(s).invert(),cn.copy(t.ray).applyMatrix4(ys),!(n.boundingBox!==null&&cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){const p=f[g],d=a[p.materialIndex],C=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=C,F=v;S<F;S+=3){const I=o.getX(S),P=o.getX(S+1),U=o.getX(S+2);r=Li(this,d,t,n,l,h,u,I,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=g,d=M;p<d;p+=3){const C=o.getX(p),v=o.getX(p+1),S=o.getX(p+2);r=Li(this,a,t,n,l,h,u,C,v,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){const p=f[g],d=a[p.materialIndex],C=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=C,F=v;S<F;S+=3){const I=S,P=S+1,U=S+2;r=Li(this,d,t,n,l,h,u,I,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let p=g,d=M;p<d;p+=3){const C=p,v=p+1,S=p+2;r=Li(this,a,t,n,l,h,u,C,v,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function lo(i,t,e,n,r,s,a,o){let c;if(t.side===1?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===0,o),c===null)return null;Pi.copy(o),Pi.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Pi);return l<e.near||l>e.far?null:{distance:l,point:Pi.clone(),object:i}}function Li(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,bi),i.getVertexPosition(c,wi),i.getVertexPosition(l,Ci);const h=lo(i,t,e,n,bi,wi,Ci,Ts);if(h){const u=new B;Ne.getBarycoord(Ts,bi,wi,Ci,u),r&&(h.uv=Ne.getInterpolatedAttribute(r,o,c,l,u,new ut)),s&&(h.uv1=Ne.getInterpolatedAttribute(s,o,c,l,u,new ut)),a&&(h.normal=Ne.getInterpolatedAttribute(a,o,c,l,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new B,materialIndex:0};Ne.getNormal(bi,wi,Ci,f.normal),h.face=f,h.barycoord=u}return h}class qn extends Ce{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(M,p,d,C,v,S,F,I,P,U,Q){const x=S/P,y=F/U,G=S/2,Y=F/2,X=I/2,lt=P+1,K=U+1;let st=0,O=0;const mt=new B;for(let pt=0;pt<K;pt++){const gt=pt*y-Y;for(let Ut=0;Ut<lt;Ut++){const zt=Ut*x-G;mt[M]=zt*C,mt[p]=gt*v,mt[d]=X,l.push(mt.x,mt.y,mt.z),mt[M]=0,mt[p]=0,mt[d]=I>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(Ut/P),u.push(1-pt/U),st+=1}}for(let pt=0;pt<U;pt++)for(let gt=0;gt<P;gt++){const Ut=f+gt+lt*pt,zt=f+gt+lt*(pt+1),D=f+(gt+1)+lt*(pt+1),L=f+(gt+1)+lt*pt;c.push(Ut,zt,L),c.push(zt,D,L),O+=6}o.addGroup(m,O,Q),m+=O,f+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vn(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function _e(i){const t={};for(let e=0;e<i.length;e++){const n=Vn(i[e]);for(const r in n)t[r]=n[r]}return t}function ho(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xa(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const uo={clone:Vn,merge:_e};var fo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,po=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ye extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fo,this.fragmentShader=po,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vn(t.uniforms),this.uniformsGroups=ho(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class va extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const tn=new B,As=new ut,bs=new ut;class we extends va{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(tn.x,tn.y).multiplyScalar(-t/tn.z),tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tn.x,tn.y).multiplyScalar(-t/tn.z)}getViewSize(t,e){return this.getViewBounds(t,As,bs),e.subVectors(bs,As)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const In=-90,Dn=1;class mo extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new we(In,Dn,t,e);r.layers=this.layers,this.add(r);const s=new we(In,Dn,t,e);s.layers=this.layers,this.add(s);const a=new we(In,Dn,t,e);a.layers=this.layers,this.add(a);const o=new we(In,Dn,t,e);o.layers=this.layers,this.add(o);const c=new we(In,Dn,t,e);c.layers=this.layers,this.add(c);const l=new we(In,Dn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ma extends me{constructor(t,e,n,r,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class go extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ma(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qn(5,5,5),s=new Ye({name:"CubemapFromEquirect",uniforms:Vn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;const a=new Xt(r,s),o=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new mo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Tr=new B,_o=new B,xo=new Ot;class pn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Tr.subVectors(n,e).cross(_o.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Tr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xo.getNormalMatrix(t),r=this.coplanarPoint(Tr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ln=new fi,Ii=new B;class Xr{constructor(t=new pn,e=new pn,n=new pn,r=new pn,s=new pn,a=new pn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],u=r[6],f=r[7],m=r[8],g=r[9],M=r[10],p=r[11],d=r[12],C=r[13],v=r[14],S=r[15];if(n[0].setComponents(c-s,f-l,p-m,S-d).normalize(),n[1].setComponents(c+s,f+l,p+m,S+d).normalize(),n[2].setComponents(c+a,f+h,p+g,S+C).normalize(),n[3].setComponents(c-a,f-h,p-g,S-C).normalize(),n[4].setComponents(c-o,f-u,p-M,S-v).normalize(),e===2e3)n[5].setComponents(c+o,f+u,p+M,S+v).normalize();else if(e===2001)n[5].setComponents(o,u,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ln)}intersectsSprite(t){return ln.center.set(0,0,0),ln.radius=.7071067811865476,ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(ln)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ii.x=r.normal.x>0?t.max.x:t.min.x,Ii.y=r.normal.y>0?t.max.y:t.min.y,Ii.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ii)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sa(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function vo(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],M=u[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,u[f]=M)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const M=u[m];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class kn extends Ce{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,u=t/o,f=e/c,m=[],g=[],M=[],p=[];for(let d=0;d<h;d++){const C=d*f-a;for(let v=0;v<l;v++){const S=v*u-s;g.push(S,-C,0),M.push(0,0,1),p.push(v/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let C=0;C<o;C++){const v=C+l*d,S=C+l*(d+1),F=C+1+l*(d+1),I=C+1+l*d;m.push(v,S,I),m.push(S,F,I)}this.setIndex(m),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(M,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,So=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,To=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ao=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bo=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Co=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ro=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Po=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Io=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Do=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uo=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,No=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bo=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Go=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ko=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ho=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wo=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xo=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ko=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jo="gl_FragColor = linearToOutputTexel( gl_FragColor );",$o=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qo=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ec=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ic=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ac=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_c=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yc=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ec=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tc=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ac=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ic=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$c=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,el=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nl=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,il=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,al=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ol=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cl=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ll=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ul=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fl=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dl=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pl=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ml=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_l=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ml=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yl=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,El=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Al=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bl=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wl=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cl=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ll=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Il=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ul=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nl=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fl=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ol=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bl=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zl=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gl=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vl=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kl=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hl=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wl=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xl=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ql=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yl=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kl=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zl=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jl=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$l=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jl=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Mo,alphahash_pars_fragment:So,alphamap_fragment:yo,alphamap_pars_fragment:Eo,alphatest_fragment:To,alphatest_pars_fragment:Ao,aomap_fragment:bo,aomap_pars_fragment:wo,batching_pars_vertex:Co,batching_vertex:Ro,begin_vertex:Po,beginnormal_vertex:Lo,bsdfs:Io,iridescence_fragment:Do,bumpmap_pars_fragment:Uo,clipping_planes_fragment:No,clipping_planes_pars_fragment:Fo,clipping_planes_pars_vertex:Oo,clipping_planes_vertex:Bo,color_fragment:zo,color_pars_fragment:Go,color_pars_vertex:Vo,color_vertex:ko,common:Ho,cube_uv_reflection_fragment:Wo,defaultnormal_vertex:Xo,displacementmap_pars_vertex:qo,displacementmap_vertex:Yo,emissivemap_fragment:Ko,emissivemap_pars_fragment:Zo,colorspace_fragment:Jo,colorspace_pars_fragment:$o,envmap_fragment:jo,envmap_common_pars_fragment:Qo,envmap_pars_fragment:tc,envmap_pars_vertex:ec,envmap_physical_pars_fragment:fc,envmap_vertex:nc,fog_vertex:ic,fog_pars_vertex:rc,fog_fragment:sc,fog_pars_fragment:ac,gradientmap_pars_fragment:oc,lightmap_pars_fragment:cc,lights_lambert_fragment:lc,lights_lambert_pars_fragment:hc,lights_pars_begin:uc,lights_toon_fragment:dc,lights_toon_pars_fragment:pc,lights_phong_fragment:mc,lights_phong_pars_fragment:gc,lights_physical_fragment:_c,lights_physical_pars_fragment:xc,lights_fragment_begin:vc,lights_fragment_maps:Mc,lights_fragment_end:Sc,logdepthbuf_fragment:yc,logdepthbuf_pars_fragment:Ec,logdepthbuf_pars_vertex:Tc,logdepthbuf_vertex:Ac,map_fragment:bc,map_pars_fragment:wc,map_particle_fragment:Cc,map_particle_pars_fragment:Rc,metalnessmap_fragment:Pc,metalnessmap_pars_fragment:Lc,morphinstance_vertex:Ic,morphcolor_vertex:Dc,morphnormal_vertex:Uc,morphtarget_pars_vertex:Nc,morphtarget_vertex:Fc,normal_fragment_begin:Oc,normal_fragment_maps:Bc,normal_pars_fragment:zc,normal_pars_vertex:Gc,normal_vertex:Vc,normalmap_pars_fragment:kc,clearcoat_normal_fragment_begin:Hc,clearcoat_normal_fragment_maps:Wc,clearcoat_pars_fragment:Xc,iridescence_pars_fragment:qc,opaque_fragment:Yc,packing:Kc,premultiplied_alpha_fragment:Zc,project_vertex:Jc,dithering_fragment:$c,dithering_pars_fragment:jc,roughnessmap_fragment:Qc,roughnessmap_pars_fragment:tl,shadowmap_pars_fragment:el,shadowmap_pars_vertex:nl,shadowmap_vertex:il,shadowmask_pars_fragment:rl,skinbase_vertex:sl,skinning_pars_vertex:al,skinning_vertex:ol,skinnormal_vertex:cl,specularmap_fragment:ll,specularmap_pars_fragment:hl,tonemapping_fragment:ul,tonemapping_pars_fragment:fl,transmission_fragment:dl,transmission_pars_fragment:pl,uv_pars_fragment:ml,uv_pars_vertex:gl,uv_vertex:_l,worldpos_vertex:xl,background_vert:vl,background_frag:Ml,backgroundCube_vert:Sl,backgroundCube_frag:yl,cube_vert:El,cube_frag:Tl,depth_vert:Al,depth_frag:bl,distanceRGBA_vert:wl,distanceRGBA_frag:Cl,equirect_vert:Rl,equirect_frag:Pl,linedashed_vert:Ll,linedashed_frag:Il,meshbasic_vert:Dl,meshbasic_frag:Ul,meshlambert_vert:Nl,meshlambert_frag:Fl,meshmatcap_vert:Ol,meshmatcap_frag:Bl,meshnormal_vert:zl,meshnormal_frag:Gl,meshphong_vert:Vl,meshphong_frag:kl,meshphysical_vert:Hl,meshphysical_frag:Wl,meshtoon_vert:Xl,meshtoon_frag:ql,points_vert:Yl,points_frag:Kl,shadow_vert:Zl,shadow_frag:Jl,sprite_vert:$l,sprite_frag:jl},Mt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Be={basic:{uniforms:_e([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:_e([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:_e([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:_e([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:_e([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:_e([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:_e([Mt.points,Mt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:_e([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:_e([Mt.common,Mt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:_e([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:_e([Mt.sprite,Mt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:_e([Mt.common,Mt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:_e([Mt.lights,Mt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Be.physical={uniforms:_e([Be.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Di={r:0,b:0,g:0},hn=new Oe,Ql=new jt;function th(i,t,e,n,r,s,a){const o=new Ht(0);let c=s===!0?0:1,l,h,u=null,f=0,m=null;function g(C){let v=C.isScene===!0?C.background:null;return v&&v.isTexture&&(v=(C.backgroundBlurriness>0?e:t).get(v)),v}function M(C){let v=!1;const S=g(C);S===null?d(o,c):S&&S.isColor&&(d(S,1),v=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(C,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===306)?(h===void 0&&(h=new Xt(new qn(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:Vn(Be.backgroundCube.uniforms),vertexShader:Be.backgroundCube.vertexShader,fragmentShader:Be.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),hn.copy(v.backgroundRotation),hn.x*=-1,hn.y*=-1,hn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hn.y*=-1,hn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ql.makeRotationFromEuler(hn)),h.material.toneMapped=Zt.getTransfer(S.colorSpace)!==ee,(u!==S||f!==S.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,m=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Xt(new kn(2,2),new Ye({name:"BackgroundMaterial",uniforms:Vn(Be.background.uniforms),vertexShader:Be.background.vertexShader,fragmentShader:Be.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(S.colorSpace)!==ee,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,m=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function d(C,v){C.getRGB(Di,xa(i)),n.buffers.color.setClear(Di.r,Di.g,Di.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(C,v=1){o.set(C),c=v,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,d(o,c)},render:M,addToRenderList:p}}function eh(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(x,y,G,Y,X){let lt=!1;const K=u(Y,G,y);s!==K&&(s=K,l(s.object)),lt=m(x,Y,G,X),lt&&g(x,Y,G,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(lt||a)&&(a=!1,S(x,y,G,Y),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,y,G){const Y=G.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let lt=X[y.id];lt===void 0&&(lt={},X[y.id]=lt);let K=lt[Y];return K===void 0&&(K=f(c()),lt[Y]=K),K}function f(x){const y=[],G=[],Y=[];for(let X=0;X<e;X++)y[X]=0,G[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:G,attributeDivisors:Y,object:x,attributes:{},index:null}}function m(x,y,G,Y){const X=s.attributes,lt=y.attributes;let K=0;const st=G.getAttributes();for(const O in st)if(st[O].location>=0){const pt=X[O];let gt=lt[O];if(gt===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor)),pt===void 0||pt.attribute!==gt||gt&&pt.data!==gt.data)return!0;K++}return s.attributesNum!==K||s.index!==Y}function g(x,y,G,Y){const X={},lt=y.attributes;let K=0;const st=G.getAttributes();for(const O in st)if(st[O].location>=0){let pt=lt[O];pt===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor));const gt={};gt.attribute=pt,pt&&pt.data&&(gt.data=pt.data),X[O]=gt,K++}s.attributes=X,s.attributesNum=K,s.index=Y}function M(){const x=s.newAttributes;for(let y=0,G=x.length;y<G;y++)x[y]=0}function p(x){d(x,0)}function d(x,y){const G=s.newAttributes,Y=s.enabledAttributes,X=s.attributeDivisors;G[x]=1,Y[x]===0&&(i.enableVertexAttribArray(x),Y[x]=1),X[x]!==y&&(i.vertexAttribDivisor(x,y),X[x]=y)}function C(){const x=s.newAttributes,y=s.enabledAttributes;for(let G=0,Y=y.length;G<Y;G++)y[G]!==x[G]&&(i.disableVertexAttribArray(G),y[G]=0)}function v(x,y,G,Y,X,lt,K){K===!0?i.vertexAttribIPointer(x,y,G,X,lt):i.vertexAttribPointer(x,y,G,Y,X,lt)}function S(x,y,G,Y){M();const X=Y.attributes,lt=G.getAttributes(),K=y.defaultAttributeValues;for(const st in lt){const O=lt[st];if(O.location>=0){let mt=X[st];if(mt===void 0&&(st==="instanceMatrix"&&x.instanceMatrix&&(mt=x.instanceMatrix),st==="instanceColor"&&x.instanceColor&&(mt=x.instanceColor)),mt!==void 0){const pt=mt.normalized,gt=mt.itemSize,Ut=t.get(mt);if(Ut===void 0)continue;const zt=Ut.buffer,D=Ut.type,L=Ut.bytesPerElement,w=D===i.INT||D===i.UNSIGNED_INT||mt.gpuType===1013;if(mt.isInterleavedBufferAttribute){const E=mt.data,$=E.stride,ct=mt.offset;if(E.isInstancedInterleavedBuffer){for(let Z=0;Z<O.locationSize;Z++)d(O.location+Z,E.meshPerAttribute);x.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=E.meshPerAttribute*E.count)}else for(let Z=0;Z<O.locationSize;Z++)p(O.location+Z);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Z=0;Z<O.locationSize;Z++)v(O.location+Z,gt/O.locationSize,D,pt,$*L,(ct+gt/O.locationSize*Z)*L,w)}else{if(mt.isInstancedBufferAttribute){for(let E=0;E<O.locationSize;E++)d(O.location+E,mt.meshPerAttribute);x.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let E=0;E<O.locationSize;E++)p(O.location+E);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let E=0;E<O.locationSize;E++)v(O.location+E,gt/O.locationSize,D,pt,gt*L,gt/O.locationSize*E*L,w)}}else if(K!==void 0){const pt=K[st];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(O.location,pt);break;case 3:i.vertexAttrib3fv(O.location,pt);break;case 4:i.vertexAttrib4fv(O.location,pt);break;default:i.vertexAttrib1fv(O.location,pt)}}}}C()}function F(){U();for(const x in n){const y=n[x];for(const G in y){const Y=y[G];for(const X in Y)h(Y[X].object),delete Y[X];delete y[G]}delete n[x]}}function I(x){if(n[x.id]===void 0)return;const y=n[x.id];for(const G in y){const Y=y[G];for(const X in Y)h(Y[X].object),delete Y[X];delete y[G]}delete n[x.id]}function P(x){for(const y in n){const G=n[y];if(G[x.id]===void 0)continue;const Y=G[x.id];for(const X in Y)h(Y[X].object),delete Y[X];delete G[x.id]}}function U(){Q(),a=!0,s!==r&&(s=r,l(s.object))}function Q(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:Q,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:p,disableUnusedAttributes:C}}function nh(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let M=0;M<u;M++)g+=h[M];for(let M=0;M<f.length;M++)e.update(g,n,f[M])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ih(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==1023&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const U=P===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==1009&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==1015&&!U)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:C,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:F,maxSamples:I}}function rh(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new pn,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,M=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):l();else{const C=s?0:n,v=C*4;let S=d.clippingState||null;c.value=S,S=h(g,f,v,m);for(let F=0;F!==v;++F)S[F]=e[F];d.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){const M=u!==null?u.length:0;let p=null;if(M!==0){if(p=c.value,g!==!0||p===null){const d=m+M*4,C=f.matrixWorldInverse;o.getNormalMatrix(C),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,S=m;v!==M;++v,S+=4)a.copy(u[v]).applyMatrix4(C,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function sh(i){let t=new WeakMap;function e(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new go(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ya extends va{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const On=4,ws=[.125,.215,.35,.446,.526,.582],gn=20,Ar=new ya,Cs=new Ht;let br=null,wr=0,Cr=0,Rr=!1;const mn=(1+Math.sqrt(5))/2,Un=1/mn,Rs=[new B(-mn,Un,0),new B(mn,Un,0),new B(-Un,0,mn),new B(Un,0,mn),new B(0,mn,-Un),new B(0,mn,Un),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class zr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){br=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),Cr=this._renderer.getActiveMipmapLevel(),Rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Is(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ls(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(br,wr,Cr),this._renderer.xr.enabled=Rr,t.scissorTest=!1,Ui(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),br=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),Cr=this._renderer.getActiveMipmapLevel(),Rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:rn,depthBuffer:!1},r=Ps(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ps(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ah(s)),this._blurMaterial=oh(s,t,e)}return r}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Ar)}_sceneToCubeUV(t,e,n,r){const o=new we(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Cs),h.toneMapping=0,h.autoClear=!1;const m=new Zi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new Xt(new qn,m);let M=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,M=!0):(m.color.copy(Cs),M=!0);for(let d=0;d<6;d++){const C=d%3;C===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):C===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const v=this._cubeSize;Ui(r,C*v,d>2?v:0,v,v),h.setRenderTarget(r),M&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===301||t.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Is()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ls());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Ui(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ar)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Rs[(r-s-1)%Rs.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xt(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*gn-1),M=s/g,p=isFinite(s)?1+Math.floor(h*M):gn;p>gn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gn}`);const d=[];let C=0;for(let P=0;P<gn;++P){const U=P/M,Q=Math.exp(-U*U/2);d.push(Q),P===0?C+=Q:P<p&&(C+=2*Q)}for(let P=0;P<d.length;P++)d[P]=d[P]/C;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const S=this._sizeLods[r],F=3*S*(r>v-On?r-v+On:0),I=4*(this._cubeSize-S);Ui(e,F,I,3*S,2*S),c.setRenderTarget(e),c.render(u,Ar)}}function ah(i){const t=[],e=[],n=[];let r=i;const s=i-On+1+ws.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-On?c=ws[a-i+On-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,M=3,p=2,d=1,C=new Float32Array(M*g*m),v=new Float32Array(p*g*m),S=new Float32Array(d*g*m);for(let I=0;I<m;I++){const P=I%3*2/3-1,U=I>2?0:-1,Q=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];C.set(Q,M*g*I),v.set(f,p*g*I);const x=[I,I,I,I,I,I];S.set(x,d*g*I)}const F=new Ce;F.setAttribute("position",new Fe(C,M)),F.setAttribute("uv",new Fe(v,p)),F.setAttribute("faceIndex",new Fe(S,d)),t.push(F),r>On&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ps(i,t,e){const n=new xn(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ui(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function oh(i,t,e){const n=new Float32Array(gn),r=new B(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ls(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Is(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ch(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===303||c===304,h=c===301||c===302;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new zr(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new zr(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function lh(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Gi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function hh(i,t,e,n){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const M=f.morphAttributes[g];for(let p=0,d=M.length;p<d;p++)t.remove(M[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const M=m[g];for(let p=0,d=M.length;p<d;p++)t.update(M[p],i.ARRAY_BUFFER)}}function l(u){const f=[],m=u.index,g=u.attributes.position;let M=0;if(m!==null){const C=m.array;M=m.version;for(let v=0,S=C.length;v<S;v+=3){const F=C[v+0],I=C[v+1],P=C[v+2];f.push(F,I,I,P,P,F)}}else if(g!==void 0){const C=g.array;M=g.version;for(let v=0,S=C.length/3-1;v<S;v+=3){const F=v+0,I=v+1,P=v+2;f.push(F,I,I,P,P,F)}}else return;const p=new(ua(f)?_a:ga)(f,1);p.version=M;const d=s.get(u);d&&t.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function uh(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,s,f*a),e.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,f*a,g),e.update(m,n,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];e.update(p,n,1)}function u(f,m,g,M){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)l(f[d]/a,m[d],M[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,M,0,g);let d=0;for(let C=0;C<g;C++)d+=m[C];for(let C=0;C<M.length;C++)e.update(d,n,M[C])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fh(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function dh(i,t,e){const n=new WeakMap,r=new $t;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let Q=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",Q)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let v=0;m===!0&&(v=1),g===!0&&(v=2),M===!0&&(v=3);let S=o.attributes.position.count*v,F=1;S>t.maxTextureSize&&(F=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const I=new Float32Array(S*F*4*u),P=new da(I,S,F,u);P.type=1015,P.needsUpdate=!0;const U=v*4;for(let x=0;x<u;x++){const y=p[x],G=d[x],Y=C[x],X=S*F*4*x;for(let lt=0;lt<y.count;lt++){const K=lt*U;m===!0&&(r.fromBufferAttribute(y,lt),I[X+K+0]=r.x,I[X+K+1]=r.y,I[X+K+2]=r.z,I[X+K+3]=0),g===!0&&(r.fromBufferAttribute(G,lt),I[X+K+4]=r.x,I[X+K+5]=r.y,I[X+K+6]=r.z,I[X+K+7]=0),M===!0&&(r.fromBufferAttribute(Y,lt),I[X+K+8]=r.x,I[X+K+9]=r.y,I[X+K+10]=r.z,I[X+K+11]=Y.itemSize===4?r.w:1)}}f={count:u,texture:P,size:new ut(S,F)},n.set(o,f),o.addEventListener("dispose",Q)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let M=0;M<l.length;M++)m+=l[M];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function ph(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class Ea extends me{constructor(t,e,n,r,s,a,o,c,l,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ta=new me,Ds=new Ea(1,1),Aa=new da,ba=new ja,wa=new Ma,Us=[],Ns=[],Fs=new Float32Array(16),Os=new Float32Array(9),Bs=new Float32Array(4);function Yn(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Us[r];if(s===void 0&&(s=new Float32Array(r),Us[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ji(i,t){let e=Ns[t];e===void 0&&(e=new Int32Array(t),Ns[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function mh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2fv(this.addr,t),le(e,t)}}function _h(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;i.uniform3fv(this.addr,t),le(e,t)}}function xh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4fv(this.addr,t),le(e,t)}}function vh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;Bs.set(n),i.uniformMatrix2fv(this.addr,!1,Bs),le(e,n)}}function Mh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;Os.set(n),i.uniformMatrix3fv(this.addr,!1,Os),le(e,n)}}function Sh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;Fs.set(n),i.uniformMatrix4fv(this.addr,!1,Fs),le(e,n)}}function yh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Eh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2iv(this.addr,t),le(e,t)}}function Th(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3iv(this.addr,t),le(e,t)}}function Ah(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4iv(this.addr,t),le(e,t)}}function bh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2uiv(this.addr,t),le(e,t)}}function Ch(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3uiv(this.addr,t),le(e,t)}}function Rh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4uiv(this.addr,t),le(e,t)}}function Ph(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ds.compareFunction=515,s=Ds):s=Ta,e.setTexture2D(t||s,r)}function Lh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ba,r)}function Ih(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||wa,r)}function Dh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Aa,r)}function Uh(i){switch(i){case 5126:return mh;case 35664:return gh;case 35665:return _h;case 35666:return xh;case 35674:return vh;case 35675:return Mh;case 35676:return Sh;case 5124:case 35670:return yh;case 35667:case 35671:return Eh;case 35668:case 35672:return Th;case 35669:case 35673:return Ah;case 5125:return bh;case 36294:return wh;case 36295:return Ch;case 36296:return Rh;case 35678:case 36198:case 36298:case 36306:case 35682:return Ph;case 35679:case 36299:case 36307:return Lh;case 35680:case 36300:case 36308:case 36293:return Ih;case 36289:case 36303:case 36311:case 36292:return Dh}}function Nh(i,t){i.uniform1fv(this.addr,t)}function Fh(i,t){const e=Yn(t,this.size,2);i.uniform2fv(this.addr,e)}function Oh(i,t){const e=Yn(t,this.size,3);i.uniform3fv(this.addr,e)}function Bh(i,t){const e=Yn(t,this.size,4);i.uniform4fv(this.addr,e)}function zh(i,t){const e=Yn(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gh(i,t){const e=Yn(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vh(i,t){const e=Yn(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kh(i,t){i.uniform1iv(this.addr,t)}function Hh(i,t){i.uniform2iv(this.addr,t)}function Wh(i,t){i.uniform3iv(this.addr,t)}function Xh(i,t){i.uniform4iv(this.addr,t)}function qh(i,t){i.uniform1uiv(this.addr,t)}function Yh(i,t){i.uniform2uiv(this.addr,t)}function Kh(i,t){i.uniform3uiv(this.addr,t)}function Zh(i,t){i.uniform4uiv(this.addr,t)}function Jh(i,t,e){const n=this.cache,r=t.length,s=Ji(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Ta,s[a])}function $h(i,t,e){const n=this.cache,r=t.length,s=Ji(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||ba,s[a])}function jh(i,t,e){const n=this.cache,r=t.length,s=Ji(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||wa,s[a])}function Qh(i,t,e){const n=this.cache,r=t.length,s=Ji(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),le(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Aa,s[a])}function tu(i){switch(i){case 5126:return Nh;case 35664:return Fh;case 35665:return Oh;case 35666:return Bh;case 35674:return zh;case 35675:return Gh;case 35676:return Vh;case 5124:case 35670:return kh;case 35667:case 35671:return Hh;case 35668:case 35672:return Wh;case 35669:case 35673:return Xh;case 5125:return qh;case 36294:return Yh;case 36295:return Kh;case 36296:return Zh;case 35678:case 36198:case 36298:case 36306:case 35682:return Jh;case 35679:case 36299:case 36307:return $h;case 35680:case 36300:case 36308:case 36293:return jh;case 36289:case 36303:case 36311:case 36292:return Qh}}class eu{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Uh(e.type)}}class nu{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tu(e.type)}}class iu{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Pr=/(\w+)(\])?(\[|\.)?/g;function zs(i,t){i.seq.push(t),i.map[t.id]=t}function ru(i,t,e){const n=i.name,r=n.length;for(Pr.lastIndex=0;;){const s=Pr.exec(n),a=Pr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){zs(e,l===void 0?new eu(o,i,t):new nu(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new iu(o),zs(e,u)),e=u}}}class Vi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);ru(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Gs(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const su=37297;let au=0;function ou(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function cu(i){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i);let n;switch(t===e?n="":t==="p3"&&e===Hi?n="LinearDisplayP3ToLinearSRGB":t===Hi&&e==="p3"&&(n="LinearSRGBToLinearDisplayP3"),i){case rn:case Ki:return[n,"LinearTransferOETF"];case ye:case Wr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Vs(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+ou(i.getShaderSource(t),a)}else return r}function lu(i,t){const e=cu(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function hu(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ni=new B;function uu(){Zt.getLuminanceCoefficients(Ni);const i=Ni.x.toFixed(4),t=Ni.y.toFixed(4),e=Ni.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fu(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(si).join(`
`)}function du(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pu(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function si(i){return i!==""}function ks(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hs(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mu=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gr(i){return i.replace(mu,_u)}const gu=new Map;function _u(i,t){let e=Vt[t];if(e===void 0){const n=gu.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gr(e)}const xu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ws(i){return i.replace(xu,vu)}function vu(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xs(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Mu(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function Su(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yu(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function Eu(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Tu(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Au(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Mu(e),l=Su(e),h=yu(e),u=Eu(e),f=Tu(e),m=fu(e),g=du(s),M=r.createProgram();let p,d,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(si).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(si).join(`
`),d.length>0&&(d+=`
`)):(p=[Xs(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),d=[Xs(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Vt.tonemapping_pars_fragment:"",e.toneMapping!==0?hu("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,lu("linearToOutputTexel",e.outputColorSpace),uu(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(si).join(`
`)),a=Gr(a),a=ks(a,e),a=Hs(a,e),o=Gr(o),o=ks(o,e),o=Hs(o,e),a=Ws(a),o=Ws(o),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===ls?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ls?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=C+p+a,S=C+d+o,F=Gs(r,r.VERTEX_SHADER,v),I=Gs(r,r.FRAGMENT_SHADER,S);r.attachShader(M,F),r.attachShader(M,I),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function P(y){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(M).trim(),Y=r.getShaderInfoLog(F).trim(),X=r.getShaderInfoLog(I).trim();let lt=!0,K=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(lt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,F,I);else{const st=Vs(r,F,"vertex"),O=Vs(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+G+`
`+st+`
`+O)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(Y===""||X==="")&&(K=!1);K&&(y.diagnostics={runnable:lt,programLog:G,vertexShader:{log:Y,prefix:p},fragmentShader:{log:X,prefix:d}})}r.deleteShader(F),r.deleteShader(I),U=new Vi(r,M),Q=pu(r,M)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let Q;this.getAttributes=function(){return Q===void 0&&P(this),Q};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,su)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=au++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=I,this}let bu=0;class wu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Cu(t),e.set(t,n)),n}}class Cu{constructor(t){this.id=bu++,this.code=t,this.usedTimes=0}}function Ru(i,t,e,n,r,s,a){const o=new pa,c=new wu,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function d(x,y,G,Y,X){const lt=Y.fog,K=X.geometry,st=x.isMeshStandardMaterial?Y.environment:null,O=(x.isMeshStandardMaterial?e:t).get(x.envMap||st),mt=O&&O.mapping===306?O.image.height:null,pt=M[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ut=gt!==void 0?gt.length:0;let zt=0;K.morphAttributes.position!==void 0&&(zt=1),K.morphAttributes.normal!==void 0&&(zt=2),K.morphAttributes.color!==void 0&&(zt=3);let D,L,w,E;if(pt){const Me=Be[pt];D=Me.vertexShader,L=Me.fragmentShader}else D=x.vertexShader,L=x.fragmentShader,c.update(x),w=c.getVertexShaderID(x),E=c.getFragmentShaderID(x);const $=i.getRenderTarget(),ct=X.isInstancedMesh===!0,Z=X.isBatchedMesh===!0,ht=!!x.map,q=!!x.matcap,A=!!O,k=!!x.aoMap,J=!!x.lightMap,j=!!x.bumpMap,it=!!x.normalMap,N=!!x.displacementMap,R=!!x.emissiveMap,T=!!x.metalnessMap,_=!!x.roughnessMap,z=x.anisotropy>0,nt=x.clearcoat>0,rt=x.dispersion>0,at=x.iridescence>0,vt=x.sheen>0,xt=x.transmission>0,St=z&&!!x.anisotropyMap,Gt=nt&&!!x.clearcoatMap,dt=nt&&!!x.clearcoatNormalMap,Et=nt&&!!x.clearcoatRoughnessMap,It=at&&!!x.iridescenceMap,yt=at&&!!x.iridescenceThicknessMap,Tt=vt&&!!x.sheenColorMap,kt=vt&&!!x.sheenRoughnessMap,Bt=!!x.specularMap,Qt=!!x.specularColorMap,V=!!x.specularIntensityMap,wt=xt&&!!x.transmissionMap,ot=xt&&!!x.thicknessMap,ft=!!x.gradientMap,At=!!x.alphaMap,Ct=x.alphaTest>0,Wt=!!x.alphaHash,ae=!!x.extensions;let ve=0;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ve=i.toneMapping);const qt={shaderID:pt,shaderType:x.type,shaderName:x.name,vertexShader:D,fragmentShader:L,defines:x.defines,customVertexShaderID:w,customFragmentShaderID:E,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Z,batchingColor:Z&&X._colorsTexture!==null,instancing:ct,instancingColor:ct&&X.instanceColor!==null,instancingMorph:ct&&X.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:rn,alphaToCoverage:!!x.alphaToCoverage,map:ht,matcap:q,envMap:A,envMapMode:A&&O.mapping,envMapCubeUVHeight:mt,aoMap:k,lightMap:J,bumpMap:j,normalMap:it,displacementMap:m&&N,emissiveMap:R,normalMapObjectSpace:it&&x.normalMapType===1,normalMapTangentSpace:it&&x.normalMapType===0,metalnessMap:T,roughnessMap:_,anisotropy:z,anisotropyMap:St,clearcoat:nt,clearcoatMap:Gt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Et,dispersion:rt,iridescence:at,iridescenceMap:It,iridescenceThicknessMap:yt,sheen:vt,sheenColorMap:Tt,sheenRoughnessMap:kt,specularMap:Bt,specularColorMap:Qt,specularIntensityMap:V,transmission:xt,transmissionMap:wt,thicknessMap:ot,gradientMap:ft,opaque:x.transparent===!1&&x.blending===1&&x.alphaToCoverage===!1,alphaMap:At,alphaTest:Ct,alphaHash:Wt,combine:x.combine,mapUv:ht&&p(x.map.channel),aoMapUv:k&&p(x.aoMap.channel),lightMapUv:J&&p(x.lightMap.channel),bumpMapUv:j&&p(x.bumpMap.channel),normalMapUv:it&&p(x.normalMap.channel),displacementMapUv:N&&p(x.displacementMap.channel),emissiveMapUv:R&&p(x.emissiveMap.channel),metalnessMapUv:T&&p(x.metalnessMap.channel),roughnessMapUv:_&&p(x.roughnessMap.channel),anisotropyMapUv:St&&p(x.anisotropyMap.channel),clearcoatMapUv:Gt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:kt&&p(x.sheenRoughnessMap.channel),specularMapUv:Bt&&p(x.specularMap.channel),specularColorMapUv:Qt&&p(x.specularColorMap.channel),specularIntensityMapUv:V&&p(x.specularIntensityMap.channel),transmissionMapUv:wt&&p(x.transmissionMap.channel),thicknessMapUv:ot&&p(x.thicknessMap.channel),alphaMapUv:At&&p(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(it||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!K.attributes.uv&&(ht||At),fog:!!lt,useFog:x.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:zt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:ht&&x.map.isVideoTexture===!0&&Zt.getTransfer(x.map.colorSpace)===ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===1,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||Z)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function C(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const G in x.defines)y.push(G),y.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(v(y,x),S(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function v(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function S(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),x.push(o.mask)}function F(x){const y=M[x.type];let G;if(y){const Y=Be[y];G=uo.clone(Y.uniforms)}else G=x.uniforms;return G}function I(x,y){let G;for(let Y=0,X=h.length;Y<X;Y++){const lt=h[Y];if(lt.cacheKey===y){G=lt,++G.usedTimes;break}}return G===void 0&&(G=new Au(i,y,x,s),h.push(G)),G}function P(x){if(--x.usedTimes===0){const y=h.indexOf(x);h[y]=h[h.length-1],h.pop(),x.destroy()}}function U(x){c.remove(x)}function Q(){c.dispose()}return{getParameters:d,getProgramCacheKey:C,getUniforms:F,acquireProgram:I,releaseProgram:P,releaseShaderCache:U,programs:h,dispose:Q}}function Pu(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Lu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function qs(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ys(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(u,f,m,g,M,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:M,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=M,d.group=p),t++,d}function o(u,f,m,g,M,p){const d=a(u,f,m,g,M,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):e.push(d)}function c(u,f,m,g,M,p){const d=a(u,f,m,g,M,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||Lu),n.length>1&&n.sort(f||qs),r.length>1&&r.sort(f||qs)}function h(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function Iu(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ys,i.set(n,[a])):r>=s.length?(a=new Ys,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Du(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Ht};break;case"SpotLight":e={position:new B,direction:new B,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function Uu(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Nu=0;function Fu(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ou(i){const t=new Du,e=Uu(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const r=new B,s=new jt,a=new jt;function o(l){let h=0,u=0,f=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let m=0,g=0,M=0,p=0,d=0,C=0,v=0,S=0,F=0,I=0,P=0;l.sort(Fu);for(let Q=0,x=l.length;Q<x;Q++){const y=l[Q],G=y.color,Y=y.intensity,X=y.distance,lt=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=G.r*Y,u+=G.g*Y,f+=G.b*Y;else if(y.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(y.sh.coefficients[K],Y);P++}else if(y.isDirectionalLight){const K=t.get(y);if(K.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const st=y.shadow,O=e.get(y);O.shadowIntensity=st.intensity,O.shadowBias=st.bias,O.shadowNormalBias=st.normalBias,O.shadowRadius=st.radius,O.shadowMapSize=st.mapSize,n.directionalShadow[m]=O,n.directionalShadowMap[m]=lt,n.directionalShadowMatrix[m]=y.shadow.matrix,C++}n.directional[m]=K,m++}else if(y.isSpotLight){const K=t.get(y);K.position.setFromMatrixPosition(y.matrixWorld),K.color.copy(G).multiplyScalar(Y),K.distance=X,K.coneCos=Math.cos(y.angle),K.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),K.decay=y.decay,n.spot[M]=K;const st=y.shadow;if(y.map&&(n.spotLightMap[F]=y.map,F++,st.updateMatrices(y),y.castShadow&&I++),n.spotLightMatrix[M]=st.matrix,y.castShadow){const O=e.get(y);O.shadowIntensity=st.intensity,O.shadowBias=st.bias,O.shadowNormalBias=st.normalBias,O.shadowRadius=st.radius,O.shadowMapSize=st.mapSize,n.spotShadow[M]=O,n.spotShadowMap[M]=lt,S++}M++}else if(y.isRectAreaLight){const K=t.get(y);K.color.copy(G).multiplyScalar(Y),K.halfWidth.set(y.width*.5,0,0),K.halfHeight.set(0,y.height*.5,0),n.rectArea[p]=K,p++}else if(y.isPointLight){const K=t.get(y);if(K.color.copy(y.color).multiplyScalar(y.intensity),K.distance=y.distance,K.decay=y.decay,y.castShadow){const st=y.shadow,O=e.get(y);O.shadowIntensity=st.intensity,O.shadowBias=st.bias,O.shadowNormalBias=st.normalBias,O.shadowRadius=st.radius,O.shadowMapSize=st.mapSize,O.shadowCameraNear=st.camera.near,O.shadowCameraFar=st.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=lt,n.pointShadowMatrix[g]=y.shadow.matrix,v++}n.point[g]=K,g++}else if(y.isHemisphereLight){const K=t.get(y);K.skyColor.copy(y.color).multiplyScalar(Y),K.groundColor.copy(y.groundColor).multiplyScalar(Y),n.hemi[d]=K,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==M||U.rectAreaLength!==p||U.hemiLength!==d||U.numDirectionalShadows!==C||U.numPointShadows!==v||U.numSpotShadows!==S||U.numSpotMaps!==F||U.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+F-I,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,U.directionalLength=m,U.pointLength=g,U.spotLength=M,U.rectAreaLength=p,U.hemiLength=d,U.numDirectionalShadows=C,U.numPointShadows=v,U.numSpotShadows=S,U.numSpotMaps=F,U.numLightProbes=P,n.version=Nu++)}function c(l,h){let u=0,f=0,m=0,g=0,M=0;const p=h.matrixWorldInverse;for(let d=0,C=l.length;d<C;d++){const v=l[d];if(v.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),u++}else if(v.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const S=n.hemi[M];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),M++}}}return{setup:o,setupView:c,state:n}}function Ks(i){const t=new Ou(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Bu(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Ks(i),t.set(r,[o])):s>=a.length?(o=new Ks(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class zu extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gu extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ku=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hu(i,t,e){let n=new Xr;const r=new ut,s=new ut,a=new $t,o=new zu({depthPacking:3201}),c=new Gu,l={},h=e.maxTextureSize,u={0:1,1:0,2:2},f=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Vu,fragmentShader:ku}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Xt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let d=this.type;this.render=function(I,P,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;const Q=i.getRenderTarget(),x=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),G=i.state;G.setBlending(0),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Y=d!==3&&this.type===3,X=d===3&&this.type!==3;for(let lt=0,K=I.length;lt<K;lt++){const st=I[lt],O=st.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const mt=O.getFrameExtents();if(r.multiply(mt),s.copy(O.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/mt.x),r.x=s.x*mt.x,O.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/mt.y),r.y=s.y*mt.y,O.mapSize.y=s.y)),O.map===null||Y===!0||X===!0){const gt=this.type!==3?{minFilter:1003,magFilter:1003}:{};O.map!==null&&O.map.dispose(),O.map=new xn(r.x,r.y,gt),O.map.texture.name=st.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const pt=O.getViewportCount();for(let gt=0;gt<pt;gt++){const Ut=O.getViewport(gt);a.set(s.x*Ut.x,s.y*Ut.y,s.x*Ut.z,s.y*Ut.w),G.viewport(a),O.updateMatrices(st,gt),n=O.getFrustum(),S(P,U,O.camera,st,this.type)}O.isPointLightShadow!==!0&&this.type===3&&C(O,U),O.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(Q,x,y)};function C(I,P){const U=t.update(M);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new xn(r.x,r.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(P,null,U,f,M,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(P,null,U,m,M,null)}function v(I,P,U,Q){let x=null;const y=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(y!==void 0)x=y;else if(x=U.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const G=x.uuid,Y=P.uuid;let X=l[G];X===void 0&&(X={},l[G]=X);let lt=X[Y];lt===void 0&&(lt=x.clone(),X[Y]=lt,P.addEventListener("dispose",F)),x=lt}if(x.visible=P.visible,x.wireframe=P.wireframe,Q===3?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:u[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=i.properties.get(x);G.light=U}return x}function S(I,P,U,Q,x){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===3)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const Y=t.update(I),X=I.material;if(Array.isArray(X)){const lt=Y.groups;for(let K=0,st=lt.length;K<st;K++){const O=lt[K],mt=X[O.materialIndex];if(mt&&mt.visible){const pt=v(I,mt,Q,x);I.onBeforeShadow(i,I,P,U,Y,pt,O),i.renderBufferDirect(U,null,Y,pt,I,O),I.onAfterShadow(i,I,P,U,Y,pt,O)}}}else if(X.visible){const lt=v(I,X,Q,x);I.onBeforeShadow(i,I,P,U,Y,lt,null),i.renderBufferDirect(U,null,Y,lt,I,null),I.onAfterShadow(i,I,P,U,Y,lt,null)}}const G=I.children;for(let Y=0,X=G.length;Y<X;Y++)S(G[Y],P,U,Q,x)}function F(I){I.target.removeEventListener("dispose",F);for(const U in l){const Q=l[U],x=I.target.uuid;x in Q&&(Q[x].dispose(),delete Q[x])}}}const Wu={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Xu(i){function t(){let V=!1;const wt=new $t;let ot=null;const ft=new $t(0,0,0,0);return{setMask:function(At){ot!==At&&!V&&(i.colorMask(At,At,At,At),ot=At)},setLocked:function(At){V=At},setClear:function(At,Ct,Wt,ae,ve){ve===!0&&(At*=ae,Ct*=ae,Wt*=ae),wt.set(At,Ct,Wt,ae),ft.equals(wt)===!1&&(i.clearColor(At,Ct,Wt,ae),ft.copy(wt))},reset:function(){V=!1,ot=null,ft.set(-1,0,0,0)}}}function e(){let V=!1,wt=!1,ot=null,ft=null,At=null;return{setReversed:function(Ct){wt=Ct},setTest:function(Ct){Ct?w(i.DEPTH_TEST):E(i.DEPTH_TEST)},setMask:function(Ct){ot!==Ct&&!V&&(i.depthMask(Ct),ot=Ct)},setFunc:function(Ct){if(wt&&(Ct=Wu[Ct]),ft!==Ct){switch(Ct){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Ct}},setLocked:function(Ct){V=Ct},setClear:function(Ct){At!==Ct&&(i.clearDepth(Ct),At=Ct)},reset:function(){V=!1,ot=null,ft=null,At=null}}}function n(){let V=!1,wt=null,ot=null,ft=null,At=null,Ct=null,Wt=null,ae=null,ve=null;return{setTest:function(qt){V||(qt?w(i.STENCIL_TEST):E(i.STENCIL_TEST))},setMask:function(qt){wt!==qt&&!V&&(i.stencilMask(qt),wt=qt)},setFunc:function(qt,Me,Ge){(ot!==qt||ft!==Me||At!==Ge)&&(i.stencilFunc(qt,Me,Ge),ot=qt,ft=Me,At=Ge)},setOp:function(qt,Me,Ge){(Ct!==qt||Wt!==Me||ae!==Ge)&&(i.stencilOp(qt,Me,Ge),Ct=qt,Wt=Me,ae=Ge)},setLocked:function(qt){V=qt},setClear:function(qt){ve!==qt&&(i.clearStencil(qt),ve=qt)},reset:function(){V=!1,wt=null,ot=null,ft=null,At=null,Ct=null,Wt=null,ae=null,ve=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,f=[],m=null,g=!1,M=null,p=null,d=null,C=null,v=null,S=null,F=null,I=new Ht(0,0,0),P=0,U=!1,Q=null,x=null,y=null,G=null,Y=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,K=0;const st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(st)[1]),lt=K>=1):st.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),lt=K>=2);let O=null,mt={};const pt=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),Ut=new $t().fromArray(pt),zt=new $t().fromArray(gt);function D(V,wt,ot,ft){const At=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(V,Ct),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<ot;Wt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(wt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return Ct}const L={};L[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),L[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),L[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),w(i.DEPTH_TEST),s.setFunc(3),J(!1),j(1),w(i.CULL_FACE),A(0);function w(V){l[V]!==!0&&(i.enable(V),l[V]=!0)}function E(V){l[V]!==!1&&(i.disable(V),l[V]=!1)}function $(V,wt){return h[V]!==wt?(i.bindFramebuffer(V,wt),h[V]=wt,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=wt),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function ct(V,wt){let ot=f,ft=!1;if(V){ot=u.get(wt),ot===void 0&&(ot=[],u.set(wt,ot));const At=V.textures;if(ot.length!==At.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,Wt=At.length;Ct<Wt;Ct++)ot[Ct]=i.COLOR_ATTACHMENT0+Ct;ot.length=At.length,ft=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,ft=!0);ft&&i.drawBuffers(ot)}function Z(V){return m!==V?(i.useProgram(V),m=V,!0):!1}const ht={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};ht[103]=i.MIN,ht[104]=i.MAX;const q={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function A(V,wt,ot,ft,At,Ct,Wt,ae,ve,qt){if(V===0){g===!0&&(E(i.BLEND),g=!1);return}if(g===!1&&(w(i.BLEND),g=!0),V!==5){if(V!==M||qt!==U){if((p!==100||v!==100)&&(i.blendEquation(i.FUNC_ADD),p=100,v=100),qt)switch(V){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}d=null,C=null,S=null,F=null,I.set(0,0,0),P=0,M=V,U=qt}return}At=At||wt,Ct=Ct||ot,Wt=Wt||ft,(wt!==p||At!==v)&&(i.blendEquationSeparate(ht[wt],ht[At]),p=wt,v=At),(ot!==d||ft!==C||Ct!==S||Wt!==F)&&(i.blendFuncSeparate(q[ot],q[ft],q[Ct],q[Wt]),d=ot,C=ft,S=Ct,F=Wt),(ae.equals(I)===!1||ve!==P)&&(i.blendColor(ae.r,ae.g,ae.b,ve),I.copy(ae),P=ve),M=V,U=!1}function k(V,wt){V.side===2?E(i.CULL_FACE):w(i.CULL_FACE);let ot=V.side===1;wt&&(ot=!ot),J(ot),V.blending===1&&V.transparent===!1?A(0):A(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),r.setMask(V.colorWrite);const ft=V.stencilWrite;a.setTest(ft),ft&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),N(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?w(i.SAMPLE_ALPHA_TO_COVERAGE):E(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(V){Q!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),Q=V)}function j(V){V!==0?(w(i.CULL_FACE),V!==x&&(V===1?i.cullFace(i.BACK):V===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):E(i.CULL_FACE),x=V}function it(V){V!==y&&(lt&&i.lineWidth(V),y=V)}function N(V,wt,ot){V?(w(i.POLYGON_OFFSET_FILL),(G!==wt||Y!==ot)&&(i.polygonOffset(wt,ot),G=wt,Y=ot)):E(i.POLYGON_OFFSET_FILL)}function R(V){V?w(i.SCISSOR_TEST):E(i.SCISSOR_TEST)}function T(V){V===void 0&&(V=i.TEXTURE0+X-1),O!==V&&(i.activeTexture(V),O=V)}function _(V,wt,ot){ot===void 0&&(O===null?ot=i.TEXTURE0+X-1:ot=O);let ft=mt[ot];ft===void 0&&(ft={type:void 0,texture:void 0},mt[ot]=ft),(ft.type!==V||ft.texture!==wt)&&(O!==ot&&(i.activeTexture(ot),O=ot),i.bindTexture(V,wt||L[V]),ft.type=V,ft.texture=wt)}function z(){const V=mt[O];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(V){Ut.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Ut.copy(V))}function Tt(V){zt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),zt.copy(V))}function kt(V,wt){let ot=c.get(wt);ot===void 0&&(ot=new WeakMap,c.set(wt,ot));let ft=ot.get(V);ft===void 0&&(ft=i.getUniformBlockIndex(wt,V.name),ot.set(V,ft))}function Bt(V,wt){const ft=c.get(wt).get(V);o.get(wt)!==ft&&(i.uniformBlockBinding(wt,ft,V.__bindingPointIndex),o.set(wt,ft))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},O=null,mt={},h={},u=new WeakMap,f=[],m=null,g=!1,M=null,p=null,d=null,C=null,v=null,S=null,F=null,I=new Ht(0,0,0),P=0,U=!1,Q=null,x=null,y=null,G=null,Y=null,Ut.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:w,disable:E,bindFramebuffer:$,drawBuffers:ct,useProgram:Z,setBlending:A,setMaterial:k,setFlipSided:J,setCullFace:j,setLineWidth:it,setPolygonOffset:N,setScissorTest:R,activeTexture:T,bindTexture:_,unbindTexture:z,compressedTexImage2D:nt,compressedTexImage3D:rt,texImage2D:Et,texImage3D:It,updateUBOMapping:kt,uniformBlockBinding:Bt,texStorage2D:Gt,texStorage3D:dt,texSubImage2D:at,texSubImage3D:vt,compressedTexSubImage2D:xt,compressedTexSubImage3D:St,scissor:yt,viewport:Tt,reset:Qt}}function Zs(i,t,e,n){const r=qu(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/r.components*r.byteLength;case 1029:return i*t/r.components*r.byteLength;case 1030:return i*t*2/r.components*r.byteLength;case 1031:return i*t*2/r.components*r.byteLength;case 1022:return i*t*3/r.components*r.byteLength;case 1023:return i*t*4/r.components*r.byteLength;case 1033:return i*t*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qu(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Yu(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return m?new OffscreenCanvas(T,_):Wi("canvas")}function M(T,_,z){let nt=1;const rt=R(T);if((rt.width>z||rt.height>z)&&(nt=z/Math.max(rt.width,rt.height)),nt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const at=Math.floor(nt*rt.width),vt=Math.floor(nt*rt.height);u===void 0&&(u=g(at,vt));const xt=_?g(at,vt):u;return xt.width=at,xt.height=vt,xt.getContext("2d").drawImage(T,0,0,at,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+at+"x"+vt+")."),xt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==1003&&T.minFilter!==1006}function d(T){i.generateMipmap(T)}function C(T,_,z,nt,rt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let at=_;if(_===i.RED&&(z===i.FLOAT&&(at=i.R32F),z===i.HALF_FLOAT&&(at=i.R16F),z===i.UNSIGNED_BYTE&&(at=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(at=i.R8UI),z===i.UNSIGNED_SHORT&&(at=i.R16UI),z===i.UNSIGNED_INT&&(at=i.R32UI),z===i.BYTE&&(at=i.R8I),z===i.SHORT&&(at=i.R16I),z===i.INT&&(at=i.R32I)),_===i.RG&&(z===i.FLOAT&&(at=i.RG32F),z===i.HALF_FLOAT&&(at=i.RG16F),z===i.UNSIGNED_BYTE&&(at=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(at=i.RG8UI),z===i.UNSIGNED_SHORT&&(at=i.RG16UI),z===i.UNSIGNED_INT&&(at=i.RG32UI),z===i.BYTE&&(at=i.RG8I),z===i.SHORT&&(at=i.RG16I),z===i.INT&&(at=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(at=i.RGB8UI),z===i.UNSIGNED_SHORT&&(at=i.RGB16UI),z===i.UNSIGNED_INT&&(at=i.RGB32UI),z===i.BYTE&&(at=i.RGB8I),z===i.SHORT&&(at=i.RGB16I),z===i.INT&&(at=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),z===i.UNSIGNED_INT&&(at=i.RGBA32UI),z===i.BYTE&&(at=i.RGBA8I),z===i.SHORT&&(at=i.RGBA16I),z===i.INT&&(at=i.RGBA32I)),_===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),_===i.RGBA){const vt=rt?ki:Zt.getTransfer(nt);z===i.FLOAT&&(at=i.RGBA32F),z===i.HALF_FLOAT&&(at=i.RGBA16F),z===i.UNSIGNED_BYTE&&(at=vt===ee?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function v(T,_){let z;return T?_===null||_===1014||_===1020?z=i.DEPTH24_STENCIL8:_===1015?z=i.DEPTH32F_STENCIL8:_===1012&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===1014||_===1020?z=i.DEPTH_COMPONENT24:_===1015?z=i.DEPTH_COMPONENT32F:_===1012&&(z=i.DEPTH_COMPONENT16),z}function S(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==1003&&T.minFilter!==1006?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function F(T){const _=T.target;_.removeEventListener("dispose",F),P(_),_.isVideoTexture&&h.delete(_)}function I(T){const _=T.target;_.removeEventListener("dispose",I),Q(_)}function P(T){const _=n.get(T);if(_.__webglInit===void 0)return;const z=T.source,nt=f.get(z);if(nt){const rt=nt[_.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&U(T),Object.keys(nt).length===0&&f.delete(z)}n.remove(T)}function U(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const z=T.source,nt=f.get(z);delete nt[_.__cacheKey],a.memory.textures--}function Q(T){const _=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(_.__webglFramebuffer[nt]))for(let rt=0;rt<_.__webglFramebuffer[nt].length;rt++)i.deleteFramebuffer(_.__webglFramebuffer[nt][rt]);else i.deleteFramebuffer(_.__webglFramebuffer[nt]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[nt])}else{if(Array.isArray(_.__webglFramebuffer))for(let nt=0;nt<_.__webglFramebuffer.length;nt++)i.deleteFramebuffer(_.__webglFramebuffer[nt]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let nt=0;nt<_.__webglColorRenderbuffer.length;nt++)_.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[nt]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=T.textures;for(let nt=0,rt=z.length;nt<rt;nt++){const at=n.get(z[nt]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(z[nt])}n.remove(T)}let x=0;function y(){x=0}function G(){const T=x;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),x+=1,T}function Y(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function X(T,_){const z=n.get(T);if(T.isVideoTexture&&it(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const nt=T.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(z,T,_);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function lt(T,_){const z=n.get(T);if(T.version>0&&z.__version!==T.version){zt(z,T,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function K(T,_){const z=n.get(T);if(T.version>0&&z.__version!==T.version){zt(z,T,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function st(T,_){const z=n.get(T);if(T.version>0&&z.__version!==T.version){D(z,T,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}const O={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},mt={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},pt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function gt(T,_){if(_.type===1015&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===1006||_.magFilter===1007||_.magFilter===1005||_.magFilter===1008||_.minFilter===1006||_.minFilter===1007||_.minFilter===1005||_.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,O[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,O[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,O[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,mt[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,mt[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,pt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===1003||_.minFilter!==1005&&_.minFilter!==1008||_.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ut(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",F));const nt=_.source;let rt=f.get(nt);rt===void 0&&(rt={},f.set(nt,rt));const at=Y(_);if(at!==T.__cacheKey){rt[at]===void 0&&(rt[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),rt[at].usedTimes++;const vt=rt[T.__cacheKey];vt!==void 0&&(rt[T.__cacheKey].usedTimes--,vt.usedTimes===0&&U(_)),T.__cacheKey=at,T.__webglTexture=rt[at].texture}return z}function zt(T,_,z){let nt=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(nt=i.TEXTURE_3D);const rt=Ut(T,_),at=_.source;e.bindTexture(nt,T.__webglTexture,i.TEXTURE0+z);const vt=n.get(at);if(at.version!==vt.__version||rt===!0){e.activeTexture(i.TEXTURE0+z);const xt=Zt.getPrimaries(Zt.workingColorSpace),St=_.colorSpace===""?null:Zt.getPrimaries(_.colorSpace),Gt=_.colorSpace===""||xt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let dt=M(_.image,!1,r.maxTextureSize);dt=N(_,dt);const Et=s.convert(_.format,_.colorSpace),It=s.convert(_.type);let yt=C(_.internalFormat,Et,It,_.colorSpace,_.isVideoTexture);gt(nt,_);let Tt;const kt=_.mipmaps,Bt=_.isVideoTexture!==!0,Qt=vt.__version===void 0||rt===!0,V=at.dataReady,wt=S(_,dt);if(_.isDepthTexture)yt=v(_.format===1027,_.type),Qt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,yt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,yt,dt.width,dt.height,0,Et,It,null));else if(_.isDataTexture)if(kt.length>0){Bt&&Qt&&e.texStorage2D(i.TEXTURE_2D,wt,yt,kt[0].width,kt[0].height);for(let ot=0,ft=kt.length;ot<ft;ot++)Tt=kt[ot],Bt?V&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Tt.width,Tt.height,Et,It,Tt.data):e.texImage2D(i.TEXTURE_2D,ot,yt,Tt.width,Tt.height,0,Et,It,Tt.data);_.generateMipmaps=!1}else Bt?(Qt&&e.texStorage2D(i.TEXTURE_2D,wt,yt,dt.width,dt.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Et,It,dt.data)):e.texImage2D(i.TEXTURE_2D,0,yt,dt.width,dt.height,0,Et,It,dt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Bt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,yt,kt[0].width,kt[0].height,dt.depth);for(let ot=0,ft=kt.length;ot<ft;ot++)if(Tt=kt[ot],_.format!==1023)if(Et!==null)if(Bt){if(V)if(_.layerUpdates.size>0){const At=Zs(Tt.width,Tt.height,_.format,_.type);for(const Ct of _.layerUpdates){const Wt=Tt.data.subarray(Ct*At/Tt.data.BYTES_PER_ELEMENT,(Ct+1)*At/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Ct,Tt.width,Tt.height,1,Et,Wt,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Tt.width,Tt.height,dt.depth,Et,Tt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,yt,Tt.width,Tt.height,dt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Tt.width,Tt.height,dt.depth,Et,It,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,yt,Tt.width,Tt.height,dt.depth,0,Et,It,Tt.data)}else{Bt&&Qt&&e.texStorage2D(i.TEXTURE_2D,wt,yt,kt[0].width,kt[0].height);for(let ot=0,ft=kt.length;ot<ft;ot++)Tt=kt[ot],_.format!==1023?Et!==null?Bt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,yt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?V&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Tt.width,Tt.height,Et,It,Tt.data):e.texImage2D(i.TEXTURE_2D,ot,yt,Tt.width,Tt.height,0,Et,It,Tt.data)}else if(_.isDataArrayTexture)if(Bt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,yt,dt.width,dt.height,dt.depth),V)if(_.layerUpdates.size>0){const ot=Zs(dt.width,dt.height,_.format,_.type);for(const ft of _.layerUpdates){const At=dt.data.subarray(ft*ot/dt.data.BYTES_PER_ELEMENT,(ft+1)*ot/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,dt.width,dt.height,1,Et,It,At)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Et,It,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,dt.width,dt.height,dt.depth,0,Et,It,dt.data);else if(_.isData3DTexture)Bt?(Qt&&e.texStorage3D(i.TEXTURE_3D,wt,yt,dt.width,dt.height,dt.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Et,It,dt.data)):e.texImage3D(i.TEXTURE_3D,0,yt,dt.width,dt.height,dt.depth,0,Et,It,dt.data);else if(_.isFramebufferTexture){if(Qt)if(Bt)e.texStorage2D(i.TEXTURE_2D,wt,yt,dt.width,dt.height);else{let ot=dt.width,ft=dt.height;for(let At=0;At<wt;At++)e.texImage2D(i.TEXTURE_2D,At,yt,ot,ft,0,Et,It,null),ot>>=1,ft>>=1}}else if(kt.length>0){if(Bt&&Qt){const ot=R(kt[0]);e.texStorage2D(i.TEXTURE_2D,wt,yt,ot.width,ot.height)}for(let ot=0,ft=kt.length;ot<ft;ot++)Tt=kt[ot],Bt?V&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Et,It,Tt):e.texImage2D(i.TEXTURE_2D,ot,yt,Et,It,Tt);_.generateMipmaps=!1}else if(Bt){if(Qt){const ot=R(dt);e.texStorage2D(i.TEXTURE_2D,wt,yt,ot.width,ot.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,It,dt)}else e.texImage2D(i.TEXTURE_2D,0,yt,Et,It,dt);p(_)&&d(nt),vt.__version=at.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function D(T,_,z){if(_.image.length!==6)return;const nt=Ut(T,_),rt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);const at=n.get(rt);if(rt.version!==at.__version||nt===!0){e.activeTexture(i.TEXTURE0+z);const vt=Zt.getPrimaries(Zt.workingColorSpace),xt=_.colorSpace===""?null:Zt.getPrimaries(_.colorSpace),St=_.colorSpace===""||vt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Gt=_.isCompressedTexture||_.image[0].isCompressedTexture,dt=_.image[0]&&_.image[0].isDataTexture,Et=[];for(let ft=0;ft<6;ft++)!Gt&&!dt?Et[ft]=M(_.image[ft],!0,r.maxCubemapSize):Et[ft]=dt?_.image[ft].image:_.image[ft],Et[ft]=N(_,Et[ft]);const It=Et[0],yt=s.convert(_.format,_.colorSpace),Tt=s.convert(_.type),kt=C(_.internalFormat,yt,Tt,_.colorSpace),Bt=_.isVideoTexture!==!0,Qt=at.__version===void 0||nt===!0,V=rt.dataReady;let wt=S(_,It);gt(i.TEXTURE_CUBE_MAP,_);let ot;if(Gt){Bt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,kt,It.width,It.height);for(let ft=0;ft<6;ft++){ot=Et[ft].mipmaps;for(let At=0;At<ot.length;At++){const Ct=ot[At];_.format!==1023?yt!==null?Bt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At,0,0,Ct.width,Ct.height,yt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At,kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At,0,0,Ct.width,Ct.height,yt,Tt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At,kt,Ct.width,Ct.height,0,yt,Tt,Ct.data)}}}else{if(ot=_.mipmaps,Bt&&Qt){ot.length>0&&wt++;const ft=R(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,kt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(dt){Bt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Et[ft].width,Et[ft].height,yt,Tt,Et[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,kt,Et[ft].width,Et[ft].height,0,yt,Tt,Et[ft].data);for(let At=0;At<ot.length;At++){const Wt=ot[At].image[ft].image;Bt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At+1,0,0,Wt.width,Wt.height,yt,Tt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At+1,kt,Wt.width,Wt.height,0,yt,Tt,Wt.data)}}else{Bt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,yt,Tt,Et[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,kt,yt,Tt,Et[ft]);for(let At=0;At<ot.length;At++){const Ct=ot[At];Bt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At+1,0,0,yt,Tt,Ct.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At+1,kt,yt,Tt,Ct.image[ft])}}}p(_)&&d(i.TEXTURE_CUBE_MAP),at.__version=rt.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function L(T,_,z,nt,rt,at){const vt=s.convert(z.format,z.colorSpace),xt=s.convert(z.type),St=C(z.internalFormat,vt,xt,z.colorSpace);if(!n.get(_).__hasExternalTextures){const dt=Math.max(1,_.width>>at),Et=Math.max(1,_.height>>at);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,at,St,dt,Et,_.depth,0,vt,xt,null):e.texImage2D(rt,at,St,dt,Et,0,vt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),j(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,rt,n.get(z).__webglTexture,0,J(_)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,rt,n.get(z).__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function w(T,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const nt=_.depthTexture,rt=nt&&nt.isDepthTexture?nt.type:null,at=v(_.stencilBuffer,rt),vt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=J(_);j(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,at,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,at,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,at,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,T)}else{const nt=_.textures;for(let rt=0;rt<nt.length;rt++){const at=nt[rt],vt=s.convert(at.format,at.colorSpace),xt=s.convert(at.type),St=C(at.internalFormat,vt,xt,at.colorSpace),Gt=J(_);z&&j(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,St,_.width,_.height):j(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,St,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,St,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function E(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const nt=n.get(_.depthTexture).__webglTexture,rt=J(_);if(_.depthTexture.format===1026)j(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(_.depthTexture.format===1027)j(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function $(T){const _=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const nt=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),nt){const rt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,nt.removeEventListener("dispose",rt)};nt.addEventListener("dispose",rt),_.__depthDisposeCallback=rt}_.__boundDepthTexture=nt}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");E(_.__webglFramebuffer,T)}else if(z){_.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[nt]),_.__webglDepthbuffer[nt]===void 0)_.__webglDepthbuffer[nt]=i.createRenderbuffer(),w(_.__webglDepthbuffer[nt],T,!1);else{const rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,at)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),w(_.__webglDepthbuffer,T,!1);else{const nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(T,_,z){const nt=n.get(T);_!==void 0&&L(nt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&$(T)}function Z(T){const _=T.texture,z=n.get(T),nt=n.get(_);T.addEventListener("dispose",I);const rt=T.textures,at=T.isWebGLCubeRenderTarget===!0,vt=rt.length>1;if(vt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=_.version,a.memory.textures++),at){z.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[xt]=[];for(let St=0;St<_.mipmaps.length;St++)z.__webglFramebuffer[xt][St]=i.createFramebuffer()}else z.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let xt=0;xt<_.mipmaps.length;xt++)z.__webglFramebuffer[xt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(vt)for(let xt=0,St=rt.length;xt<St;xt++){const Gt=n.get(rt[xt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&j(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xt=0;xt<rt.length;xt++){const St=rt[xt];z.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[xt]);const Gt=s.convert(St.format,St.colorSpace),dt=s.convert(St.type),Et=C(St.internalFormat,Gt,dt,St.colorSpace,T.isXRRenderTarget===!0),It=J(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Et,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,z.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),w(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),gt(i.TEXTURE_CUBE_MAP,_);for(let xt=0;xt<6;xt++)if(_.mipmaps&&_.mipmaps.length>0)for(let St=0;St<_.mipmaps.length;St++)L(z.__webglFramebuffer[xt][St],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,St);else L(z.__webglFramebuffer[xt],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);p(_)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let xt=0,St=rt.length;xt<St;xt++){const Gt=rt[xt],dt=n.get(Gt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),gt(i.TEXTURE_2D,Gt),L(z.__webglFramebuffer,T,Gt,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),p(Gt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,nt.__webglTexture),gt(xt,_),_.mipmaps&&_.mipmaps.length>0)for(let St=0;St<_.mipmaps.length;St++)L(z.__webglFramebuffer[St],T,_,i.COLOR_ATTACHMENT0,xt,St);else L(z.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,xt,0);p(_)&&d(xt),e.unbindTexture()}T.depthBuffer&&$(T)}function ht(T){const _=T.textures;for(let z=0,nt=_.length;z<nt;z++){const rt=_[z];if(p(rt)){const at=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(rt).__webglTexture;e.bindTexture(at,vt),d(at),e.unbindTexture()}}}const q=[],A=[];function k(T){if(T.samples>0){if(j(T)===!1){const _=T.textures,z=T.width,nt=T.height;let rt=i.COLOR_BUFFER_BIT;const at=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(T),xt=_.length>1;if(xt)for(let St=0;St<_.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let St=0;St<_.length;St++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[St]);const Gt=n.get(_[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,z,nt,0,0,z,nt,rt,i.NEAREST),c===!0&&(q.length=0,A.length=0,q.push(i.COLOR_ATTACHMENT0+St),T.depthBuffer&&T.resolveDepthBuffer===!1&&(q.push(at),A.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let St=0;St<_.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,vt.__webglColorRenderbuffer[St]);const Gt=n.get(_[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function J(T){return Math.min(r.maxSamples,T.samples)}function j(T){const _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function it(T){const _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function N(T,_){const z=T.colorSpace,nt=T.format,rt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==rn&&z!==""&&(Zt.getTransfer(z)===ee?(nt!==1023||rt!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function R(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=y,this.setTexture2D=X,this.setTexture2DArray=lt,this.setTexture3D=K,this.setTextureCube=st,this.rebindTextures=ct,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=L,this.useMultisampledRTT=j}function Ku(i,t){function e(n,r=""){let s;const a=Zt.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===36492)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Zu extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class en extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ju={type:"move"};class Lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),d=this._getHandJoint(l,M);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ju)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $u=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ju=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new me,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ye({vertexShader:$u,fragmentShader:ju,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tf extends Hn{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,g=null;const M=new Qu,p=e.getContextAttributes();let d=null,C=null;const v=[],S=[],F=new ut;let I=null;const P=new we;P.layers.enable(1),P.viewport=new $t;const U=new we;U.layers.enable(2),U.viewport=new $t;const Q=[P,U],x=new Zu;x.layers.enable(1),x.layers.enable(2);let y=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let L=v[D];return L===void 0&&(L=new Lr,v[D]=L),L.getTargetRaySpace()},this.getControllerGrip=function(D){let L=v[D];return L===void 0&&(L=new Lr,v[D]=L),L.getGripSpace()},this.getHand=function(D){let L=v[D];return L===void 0&&(L=new Lr,v[D]=L),L.getHandSpace()};function Y(D){const L=S.indexOf(D.inputSource);if(L===-1)return;const w=v[L];w!==void 0&&(w.update(D.inputSource,D.frame,l||a),w.dispatchEvent({type:D.type,data:D.inputSource}))}function X(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",lt);for(let D=0;D<v.length;D++){const L=S[D];L!==null&&(S[D]=null,v[D].disconnect(L))}y=null,G=null,M.reset(),t.setRenderTarget(d),m=null,f=null,u=null,r=null,C=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",X),r.addEventListener("inputsourceschange",lt),p.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(F),r.renderState.layers===void 0){const L={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,L),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new xn(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let L=null,w=null,E=null;p.depth&&(E=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=p.stencil?1027:1026,w=p.stencil?1020:1014);const $={colorFormat:e.RGBA8,depthFormat:E,scaleFactor:s};u=new XRWebGLBinding(r,e),f=u.createProjectionLayer($),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),C=new xn(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new Ea(f.textureWidth,f.textureHeight,w,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),zt.setContext(r),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function lt(D){for(let L=0;L<D.removed.length;L++){const w=D.removed[L],E=S.indexOf(w);E>=0&&(S[E]=null,v[E].disconnect(w))}for(let L=0;L<D.added.length;L++){const w=D.added[L];let E=S.indexOf(w);if(E===-1){for(let ct=0;ct<v.length;ct++)if(ct>=S.length){S.push(w),E=ct;break}else if(S[ct]===null){S[ct]=w,E=ct;break}if(E===-1)break}const $=v[E];$&&$.connect(w)}}const K=new B,st=new B;function O(D,L,w){K.setFromMatrixPosition(L.matrixWorld),st.setFromMatrixPosition(w.matrixWorld);const E=K.distanceTo(st),$=L.projectionMatrix.elements,ct=w.projectionMatrix.elements,Z=$[14]/($[10]-1),ht=$[14]/($[10]+1),q=($[9]+1)/$[5],A=($[9]-1)/$[5],k=($[8]-1)/$[0],J=(ct[8]+1)/ct[0],j=Z*k,it=Z*J,N=E/(-k+J),R=N*-k;if(L.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(R),D.translateZ(N),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),$[10]===-1)D.projectionMatrix.copy(L.projectionMatrix),D.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{const T=Z+N,_=ht+N,z=j-R,nt=it+(E-R),rt=q*ht/_*T,at=A*ht/_*T;D.projectionMatrix.makePerspective(z,nt,rt,at,T,_),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function mt(D,L){L===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(L.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;let L=D.near,w=D.far;M.texture!==null&&(M.depthNear>0&&(L=M.depthNear),M.depthFar>0&&(w=M.depthFar)),x.near=U.near=P.near=L,x.far=U.far=P.far=w,(y!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,G=x.far);const E=D.parent,$=x.cameras;mt(x,E);for(let ct=0;ct<$.length;ct++)mt($[ct],E);$.length===2?O(x,P,U):x.projectionMatrix.copy(P.projectionMatrix),pt(D,x,E)};function pt(D,L,w){w===null?D.matrix.copy(L.matrixWorld):(D.matrix.copy(w.matrixWorld),D.matrix.invert(),D.matrix.multiply(L.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(L.projectionMatrix),D.projectionMatrixInverse.copy(L.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Br*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(D){c=D,f!==null&&(f.fixedFoveation=D),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=D)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let gt=null;function Ut(D,L){if(h=L.getViewerPose(l||a),g=L,h!==null){const w=h.views;m!==null&&(t.setRenderTargetFramebuffer(C,m.framebuffer),t.setRenderTarget(C));let E=!1;w.length!==x.cameras.length&&(x.cameras.length=0,E=!0);for(let ct=0;ct<w.length;ct++){const Z=w[ct];let ht=null;if(m!==null)ht=m.getViewport(Z);else{const A=u.getViewSubImage(f,Z);ht=A.viewport,ct===0&&(t.setRenderTargetTextures(C,A.colorTexture,f.ignoreDepthValues?void 0:A.depthStencilTexture),t.setRenderTarget(C))}let q=Q[ct];q===void 0&&(q=new we,q.layers.enable(ct),q.viewport=new $t,Q[ct]=q),q.matrix.fromArray(Z.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(Z.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ht.x,ht.y,ht.width,ht.height),ct===0&&(x.matrix.copy(q.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),E===!0&&x.cameras.push(q)}const $=r.enabledFeatures;if($&&$.includes("depth-sensing")){const ct=u.getDepthInformation(w[0]);ct&&ct.isValid&&ct.texture&&M.init(t,ct,r.renderState)}}for(let w=0;w<v.length;w++){const E=S[w],$=v[w];E!==null&&$!==void 0&&$.update(E,L,l||a)}gt&&gt(D,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),g=null}const zt=new Sa;zt.setAnimationLoop(Ut),this.setAnimationLoop=function(D){gt=D},this.dispose=function(){}}}const un=new Oe,ef=new jt;function nf(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,xa(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,C,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),M(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,C,v):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===1&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===1&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const C=t.get(d),v=C.envMap,S=C.envMapRotation;v&&(p.envMap.value=v,un.copy(S),un.x*=-1,un.y*=-1,un.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(un.y*=-1,un.z*=-1),p.envMapRotation.value.setFromMatrix4(ef.makeRotationFromEuler(un)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,C,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*C,p.scale.value=v*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,C){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===1&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function M(p,d){const C=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function rf(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,v){const S=v.program;n.uniformBlockBinding(C,S)}function l(C,v){let S=r[C.id];S===void 0&&(g(C),S=h(C),r[C.id]=S,C.addEventListener("dispose",p));const F=v.program;n.updateUBOMapping(C,F);const I=t.render.frame;s[C.id]!==I&&(f(C),s[C.id]=I)}function h(C){const v=u();C.__bindingPointIndex=v;const S=i.createBuffer(),F=C.__size,I=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,F,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function u(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const v=r[C.id],S=C.uniforms,F=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let I=0,P=S.length;I<P;I++){const U=Array.isArray(S[I])?S[I]:[S[I]];for(let Q=0,x=U.length;Q<x;Q++){const y=U[Q];if(m(y,I,Q,F)===!0){const G=y.__offset,Y=Array.isArray(y.value)?y.value:[y.value];let X=0;for(let lt=0;lt<Y.length;lt++){const K=Y[lt],st=M(K);typeof K=="number"||typeof K=="boolean"?(y.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,G+X,y.__data)):K.isMatrix3?(y.__data[0]=K.elements[0],y.__data[1]=K.elements[1],y.__data[2]=K.elements[2],y.__data[3]=0,y.__data[4]=K.elements[3],y.__data[5]=K.elements[4],y.__data[6]=K.elements[5],y.__data[7]=0,y.__data[8]=K.elements[6],y.__data[9]=K.elements[7],y.__data[10]=K.elements[8],y.__data[11]=0):(K.toArray(y.__data,X),X+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(C,v,S,F){const I=C.value,P=v+"_"+S;if(F[P]===void 0)return typeof I=="number"||typeof I=="boolean"?F[P]=I:F[P]=I.clone(),!0;{const U=F[P];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return F[P]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function g(C){const v=C.uniforms;let S=0;const F=16;for(let P=0,U=v.length;P<U;P++){const Q=Array.isArray(v[P])?v[P]:[v[P]];for(let x=0,y=Q.length;x<y;x++){const G=Q[x],Y=Array.isArray(G.value)?G.value:[G.value];for(let X=0,lt=Y.length;X<lt;X++){const K=Y[X],st=M(K),O=S%F,mt=O%st.boundary,pt=O+mt;S+=mt,pt!==0&&F-pt<st.storage&&(S+=F-pt),G.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=st.storage}}}const I=S%F;return I>0&&(S+=F-I),C.__size=S,C.__cache={},this}function M(C){const v={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(v.boundary=4,v.storage=4):C.isVector2?(v.boundary=8,v.storage=8):C.isVector3||C.isColor?(v.boundary=16,v.storage=12):C.isVector4?(v.boundary=16,v.storage=16):C.isMatrix3?(v.boundary=48,v.storage=48):C.isMatrix4?(v.boundary=64,v.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),v}function p(C){const v=C.target;v.removeEventListener("dispose",p);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const C in r)i.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}class sf{constructor(t={}){const{canvas:e=Ha(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let M=null,p=null;const d=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=0,this.toneMappingExposure=1;const v=this;let S=!1,F=0,I=0,P=null,U=-1,Q=null;const x=new $t,y=new $t;let G=null;const Y=new Ht(0);let X=0,lt=e.width,K=e.height,st=1,O=null,mt=null;const pt=new $t(0,0,lt,K),gt=new $t(0,0,lt,K);let Ut=!1;const zt=new Xr;let D=!1,L=!1;const w=new jt,E=new jt,$=new B,ct=new $t,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function q(){return P===null?st:1}let A=n;function k(b,H){return e.getContext(b,H)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),A===null){const H="webgl2";if(A=k(H,b),A===null)throw k(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let J,j,it,N,R,T,_,z,nt,rt,at,vt,xt,St,Gt,dt,Et,It,yt,Tt,kt,Bt,Qt,V;function wt(){J=new lh(A),J.init(),Bt=new Ku(A,J),j=new ih(A,J,t,Bt),it=new Xu(A),j.reverseDepthBuffer&&it.buffers.depth.setReversed(!0),N=new fh(A),R=new Pu,T=new Yu(A,J,it,R,j,Bt,N),_=new sh(v),z=new ch(v),nt=new vo(A),Qt=new eh(A,nt),rt=new hh(A,nt,N,Qt),at=new ph(A,rt,nt,N),yt=new dh(A,j,T),dt=new rh(R),vt=new Ru(v,_,z,J,j,Qt,dt),xt=new nf(v,R),St=new Iu,Gt=new Bu(J),It=new th(v,_,z,it,at,f,c),Et=new Hu(v,at,j),V=new rf(A,N,j,it),Tt=new nh(A,J,N),kt=new uh(A,J,N),N.programs=vt.programs,v.capabilities=j,v.extensions=J,v.properties=R,v.renderLists=St,v.shadowMap=Et,v.state=it,v.info=N}wt();const ot=new tf(v,A);this.xr=ot,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const b=J.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=J.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(b){b!==void 0&&(st=b,this.setSize(lt,K,!1))},this.getSize=function(b){return b.set(lt,K)},this.setSize=function(b,H,tt=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=b,K=H,e.width=Math.floor(b*st),e.height=Math.floor(H*st),tt===!0&&(e.style.width=b+"px",e.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(lt*st,K*st).floor()},this.setDrawingBufferSize=function(b,H,tt){lt=b,K=H,st=tt,e.width=Math.floor(b*tt),e.height=Math.floor(H*tt),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(pt)},this.setViewport=function(b,H,tt,et){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,H,tt,et),it.viewport(x.copy(pt).multiplyScalar(st).round())},this.getScissor=function(b){return b.copy(gt)},this.setScissor=function(b,H,tt,et){b.isVector4?gt.set(b.x,b.y,b.z,b.w):gt.set(b,H,tt,et),it.scissor(y.copy(gt).multiplyScalar(st).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(b){it.setScissorTest(Ut=b)},this.setOpaqueSort=function(b){O=b},this.setTransparentSort=function(b){mt=b},this.getClearColor=function(b){return b.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(b=!0,H=!0,tt=!0){let et=0;if(b){let W=!1;if(P!==null){const _t=P.texture.format;W=_t===1033||_t===1031||_t===1029}if(W){const _t=P.texture.type,bt=_t===1009||_t===1014||_t===1012||_t===1020||_t===1017||_t===1018,Rt=It.getClearColor(),Pt=It.getClearAlpha(),Nt=Rt.r,Ft=Rt.g,Lt=Rt.b;bt?(m[0]=Nt,m[1]=Ft,m[2]=Lt,m[3]=Pt,A.clearBufferuiv(A.COLOR,0,m)):(g[0]=Nt,g[1]=Ft,g[2]=Lt,g[3]=Pt,A.clearBufferiv(A.COLOR,0,g))}else et|=A.COLOR_BUFFER_BIT}H&&(et|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),tt&&(et|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),St.dispose(),Gt.dispose(),R.dispose(),_.dispose(),z.dispose(),at.dispose(),Qt.dispose(),V.dispose(),vt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",es),ot.removeEventListener("sessionend",ns),sn.stop()};function ft(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=N.autoReset,H=Et.enabled,tt=Et.autoUpdate,et=Et.needsUpdate,W=Et.type;wt(),N.autoReset=b,Et.enabled=H,Et.autoUpdate=tt,Et.needsUpdate=et,Et.type=W}function Ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Wt(b){const H=b.target;H.removeEventListener("dispose",Wt),ae(H)}function ae(b){ve(b),R.remove(b)}function ve(b){const H=R.get(b).programs;H!==void 0&&(H.forEach(function(tt){vt.releaseProgram(tt)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,tt,et,W,_t){H===null&&(H=Z);const bt=W.isMesh&&W.matrixWorld.determinant()<0,Rt=Ba(b,H,tt,et,W);it.setMaterial(et,bt);let Pt=tt.index,Nt=1;if(et.wireframe===!0){if(Pt=rt.getWireframeAttribute(tt),Pt===void 0)return;Nt=2}const Ft=tt.drawRange,Lt=tt.attributes.position;let Jt=Ft.start*Nt,te=(Ft.start+Ft.count)*Nt;_t!==null&&(Jt=Math.max(Jt,_t.start*Nt),te=Math.min(te,(_t.start+_t.count)*Nt)),Pt!==null?(Jt=Math.max(Jt,0),te=Math.min(te,Pt.count)):Lt!=null&&(Jt=Math.max(Jt,0),te=Math.min(te,Lt.count));const re=te-Jt;if(re<0||re===1/0)return;Qt.setup(W,et,Rt,tt,Pt);let Ee,Yt=Tt;if(Pt!==null&&(Ee=nt.get(Pt),Yt=kt,Yt.setIndex(Ee)),W.isMesh)et.wireframe===!0?(it.setLineWidth(et.wireframeLinewidth*q()),Yt.setMode(A.LINES)):Yt.setMode(A.TRIANGLES);else if(W.isLine){let Dt=et.linewidth;Dt===void 0&&(Dt=1),it.setLineWidth(Dt*q()),W.isLineSegments?Yt.setMode(A.LINES):W.isLineLoop?Yt.setMode(A.LINE_LOOP):Yt.setMode(A.LINE_STRIP)}else W.isPoints?Yt.setMode(A.POINTS):W.isSprite&&Yt.setMode(A.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Yt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Yt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Dt=W._multiDrawStarts,ue=W._multiDrawCounts,Kt=W._multiDrawCount,Le=Pt?nt.get(Pt).bytesPerElement:1,Sn=R.get(et).currentProgram.getUniforms();for(let Te=0;Te<Kt;Te++)Sn.setValue(A,"_gl_DrawID",Te),Yt.render(Dt[Te]/Le,ue[Te])}else if(W.isInstancedMesh)Yt.renderInstances(Jt,re,W.count);else if(tt.isInstancedBufferGeometry){const Dt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,ue=Math.min(tt.instanceCount,Dt);Yt.renderInstances(Jt,re,ue)}else Yt.render(Jt,re)};function qt(b,H,tt){b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=1,b.needsUpdate=!0,mi(b,H,tt),b.side=0,b.needsUpdate=!0,mi(b,H,tt),b.side=2):mi(b,H,tt)}this.compile=function(b,H,tt=null){tt===null&&(tt=b),p=Gt.get(tt),p.init(H),C.push(p),tt.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),b!==tt&&b.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const et=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const _t=W.material;if(_t)if(Array.isArray(_t))for(let bt=0;bt<_t.length;bt++){const Rt=_t[bt];qt(Rt,tt,W),et.add(Rt)}else qt(_t,tt,W),et.add(_t)}),C.pop(),p=null,et},this.compileAsync=function(b,H,tt=null){const et=this.compile(b,H,tt);return new Promise(W=>{function _t(){if(et.forEach(function(bt){R.get(bt).currentProgram.isReady()&&et.delete(bt)}),et.size===0){W(b);return}setTimeout(_t,10)}J.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Me=null;function Ge(b){Me&&Me(b)}function es(){sn.stop()}function ns(){sn.start()}const sn=new Sa;sn.setAnimationLoop(Ge),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(b){Me=b,ot.setAnimationLoop(b),b===null?sn.stop():sn.start()},ot.addEventListener("sessionstart",es),ot.addEventListener("sessionend",ns),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(H),H=ot.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,H,P),p=Gt.get(b,C.length),p.init(H),C.push(p),E.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),zt.setFromProjectionMatrix(E),L=this.localClippingEnabled,D=dt.init(this.clippingPlanes,L),M=St.get(b,d.length),M.init(),d.push(M),ot.enabled===!0&&ot.isPresenting===!0){const _t=v.xr.getDepthSensingMesh();_t!==null&&ji(_t,H,-1/0,v.sortObjects)}ji(b,H,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(O,mt),ht=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,ht&&It.addToRenderList(M,b),this.info.render.frame++,D===!0&&dt.beginShadows();const tt=p.state.shadowsArray;Et.render(tt,b,H),D===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=M.opaque,W=M.transmissive;if(p.setupLights(),H.isArrayCamera){const _t=H.cameras;if(W.length>0)for(let bt=0,Rt=_t.length;bt<Rt;bt++){const Pt=_t[bt];rs(et,W,b,Pt)}ht&&It.render(b);for(let bt=0,Rt=_t.length;bt<Rt;bt++){const Pt=_t[bt];is(M,b,Pt,Pt.viewport)}}else W.length>0&&rs(et,W,b,H),ht&&It.render(b),is(M,b,H);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(v,b,H),Qt.resetDefaultState(),U=-1,Q=null,C.pop(),C.length>0?(p=C[C.length-1],D===!0&&dt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?M=d[d.length-1]:M=null};function ji(b,H,tt,et){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)tt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||zt.intersectsSprite(b)){et&&ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(E);const bt=at.update(b),Rt=b.material;Rt.visible&&M.push(b,bt,Rt,tt,ct.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||zt.intersectsObject(b))){const bt=at.update(b),Rt=b.material;if(et&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ct.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),ct.copy(bt.boundingSphere.center)),ct.applyMatrix4(b.matrixWorld).applyMatrix4(E)),Array.isArray(Rt)){const Pt=bt.groups;for(let Nt=0,Ft=Pt.length;Nt<Ft;Nt++){const Lt=Pt[Nt],Jt=Rt[Lt.materialIndex];Jt&&Jt.visible&&M.push(b,bt,Jt,tt,ct.z,Lt)}}else Rt.visible&&M.push(b,bt,Rt,tt,ct.z,null)}}const _t=b.children;for(let bt=0,Rt=_t.length;bt<Rt;bt++)ji(_t[bt],H,tt,et)}function is(b,H,tt,et){const W=b.opaque,_t=b.transmissive,bt=b.transparent;p.setupLightsView(tt),D===!0&&dt.setGlobalState(v.clippingPlanes,tt),et&&it.viewport(x.copy(et)),W.length>0&&pi(W,H,tt),_t.length>0&&pi(_t,H,tt),bt.length>0&&pi(bt,H,tt),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function rs(b,H,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new xn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const _t=p.state.transmissionRenderTarget[et.id],bt=et.viewport||x;_t.setSize(bt.z,bt.w);const Rt=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(Y),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),ht&&It.render(tt);const Pt=v.toneMapping;v.toneMapping=0;const Nt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),D===!0&&dt.setGlobalState(v.clippingPlanes,et),pi(b,tt,et),T.updateMultisampleRenderTarget(_t),T.updateRenderTargetMipmap(_t),J.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Lt=0,Jt=H.length;Lt<Jt;Lt++){const te=H[Lt],re=te.object,Ee=te.geometry,Yt=te.material,Dt=te.group;if(Yt.side===2&&re.layers.test(et.layers)){const ue=Yt.side;Yt.side=1,Yt.needsUpdate=!0,ss(re,tt,et,Ee,Yt,Dt),Yt.side=ue,Yt.needsUpdate=!0,Ft=!0}}Ft===!0&&(T.updateMultisampleRenderTarget(_t),T.updateRenderTargetMipmap(_t))}v.setRenderTarget(Rt),v.setClearColor(Y,X),Nt!==void 0&&(et.viewport=Nt),v.toneMapping=Pt}function pi(b,H,tt){const et=H.isScene===!0?H.overrideMaterial:null;for(let W=0,_t=b.length;W<_t;W++){const bt=b[W],Rt=bt.object,Pt=bt.geometry,Nt=et===null?bt.material:et,Ft=bt.group;Rt.layers.test(tt.layers)&&ss(Rt,H,tt,Pt,Nt,Ft)}}function ss(b,H,tt,et,W,_t){b.onBeforeRender(v,H,tt,et,W,_t),b.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(v,H,tt,et,b,_t),W.transparent===!0&&W.side===2&&W.forceSinglePass===!1?(W.side=1,W.needsUpdate=!0,v.renderBufferDirect(tt,H,et,W,b,_t),W.side=0,W.needsUpdate=!0,v.renderBufferDirect(tt,H,et,W,b,_t),W.side=2):v.renderBufferDirect(tt,H,et,W,b,_t),b.onAfterRender(v,H,tt,et,W,_t)}function mi(b,H,tt){H.isScene!==!0&&(H=Z);const et=R.get(b),W=p.state.lights,_t=p.state.shadowsArray,bt=W.state.version,Rt=vt.getParameters(b,W.state,_t,H,tt),Pt=vt.getProgramCacheKey(Rt);let Nt=et.programs;et.environment=b.isMeshStandardMaterial?H.environment:null,et.fog=H.fog,et.envMap=(b.isMeshStandardMaterial?z:_).get(b.envMap||et.environment),et.envMapRotation=et.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Nt===void 0&&(b.addEventListener("dispose",Wt),Nt=new Map,et.programs=Nt);let Ft=Nt.get(Pt);if(Ft!==void 0){if(et.currentProgram===Ft&&et.lightsStateVersion===bt)return os(b,Rt),Ft}else Rt.uniforms=vt.getUniforms(b),b.onBeforeCompile(Rt,v),Ft=vt.acquireProgram(Rt,Pt),Nt.set(Pt,Ft),et.uniforms=Rt.uniforms;const Lt=et.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=dt.uniform),os(b,Rt),et.needsLights=Ga(b),et.lightsStateVersion=bt,et.needsLights&&(Lt.ambientLightColor.value=W.state.ambient,Lt.lightProbe.value=W.state.probe,Lt.directionalLights.value=W.state.directional,Lt.directionalLightShadows.value=W.state.directionalShadow,Lt.spotLights.value=W.state.spot,Lt.spotLightShadows.value=W.state.spotShadow,Lt.rectAreaLights.value=W.state.rectArea,Lt.ltc_1.value=W.state.rectAreaLTC1,Lt.ltc_2.value=W.state.rectAreaLTC2,Lt.pointLights.value=W.state.point,Lt.pointLightShadows.value=W.state.pointShadow,Lt.hemisphereLights.value=W.state.hemi,Lt.directionalShadowMap.value=W.state.directionalShadowMap,Lt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Lt.spotShadowMap.value=W.state.spotShadowMap,Lt.spotLightMatrix.value=W.state.spotLightMatrix,Lt.spotLightMap.value=W.state.spotLightMap,Lt.pointShadowMap.value=W.state.pointShadowMap,Lt.pointShadowMatrix.value=W.state.pointShadowMatrix),et.currentProgram=Ft,et.uniformsList=null,Ft}function as(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Vi.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function os(b,H){const tt=R.get(b);tt.outputColorSpace=H.outputColorSpace,tt.batching=H.batching,tt.batchingColor=H.batchingColor,tt.instancing=H.instancing,tt.instancingColor=H.instancingColor,tt.instancingMorph=H.instancingMorph,tt.skinning=H.skinning,tt.morphTargets=H.morphTargets,tt.morphNormals=H.morphNormals,tt.morphColors=H.morphColors,tt.morphTargetsCount=H.morphTargetsCount,tt.numClippingPlanes=H.numClippingPlanes,tt.numIntersection=H.numClipIntersection,tt.vertexAlphas=H.vertexAlphas,tt.vertexTangents=H.vertexTangents,tt.toneMapping=H.toneMapping}function Ba(b,H,tt,et,W){H.isScene!==!0&&(H=Z),T.resetTextureUnits();const _t=H.fog,bt=et.isMeshStandardMaterial?H.environment:null,Rt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:rn,Pt=(et.isMeshStandardMaterial?z:_).get(et.envMap||bt),Nt=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Ft=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Lt=!!tt.morphAttributes.position,Jt=!!tt.morphAttributes.normal,te=!!tt.morphAttributes.color;let re=0;et.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(re=v.toneMapping);const Ee=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Yt=Ee!==void 0?Ee.length:0,Dt=R.get(et),ue=p.state.lights;if(D===!0&&(L===!0||b!==Q)){const Re=b===Q&&et.id===U;dt.setState(et,b,Re)}let Kt=!1;et.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==ue.state.version||Dt.outputColorSpace!==Rt||W.isBatchedMesh&&Dt.batching===!1||!W.isBatchedMesh&&Dt.batching===!0||W.isBatchedMesh&&Dt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Dt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Dt.instancing===!1||!W.isInstancedMesh&&Dt.instancing===!0||W.isSkinnedMesh&&Dt.skinning===!1||!W.isSkinnedMesh&&Dt.skinning===!0||W.isInstancedMesh&&Dt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Dt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Dt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Dt.instancingMorph===!1&&W.morphTexture!==null||Dt.envMap!==Pt||et.fog===!0&&Dt.fog!==_t||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==dt.numPlanes||Dt.numIntersection!==dt.numIntersection)||Dt.vertexAlphas!==Nt||Dt.vertexTangents!==Ft||Dt.morphTargets!==Lt||Dt.morphNormals!==Jt||Dt.morphColors!==te||Dt.toneMapping!==re||Dt.morphTargetsCount!==Yt)&&(Kt=!0):(Kt=!0,Dt.__version=et.version);let Le=Dt.currentProgram;Kt===!0&&(Le=mi(et,H,W));let Sn=!1,Te=!1,Qi=!1;const se=Le.getUniforms(),Ke=Dt.uniforms;if(it.useProgram(Le.program)&&(Sn=!0,Te=!0,Qi=!0),et.id!==U&&(U=et.id,Te=!0),Sn||Q!==b){j.reverseDepthBuffer?(w.copy(b.projectionMatrix),Xa(w),qa(w),se.setValue(A,"projectionMatrix",w)):se.setValue(A,"projectionMatrix",b.projectionMatrix),se.setValue(A,"viewMatrix",b.matrixWorldInverse);const Re=se.map.cameraPosition;Re!==void 0&&Re.setValue(A,$.setFromMatrixPosition(b.matrixWorld)),j.logarithmicDepthBuffer&&se.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&se.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,Te=!0,Qi=!0)}if(W.isSkinnedMesh){se.setOptional(A,W,"bindMatrix"),se.setOptional(A,W,"bindMatrixInverse");const Re=W.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),se.setValue(A,"boneTexture",Re.boneTexture,T))}W.isBatchedMesh&&(se.setOptional(A,W,"batchingTexture"),se.setValue(A,"batchingTexture",W._matricesTexture,T),se.setOptional(A,W,"batchingIdTexture"),se.setValue(A,"batchingIdTexture",W._indirectTexture,T),se.setOptional(A,W,"batchingColorTexture"),W._colorsTexture!==null&&se.setValue(A,"batchingColorTexture",W._colorsTexture,T));const tr=tt.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&yt.update(W,tt,Le),(Te||Dt.receiveShadow!==W.receiveShadow)&&(Dt.receiveShadow=W.receiveShadow,se.setValue(A,"receiveShadow",W.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Ke.envMap.value=Pt,Ke.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&H.environment!==null&&(Ke.envMapIntensity.value=H.environmentIntensity),Te&&(se.setValue(A,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&za(Ke,Qi),_t&&et.fog===!0&&xt.refreshFogUniforms(Ke,_t),xt.refreshMaterialUniforms(Ke,et,st,K,p.state.transmissionRenderTarget[b.id]),Vi.upload(A,as(Dt),Ke,T)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Vi.upload(A,as(Dt),Ke,T),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&se.setValue(A,"center",W.center),se.setValue(A,"modelViewMatrix",W.modelViewMatrix),se.setValue(A,"normalMatrix",W.normalMatrix),se.setValue(A,"modelMatrix",W.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Re=et.uniformsGroups;for(let er=0,Va=Re.length;er<Va;er++){const cs=Re[er];V.update(cs,Le),V.bind(cs,Le)}}return Le}function za(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Ga(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,H,tt){R.get(b.texture).__webglTexture=H,R.get(b.depthTexture).__webglTexture=tt;const et=R.get(b);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=tt===void 0,et.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,H){const tt=R.get(b);tt.__webglFramebuffer=H,tt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,tt=0){P=b,F=H,I=tt;let et=!0,W=null,_t=!1,bt=!1;if(b){const Pt=R.get(b);if(Pt.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(A.FRAMEBUFFER,null),et=!1;else if(Pt.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Pt.__hasExternalTextures)T.rebindTextures(b,R.get(b.texture).__webglTexture,R.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Lt=b.depthTexture;if(Pt.__boundDepthTexture!==Lt){if(Lt!==null&&R.has(Lt)&&(b.width!==Lt.image.width||b.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Nt=b.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(bt=!0);const Ft=R.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ft[H])?W=Ft[H][tt]:W=Ft[H],_t=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?W=R.get(b).__webglMultisampledFramebuffer:Array.isArray(Ft)?W=Ft[tt]:W=Ft,x.copy(b.viewport),y.copy(b.scissor),G=b.scissorTest}else x.copy(pt).multiplyScalar(st).floor(),y.copy(gt).multiplyScalar(st).floor(),G=Ut;if(it.bindFramebuffer(A.FRAMEBUFFER,W)&&et&&it.drawBuffers(b,W),it.viewport(x),it.scissor(y),it.setScissorTest(G),_t){const Pt=R.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pt.__webglTexture,tt)}else if(bt){const Pt=R.get(b.texture),Nt=H||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Pt.__webglTexture,tt||0,Nt)}U=-1},this.readRenderTargetPixels=function(b,H,tt,et,W,_t,bt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=R.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt){it.bindFramebuffer(A.FRAMEBUFFER,Rt);try{const Pt=b.texture,Nt=Pt.format,Ft=Pt.type;if(!j.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-et&&tt>=0&&tt<=b.height-W&&A.readPixels(H,tt,et,W,Bt.convert(Nt),Bt.convert(Ft),_t)}finally{const Pt=P!==null?R.get(P).__webglFramebuffer:null;it.bindFramebuffer(A.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(b,H,tt,et,W,_t,bt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=R.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt){const Pt=b.texture,Nt=Pt.format,Ft=Pt.type;if(!j.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=b.width-et&&tt>=0&&tt<=b.height-W){it.bindFramebuffer(A.FRAMEBUFFER,Rt);const Lt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Lt),A.bufferData(A.PIXEL_PACK_BUFFER,_t.byteLength,A.STREAM_READ),A.readPixels(H,tt,et,W,Bt.convert(Nt),Bt.convert(Ft),0);const Jt=P!==null?R.get(P).__webglFramebuffer:null;it.bindFramebuffer(A.FRAMEBUFFER,Jt);const te=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Wa(A,te,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Lt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,_t),A.deleteBuffer(Lt),A.deleteSync(te),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,H=null,tt=0){b.isTexture!==!0&&(Gi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1]);const et=Math.pow(2,-tt),W=Math.floor(b.image.width*et),_t=Math.floor(b.image.height*et),bt=H!==null?H.x:0,Rt=H!==null?H.y:0;T.setTexture2D(b,0),A.copyTexSubImage2D(A.TEXTURE_2D,tt,0,0,bt,Rt,W,_t),it.unbindTexture()},this.copyTextureToTexture=function(b,H,tt=null,et=null,W=0){b.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,b=arguments[1],H=arguments[2],W=arguments[3]||0,tt=null);let _t,bt,Rt,Pt,Nt,Ft;tt!==null?(_t=tt.max.x-tt.min.x,bt=tt.max.y-tt.min.y,Rt=tt.min.x,Pt=tt.min.y):(_t=b.image.width,bt=b.image.height,Rt=0,Pt=0),et!==null?(Nt=et.x,Ft=et.y):(Nt=0,Ft=0);const Lt=Bt.convert(H.format),Jt=Bt.convert(H.type);T.setTexture2D(H,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,H.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,H.unpackAlignment);const te=A.getParameter(A.UNPACK_ROW_LENGTH),re=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Ee=A.getParameter(A.UNPACK_SKIP_PIXELS),Yt=A.getParameter(A.UNPACK_SKIP_ROWS),Dt=A.getParameter(A.UNPACK_SKIP_IMAGES),ue=b.isCompressedTexture?b.mipmaps[W]:b.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,ue.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ue.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Rt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Pt),b.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,W,Nt,Ft,_t,bt,Lt,Jt,ue.data):b.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,W,Nt,Ft,ue.width,ue.height,Lt,ue.data):A.texSubImage2D(A.TEXTURE_2D,W,Nt,Ft,_t,bt,Lt,Jt,ue),A.pixelStorei(A.UNPACK_ROW_LENGTH,te),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,re),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ee),A.pixelStorei(A.UNPACK_SKIP_ROWS,Yt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Dt),W===0&&H.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),it.unbindTexture()},this.copyTextureToTexture3D=function(b,H,tt=null,et=null,W=0){b.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,et=arguments[1]||null,b=arguments[2],H=arguments[3],W=arguments[4]||0);let _t,bt,Rt,Pt,Nt,Ft,Lt,Jt,te;const re=b.isCompressedTexture?b.mipmaps[W]:b.image;tt!==null?(_t=tt.max.x-tt.min.x,bt=tt.max.y-tt.min.y,Rt=tt.max.z-tt.min.z,Pt=tt.min.x,Nt=tt.min.y,Ft=tt.min.z):(_t=re.width,bt=re.height,Rt=re.depth,Pt=0,Nt=0,Ft=0),et!==null?(Lt=et.x,Jt=et.y,te=et.z):(Lt=0,Jt=0,te=0);const Ee=Bt.convert(H.format),Yt=Bt.convert(H.type);let Dt;if(H.isData3DTexture)T.setTexture3D(H,0),Dt=A.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)T.setTexture2DArray(H,0),Dt=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,H.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,H.unpackAlignment);const ue=A.getParameter(A.UNPACK_ROW_LENGTH),Kt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Le=A.getParameter(A.UNPACK_SKIP_PIXELS),Sn=A.getParameter(A.UNPACK_SKIP_ROWS),Te=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,re.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,re.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Nt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ft),b.isDataTexture||b.isData3DTexture?A.texSubImage3D(Dt,W,Lt,Jt,te,_t,bt,Rt,Ee,Yt,re.data):H.isCompressedArrayTexture?A.compressedTexSubImage3D(Dt,W,Lt,Jt,te,_t,bt,Rt,Ee,re.data):A.texSubImage3D(Dt,W,Lt,Jt,te,_t,bt,Rt,Ee,Yt,re),A.pixelStorei(A.UNPACK_ROW_LENGTH,ue),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Kt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Le),A.pixelStorei(A.UNPACK_SKIP_ROWS,Sn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Te),W===0&&H.generateMipmaps&&A.generateMipmap(Dt),it.unbindTexture()},this.initRenderTarget=function(b){R.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),it.unbindTexture()},this.resetState=function(){F=0,I=0,P=null,it.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Wr?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Ki?"display-p3":"srgb"}}class Ca extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oe,this.environmentIntensity=1,this.environmentRotation=new Oe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class af extends me{constructor(t=null,e=1,n=1,r,s,a,o,c,l=1003,h=1003,u,f){super(null,a,o,c,l,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Js extends Fe{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Nn=new jt,$s=new jt,Fi=[],js=new Mn,of=new jt,ti=new Xt,ei=new fi;class cf extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Js(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,of)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Nn),js.copy(t.boundingBox).applyMatrix4(Nn),this.boundingBox.union(js)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Nn),ei.copy(t.boundingSphere).applyMatrix4(Nn),this.boundingSphere.union(ei)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(ti.geometry=this.geometry,ti.material=this.material,ti.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ei.copy(this.boundingSphere),ei.applyMatrix4(n),t.ray.intersectsSphere(ei)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Nn),$s.multiplyMatrices(n,Nn),ti.matrixWorld=$s,ti.raycast(t,Fi);for(let a=0,o=Fi.length;a<o;a++){const c=Fi[a];c.instanceId=s,c.object=this,e.push(c)}Fi.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new af(new Float32Array(r*this.count),r,this.count,1028,1015));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Yr extends me{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ze{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const h=n[r],f=n[r+1]-h,m=(a-h)/f;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new ut:new B);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new B,r=[],s=[],a=[],o=new B,c=new jt;for(let m=0;m<=t;m++){const g=m/t;r[m]=this.getTangentAt(g,new B)}s[0]=new B,a[0]=new B;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(fe(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(fe(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Kr extends ze{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ut){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*u+this.aX,l=f*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class lf extends Kr{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Zr(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,m*=h,r(a,o,f,m)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Oi=new B,Ir=new Zr,Dr=new Zr,Ur=new Zr;class hf extends ze{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new B){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=r[(o-1)%s]:(Oi.subVectors(r[0],r[1]).add(r[0]),l=Oi);const u=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Oi.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Oi),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),m),M=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),Ir.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,M,p),Dr.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,M,p),Ur.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,M,p)}else this.curveType==="catmullrom"&&(Ir.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Dr.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ur.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Ir.calc(c),Dr.calc(c),Ur.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new B().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Qs(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function uf(i,t){const e=1-i;return e*e*t}function ff(i,t){return 2*(1-i)*i*t}function df(i,t){return i*i*t}function ai(i,t,e,n){return uf(i,t)+ff(i,e)+df(i,n)}function pf(i,t){const e=1-i;return e*e*e*t}function mf(i,t){const e=1-i;return 3*e*e*i*t}function gf(i,t){return 3*(1-i)*i*i*t}function _f(i,t){return i*i*i*t}function oi(i,t,e,n,r){return pf(i,t)+mf(i,e)+gf(i,n)+_f(i,r)}class Ra extends ze{constructor(t=new ut,e=new ut,n=new ut,r=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ut){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(oi(t,r.x,s.x,a.x,o.x),oi(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xf extends ze{constructor(t=new B,e=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new B){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(oi(t,r.x,s.x,a.x,o.x),oi(t,r.y,s.y,a.y,o.y),oi(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pa extends ze{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vf extends ze{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class La extends ze{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(ai(t,r.x,s.x,a.x),ai(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mf extends ze{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(ai(t,r.x,s.x,a.x),ai(t,r.y,s.y,a.y),ai(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ia extends ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Qs(o,c.x,l.x,h.x,u.x),Qs(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ut().fromArray(r))}return this}}var Vr=Object.freeze({__proto__:null,ArcCurve:lf,CatmullRomCurve3:hf,CubicBezierCurve:Ra,CubicBezierCurve3:xf,EllipseCurve:Kr,LineCurve:Pa,LineCurve3:vf,QuadraticBezierCurve:La,QuadraticBezierCurve3:Mf,SplineCurve:Ia});class Sf extends ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Vr[r.type]().fromJSON(r))}return this}}class Gn extends Sf{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Pa(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new La(this.currentPoint.clone(),new ut(t,e),new ut(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new Ra(this.currentPoint.clone(),new ut(t,e),new ut(n,r),new ut(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ia(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new Kr(t,e,n,r,s,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Xi extends Ce{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new B,h=new ut;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const m=n+u/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qi extends Ce{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],m=[];let g=0;const M=[],p=n/2;let d=0;C(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(m,2));function C(){const S=new B,F=new B;let I=0;const P=(e-t)/n;for(let U=0;U<=s;U++){const Q=[],x=U/s,y=x*(e-t)+t;for(let G=0;G<=r;G++){const Y=G/r,X=Y*c+o,lt=Math.sin(X),K=Math.cos(X);F.x=y*lt,F.y=-x*n+p,F.z=y*K,u.push(F.x,F.y,F.z),S.set(lt,P,K).normalize(),f.push(S.x,S.y,S.z),m.push(Y,1-x),Q.push(g++)}M.push(Q)}for(let U=0;U<r;U++)for(let Q=0;Q<s;Q++){const x=M[Q][U],y=M[Q+1][U],G=M[Q+1][U+1],Y=M[Q][U+1];t>0&&(h.push(x,y,Y),I+=3),e>0&&(h.push(y,G,Y),I+=3)}l.addGroup(d,I,0),d+=I}function v(S){const F=g,I=new ut,P=new B;let U=0;const Q=S===!0?t:e,x=S===!0?1:-1;for(let G=1;G<=r;G++)u.push(0,p*x,0),f.push(0,x,0),m.push(.5,.5),g++;const y=g;for(let G=0;G<=r;G++){const X=G/r*c+o,lt=Math.cos(X),K=Math.sin(X);P.x=Q*K,P.y=p*x,P.z=Q*lt,u.push(P.x,P.y,P.z),f.push(0,x,0),I.x=lt*.5+.5,I.y=K*.5*x+.5,m.push(I.x,I.y),g++}for(let G=0;G<r;G++){const Y=F+G,X=y+G;S===!0?h.push(X,X+1,Y):h.push(X+1,X,Y),U+=3}l.addGroup(d,U,S===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ci extends Gn{constructor(t){super(t),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Gn().fromJSON(r))}return this}}const yf={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Da(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,u,f,m;if(n&&(s=wf(i,t,s,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<r;g+=e)u=i[g],f=i[g+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);m=Math.max(l-o,h-c),m=m!==0?32767/m:0}return li(s,a,e,o,c,m,0),a}};function Da(i,t,e,n,r){let s,a;if(r===Bf(i,t,e,n)>0)for(s=t;s<e;s+=n)a=ta(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=ta(s,i[s],i[s+1],a);return a&&$i(a,a.next)&&(ui(a),a=a.next),a}function vn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($i(e,e.next)||ie(e.prev,e,e.next)===0)){if(ui(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function li(i,t,e,n,r,s,a){if(!i)return;!a&&s&&If(i,n,r,s);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?Tf(i,n,r,s):Ef(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ui(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Af(vn(i),t,e),li(i,t,e,n,r,s,2)):a===2&&bf(i,t,e,n,r,s):li(vn(i),t,e,n,r,s,1);break}}}function Ef(i){const t=i.prev,e=i,n=i.next;if(ie(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=r<s?r<a?r:a:s<a?s:a,u=o<c?o<l?o:l:c<l?c:l,f=r>s?r>a?r:a:s>a?s:a,m=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&Bn(r,o,s,c,a,l,g.x,g.y)&&ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Tf(i,t,e,n){const r=i.prev,s=i,a=i.next;if(ie(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,h=r.y,u=s.y,f=a.y,m=o<c?o<l?o:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,M=o>c?o>l?o:l:c>l?c:l,p=h>u?h>f?h:f:u>f?u:f,d=kr(m,g,t,e,n),C=kr(M,p,t,e,n);let v=i.prevZ,S=i.nextZ;for(;v&&v.z>=d&&S&&S.z<=C;){if(v.x>=m&&v.x<=M&&v.y>=g&&v.y<=p&&v!==r&&v!==a&&Bn(o,h,c,u,l,f,v.x,v.y)&&ie(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=m&&S.x<=M&&S.y>=g&&S.y<=p&&S!==r&&S!==a&&Bn(o,h,c,u,l,f,S.x,S.y)&&ie(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=d;){if(v.x>=m&&v.x<=M&&v.y>=g&&v.y<=p&&v!==r&&v!==a&&Bn(o,h,c,u,l,f,v.x,v.y)&&ie(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=C;){if(S.x>=m&&S.x<=M&&S.y>=g&&S.y<=p&&S!==r&&S!==a&&Bn(o,h,c,u,l,f,S.x,S.y)&&ie(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Af(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!$i(r,s)&&Ua(r,n,n.next,s)&&hi(r,s)&&hi(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),ui(n),ui(n.next),n=i=s),n=n.next}while(n!==i);return vn(n)}function bf(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Nf(a,o)){let c=Na(a,o);a=vn(a,a.next),c=vn(c,c.next),li(a,t,e,n,r,s,0),li(c,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function wf(i,t,e,n){const r=[];let s,a,o,c,l;for(s=0,a=t.length;s<a;s++)o=t[s]*n,c=s<a-1?t[s+1]*n:i.length,l=Da(i,o,c,n,!1),l===l.next&&(l.steiner=!0),r.push(Uf(l));for(r.sort(Cf),s=0;s<r.length;s++)e=Rf(r[s],e);return e}function Cf(i,t){return i.x-t.x}function Rf(i,t){const e=Pf(i,t);if(!e)return t;const n=Na(e,i);return vn(n,n.next),vn(e,e.next)}function Pf(i,t){let e=t,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,c=r.x,l=r.y;let h=1/0,u;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&Bn(a<l?s:n,a,c,l,a<l?n:s,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(s-e.x),hi(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&Lf(r,e)))&&(r=e,h=u)),e=e.next;while(e!==o);return r}function Lf(i,t){return ie(i.prev,i,t.prev)<0&&ie(t.next,i,i.next)<0}function If(i,t,e,n){let r=i;do r.z===0&&(r.z=kr(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Df(r)}function Df(i){let t,e,n,r,s,a,o,c,l=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(a>1);return i}function kr(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Uf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Bn(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function Nf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ff(i,t)&&(hi(i,t)&&hi(t,i)&&Of(i,t)&&(ie(i.prev,i,t.prev)||ie(i,t.prev,t))||$i(i,t)&&ie(i.prev,i,i.next)>0&&ie(t.prev,t,t.next)>0)}function ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $i(i,t){return i.x===t.x&&i.y===t.y}function Ua(i,t,e,n){const r=zi(ie(i,t,e)),s=zi(ie(i,t,n)),a=zi(ie(e,n,i)),o=zi(ie(e,n,t));return!!(r!==s&&a!==o||r===0&&Bi(i,e,t)||s===0&&Bi(i,n,t)||a===0&&Bi(e,i,n)||o===0&&Bi(e,t,n))}function Bi(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function zi(i){return i>0?1:i<0?-1:0}function Ff(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ua(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function hi(i,t){return ie(i.prev,i,i.next)<0?ie(i,t,i.next)>=0&&ie(i,i.prev,t)>=0:ie(i,t,i.prev)<0||ie(i,i.next,t)<0}function Of(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Na(i,t){const e=new Hr(i.i,i.x,i.y),n=new Hr(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ta(i,t,e,n){const r=new Hr(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ui(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hr(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bf(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class _n{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return _n.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];ea(t),na(n,t);let a=t.length;e.forEach(ea);for(let c=0;c<e.length;c++)r.push(a),a+=e[c].length,na(n,e[c]);const o=yf.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function ea(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function na(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Jr extends Ce{constructor(t=new ci([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ne(r,3)),this.setAttribute("uv",new ne(s,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,C=e.UVGenerator!==void 0?e.UVGenerator:zf;let v,S=!1,F,I,P,U;d&&(v=d.getSpacedPoints(h),S=!0,f=!1,F=d.computeFrenetFrames(h,!1),I=new B,P=new B,U=new B),f||(p=0,m=0,g=0,M=0);const Q=o.extractPoints(l);let x=Q.shape;const y=Q.holes;if(!_n.isClockWise(x)){x=x.reverse();for(let q=0,A=y.length;q<A;q++){const k=y[q];_n.isClockWise(k)&&(y[q]=k.reverse())}}const Y=_n.triangulateShape(x,y),X=x;for(let q=0,A=y.length;q<A;q++){const k=y[q];x=x.concat(k)}function lt(q,A,k){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(A,k)}const K=x.length,st=Y.length;function O(q,A,k){let J,j,it;const N=q.x-A.x,R=q.y-A.y,T=k.x-q.x,_=k.y-q.y,z=N*N+R*R,nt=N*_-R*T;if(Math.abs(nt)>Number.EPSILON){const rt=Math.sqrt(z),at=Math.sqrt(T*T+_*_),vt=A.x-R/rt,xt=A.y+N/rt,St=k.x-_/at,Gt=k.y+T/at,dt=((St-vt)*_-(Gt-xt)*T)/(N*_-R*T);J=vt+N*dt-q.x,j=xt+R*dt-q.y;const Et=J*J+j*j;if(Et<=2)return new ut(J,j);it=Math.sqrt(Et/2)}else{let rt=!1;N>Number.EPSILON?T>Number.EPSILON&&(rt=!0):N<-Number.EPSILON?T<-Number.EPSILON&&(rt=!0):Math.sign(R)===Math.sign(_)&&(rt=!0),rt?(J=-R,j=N,it=Math.sqrt(z)):(J=N,j=R,it=Math.sqrt(z/2))}return new ut(J/it,j/it)}const mt=[];for(let q=0,A=X.length,k=A-1,J=q+1;q<A;q++,k++,J++)k===A&&(k=0),J===A&&(J=0),mt[q]=O(X[q],X[k],X[J]);const pt=[];let gt,Ut=mt.concat();for(let q=0,A=y.length;q<A;q++){const k=y[q];gt=[];for(let J=0,j=k.length,it=j-1,N=J+1;J<j;J++,it++,N++)it===j&&(it=0),N===j&&(N=0),gt[J]=O(k[J],k[it],k[N]);pt.push(gt),Ut=Ut.concat(gt)}for(let q=0;q<p;q++){const A=q/p,k=m*Math.cos(A*Math.PI/2),J=g*Math.sin(A*Math.PI/2)+M;for(let j=0,it=X.length;j<it;j++){const N=lt(X[j],mt[j],J);E(N.x,N.y,-k)}for(let j=0,it=y.length;j<it;j++){const N=y[j];gt=pt[j];for(let R=0,T=N.length;R<T;R++){const _=lt(N[R],gt[R],J);E(_.x,_.y,-k)}}}const zt=g+M;for(let q=0;q<K;q++){const A=f?lt(x[q],Ut[q],zt):x[q];S?(P.copy(F.normals[0]).multiplyScalar(A.x),I.copy(F.binormals[0]).multiplyScalar(A.y),U.copy(v[0]).add(P).add(I),E(U.x,U.y,U.z)):E(A.x,A.y,0)}for(let q=1;q<=h;q++)for(let A=0;A<K;A++){const k=f?lt(x[A],Ut[A],zt):x[A];S?(P.copy(F.normals[q]).multiplyScalar(k.x),I.copy(F.binormals[q]).multiplyScalar(k.y),U.copy(v[q]).add(P).add(I),E(U.x,U.y,U.z)):E(k.x,k.y,u/h*q)}for(let q=p-1;q>=0;q--){const A=q/p,k=m*Math.cos(A*Math.PI/2),J=g*Math.sin(A*Math.PI/2)+M;for(let j=0,it=X.length;j<it;j++){const N=lt(X[j],mt[j],J);E(N.x,N.y,u+k)}for(let j=0,it=y.length;j<it;j++){const N=y[j];gt=pt[j];for(let R=0,T=N.length;R<T;R++){const _=lt(N[R],gt[R],J);S?E(_.x,_.y+v[h-1].y,v[h-1].x+k):E(_.x,_.y,u+k)}}}D(),L();function D(){const q=r.length/3;if(f){let A=0,k=K*A;for(let J=0;J<st;J++){const j=Y[J];$(j[2]+k,j[1]+k,j[0]+k)}A=h+p*2,k=K*A;for(let J=0;J<st;J++){const j=Y[J];$(j[0]+k,j[1]+k,j[2]+k)}}else{for(let A=0;A<st;A++){const k=Y[A];$(k[2],k[1],k[0])}for(let A=0;A<st;A++){const k=Y[A];$(k[0]+K*h,k[1]+K*h,k[2]+K*h)}}n.addGroup(q,r.length/3-q,0)}function L(){const q=r.length/3;let A=0;w(X,A),A+=X.length;for(let k=0,J=y.length;k<J;k++){const j=y[k];w(j,A),A+=j.length}n.addGroup(q,r.length/3-q,1)}function w(q,A){let k=q.length;for(;--k>=0;){const J=k;let j=k-1;j<0&&(j=q.length-1);for(let it=0,N=h+p*2;it<N;it++){const R=K*it,T=K*(it+1),_=A+J+R,z=A+j+R,nt=A+j+T,rt=A+J+T;ct(_,z,nt,rt)}}}function E(q,A,k){c.push(q),c.push(A),c.push(k)}function $(q,A,k){Z(q),Z(A),Z(k);const J=r.length/3,j=C.generateTopUV(n,r,J-3,J-2,J-1);ht(j[0]),ht(j[1]),ht(j[2])}function ct(q,A,k,J){Z(q),Z(A),Z(J),Z(A),Z(k),Z(J);const j=r.length/3,it=C.generateSideWallUV(n,r,j-6,j-3,j-2,j-1);ht(it[0]),ht(it[1]),ht(it[3]),ht(it[1]),ht(it[2]),ht(it[3])}function Z(q){r.push(c[q*3+0]),r.push(c[q*3+1]),r.push(c[q*3+2])}function ht(q){s.push(q.x),s.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Gf(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Vr[r.type]().fromJSON(r)),new Jr(n,t.options)}}const zf={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new ut(s,a),new ut(o,c),new ut(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[r*3],m=t[r*3+1],g=t[r*3+2],M=t[s*3],p=t[s*3+1],d=t[s*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ut(a,1-c),new ut(l,1-u),new ut(f,1-g),new ut(M,1-d)]:[new ut(o,1-c),new ut(h,1-u),new ut(m,1-g),new ut(p,1-d)]}};function Gf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class $r extends Ce{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new B,f=new B,m=[],g=[],M=[],p=[];for(let d=0;d<=n;d++){const C=[],v=d/n;let S=0;d===0&&a===0?S=.5/e:d===n&&c===Math.PI&&(S=-.5/e);for(let F=0;F<=e;F++){const I=F/e;u.x=-t*Math.cos(r+I*s)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(r+I*s)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),p.push(I+S,1-v),C.push(l++)}h.push(C)}for(let d=0;d<n;d++)for(let C=0;C<e;C++){const v=h[d][C+1],S=h[d][C],F=h[d+1][C],I=h[d+1][C+1];(d!==0||a>0)&&m.push(v,S,I),(d!==n-1||c<Math.PI)&&m.push(S,F,I)}this.setIndex(m),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(M,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jr extends Ce{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new B,u=new B,f=new B;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){const M=g/r*s,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(M),u.y=(t+e*Math.cos(p))*Math.sin(M),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){const M=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,d=(r+1)*(m-1)+g,C=(r+1)*m+g;a.push(M,p,C),a.push(p,d,C)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nn extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ia extends nn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const ra={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Vf{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const kf=new Vf;class Qr{constructor(t){this.manager=t!==void 0?t:kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";const qe={};class Hf extends Error{constructor(t,e){super(t),this.response=e}}class Wf extends Qr{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=ra.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(qe[t]!==void 0){qe[t].push({onLoad:e,onProgress:n,onError:r});return}qe[t]=[],qe[t].push({onLoad:e,onProgress:n,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=qe[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0;let M=0;const p=new ReadableStream({start(d){C();function C(){u.read().then(({done:v,value:S})=>{if(v)d.close();else{M+=S.byteLength;const F=new ProgressEvent("progress",{lengthComputable:g,loaded:M,total:m});for(let I=0,P=h.length;I<P;I++){const U=h[I];U.onProgress&&U.onProgress(F)}d.enqueue(S),C()}},v=>{d.error(v)})}}});return new Response(p)}else throw new Hf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{ra.add(t,l);const h=qe[t];delete qe[t];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=qe[t];if(h===void 0)throw this.manager.itemError(t),l;delete qe[t];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class ts extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Nr=new jt,sa=new B,aa=new B;class Fa{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sa.setFromMatrixPosition(t.matrixWorld),e.position.copy(sa),aa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(aa),e.updateMatrixWorld(),Nr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oa=new jt,ni=new B,Fr=new B;class Xf extends Fa{constructor(){super(new we(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ni.setFromMatrixPosition(t.matrixWorld),n.position.copy(ni),Fr.copy(n.position),Fr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Fr),n.updateMatrixWorld(),r.makeTranslation(-ni.x,-ni.y,-ni.z),oa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa)}}class qf extends ts{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Xf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Yf extends Fa{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ca extends ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Yf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Kf extends ts{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=la(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=la();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function la(){return performance.now()}const ha=new ut;class Jf{constructor(t=new ut(1/0,1/0),e=new ut(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ha.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ha).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class fn{constructor(){this.type="ShapePath",this.color=new Ht,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Gn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,r){return this.currentPath.quadraticCurveTo(t,e,n,r),this}bezierCurveTo(t,e,n,r,s,a){return this.currentPath.bezierCurveTo(t,e,n,r,s,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(d){const C=[];for(let v=0,S=d.length;v<S;v++){const F=d[v],I=new ci;I.curves=F.curves,C.push(I)}return C}function n(d,C){const v=C.length;let S=!1;for(let F=v-1,I=0;I<v;F=I++){let P=C[F],U=C[I],Q=U.x-P.x,x=U.y-P.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(P=C[I],Q=-Q,U=C[F],x=-x),d.y<P.y||d.y>U.y)continue;if(d.y===P.y){if(d.x===P.x)return!0}else{const y=x*(d.x-P.x)-Q*(d.y-P.y);if(y===0)return!0;if(y<0)continue;S=!S}}else{if(d.y!==P.y)continue;if(U.x<=d.x&&d.x<=P.x||P.x<=d.x&&d.x<=U.x)return!0}}return S}const r=_n.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,c;const l=[];if(s.length===1)return o=s[0],c=new ci,c.curves=o.curves,l.push(c),l;let h=!r(s[0].getPoints());h=t?!h:h;const u=[],f=[];let m=[],g=0,M;f[g]=void 0,m[g]=[];for(let d=0,C=s.length;d<C;d++)o=s[d],M=o.getPoints(),a=r(M),a=t?!a:a,a?(!h&&f[g]&&g++,f[g]={s:new ci,p:M},f[g].s.curves=o.curves,h&&g++,m[g]=[]):m[g].push({h:o,p:M[0]});if(!f[0])return e(s);if(f.length>1){let d=!1,C=0;for(let v=0,S=f.length;v<S;v++)u[v]=[];for(let v=0,S=f.length;v<S;v++){const F=m[v];for(let I=0;I<F.length;I++){const P=F[I];let U=!0;for(let Q=0;Q<f.length;Q++)n(P.p,f[Q].p)&&(v!==Q&&C++,U?(U=!1,u[Q].push(P)):d=!0);U&&u[v].push(P)}}C>0&&d===!1&&(m=u)}let p;for(let d=0,C=f.length;d<C;d++){c=f[d].s,l.push(c),p=m[d];for(let v=0,S=p.length;v<S;v++)c.holes.push(p[v].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");class $f extends Ca{constructor(){super();const t=new qn;t.deleteAttribute("uv");const e=new nn({side:1}),n=new nn,r=new qf(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Xt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Xt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Xt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new Xt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Xt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Xt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Xt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new Xt(t,Fn(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const m=new Xt(t,Fn(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const g=new Xt(t,Fn(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const M=new Xt(t,Fn(43));M.position.set(-.462,8.89,14.52),M.scale.set(4.38,5.441,.088),this.add(M);const p=new Xt(t,Fn(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const d=new Xt(t,Fn(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Fn(i){const t=new Zi;return t.color.setScalar(i),t}const jf=ye;class Yi extends Qr{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,r){const s=this,a=new Wf(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}parse(t){const e=this;function n(D,L){if(D.nodeType!==1)return;const w=S(D);let E=!1,$=null;switch(D.nodeName){case"svg":L=g(D,L);break;case"style":s(D);break;case"g":L=g(D,L);break;case"path":L=g(D,L),D.hasAttribute("d")&&($=r(D));break;case"rect":L=g(D,L),$=c(D);break;case"polygon":L=g(D,L),$=l(D);break;case"polyline":L=g(D,L),$=h(D);break;case"circle":L=g(D,L),$=u(D);break;case"ellipse":L=g(D,L),$=f(D);break;case"line":L=g(D,L),$=m(D);break;case"defs":E=!0;break;case"use":L=g(D,L);const ht=(D.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),q=D.viewportElement.getElementById(ht);q?n(q,L):console.warn("SVGLoader: 'use node' references non-existent node id: "+ht);break}$&&(L.fill!==void 0&&L.fill!=="none"&&$.color.setStyle(L.fill,jf),I($,gt),G.push($),$.userData={node:D,style:L});const ct=D.childNodes;for(let Z=0;Z<ct.length;Z++){const ht=ct[Z];E&&ht.nodeName!=="style"&&ht.nodeName!=="defs"||n(ht,L)}w&&(X.pop(),X.length>0?gt.copy(X[X.length-1]):gt.identity())}function r(D){const L=new fn,w=new ut,E=new ut,$=new ut;let ct=!0,Z=!1;const ht=D.getAttribute("d");if(ht===""||ht==="none")return null;const q=ht.match(/[a-df-z][^a-df-z]*/ig);for(let A=0,k=q.length;A<k;A++){const J=q[A],j=J.charAt(0),it=J.slice(1).trim();ct===!0&&(Z=!0,ct=!1);let N;switch(j){case"M":N=p(it);for(let R=0,T=N.length;R<T;R+=2)w.x=N[R+0],w.y=N[R+1],E.x=w.x,E.y=w.y,R===0?L.moveTo(w.x,w.y):L.lineTo(w.x,w.y),R===0&&$.copy(w);break;case"H":N=p(it);for(let R=0,T=N.length;R<T;R++)w.x=N[R],E.x=w.x,E.y=w.y,L.lineTo(w.x,w.y),R===0&&Z===!0&&$.copy(w);break;case"V":N=p(it);for(let R=0,T=N.length;R<T;R++)w.y=N[R],E.x=w.x,E.y=w.y,L.lineTo(w.x,w.y),R===0&&Z===!0&&$.copy(w);break;case"L":N=p(it);for(let R=0,T=N.length;R<T;R+=2)w.x=N[R+0],w.y=N[R+1],E.x=w.x,E.y=w.y,L.lineTo(w.x,w.y),R===0&&Z===!0&&$.copy(w);break;case"C":N=p(it);for(let R=0,T=N.length;R<T;R+=6)L.bezierCurveTo(N[R+0],N[R+1],N[R+2],N[R+3],N[R+4],N[R+5]),E.x=N[R+2],E.y=N[R+3],w.x=N[R+4],w.y=N[R+5],R===0&&Z===!0&&$.copy(w);break;case"S":N=p(it);for(let R=0,T=N.length;R<T;R+=4)L.bezierCurveTo(M(w.x,E.x),M(w.y,E.y),N[R+0],N[R+1],N[R+2],N[R+3]),E.x=N[R+0],E.y=N[R+1],w.x=N[R+2],w.y=N[R+3],R===0&&Z===!0&&$.copy(w);break;case"Q":N=p(it);for(let R=0,T=N.length;R<T;R+=4)L.quadraticCurveTo(N[R+0],N[R+1],N[R+2],N[R+3]),E.x=N[R+0],E.y=N[R+1],w.x=N[R+2],w.y=N[R+3],R===0&&Z===!0&&$.copy(w);break;case"T":N=p(it);for(let R=0,T=N.length;R<T;R+=2){const _=M(w.x,E.x),z=M(w.y,E.y);L.quadraticCurveTo(_,z,N[R+0],N[R+1]),E.x=_,E.y=z,w.x=N[R+0],w.y=N[R+1],R===0&&Z===!0&&$.copy(w)}break;case"A":N=p(it,[3,4],7);for(let R=0,T=N.length;R<T;R+=7){if(N[R+5]==w.x&&N[R+6]==w.y)continue;const _=w.clone();w.x=N[R+5],w.y=N[R+6],E.x=w.x,E.y=w.y,a(L,N[R],N[R+1],N[R+2],N[R+3],N[R+4],_,w),R===0&&Z===!0&&$.copy(w)}break;case"m":N=p(it);for(let R=0,T=N.length;R<T;R+=2)w.x+=N[R+0],w.y+=N[R+1],E.x=w.x,E.y=w.y,R===0?L.moveTo(w.x,w.y):L.lineTo(w.x,w.y),R===0&&$.copy(w);break;case"h":N=p(it);for(let R=0,T=N.length;R<T;R++)w.x+=N[R],E.x=w.x,E.y=w.y,L.lineTo(w.x,w.y),R===0&&Z===!0&&$.copy(w);break;case"v":N=p(it);for(let R=0,T=N.length;R<T;R++)w.y+=N[R],E.x=w.x,E.y=w.y,L.lineTo(w.x,w.y),R===0&&Z===!0&&$.copy(w);break;case"l":N=p(it);for(let R=0,T=N.length;R<T;R+=2)w.x+=N[R+0],w.y+=N[R+1],E.x=w.x,E.y=w.y,L.lineTo(w.x,w.y),R===0&&Z===!0&&$.copy(w);break;case"c":N=p(it);for(let R=0,T=N.length;R<T;R+=6)L.bezierCurveTo(w.x+N[R+0],w.y+N[R+1],w.x+N[R+2],w.y+N[R+3],w.x+N[R+4],w.y+N[R+5]),E.x=w.x+N[R+2],E.y=w.y+N[R+3],w.x+=N[R+4],w.y+=N[R+5],R===0&&Z===!0&&$.copy(w);break;case"s":N=p(it);for(let R=0,T=N.length;R<T;R+=4)L.bezierCurveTo(M(w.x,E.x),M(w.y,E.y),w.x+N[R+0],w.y+N[R+1],w.x+N[R+2],w.y+N[R+3]),E.x=w.x+N[R+0],E.y=w.y+N[R+1],w.x+=N[R+2],w.y+=N[R+3],R===0&&Z===!0&&$.copy(w);break;case"q":N=p(it);for(let R=0,T=N.length;R<T;R+=4)L.quadraticCurveTo(w.x+N[R+0],w.y+N[R+1],w.x+N[R+2],w.y+N[R+3]),E.x=w.x+N[R+0],E.y=w.y+N[R+1],w.x+=N[R+2],w.y+=N[R+3],R===0&&Z===!0&&$.copy(w);break;case"t":N=p(it);for(let R=0,T=N.length;R<T;R+=2){const _=M(w.x,E.x),z=M(w.y,E.y);L.quadraticCurveTo(_,z,w.x+N[R+0],w.y+N[R+1]),E.x=_,E.y=z,w.x=w.x+N[R+0],w.y=w.y+N[R+1],R===0&&Z===!0&&$.copy(w)}break;case"a":N=p(it,[3,4],7);for(let R=0,T=N.length;R<T;R+=7){if(N[R+5]==0&&N[R+6]==0)continue;const _=w.clone();w.x+=N[R+5],w.y+=N[R+6],E.x=w.x,E.y=w.y,a(L,N[R],N[R+1],N[R+2],N[R+3],N[R+4],_,w),R===0&&Z===!0&&$.copy(w)}break;case"Z":case"z":L.currentPath.autoClose=!0,L.currentPath.curves.length>0&&(w.copy($),L.currentPath.currentPoint.copy(w),ct=!0);break;default:console.warn(J)}Z=!1}return L}function s(D){if(!(!D.sheet||!D.sheet.cssRules||!D.sheet.cssRules.length))for(let L=0;L<D.sheet.cssRules.length;L++){const w=D.sheet.cssRules[L];if(w.type!==1)continue;const E=w.selectorText.split(/,/gm).filter(Boolean).map($=>$.trim());for(let $=0;$<E.length;$++){const ct=Object.fromEntries(Object.entries(w.style).filter(([,Z])=>Z!==""));Y[E[$]]=Object.assign(Y[E[$]]||{},ct)}}}function a(D,L,w,E,$,ct,Z,ht){if(L==0||w==0){D.lineTo(ht.x,ht.y);return}E=E*Math.PI/180,L=Math.abs(L),w=Math.abs(w);const q=(Z.x-ht.x)/2,A=(Z.y-ht.y)/2,k=Math.cos(E)*q+Math.sin(E)*A,J=-Math.sin(E)*q+Math.cos(E)*A;let j=L*L,it=w*w;const N=k*k,R=J*J,T=N/j+R/it;if(T>1){const dt=Math.sqrt(T);L=dt*L,w=dt*w,j=L*L,it=w*w}const _=j*R+it*N,z=(j*it-_)/_;let nt=Math.sqrt(Math.max(0,z));$===ct&&(nt=-nt);const rt=nt*L*J/w,at=-nt*w*k/L,vt=Math.cos(E)*rt-Math.sin(E)*at+(Z.x+ht.x)/2,xt=Math.sin(E)*rt+Math.cos(E)*at+(Z.y+ht.y)/2,St=o(1,0,(k-rt)/L,(J-at)/w),Gt=o((k-rt)/L,(J-at)/w,(-k-rt)/L,(-J-at)/w)%(Math.PI*2);D.currentPath.absellipse(vt,xt,L,w,St,St+Gt,ct===0,E)}function o(D,L,w,E){const $=D*w+L*E,ct=Math.sqrt(D*D+L*L)*Math.sqrt(w*w+E*E);let Z=Math.acos(Math.max(-1,Math.min(1,$/ct)));return D*E-L*w<0&&(Z=-Z),Z}function c(D){const L=v(D.getAttribute("x")||0),w=v(D.getAttribute("y")||0),E=v(D.getAttribute("rx")||D.getAttribute("ry")||0),$=v(D.getAttribute("ry")||D.getAttribute("rx")||0),ct=v(D.getAttribute("width")),Z=v(D.getAttribute("height")),ht=1-.551915024494,q=new fn;return q.moveTo(L+E,w),q.lineTo(L+ct-E,w),(E!==0||$!==0)&&q.bezierCurveTo(L+ct-E*ht,w,L+ct,w+$*ht,L+ct,w+$),q.lineTo(L+ct,w+Z-$),(E!==0||$!==0)&&q.bezierCurveTo(L+ct,w+Z-$*ht,L+ct-E*ht,w+Z,L+ct-E,w+Z),q.lineTo(L+E,w+Z),(E!==0||$!==0)&&q.bezierCurveTo(L+E*ht,w+Z,L,w+Z-$*ht,L,w+Z-$),q.lineTo(L,w+$),(E!==0||$!==0)&&q.bezierCurveTo(L,w+$*ht,L+E*ht,w,L+E,w),q}function l(D){function L(ct,Z,ht){const q=v(Z),A=v(ht);$===0?E.moveTo(q,A):E.lineTo(q,A),$++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,E=new fn;let $=0;return D.getAttribute("points").replace(w,L),E.currentPath.autoClose=!0,E}function h(D){function L(ct,Z,ht){const q=v(Z),A=v(ht);$===0?E.moveTo(q,A):E.lineTo(q,A),$++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,E=new fn;let $=0;return D.getAttribute("points").replace(w,L),E.currentPath.autoClose=!1,E}function u(D){const L=v(D.getAttribute("cx")||0),w=v(D.getAttribute("cy")||0),E=v(D.getAttribute("r")||0),$=new Gn;$.absarc(L,w,E,0,Math.PI*2);const ct=new fn;return ct.subPaths.push($),ct}function f(D){const L=v(D.getAttribute("cx")||0),w=v(D.getAttribute("cy")||0),E=v(D.getAttribute("rx")||0),$=v(D.getAttribute("ry")||0),ct=new Gn;ct.absellipse(L,w,E,$,0,Math.PI*2);const Z=new fn;return Z.subPaths.push(ct),Z}function m(D){const L=v(D.getAttribute("x1")||0),w=v(D.getAttribute("y1")||0),E=v(D.getAttribute("x2")||0),$=v(D.getAttribute("y2")||0),ct=new fn;return ct.moveTo(L,w),ct.lineTo(E,$),ct.currentPath.autoClose=!1,ct}function g(D,L){L=Object.assign({},L);let w={};if(D.hasAttribute("class")){const Z=D.getAttribute("class").split(/\s/).filter(Boolean).map(ht=>ht.trim());for(let ht=0;ht<Z.length;ht++)w=Object.assign(w,Y["."+Z[ht]])}D.hasAttribute("id")&&(w=Object.assign(w,Y["#"+D.getAttribute("id")]));function E(Z,ht,q){q===void 0&&(q=function(k){return k.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),k}),D.hasAttribute(Z)&&(L[ht]=q(D.getAttribute(Z))),w[Z]&&(L[ht]=q(w[Z])),D.style&&D.style[Z]!==""&&(L[ht]=q(D.style[Z]))}function $(Z){return Math.max(0,Math.min(1,v(Z)))}function ct(Z){return Math.max(0,v(Z))}return E("fill","fill"),E("fill-opacity","fillOpacity",$),E("fill-rule","fillRule"),E("opacity","opacity",$),E("stroke","stroke"),E("stroke-opacity","strokeOpacity",$),E("stroke-width","strokeWidth",ct),E("stroke-linejoin","strokeLineJoin"),E("stroke-linecap","strokeLineCap"),E("stroke-miterlimit","strokeMiterLimit",ct),E("visibility","visibility"),L}function M(D,L){return D-(L-D)}function p(D,L,w){if(typeof D!="string")throw new TypeError("Invalid input: "+typeof D);const E={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},$=0,ct=1,Z=2,ht=3;let q=$,A=!0,k="",J="";const j=[];function it(_,z,nt){const rt=new SyntaxError('Unexpected character "'+_+'" at index '+z+".");throw rt.partial=nt,rt}function N(){k!==""&&(J===""?j.push(Number(k)):j.push(Number(k)*Math.pow(10,Number(J)))),k="",J=""}let R;const T=D.length;for(let _=0;_<T;_++){if(R=D[_],Array.isArray(L)&&L.includes(j.length%w)&&E.FLAGS.test(R)){q=ct,k=R,N();continue}if(q===$){if(E.WHITESPACE.test(R))continue;if(E.DIGIT.test(R)||E.SIGN.test(R)){q=ct,k=R;continue}if(E.POINT.test(R)){q=Z,k=R;continue}E.COMMA.test(R)&&(A&&it(R,_,j),A=!0)}if(q===ct){if(E.DIGIT.test(R)){k+=R;continue}if(E.POINT.test(R)){k+=R,q=Z;continue}if(E.EXP.test(R)){q=ht;continue}E.SIGN.test(R)&&k.length===1&&E.SIGN.test(k[0])&&it(R,_,j)}if(q===Z){if(E.DIGIT.test(R)){k+=R;continue}if(E.EXP.test(R)){q=ht;continue}E.POINT.test(R)&&k[k.length-1]==="."&&it(R,_,j)}if(q===ht){if(E.DIGIT.test(R)){J+=R;continue}if(E.SIGN.test(R)){if(J===""){J+=R;continue}J.length===1&&E.SIGN.test(J)&&it(R,_,j)}}E.WHITESPACE.test(R)?(N(),q=$,A=!1):E.COMMA.test(R)?(N(),q=$,A=!0):E.SIGN.test(R)?(N(),q=ct,k=R):E.POINT.test(R)?(N(),q=Z,k=R):it(R,_,j)}return N(),j}const d=["mm","cm","in","pt","pc","px"],C={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(D){let L="px";if(typeof D=="string"||D instanceof String)for(let E=0,$=d.length;E<$;E++){const ct=d[E];if(D.endsWith(ct)){L=ct,D=D.substring(0,D.length-ct.length);break}}let w;return L==="px"&&e.defaultUnit!=="px"?w=C.in[e.defaultUnit]/e.defaultDPI:(w=C[L][e.defaultUnit],w<0&&(w=C[L].in*e.defaultDPI)),w*parseFloat(D)}function S(D){if(!(D.hasAttribute("transform")||D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))))return null;const L=F(D);return X.length>0&&L.premultiply(X[X.length-1]),gt.copy(L),X.push(L),L}function F(D){const L=new Ot,w=lt;if(D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))){const E=v(D.getAttribute("x")),$=v(D.getAttribute("y"));L.translate(E,$)}if(D.hasAttribute("transform")){const E=D.getAttribute("transform").split(")");for(let $=E.length-1;$>=0;$--){const ct=E[$].trim();if(ct==="")continue;const Z=ct.indexOf("("),ht=ct.length;if(Z>0&&Z<ht){const q=ct.slice(0,Z),A=p(ct.slice(Z+1));switch(w.identity(),q){case"translate":if(A.length>=1){const k=A[0];let J=0;A.length>=2&&(J=A[1]),w.translate(k,J)}break;case"rotate":if(A.length>=1){let k=0,J=0,j=0;k=A[0]*Math.PI/180,A.length>=3&&(J=A[1],j=A[2]),K.makeTranslation(-J,-j),st.makeRotation(k),O.multiplyMatrices(st,K),K.makeTranslation(J,j),w.multiplyMatrices(K,O)}break;case"scale":if(A.length>=1){const k=A[0];let J=k;A.length>=2&&(J=A[1]),w.scale(k,J)}break;case"skewX":A.length===1&&w.set(1,Math.tan(A[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":A.length===1&&w.set(1,0,0,Math.tan(A[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":A.length===6&&w.set(A[0],A[2],A[4],A[1],A[3],A[5],0,0,1);break}}L.premultiply(w)}}return L}function I(D,L){function w(Z){pt.set(Z.x,Z.y,1).applyMatrix3(L),Z.set(pt.x,pt.y)}function E(Z){const ht=Z.xRadius,q=Z.yRadius,A=Math.cos(Z.aRotation),k=Math.sin(Z.aRotation),J=new B(ht*A,ht*k,0),j=new B(-q*k,q*A,0),it=J.applyMatrix3(L),N=j.applyMatrix3(L),R=lt.set(it.x,N.x,0,it.y,N.y,0,0,0,1),T=K.copy(R).invert(),nt=st.copy(T).transpose().multiply(T).elements,rt=y(nt[0],nt[1],nt[4]),at=Math.sqrt(rt.rt1),vt=Math.sqrt(rt.rt2);if(Z.xRadius=1/at,Z.yRadius=1/vt,Z.aRotation=Math.atan2(rt.sn,rt.cs),!((Z.aEndAngle-Z.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const St=K.set(at,0,0,0,vt,0,0,0,1),Gt=st.set(rt.cs,rt.sn,0,-rt.sn,rt.cs,0,0,0,1),dt=St.multiply(Gt).multiply(R),Et=It=>{const{x:yt,y:Tt}=new B(Math.cos(It),Math.sin(It),0).applyMatrix3(dt);return Math.atan2(Tt,yt)};Z.aStartAngle=Et(Z.aStartAngle),Z.aEndAngle=Et(Z.aEndAngle),P(L)&&(Z.aClockwise=!Z.aClockwise)}}function $(Z){const ht=Q(L),q=x(L);Z.xRadius*=ht,Z.yRadius*=q;const A=ht>Number.EPSILON?Math.atan2(L.elements[1],L.elements[0]):Math.atan2(-L.elements[3],L.elements[4]);Z.aRotation+=A,P(L)&&(Z.aStartAngle*=-1,Z.aEndAngle*=-1,Z.aClockwise=!Z.aClockwise)}const ct=D.subPaths;for(let Z=0,ht=ct.length;Z<ht;Z++){const A=ct[Z].curves;for(let k=0;k<A.length;k++){const J=A[k];J.isLineCurve?(w(J.v1),w(J.v2)):J.isCubicBezierCurve?(w(J.v0),w(J.v1),w(J.v2),w(J.v3)):J.isQuadraticBezierCurve?(w(J.v0),w(J.v1),w(J.v2)):J.isEllipseCurve&&(mt.set(J.aX,J.aY),w(mt),J.aX=mt.x,J.aY=mt.y,U(L)?E(J):$(J))}}}function P(D){const L=D.elements;return L[0]*L[4]-L[1]*L[3]<0}function U(D){const L=D.elements,w=L[0]*L[3]+L[1]*L[4];if(w===0)return!1;const E=Q(D),$=x(D);return Math.abs(w/(E*$))>Number.EPSILON}function Q(D){const L=D.elements;return Math.sqrt(L[0]*L[0]+L[1]*L[1])}function x(D){const L=D.elements;return Math.sqrt(L[3]*L[3]+L[4]*L[4])}function y(D,L,w){let E,$,ct,Z,ht;const q=D+w,A=D-w,k=Math.sqrt(A*A+4*L*L);return q>0?(E=.5*(q+k),ht=1/E,$=D*ht*w-L*ht*L):q<0?$=.5*(q-k):(E=.5*k,$=-.5*k),A>0?ct=A+k:ct=A-k,Math.abs(ct)>2*Math.abs(L)?(ht=-2*L/ct,Z=1/Math.sqrt(1+ht*ht),ct=ht*Z):Math.abs(L)===0?(ct=1,Z=0):(ht=-.5*ct/L,ct=1/Math.sqrt(1+ht*ht),Z=ht*ct),A>0&&(ht=ct,ct=-Z,Z=ht),{rt1:E,rt2:$,cs:ct,sn:Z}}const G=[],Y={},X=[],lt=new Ot,K=new Ot,st=new Ot,O=new Ot,mt=new ut,pt=new B,gt=new Ot,Ut=new DOMParser().parseFromString(t,"image/svg+xml");return n(Ut.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:G,xml:Ut.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:n.ORIGIN,t:0};function s(M,p,d,C){const v=M.x,S=p.x,F=d.x,I=C.x,P=M.y,U=p.y,Q=d.y,x=C.y,y=(I-F)*(P-Q)-(x-Q)*(v-F),G=(S-v)*(P-Q)-(U-P)*(v-F),Y=(x-Q)*(S-v)-(I-F)*(U-P),X=y/Y,lt=G/Y;if(Y===0&&y!==0||X<=0||X>=1||lt<0||lt>1)return null;if(y===0&&Y===0){for(let K=0;K<2;K++)if(a(K===0?d:C,M,p),r.loc==n.ORIGIN){const st=K===0?d:C;return{x:st.x,y:st.y,t:r.t}}else if(r.loc==n.BETWEEN){const st=+(v+r.t*(S-v)).toPrecision(10),O=+(P+r.t*(U-P)).toPrecision(10);return{x:st,y:O,t:r.t}}return null}else{for(let O=0;O<2;O++)if(a(O===0?d:C,M,p),r.loc==n.ORIGIN){const mt=O===0?d:C;return{x:mt.x,y:mt.y,t:r.t}}const K=+(v+X*(S-v)).toPrecision(10),st=+(P+X*(U-P)).toPrecision(10);return{x:K,y:st,t:X}}}function a(M,p,d){const C=d.x-p.x,v=d.y-p.y,S=M.x-p.x,F=M.y-p.y,I=C*F-S*v;if(M.x===p.x&&M.y===p.y){r.loc=n.ORIGIN,r.t=0;return}if(M.x===d.x&&M.y===d.y){r.loc=n.DESTINATION,r.t=1;return}if(I<-Number.EPSILON){r.loc=n.LEFT;return}if(I>Number.EPSILON){r.loc=n.RIGHT;return}if(C*S<0||v*F<0){r.loc=n.BEHIND;return}if(Math.sqrt(C*C+v*v)<Math.sqrt(S*S+F*F)){r.loc=n.BEYOND;return}let P;C!==0?P=S/C:P=F/v,r.loc=n.BETWEEN,r.t=P}function o(M,p){const d=[],C=[];for(let v=1;v<M.length;v++){const S=M[v-1],F=M[v];for(let I=1;I<p.length;I++){const P=p[I-1],U=p[I],Q=s(S,F,P,U);Q!==null&&d.find(x=>x.t<=Q.t+Number.EPSILON&&x.t>=Q.t-Number.EPSILON)===void 0&&(d.push(Q),C.push(new ut(Q.x,Q.y)))}}return C}function c(M,p,d){const C=new ut;p.getCenter(C);const v=[];return d.forEach(S=>{S.boundingBox.containsPoint(C)&&o(M,S.points).forEach(I=>{v.push({identifier:S.identifier,isCW:S.isCW,point:I})})}),v.sort((S,F)=>S.point.x-F.point.x),v}function l(M,p,d,C,v){(v==null||v==="")&&(v="nonzero");const S=new ut;M.boundingBox.getCenter(S);const F=[new ut(d,S.y),new ut(C,S.y)],I=c(F,M.boundingBox,p);I.sort((G,Y)=>G.point.x-Y.point.x);const P=[],U=[];I.forEach(G=>{G.identifier===M.identifier?P.push(G):U.push(G)});const Q=P[0].point.x,x=[];let y=0;for(;y<U.length&&U[y].point.x<Q;)x.length>0&&x[x.length-1]===U[y].identifier?x.pop():x.push(U[y].identifier),y++;if(x.push(M.identifier),v==="evenodd"){const G=x.length%2===0,Y=x[x.length-2];return{identifier:M.identifier,isHole:G,for:Y}}else if(v==="nonzero"){let G=!0,Y=null,X=null;for(let lt=0;lt<x.length;lt++){const K=x[lt];G?(X=p[K].isCW,G=!1,Y=K):X!==p[K].isCW&&(X=p[K].isCW,G=!0)}return{identifier:M.identifier,isHole:G,for:Y}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let h=999999999,u=-999999999,f=t.subPaths.map(M=>{const p=M.getPoints();let d=-999999999,C=999999999,v=-999999999,S=999999999;for(let F=0;F<p.length;F++){const I=p[F];I.y>d&&(d=I.y),I.y<C&&(C=I.y),I.x>v&&(v=I.x),I.x<S&&(S=I.x)}return u<=v&&(u=v+1),h>=S&&(h=S-1),{curves:M.curves,points:p,isCW:_n.isClockWise(p),identifier:-1,boundingBox:new Jf(new ut(S,C),new ut(v,d))}});f=f.filter(M=>M.points.length>1);for(let M=0;M<f.length;M++)f[M].identifier=M;const m=f.map(M=>l(M,f,h,u,t.userData?t.userData.style.fillRule:void 0)),g=[];return f.forEach(M=>{if(!m[M.identifier].isHole){const d=new ci;d.curves=M.curves,m.filter(v=>v.isHole&&v.for===M.identifier).forEach(v=>{const S=f[v.identifier],F=new Gn;F.curves=S.curves,d.holes.push(F)}),g.push(d)}}),g}static getStrokeStyle(t,e,n,r,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(t,e,n,r){const s=[],a=[],o=[];if(Yi.pointsToStrokeWithBuffers(t,e,n,r,s,a,o)===0)return null;const c=new Ce;return c.setAttribute("position",new ne(s,3)),c.setAttribute("normal",new ne(a,3)),c.setAttribute("uv",new ne(o,2)),c}static pointsToStrokeWithBuffers(t,e,n,r,s,a,o,c){const l=new ut,h=new ut,u=new ut,f=new ut,m=new ut,g=new ut,M=new ut,p=new ut,d=new ut,C=new ut,v=new ut,S=new ut,F=new ut,I=new ut,P=new ut,U=new ut,Q=new ut;n=n!==void 0?n:12,r=r!==void 0?r:.001,c=c!==void 0?c:0,t=A(t);const x=t.length;if(x<2)return 0;const y=t[0].equals(t[x-1]);let G,Y=t[0],X;const lt=e.strokeWidth/2,K=1/(x-1);let st=0,O,mt,pt,gt,Ut=!1,zt=0,D=c*3,L=c*2;w(t[0],t[1],l).multiplyScalar(lt),p.copy(t[0]).sub(l),d.copy(t[0]).add(l),C.copy(p),v.copy(d);for(let k=1;k<x;k++){G=t[k],k===x-1?y?X=t[1]:X=void 0:X=t[k+1];const J=l;if(w(Y,G,J),u.copy(J).multiplyScalar(lt),S.copy(G).sub(u),F.copy(G).add(u),O=st+K,mt=!1,X!==void 0){w(G,X,h),u.copy(h).multiplyScalar(lt),I.copy(G).sub(u),P.copy(G).add(u),pt=!0,u.subVectors(X,Y),J.dot(u)<0&&(pt=!1),k===1&&(Ut=pt),u.subVectors(X,G),u.normalize();const j=Math.abs(J.dot(u));if(j>Number.EPSILON){const it=lt/j;u.multiplyScalar(-it),f.subVectors(G,Y),m.copy(f).setLength(it).add(u),U.copy(m).negate();const N=m.length(),R=f.length();f.divideScalar(R),g.subVectors(X,G);const T=g.length();switch(g.divideScalar(T),f.dot(U)<R&&g.dot(U)<T&&(mt=!0),Q.copy(m).add(G),U.add(G),gt=!1,mt?pt?(P.copy(U),F.copy(U)):(I.copy(U),S.copy(U)):ct(),e.strokeLineJoin){case"bevel":Z(pt,mt,O);break;case"round":ht(pt,mt),pt?$(G,S,I,O,0):$(G,P,F,O,1);break;case"miter":case"miter-clip":default:const _=lt*e.strokeMiterLimit/N;if(_<1)if(e.strokeLineJoin!=="miter-clip"){Z(pt,mt,O);break}else ht(pt,mt),pt?(g.subVectors(Q,S).multiplyScalar(_).add(S),M.subVectors(Q,I).multiplyScalar(_).add(I),E(S,O,0),E(g,O,0),E(G,O,.5),E(G,O,.5),E(g,O,0),E(M,O,0),E(G,O,.5),E(M,O,0),E(I,O,0)):(g.subVectors(Q,F).multiplyScalar(_).add(F),M.subVectors(Q,P).multiplyScalar(_).add(P),E(F,O,1),E(g,O,1),E(G,O,.5),E(G,O,.5),E(g,O,1),E(M,O,1),E(G,O,.5),E(M,O,1),E(P,O,1));else mt?(pt?(E(d,st,1),E(p,st,0),E(Q,O,0),E(d,st,1),E(Q,O,0),E(U,O,1)):(E(d,st,1),E(p,st,0),E(Q,O,1),E(p,st,0),E(U,O,0),E(Q,O,1)),pt?I.copy(Q):P.copy(Q)):pt?(E(S,O,0),E(Q,O,0),E(G,O,.5),E(G,O,.5),E(Q,O,0),E(I,O,0)):(E(F,O,1),E(Q,O,1),E(G,O,.5),E(G,O,.5),E(Q,O,1),E(P,O,1)),gt=!0;break}}else ct()}else ct();!y&&k===x-1&&q(t[0],C,v,pt,!0,st),st=O,Y=G,p.copy(I),d.copy(P)}if(!y)q(G,S,F,pt,!1,O);else if(mt&&s){let k=Q,J=U;Ut!==pt&&(k=U,J=Q),pt?(gt||Ut)&&(J.toArray(s,0),J.toArray(s,9),gt&&k.toArray(s,3)):(gt||!Ut)&&(J.toArray(s,3),J.toArray(s,9),gt&&k.toArray(s,0))}return zt;function w(k,J,j){return j.subVectors(J,k),j.set(-j.y,j.x).normalize()}function E(k,J,j){s&&(s[D]=k.x,s[D+1]=k.y,s[D+2]=0,a&&(a[D]=0,a[D+1]=0,a[D+2]=1),D+=3,o&&(o[L]=J,o[L+1]=j,L+=2)),zt+=3}function $(k,J,j,it,N){l.copy(J).sub(k).normalize(),h.copy(j).sub(k).normalize();let R=Math.PI;const T=l.dot(h);Math.abs(T)<1&&(R=Math.abs(Math.acos(T))),R/=n,u.copy(J);for(let _=0,z=n-1;_<z;_++)f.copy(u).rotateAround(k,R),E(u,it,N),E(f,it,N),E(k,it,.5),u.copy(f);E(f,it,N),E(j,it,N),E(k,it,.5)}function ct(){E(d,st,1),E(p,st,0),E(S,O,0),E(d,st,1),E(S,O,0),E(F,O,1)}function Z(k,J,j){J?k?(E(d,st,1),E(p,st,0),E(S,O,0),E(d,st,1),E(S,O,0),E(U,O,1),E(S,j,0),E(I,j,0),E(U,j,.5)):(E(d,st,1),E(p,st,0),E(F,O,1),E(p,st,0),E(U,O,0),E(F,O,1),E(F,j,1),E(U,j,0),E(P,j,1)):k?(E(S,j,0),E(I,j,0),E(G,j,.5)):(E(F,j,1),E(P,j,0),E(G,j,.5))}function ht(k,J){J&&(k?(E(d,st,1),E(p,st,0),E(S,O,0),E(d,st,1),E(S,O,0),E(U,O,1),E(S,st,0),E(G,O,.5),E(U,O,1),E(G,O,.5),E(I,st,0),E(U,O,1)):(E(d,st,1),E(p,st,0),E(F,O,1),E(p,st,0),E(U,O,0),E(F,O,1),E(F,st,1),E(U,O,0),E(G,O,.5),E(G,O,.5),E(U,O,0),E(P,st,1)))}function q(k,J,j,it,N,R){switch(e.strokeLineCap){case"round":N?$(k,j,J,R,.5):$(k,J,j,R,.5);break;case"square":if(N)l.subVectors(J,k),h.set(l.y,-l.x),u.addVectors(l,h).add(k),f.subVectors(h,l).add(k),it?(u.toArray(s,3),f.toArray(s,0),f.toArray(s,9)):(u.toArray(s,3),o[7]===1?f.toArray(s,9):u.toArray(s,9),f.toArray(s,0));else{l.subVectors(j,k),h.set(l.y,-l.x),u.addVectors(l,h).add(k),f.subVectors(h,l).add(k);const T=s.length;it?(u.toArray(s,T-3),f.toArray(s,T-6),f.toArray(s,T-12)):(f.toArray(s,T-6),u.toArray(s,T-3),f.toArray(s,T-12))}break}}function A(k){let J=!1;for(let it=1,N=k.length-1;it<N;it++)if(k[it].distanceTo(k[it+1])<r){J=!0;break}if(!J)return k;const j=[];j.push(k[0]);for(let it=1,N=k.length-1;it<N;it++)k[it].distanceTo(k[it+1])>=r&&j.push(k[it]);return j.push(k[k.length-1]),j}}}const Qf={w:396,h:387,d:"M 132.047 16.070 C 110.387 19.930, 97.785 28.598, 85.097 48.364 C 74.673 64.603, 60.793 78.281, 42.351 90.487 C 23.533 102.943, 15.982 113.508, 15.196 128.483 C 14.330 144.991, 23.503 161.970, 33.300 161.993 C 38.107 162.005, 41.823 164.621, 42.909 168.757 C 43.450 170.816, 53.173 217.050, 64.516 271.500 C 75.860 325.950, 85.471 370.839, 85.875 371.254 C 86.279 371.669, 136.739 371.894, 198.009 371.754 L 309.409 371.500 328.516 282.500 C 339.024 233.550, 348.904 187.499, 350.470 180.165 C 353.780 164.664, 354.665 163.228, 361.579 162.147 C 370.093 160.816, 375.258 155.186, 379.017 143.145 C 385.496 122.383, 377.309 105.887, 352.500 89.714 C 334.455 77.950, 322.043 65.456, 309.567 46.497 C 296.872 27.205, 283.537 18.856, 260.496 15.773 C 251.977 14.633, 250.691 14.742, 228 18.524 C 208.077 21.845, 172.892 21.050, 158.943 16.962 C 153.856 15.472, 138.302 14.956, 132.047 16.070"},td={w:400,h:387,d:"M 171 16.049 C 125.897 18.055, 65.618 26.453, 46.495 33.394 C 34.886 37.608, 25.154 44.628, 20.332 52.266 C 8.055 71.714, 19.805 100.404, 43.010 107.638 L 48.983 109.500 48.991 238.295 L 49 367.091 51.455 369.545 L 53.909 372 200 372 L 346.091 372 348.545 369.545 L 351 367.091 351 238.235 L 351 109.378 355.980 108.102 C 381.836 101.475, 393.539 67.162, 376.432 48.136 C 367.461 38.158, 355.063 32.406, 333.029 27.999 C 281.552 17.702, 225.978 13.603, 171 16.049"},ed={w:247,h:385,d:"M 41.638 15.036 C 19.154 18.564, 8.108 36.462, 18.988 51.734 C 29.735 66.819, 33.681 73.101, 38.647 83.029 C 45.414 96.559, 50.959 111.594, 55.121 127.703 L 58.275 139.907 61.511 138.203 C 77.783 129.639, 171.995 75.249, 171.997 74.418 C 171.999 73.823, 166.713 67.909, 160.250 61.275 C 136.633 37.032, 112.760 23.372, 83.900 17.587 C 70.013 14.803, 50.593 13.631, 41.638 15.036 M 185.690 99.050 C 180.677 100.292, 185.561 97.579, 118.678 136.270 C 86.326 154.985, 58.521 171.633, 56.889 173.264 C 45.941 184.213, 46.979 204.670, 58.949 213.879 C 66.517 219.701, 180.600 284.876, 185.281 286.052 C 194.948 288.480, 207.090 284.461, 213.132 276.834 C 219.116 269.278, 228.392 239.934, 231.455 218.872 C 233.463 205.062, 233.454 179.848, 231.438 166.128 C 228.661 147.240, 220.728 120.342, 215.462 111.958 C 209.008 101.682, 196.665 96.331, 185.690 99.050 M 56.541 252.298 C 50.687 278.687, 38.918 305.762, 24.661 325.634 C 13.626 341.016, 12.176 347.495, 17.873 355.977 C 33.864 379.787, 94.725 374.559, 135.500 345.872 C 144.603 339.467, 172.012 313.087, 171.986 310.755 C 171.975 309.780, 114.290 276.455, 63.872 248.298 L 58.139 245.096 56.541 252.298"},nd={w:342,h:338,d:"M 117.026 15.486 C 108.661 17.398, 96.158 23.460, 88.264 29.432 C 80.541 35.273, 75.600 41.141, 65.515 56.446 C 56.523 70.094, 50.214 77.917, 38.454 90 C 13.551 115.587, 7.537 141.253, 18.769 174 C 23.941 189.078, 27.551 204.579, 29.482 220 C 34.182 257.533, 50.023 277.924, 83.860 289.994 C 98.355 295.165, 111.515 301.382, 124.717 309.298 C 139.217 317.992, 142.550 319.591, 151.106 321.962 C 173.317 328.117, 191.985 324.738, 216 310.216 C 230.549 301.418, 240.852 296.488, 257.473 290.370 C 293.803 276.998, 307.764 258.236, 313.558 215 C 315.443 200.932, 317.361 192.908, 323.024 175.385 C 334.261 140.617, 329.270 117.525, 304.845 91.280 C 290.110 75.448, 284.921 68.955, 274.088 52.799 C 262.196 35.061, 254.309 27.848, 238.709 20.439 C 226.737 14.753, 219.322 13.649, 199.500 14.601 C 178.655 15.602, 165.972 15.626, 142 14.712 C 127.276 14.151, 122.179 14.309, 117.026 15.486"},id={w:330,h:385,d:"M 38.777 28.750 L 38.500 43.500 26.250 43.781 L 14 44.062 14 63.531 L 14 83 26.031 83 C 34.745 83, 38.189 83.345, 38.522 84.250 C 38.775 84.938, 45.965 147.825, 54.500 224 C 63.035 300.175, 70.290 364.413, 70.623 366.750 L 71.227 371 165 371 L 258.773 371 259.376 366.750 C 259.707 364.413, 266.967 300.175, 275.508 224 C 284.049 147.825, 291.240 84.938, 291.487 84.250 C 291.813 83.344, 295.250 83, 303.969 83 L 316 83 316 63.531 L 316 44.062 303.750 43.781 L 291.500 43.500 291.223 28.750 L 290.947 14 165 14 L 39.053 14 38.777 28.750"},rd={w:348,h:590,d:"M 184.741 42.758 L 163 64.517 163 88.739 L 163 112.962 160.750 113.364 C 137.690 117.483, 132.715 118.997, 117.500 126.527 C 78.024 146.063, 50.895 186.339, 48.139 229.500 L 47.500 239.500 35.250 239.781 L 23 240.062 23 259.531 L 23 279 35.031 279 C 43.753 279, 47.185 279.344, 47.506 280.250 C 47.848 281.214, 80 565.464, 80 567.524 C 80 567.786, 122.525 568, 174.500 568 C 263.832 568, 269 567.904, 269.004 566.250 C 269.012 562.162, 300.945 280.898, 301.503 279.995 C 301.855 279.425, 307.220 279, 314.059 279 L 326 279 326 259.531 L 326 240.062 313.750 239.781 L 301.500 239.500 300.787 232.500 C 298.753 212.544, 294.715 197.355, 287.773 183.548 C 269.359 146.924, 233.418 120.162, 195.251 114.655 L 186.500 113.393 186.228 93.478 L 185.956 73.563 204.711 54.789 L 223.465 36.015 216.008 28.508 C 211.906 24.378, 208.085 21, 207.517 21 C 206.948 21, 196.699 30.791, 184.741 42.758"},sd={w:552,h:233,d:"M 20.284 31.250 C 23.643 96.210, 68.600 160.020, 135.303 194.500 L 144.975 199.500 144.988 206.250 L 145 213 276 213 L 407 213 407.015 206.250 L 407.031 199.500 417.147 194.132 C 484 158.657, 528.244 95.796, 531.696 31.382 L 532.306 20 276.004 20 L 19.703 20 20.284 31.250"},ad={w:286,h:385,d:"M 73.764 22.907 L 64.500 31.814 64 53.657 L 63.500 75.500 38.747 75.767 L 13.993 76.035 14.247 223.267 L 14.500 370.500 143 370.500 L 271.500 370.500 271.753 223.267 L 272.007 76.035 247.253 75.767 L 222.500 75.500 222.230 54.272 L 221.960 33.043 212.698 23.522 L 203.436 14 143.232 14 L 83.027 14 73.764 22.907 M 89.447 39.276 C 89.174 39.988, 89.074 48.429, 89.225 58.035 L 89.500 75.500 143.272 75.759 L 197.044 76.017 196.772 57.259 L 196.500 38.500 143.222 38.241 C 100.372 38.033, 89.847 38.236, 89.447 39.276"},od={w:166,h:385,d:"M 44.774 31.223 L 44.500 48.446 40.270 49.168 C 29.845 50.945, 21.780 57.155, 17.109 67 L 14.500 72.500 14.500 221.500 L 14.500 370.500 83.263 370.757 L 152.026 371.014 151.763 220.757 L 151.500 70.500 148.797 65.377 C 144.007 56.296, 133.325 49, 124.822 49 L 122 49 122 31.500 L 122 14 83.524 14 L 45.047 14 44.774 31.223"},cd={w:450,h:277,d:"M 17.232 123.750 L 17.500 230.500 20.160 236.175 C 25.478 247.519, 35.953 256.036, 47.630 258.510 C 57.855 260.676, 302.101 260.685, 312.322 258.520 C 327.715 255.258, 339.969 242.439, 342.912 226.520 C 343.510 223.282, 344 220.490, 344 220.316 C 344 220.142, 364.025 220, 388.500 220 L 433 220 433 138.500 L 433 57 388.500 57 L 344 57 344 37 L 344 17 180.482 17 L 16.965 17 17.232 123.750 M 344 138.500 L 344 177 364 177 L 384 177 384 138.500 L 384 100 364 100 L 344 100 344 138.500"},ld={w:441,h:389,d:"M 16 16.367 C 16 16.569, 29.940 34.231, 46.979 55.617 C 65.330 78.651, 77.776 95.111, 77.511 96 C 76.545 99.250, 16 370.761, 16 371.844 C 16 372.714, 57.176 373, 182.500 373 C 328.207 373, 349 372.817, 349 371.532 C 349 370.725, 345.622 346.987, 341.494 318.782 C 337.366 290.577, 333.878 266.600, 333.744 265.500 C 333.514 263.613, 334.262 263.465, 347 262.883 C 362.204 262.187, 368.739 260.623, 380 254.984 C 430.772 229.558, 440.234 163.168, 398.622 124.308 C 381.207 108.044, 365.037 103.004, 330.269 103.001 C 310.108 103, 310.036 102.992, 309.527 100.750 C 309.245 99.513, 306.545 81.400, 303.527 60.500 C 300.508 39.600, 297.784 21.037, 297.474 19.250 L 296.909 16 156.455 16 C 79.205 16, 16 16.165, 16 16.367 M 316.370 148.250 C 317.001 151.707, 327 219.879, 327 220.723 C 327 220.997, 331.837 221.040, 337.750 220.819 C 351.086 220.321, 358.056 217.553, 365.806 209.679 C 373.601 201.759, 376.510 194.608, 376.457 183.500 C 376.399 171.464, 373.843 164.921, 366.149 157.110 C 356.573 147.388, 349.100 145, 328.252 145 L 315.777 145 316.370 148.250"},hd={w:1063,h:273,d:"M 165 39.674 C 96.156 44.641, 39.716 104.204, 39.612 172 C 39.572 198.338, 51.774 218.471, 73.741 228.309 C 87.453 234.450, 52.728 234.040, 534.723 233.758 L 975.500 233.500 981.978 231.151 C 992.335 227.396, 997.407 224.442, 1004.086 218.277 C 1019.451 204.092, 1025.001 188.394, 1022.956 164.905 C 1017.152 98.255, 966.034 46.259, 900.173 40.014 C 894.303 39.457, 875.438 39.001, 858.250 39.001 C 828.333 39, 826.915 39.085, 825 41 C 821.685 44.315, 822.474 45.630, 836.398 59.967 C 848.319 72.242, 850.304 74.796, 854.408 83.132 C 862.797 100.173, 864.977 116.354, 861.414 135.140 C 859.738 143.981, 858.757 146, 856.140 146 C 855.252 146, 830.434 121.925, 800.991 92.500 L 747.457 39 700.451 39 C 639.977 39, 641.228 38.409, 660.396 57.907 C 673.497 71.234, 678.666 78.235, 682.856 88.330 C 688.876 102.836, 690.419 118.300, 687.421 134.103 C 685.602 143.694, 684.597 146, 682.236 146 C 681.304 146, 656.440 121.925, 626.981 92.500 L 573.421 39 526.433 39 C 485.524 39, 479.157 39.201, 477.223 40.557 C 473.229 43.354, 474.429 45.976, 484.072 55.521 C 500.626 71.907, 507.615 82.634, 512.211 98.709 C 516.721 114.487, 514.072 144.995, 508.118 145.837 C 506.132 146.118, 496.800 137.249, 452.087 92.587 L 398.439 39 351.374 39 C 291.780 39, 293.299 38.254, 312.450 58.118 C 328.633 74.903, 334.388 84.244, 338.562 100.500 C 342.459 115.676, 339.555 145.059, 334.081 145.839 C 332.100 146.121, 322.756 137.237, 278.080 92.589 L 224.457 39 196.978 39.175 C 181.865 39.271, 167.475 39.496, 165 39.674"},ud={muffin:Qf,tostada:td,croissant:ed,cookie:nd,cafe:id,smoothie:rd,cuenco:sd,"cuenco-takeaway":{w:552,h:233,d:"M 20 31.500 L 20 43 28 43 C 32.400 43, 36.004 43.337, 36.009 43.750 C 36.763 109.925, 78.186 171.508, 146.086 207.404 L 156.673 213 275.938 213 L 395.203 213 405.650 207.396 C 453.161 181.912, 487.373 145.549, 504.341 102.500 C 510.596 86.630, 513.730 72.123, 515.521 50.750 L 516.171 43 524.085 43 L 532 43 532 31.500 L 532 20 276 20 L 20 20 20 31.500"},bolsa:ad,botella:od,taza:cd,lechera:ld,pan:hd},xe={brown:"#443631",fresh:"#e7e251",calm:"#6cb3e3",kraft:"#cbbb9f",bag:"#e2c9a0"},Or=i=>new Promise((t,e)=>{const n=new Image;n.onload=()=>t(n),n.onerror=e,n.src=i});function ii(i,t,e,n){const r=document.createElement("canvas");r.width=e,r.height=n;const s=r.getContext("2d");return s.drawImage(i,0,0,e,n),s.globalCompositeOperation="source-in",s.fillStyle=t,s.fillRect(0,0,e,n),r}async function fd(i){const[t,e,n]=await Promise.all([Or("/brand/wordmark.png"),Or("/brand/monogram.png"),Or("/brand/lockup.png")]),r=2048,s=1024,a=document.createElement("canvas");a.width=r,a.height=s;const o=a.getContext("2d");o.fillStyle=xe.kraft,o.fillRect(0,0,r,s);const c=o.getImageData(0,0,r,s);for(let p=0;p<c.data.length;p+=4){const d=(Math.random()-.5)*14;c.data[p]+=d,c.data[p+1]+=d,c.data[p+2]+=d}o.putImageData(c,0,0);const l=780,h=Math.round(l*686/2052);o.save(),o.translate(r*.5+h*.5,s*.5),o.rotate(-Math.PI/2),o.drawImage(ii(t,xe.brown,l,h),-l/2,-h/2-6,l,h),o.restore();const u=250,f=Math.round(u*1383/1439);o.drawImage(ii(e,xe.brown,u,f),r*0+1024*0+60,s*.5-f/2-60,u,f),o.drawImage(ii(e,xe.brown,u,f),r-u-60,s*.5-f/2-60,u,f);const m=300,g=Math.round(m*698/2681);o.drawImage(ii(n,xe.brown,m,g),r-m-34,s*.5+f/2-30,m,g),o.drawImage(ii(n,xe.brown,m,g),34,s*.5+f/2-30,m,g),o.fillStyle="rgba(68,54,49,.10)",o.fillRect(r*.25-3,0,6,s);const M=new Yr(a);return M.colorSpace=ye,M.anisotropy=i,M}function dd(){const t=document.createElement("canvas");t.width=t.height=1024;const e=t.getContext("2d"),n=1024/2,r=e.createRadialGradient(n,n*1.05,20,n,n,n);r.addColorStop(0,"#c99c6e"),r.addColorStop(.55,"#a8754b"),r.addColorStop(.86,"#7c4f33"),r.addColorStop(1,"#4a2f20"),e.fillStyle=r,e.fillRect(0,0,1024,1024);for(let a=0;a<1400;a++){const o=Math.random()*Math.PI*2,c=Math.sqrt(Math.random())*n*.95;e.fillStyle=`rgba(${Math.random()<.5?"230,190,140":"90,55,35"},${Math.random()*.12})`,e.beginPath(),e.arc(n+Math.cos(o)*c,n+Math.sin(o)*c,Math.random()*6+1,0,Math.PI*2),e.fill()}e.save(),e.shadowColor="rgba(250,240,225,.9)",e.shadowBlur=14,e.fillStyle="#f8efe2";for(let a=0;a<10;a++){const o=770-a*48,c=380-a*27,l=92-a*4.5,h=Math.sin(a*1.7)*6;e.beginPath(),e.moveTo(n-c/2+h,o-l*.15),e.quadraticCurveTo(n+h,o+l*1.25,n+c/2+h,o-l*.15),e.quadraticCurveTo(n+h,o+l*.3,n-c/2+h,o-l*.15),e.fill()}e.beginPath(),e.moveTo(n,300),e.bezierCurveTo(n-90,240,n-60,170,n,205),e.bezierCurveTo(n+60,170,n+90,240,n,300),e.fill(),e.restore(),e.strokeStyle="#a8754b",e.lineCap="round";for(let a=0;a<24;a++)e.lineWidth=10-a*.38,e.beginPath(),e.moveTo(n,190+a*24),e.lineTo(n,214+a*24),e.stroke();const s=new Yr(t);return s.colorSpace=ye,s}function pd(i){return new Ye({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uSeed:{value:i},uAlpha:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      varying vec2 vUv;
      uniform float uTime, uSeed, uAlpha;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { v += a*n(p); p *= 2.03; a *= 0.5; } return v; }
      void main() {
        float t = uTime * 0.35 + uSeed * 7.0;
        float y = vUv.y;
        float x = vUv.x - 0.5 - 0.16 * sin(y * 5.5 - t * 2.4 + uSeed * 3.0) * y;
        float body = smoothstep(0.24, 0.0, abs(x) * (1.3 - y * 0.6));
        float noise = fbm(vec2(vUv.x * 3.0, y * 2.4 - t * 1.6));
        float a = body * smoothstep(0.35, 0.75, noise) * smoothstep(0.0, 0.18, y) * smoothstep(1.0, 0.45, y);
        gl_FragColor = vec4(vec3(1.0, 0.97, 0.93), a * 0.55 * uAlpha);
      }`})}function md(){const i=new $r(1,28,20),t=i.attributes.position,e=new B;for(let n=0;n<t.count;n++){if(e.fromBufferAttribute(t,n),e.z>0){const r=.12*Math.sin(e.y*2.6);e.z-=.42*Math.exp(-((e.x-r)**2)/.012)*e.z}t.setXYZ(n,e.x*.15,e.y*.21,e.z*.1)}return i.computeVertexNormals(),i}function gd(i,t,e){const n=ud[i],s=new Yi().parse(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n.w} ${n.h}"><path d="${n.d}"/></svg>`).paths.flatMap(l=>Yi.createShapes(l)),a=e/Math.max(n.w,n.h),o=new Jr(s,{depth:.16/a,bevelEnabled:!0,bevelThickness:.035/a,bevelSize:.03/a,bevelSegments:3,curveSegments:10});o.center(),o.scale(a,-a,a);const c=new nn({color:t,roughness:.55,metalness:0});return new Xt(o,c)}const _d=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Oa=i=>Math.min(1,Math.max(0,i)),ri=(i,t,e)=>_d(Oa((i-t)/(e-t))),dn=(i,t,e)=>i+(t-i)*e;async function xd(i,t={}){const e=Math.min(window.innerWidth,window.innerHeight)<700,n=new sf({canvas:i,antialias:window.devicePixelRatio<2,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,e?1.75:2)),n.outputColorSpace=ye,n.toneMapping=4,n.toneMappingExposure=.95;const r=new Ca,s=new zr(n);r.environment=s.fromScene(new $f,.04).texture,r.environmentIntensity=.5;const a=new we(32,1,.1,100),o=new ca("#ffe8cc",2.2);o.position.set(4,6,5),r.add(o,new Kf("#fff4e8",.35));const c=new ca(xe.calm,1.1);c.position.set(-5,2,-4),r.add(c);const l=new en,h=new en,u=new en;r.add(l),l.add(h),h.add(u);const f=2.6,m=1,g=.76,M=await fd(n.capabilities.getMaxAnisotropy()),p=new Xt(new qi(m,g,f,128,1,!0),new nn({map:M,roughness:.82,metalness:0}));p.rotation.y=Math.PI;const d=new Xt(new qi(m*.975,g*.975,f,96,1,!0),new nn({color:"#cbbca3",roughness:.9,side:1})),C=new Xt(new Xi(g,64),new nn({color:"#bfae93",roughness:.9}));C.rotation.x=Math.PI/2,C.position.y=-f/2;const v=new Xt(new jr(m*.99,.038,16,128),new nn({color:"#e6dccb",roughness:.6}));v.rotation.x=Math.PI/2,v.position.y=f/2;const S=f/2-.16,F=_=>(g+(_+f/2)/f*(m-g))*.972,I=new Xt(new Xi(F(S),96),new ia({map:dd(),roughness:.32,clearcoat:.7,clearcoatRoughness:.18}));I.rotation.x=-Math.PI/2,I.rotation.z=Math.PI,I.position.y=S,u.add(p,d,C,v,I);const P=document.createElement("canvas");P.width=P.height=256;const U=P.getContext("2d"),Q=U.createRadialGradient(128,128,10,128,128,128);Q.addColorStop(0,"rgba(20,12,8,.55)"),Q.addColorStop(1,"rgba(20,12,8,0)"),U.fillStyle=Q,U.fillRect(0,0,256,256);const x=new Xt(new kn(3.4,3.4),new Zi({map:new Yr(P),transparent:!0,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.position.y=-f/2-.02,h.add(x);const y=new en,G=[];for(let _=0;_<3;_++){const z=pd(_*1.37);G.push(z);const nt=new Xt(new kn(1.3,2.6),z);nt.position.set((_-1)*.32,f/2+1.25+_*.08,(_-1)*.1),y.add(nt)}h.add(y);const Y=e?34:64,X=new cf(md(),new ia({color:"#5b3826",roughness:.38,clearcoat:.45,clearcoatRoughness:.3}),Y),lt=Array.from({length:Y},(_,z)=>({a:z/Y*Math.PI*2+Math.random()*.4,r:2.3+Math.random()*2.8,y:(Math.random()-.5)*3.6,s:.45+Math.random()*.4,sp:.08+Math.random()*.12,rx:Math.random()*6,ry:Math.random()*6,rs:(Math.random()-.5)*1.6}));r.add(X);const K=[],st=[["croissant",xe.fresh,.95],["cookie",xe.bag,.75],["taza",xe.calm,.8],["muffin",xe.fresh,.75],["tostada",xe.bag,.8],["lechera",xe.calm,.8],["smoothie",xe.fresh,.8],["pan",xe.bag,1]],O=e?st.slice(0,6):st;O.forEach(([_,z,nt],rt)=>{const at=gd(_,z,nt),vt=rt/O.length*Math.PI*2+.35;K.push({mesh:at,a:vt,r:2.6+rt%2*.9,y:(rt%3-1)*1.15,spin:(rt%2?1:-1)*(.25+rt*.03),bob:rt*.9}),r.add(at)});let mt=0,pt=0,gt=1,Ut=0,zt=0,D=0,L=0;const w=new jt,E=new Xn,$=new Oe,ct=new B,Z=new B,ht=new B;function q(){const _=i.clientWidth,z=i.clientHeight;!_||!z||(gt=_/z,n.setSize(_,z,!1),a.aspect=gt,a.updateProjectionMatrix())}q();const A=new ResizeObserver(q);A.observe(i);function k(_){D=_.clientX/window.innerWidth*2-1,L=_.clientY/window.innerHeight*2-1}window.addEventListener("pointermove",k,{passive:!0});const J=new Zf;let j=!0,it=0,N=!1;function R(){if(it=requestAnimationFrame(R),!j)return;const _=Math.min(.1,J.getDelta()),z=J.elapsedTime;pt+=(mt-pt)*(1-Math.exp(-_*6)),Ut+=(D-Ut)*(1-Math.exp(-_*3)),zt+=(L-zt)*(1-Math.exp(-_*3));const nt=pt,rt=gt<.85,at=rt?1.55/Math.max(gt,.42)*.62:1,vt=ri(nt,.28,.5)*(1-ri(nt,.62,.82)),xt=ri(nt,.66,.9),St=dn(8.4,6.3,vt)*at,Gt=dn(1.15,8.6,vt)*(rt?dn(1,1.45,vt):1),dt=vt*(rt?1.5:.55);a.position.set(Math.sin(Ut*.25)*.6,Gt+-zt*.35,Math.max(.9,St-vt*(St-1.2))+dt),ht.set(0,dn(.15,S,vt),dt),a.lookAt(ht),h.position.x=rt?0:dn(0,1.75,xt),h.position.y=rt?dn(1.15,.6,xt):0;const Et=rt?dn(.86,.72,xt):1;h.scale.setScalar(Et),u.rotation.y=Math.sin(z*.45)*.38+nt*Math.PI*2,u.rotation.z=Math.sin(z*.6)*.035*(1-vt),l.rotation.x=zt*.08,l.rotation.y=Ut*.18,G.forEach(yt=>{yt.uniforms.uTime.value=z,yt.uniforms.uAlpha.value=1-vt*.85}),y.quaternion.copy(a.quaternion),y.position.y=(1-vt)*0;const It=1+ri(nt,.2,.45)*.9-ri(nt,.7,1)*.45;lt.forEach((yt,Tt)=>{const kt=yt.a+z*yt.sp;ct.set(Math.cos(kt)*yt.r*It,yt.y*It+Math.sin(z*.8+Tt)*.12,Math.sin(kt)*yt.r*It*.5-1.2),ct.x+=h.position.x*.6,$.set(yt.rx+z*yt.rs,yt.ry+z*yt.rs*.7,0),E.setFromEuler($),Z.setScalar(yt.s),w.compose(ct,E,Z),X.setMatrixAt(Tt,w)}),X.instanceMatrix.needsUpdate=!0,K.forEach(yt=>{const Tt=yt.a+z*.07;yt.mesh.position.set(Math.cos(Tt)*yt.r*It+h.position.x*.5,yt.y*It+Math.sin(z*.9+yt.bob)*.18,Math.sin(Tt)*yt.r*It*.5-.8),yt.mesh.rotation.set(Math.sin(z*.5+yt.bob)*.35,z*yt.spin,Math.cos(z*.4+yt.bob)*.2)}),n.render(r,a),N||(N=!0,t.onReady?.())}R();const T=new IntersectionObserver(([_])=>{j=_.isIntersecting},{threshold:0});return T.observe(i),{setProgress(_){mt=Oa(_)},setTilt(_,z){D=_,L=z},destroy(){cancelAnimationFrame(it),A.disconnect(),T.disconnect(),window.removeEventListener("pointermove",k),n.dispose()}}}export{xd as crearTaza};
