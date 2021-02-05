import str from './str.js'
import css from './style.less'
import css2 from './style2.css'
import css3 from './style3.scss'
import css4 from './style4.styl'
import jpg from './assets/webpack.jpg'

let wrapper = document.querySelector('body')
let img = document.createElement('img')
img.src = jpg
wrapper.appendChild(img)
img.title = "一张图片"

let button = document.createElement('button')
button.textContent = '召唤lazy'
button.onclick = function(){
    const promise = import('./lazy.js')
    promise.then((module)=>{
        const fn = module.default
        fn()
        // 成功加载promise
    },()=>{
        console.log('模块没加载出来')
    }
    )
}
wrapper.appendChild(button)