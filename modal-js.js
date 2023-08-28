const btnOpenModal = document.querySelector("#open-modal")
const btnCloseModal = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")


btnOpenModal.addEventListener('click', () =>{
   modal.showModal()
})

btnCloseModal.addEventListener('click', () =>{
   modal.close()
})