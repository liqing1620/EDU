export const scrollTo = {
    data() {
        return {
            ids: 0
        }
    },
    methods: {
        scrollTo() {

        }
    }

}
export const clickItem = {
    data() {
        return {}
    },
    methods: {
        //点击事件元素定位
        clickItem(o, length) {
            this.ids = o
            this.$emit("click-item", o)
            // let className = document.getElementsByClassName("scroll")[o].querySelector("img")._prevClass
            if (o !== 0 && o !== length) {
                let l = document.getElementsByClassName("scroll")[o - 1].offsetLeft
                let w = document.getElementsByClassName("scroll")[o - 1].clientWidth / 2
                document.getElementById("scroll-nav").scrollTo(l + w, 0)
            } else if (o === 0) {
                document.getElementById("scroll-nav").scrollTo(0, 0)
            }

        }
    }

}
