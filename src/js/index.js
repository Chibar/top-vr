import '../style/main.css'

document.getElementById('header-logo_line-search-form').addEventListener('submit', function (e) {
    e.preventDefault()
    const formData = new FormData(this);
    for (const pair of formData.entries()) {
        console.log('pair', pair)
    }
})

document.getElementById('header-logo_line-search-form').addEventListener('reset', function (e) {
    const inputs = document.querySelectorAll('input[name="search"]')
    inputs.forEach(input => {

        const parent = input.parentNode
        const resetIcon = parent.querySelector('.header-logo_line-reset-icon')
        const searchResult = parent.querySelector('.search_result')
        const search = document.querySelector('.header-logo_line-search.opened')

        if (search) {
            const address = document.querySelector('.header-logo_line-address')
            const callbacks = document.querySelector('.header-logo_line-callback')
            const logo = document.querySelector('.header-logo_line-logo')
            search.classList.remove('opened')
            address.classList.remove('search-opened')
            callbacks.classList.remove('search-opened')
            logo.classList.remove('search-opened')
        }

        searchResult.classList.remove('active')
        resetIcon.classList.remove('active')
    })
})

function menuToggle() {
    const slidingMenu = document.getElementById('sliding_menu')
    slidingMenu.classList.toggle('active')
}
const menuOpeners = document.querySelectorAll('.header-logo_line-burger, .sliding_menu-header-close_icon')
for (let index = 0; index < menuOpeners.length; index++) {
    const element = menuOpeners[index];
    element.addEventListener('click', menuToggle)
}

const slidingMenuLi = document.querySelectorAll('.sliding_menu-li.has_children')
for (let index = 0; index < slidingMenuLi.length; index++) {
    const element = slidingMenuLi[index];
    console.log('element', element)
}

function searchInputChange(inputChanged, forceValue) {
    const inputs = document.querySelectorAll('input[name="search"]')

    inputs.forEach(input => {
        if (forceValue || forceValue == 'false') {
            input.value = forceValue == 'false' ? null : forceValue
        }
        if (inputChanged && inputChanged != input) {
            input.value = inputChanged.value
        }
        const value = input.value
        const parent = input.parentNode
        const resetIcon = parent.querySelector('.header-logo_line-reset-icon')
        const searchResult = parent.querySelector('.search_result')

        if (value && value.length > 0) {
            searchResult.classList.add('active')
            if(resetIcon){
                resetIcon.classList.add('active')
            }
        } else {
            searchResult.classList.remove('active')
            if(resetIcon){
                resetIcon.classList.remove('active')
            }
        }
    });
}

document.getElementById('header-logo_line-search-input').addEventListener('input', function () { searchInputChange(this) })
document.getElementById('header-logo_line-search-input').addEventListener('change', function () { searchInputChange(this) })

const tabletSearchOpener = document.querySelector('.header-logo_line-search-opener')
if (tabletSearchOpener) {
    tabletSearchOpener.addEventListener('click', function (e) {

        const wrapper = tabletSearchOpener.parentNode

        const address = document.querySelector('.header-logo_line-address')
        const callbacks = document.querySelector('.header-logo_line-callback')
        const logo = document.querySelector('.header-logo_line-logo')

        wrapper.classList.toggle('opened')

        if (wrapper.classList.contains('opened')) {
            address.classList.add('search-opened')
            callbacks.classList.add('search-opened')
            logo.classList.add('search-opened')
        }
    })
}

const backdrop = document.querySelector('.backdrop')

function openModal(modalId){
    const modal = document.querySelector(`#${modalId}`)
    if(modal){
        backdrop.classList.add('active')
        modal.classList.add('active')
    }
}
function backDropCheck(){
    const openedModals = document.querySelectorAll('.modal.active')
    if(openedModals.length <= 0){
        backdrop.classList.remove('active')
    }
}
function closeModal(target){
    const modal = target.closest('.modal')
    modal.classList.remove('active')
    backDropCheck()
}
function closeAllModals() {
    const openedModals = document.querySelectorAll('.modal.active')
    for (let index = 0; index < openedModals.length; index++) {
        const modal = openedModals[index];
        modal.classList.remove('active')
    }
    backDropCheck()
}
document.addEventListener('click', function(e) {
    const target = e.target
    if(!e.target.closest('.header-logo_line-search')){
        const searchResult = document.querySelector('.search_result')
        searchResult.classList.remove('active')
    }
    if(target.classList.contains('backdrop') || target.classList.contains('backdrop-blur')){
        closeAllModals()
    }
    if(target.closest('.modal-close')){
        closeModal(target)
    }
})

const callbackOpeners = document.querySelectorAll('.open-callback')
for (let index = 0; index < callbackOpeners.length; index++) {
    const callbackOpener = callbackOpeners[index];
    callbackOpener.addEventListener('click', function (e) {
        openModal('callback-modal')
    })
}

const videoOpeners = document.querySelectorAll('.open-video')
for (let index = 0; index < videoOpeners.length; index++) {
    const videoOpener = videoOpeners[index];
    videoOpener.addEventListener('click', function (e) {
        if(!this.getAttribute('data-video-src')){
            console.error(`Элемент не имеет data-video-src`)
            return false;
        }
        const videoSrc = this.getAttribute('data-video-src');
        const videoModalFrame = document.querySelector('#video-modal iframe')
        videoModalFrame.setAttribute('src', videoSrc)
        openModal('video-modal')
    })
}