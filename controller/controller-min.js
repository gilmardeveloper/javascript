function Controller(){this._list=new Lista();
this.insert=function(a){this._list.add(a)
};
this.update=function(a,b){this._list.remove(this._list.getIndexOf(a));
this._list.add(b)
};
this.remove=function(a){this._list.remove(this._list.getIndexOf(a))
};
this.getElement=function(a){return this._list.get(a)
};
this.getAll=function(){return this._list.getList()
}
};