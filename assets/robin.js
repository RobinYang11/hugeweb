
(function (w, e) {
	console.log(w)
})(typeof window ? window : global, function (w) {

	w.EventTarget.prototype.on = function (e) {
		console.log('ON')
	}

	w.r || (w.r = {
		isFunction: function (o) {
			return Object.propotype.toString.call(o) === "[object Function]";
		},
		hasClass: function (d, c) {
			var res = d.className.match(new RegExp(c));
			return res;
		},
		removeClass: function (d, c) {
			if (this.hasClass(d, c)) {
				d.className = d.className.replace(c, " ");
			}
		},
		addClass: function (d, c) {
			if (!this.hasClass(d, c) || d.className != "") {
				d.className += " " + c;
			}
		},
		toggleClass(d, c) {
			if (this.hasClass(d, c)) {
				this.addClass(d, c);
			} else {
				this.removeClass(d, c);
			}
		},
		// removeClass: function (d, v) {
		// 	var clazz = d.className,
		// 		cs = this.classToArray(clazz),
		// 		index = cs.indexOf(v),
		// 		nClazz = '';
		// 	if (index != -1) {
		// 		for (i in cs) {
		// 			if (i != index) {
		// 				nClazz += cs[i] + " ";
		// 			}
		// 		}
		// 	}
		// 	d.className = nClazz;
		// },
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