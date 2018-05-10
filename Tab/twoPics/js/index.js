class TwoPIcsChange {
    constructor (data, wrap) {
        this.data = data;
        this.wrap = wrap;
        this.prev = this.wrap.querySelector(".prev"); // 上一张
        this.next = this.wrap.querySelector(".next"); // 下一张
        this.img1 = this.wrap.querySelector("#img1"); // 图1
        this.img2 = this.wrap.querySelector("#img2"); // 图2
        this.imgNub1 = 0; // 图1显示下标
        this.imgNub2 = 0; // 图2显示下标
        this.imgSrc1 = this.data.img1; // 图一数组
        this.imgSrc2 = this.data.img2; // 图2数组
        this.txtData1 = this.data.txt1; // 图1介绍
        this.txtData2 = this.data.txt2; // 图2介绍
        this.txt1 = this.wrap.querySelector(".txt1"); // 图1介绍文字
        this.num1 = this.wrap.querySelector(".num1"); // 图1数字显示
        this.txt2 = this.wrap.querySelector(".txt2"); // 图2介绍文字
        this.num2 = this.wrap.querySelector(".num2"); // 图2数字显示
    }   
    nextImg1 () {
        this.imgNub1++;
        this.imgNub1 = this.imgNub1 % this.imgSrc1.length;
        this.img1Show ();
    }
    img1Show () {
        this.img1.src = this.imgSrc1[this.imgNub1];
        this.num1.innerHTML = this.imgNub1 + 1 + '/' + this.imgSrc1.length;
        this.txt1.innerHTML = this.txtData1[this.imgNub1];
    }
    nextImg2 () {
        this.imgNub2++;
        this.imgNub2 = this.imgNub2 % this.imgSrc2.length;
        this.img2Show ();
    }
    img2Show () {
        this.img2.src = this.imgSrc2[this.imgNub2];
        this.num2.innerHTML = this.imgNub2 + 1 + '/' + this.imgSrc2.length;
        this.txt2.innerHTML = this.txtData2[this.imgNub2];
    }
    nextTeam () {
        this.nextImg1();
        this.nextImg2();
    }
    prevTeam () {
        this.imgNub1--;
        if ( this.imgNub1 < 0 ) {
            this.imgNub1 = this.imgSrc1.length - 1;
        }
        this.imgNub2--;
        if ( this.imgNub2 < 0 ) {
            this.imgNub2 = this.imgSrc2.length - 1;
        }
        this.img1Show ();
        this.img2Show ();
    }
}

let box = document.querySelector("#box");
let imgData = {
    img1: [
        "img/复仇者联盟之钢铁侠.jpg",
        "img/复仇者联盟之黑寡妇.jpg",
        "img/复仇者联盟之绿巨人.jpg",
        "img/复仇者联盟之美国队长.jpg"
    ],
    img2: [
        "img/海贼王之霸气香克斯.jpg",
        "img/海贼王之火拳艾斯.jpg",
        "img/海贼王之四段路飞.jpg"
    ],
    txt1: [
        "复仇者联盟之钢铁侠",
        "复仇者联盟之黑寡妇",
        "复仇者联盟之绿巨人",
        "复仇者联盟之美国队长"
    ],
    txt2: [
        "海贼王之霸气香克斯",
        "海贼王之火拳艾斯",
        "海贼王之四段路飞"
    ]
} ;

let changeImgs = new TwoPIcsChange(imgData, box);
changeImgs.img1.onclick = function () {
    changeImgs.nextImg1();
}

changeImgs.img2.onclick = function () {
    changeImgs.nextImg2();
}

changeImgs.next.onclick = function () {
    changeImgs.nextTeam();
}

changeImgs.prev.onclick = function () {
    changeImgs.prevTeam();
}