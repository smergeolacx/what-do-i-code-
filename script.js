task = document.querySelector(".task")
header = document.querySelector('.big')

btn = document.querySelector('.new-task')

const taskList = ["Create a ray-tracer", "90s doom style game", "basic website", "full-stack website", "annoying little mobile app", "portfolio",
"chess"]

task.style.backgroundColor = "none"


btn.addEventListener("click", () => {
    // console.log(task.innerText.length)
    header.innerText = "IDK do this and add git link."
    task.style.backgroundColor = "coral"
    task.innerHTML = `<h1>${taskList[Math.floor(Math.random() * 7)].toUpperCase()}</h1>`
})
