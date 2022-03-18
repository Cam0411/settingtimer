const hour = document.querySelector(".num__hours")
const min = document.querySelector(".num__min")
const sec = document.querySelector(".num__sec")
const search = document.querySelector(".search__box")
const pause = document.querySelector(".pause")
const reset = document.querySelector(".reset")
const resume = document.querySelector(".resume")
var ischeck = false
resume.style.display = "none"

pause.addEventListener("click",() => {
  pause.style.display = "none"
  resume.style.display = "block"
})
resume.addEventListener("click",() => {
  pause.style.display = "block"
  resume.style.display = "none"
})


window.addEventListener("keypress",event => {
  
    if (event.keyCode == 13){
      var time = parseInt(search.value)
      search.style.display = 'none'
function timer(){
      if (!ischeck && time > -1){
        hour.innerHTML = parseInt(time / 3600)
        min.innerHTML = parseInt(time % 3600 / 60)
        sec.innerHTML = parseInt(time % 3600 % 60)
        search.value=''
        time--
      }
      
      }
    
      pause.addEventListener('click',event => {
        event.preventDefault()
        ischeck = true
   
        pause.style.display = "none"
     })
     resume.addEventListener('click',event => {
      event.preventDefault()
       ischeck = false
       resume.style.display = "none"
       pause.style.display = "block"
     })
     reset.addEventListener('click',event => {
      event.preventDefault()
   
      time = 0
      ischeck = false
      search.style.display = 'block'
   })
    }

    setInterval(timer,1000)
})