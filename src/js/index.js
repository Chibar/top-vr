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
        const value = input.value;
        const parent = input.parentNode;
        const resetIcon = parent.querySelector('.header-logo_line-reset-icon');
        const searchResult = parent.querySelector('.search_result')

        if (value && value.length > 0) {
            searchResult.classList.add('active')
            resetIcon.classList.add('active')
        } else {
            searchResult.classList.remove('active')
            resetIcon.classList.remove('active')
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

