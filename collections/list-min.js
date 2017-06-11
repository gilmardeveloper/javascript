function Lista(){this._valores=[];
this.add=function(b){var a=this._valores.push(b)-1;
return a
};
this.remove=function(a){return this._valores.splice(a,1)
};
this.get=function(a){return this._valores[a]
};
this.getList=function(){return this._valores
};
this.getIndexOf=function(b){var a=-1;
this._valores.find(function(c,d){if(c.equals(b)){a=d
}},b);
return a
};
this.getCount=function(){return this._valores.length
}
};