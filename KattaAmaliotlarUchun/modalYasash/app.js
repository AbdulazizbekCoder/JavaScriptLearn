const showBtn = document.getElementById('btn-show')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const overlay = document.getElementById('overlay')

const removeclass = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const addclass = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')

}

showBtn.addEventListener('click', removeclass)
closeBtn.addEventListener('click', addclass)
overlay.addEventListener('click', addclass)
document.addEventListener('keydown', (i) => {
    if (i.key == 'Escape') {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
})