function test() {
    console.log("test")
}
//locate funciton
(function () {
    'use strict'
    //global variable;
    var cid = 0;

    changePro(data, cid);
    changeCity(data, cid)

    function changePro(data, cid) {
        var lc = document.querySelector(".location>.pro"),
            html = '';
        for (var i = 0; i < data.city.length; i++) {
            if (i == cid) {
                html += `<li class='active bb'>${data.city[i][0]}</li>`;
            } else {
                html += `<li >${data.city[i][0]}</li>`;
            }
        }
        lc.innerHTML = html;
    }

    function changeCity(data, cid) {
        var html2 = "";
        for (var j = 1; j < data.city[cid].length; j++) {
            html2 += `<li> ${data.city[cid][j]}</li>`
        }
        var city = document.querySelector(".location>.city");
        city.innerHTML = html2;
    }
    var lies = document.querySelectorAll(".location>.pro>li");
    lies.forEach((i, index) => {
        i.addEventListener('click', (e) => {
            Array.prototype.forEach.call(lies, (i) => {
                r.removeClass(i, "active");
                changeCity(data, index);
            })
            e.target.className = "active";
        })
    })

    r.delegate(".city", "click", (e) => {
        var ct = document.querySelector(".ct");
        ct.innerHTML = e.target.innerHTML;
    })

    var search_btn = document.querySelector("#search");
    search_btn.addEventListener("click", (e) => {
        e.preventDefault();
        var search_text = document.querySelector(".search-input>input");
        if (!search_text.value) {
            r.addClass(search_text, "empty-warnning");
            setTimeout(() => {
                r.removeClass(search_text, "empty-warnning");
            }, 500)
        }
    })

    function search() {

    }

    //轮播图
    var banner_item = document.querySelectorAll(".banner>li"),
        bannerIndex = 0,
        bid = new Iobj(),
        bl = new Iobserver();
    bid.setMsg(bannerIndex);
    bid.addListener(bl);
    setInterval(() => {
        if (bannerIndex == banner_item.length) {
            bid.setMsg(0);
            bannerIndex = 0;
        } {
            bid.setMsg(bannerIndex);
            bannerIndex++;
        }
    }, 3000)

    //重置所有banner z-index
    function resetBannerZindex() {
        banner_item.forEach((i) => {
            i.style.zIndex = 0;
        })
    }
    //设置z-index
    function changeBanner(index) {
        banner_item[index].style.zIndex = 10;
    }

    //被监听对象
    function Iobj() {
        this.msg = null;
        this.setMsg = function (msg) {
            this.msg = msg;
            this.notify(msg)
        };
        this.observerList = [];
        this.addListener = function (o) {
            this.observerList.push(o);
        };
        this.notify = function (msg) {
            this.observerList.forEach((i) => {
                i.update(msg);
            })
        }
    }
    //观察者对象
    function Iobserver() {
        this.msg;
        this.update = function (msg) {
            this.msg = msg;
            console.log(this.msg + "observed something update!")
            resetBannerZindex();
            changeBanner(msg);
        }
    }

    var banner_btn = document.querySelectorAll(".banner-btn>li");
    banner_btn.forEach((i, d) => {
        i.addEventListener("click", (e) => {
            bid.setMsg(d);
        })
    })

    var divs = document.querySelectorAll(".nav-menu>div");
    r.delegate(".left-nav", 'mouseover', (e) => {
        var index = parseInt(e.target.dataset['index']);
        divs.forEach((i) => {
            i.style.display = 'none'
        })
        divs[index].style.display = "block";
    })

    var nvb = document.querySelector("#nav-banner");
    nvb.addEventListener("mouseout", (e) => {
        var isD = false;
        divs.forEach((i) => {
            if (i == e.relatedTarget) {
                isD = true;
            }
        })
        if (!isD) {
            divs.forEach((i) => {
                i.style.display = 'none'
            })
        }
    })

    //
    function _for(list,tag){
        var html ="";
    }

})()