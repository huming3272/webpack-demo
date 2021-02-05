import str from './str.js'
import css from './style.less'
import css2 from './style2.css'
import css3 from './style3.scss'
import css4 from './style4.styl'
import jpg from './assets/webpack.jpg'

let wrapper = document.querySelector('body')
let img = new Image()
img.src = jpg
wrapper.appendChild(img)
img.title = "一张图片"

let button = new Button()
button.onclick = function(){
    const promise = import('./lazy.js')
    promise.then((module)=>{
        
    })
}