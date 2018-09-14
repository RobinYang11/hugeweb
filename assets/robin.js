
(function (w, e) {
	console.log(w)
})(typeof window ? window : global, function (w) {

	w.EventTarget.prototype.on=function(e){
		console.log('ON')
	}


	w.r || (w.r = {
		isFunction: function (o) {
			return Object.propotype.toString.call(o) === "[object Function]";
		},
		removeClass: function (d, v) {
			var clazz = d.className,
				cs = this.classToArray(clazz),
				index = cs.indexOf(v),
				nClazz = '';
			if (index != -1) {
				for (i in cs) {
					if (i != index) {
						nClazz += cs[i] + " ";
					}
				}
			}
			d.className = nClazz;
		},
		classToArray: function (v) {
			if (typeof v === "string") {
				return v.match(/[^\x20\r\n\t\f]+/g) || []
			};
			return [];
		},
		delegate: function (target, type, fn) {
			var target = document.querySelectorAll(target)[0];
			target.addEventListener(type, function (e) {
				if (e.target.nodeName.toLowerCase() == "li") {
					fn(e);
				}
			})
		}
	})

}(window))