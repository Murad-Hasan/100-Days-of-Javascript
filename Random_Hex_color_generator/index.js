const colorCode = document.querySelector(".color_title")
const button = document.querySelector(".btn-grad")


const generateColorCode = () => {
    let color = Math.random().toString(16).substring(2, 8)
    colorCode.innerHTML =`#${color}`
    colorCode.style.color = `#${color}`
    document.body.style.backgroundColor = `#${color}`
}

button.addEventListener("click", generateColorCode)

