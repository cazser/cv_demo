let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `
/*你好，我是一名前端新人
接下来我要展示一下我的前端功底
首先我要准备一个div
我要加的样式是
*/
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
  position: fixed;
  right:0;
  top:0;
}
/*接下来我把div变成一个太极图
首先把div变成一个圆
*/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  border:none;
}
/*接下来一黑一白*/
#div1{
  background: linear-gradient(90deg, rgba(255, 255, 255, 1)
  0%, rgba(255, 255, 255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,
    0, 0, 1) 100%);
}
#div1::before{
  content:'';
  display:block;
}
div1::after{
  content:'';
  display:block;
}

/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;

let n = 0;
let string2 = ``;
let step = () => {
  setTimeout(() => {
    //demo.innerHTML = string.substring(0, n);
    string2 += string[n] === "\n" ? "<br>" : string[n];

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 5);
};

step();
