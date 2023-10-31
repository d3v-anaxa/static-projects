// header_content

[...`AYANAKSHA`].forEach((e) => {
    let element = document.createElement('div')
    element.classList.add('strong-650')
    element.textContent = e
    document.querySelector('.header').appendChild(element)
})

// footer_content

document.querySelector('.footer').textContent = `©2022 d3v-anaxa, INDIA. All rights reserved.`

// date and time add

setInterval(() => {
    document.querySelector('.time').textContent = `[ ${new Date().toLocaleTimeString()} ]`.replace(/:/g, " << ")
    document.querySelector('.date').textContent = `[ ${new Date().toLocaleDateString()} ]`.replace(/\//g, " - ")
    document.querySelector('.noNetwork').textContent = document.querySelector('.content').textContent == '' ? 'PLEASE CONNECT TO INTERNET' : ''
}, 0)


// content insertion

const content_insert = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            for (let i in json) {
                let title = document.createElement('h3')
                title.textContent = `🕊 ${json[i].title}`

                let para = document.createElement('p')
                para.textContent = `${json[i].body}`

                document.querySelector('.content').appendChild(title)
                document.querySelector('.content').appendChild(para)
                if (i == 25) break;
            }
        }
        )
}


content_insert()

// bgcolor change

let hue = 0

setInterval(() => {
    document.body.style.background = document.body.classList.contains('dark') ? `linear-gradient(90deg, black, hsl(${hue}, 60%,20%))` : `linear-gradient(90deg, white, hsl(${hue}, 30%, 40%))`
    document.querySelector('.noNetwork').style.color = `hsl(${hue + 90}, 50%, 50%)`
    hue++
}, 10)

// dark and light mode toggle 

const theme_toggle = () => {
    document.body.classList.toggle('dark')
    document.querySelector('.mode').textContent = document.body.classList.contains('dark') ? '[ LIGHT-MODE ]' : '[ DARK-MODE ]'
}