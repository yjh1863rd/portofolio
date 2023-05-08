/*=============== FILTERS TABS ===============*/
const  tabs = document.querySelectorAll('[data-target]'),
        tabContens = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('cliick', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContens.forEach(tc =>{ /*tc = tabcontent*/
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')
        
        tabs.forEach(t =>{ /*t = tab*/
            t.classList.remove('filter-tab-active')
        })

        tab.classList.add('filter-tab-active')
    })

    
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
