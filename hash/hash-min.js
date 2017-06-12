function Hash(){this._hash="";
this.newHash=function(a){var d=0;
var e=[];
for(var b=0;
b<24;
b++){a=a+a.substr(0,24-a.length);
e[b]=a.charCodeAt(b);
e[b]=e[b]^3;
if(d%6===0&&b>0){this._hash=this._hash+"-"
}this._hash=this._hash+String.fromCodePoint(e[b]);
d++
}return this._hash
}
};