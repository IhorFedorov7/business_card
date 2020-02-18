click();

function click() {
    const btn = document.querySelector('.btn'),
        modal = document.querySelector('.fixsed-overlay'),
        close = document.querySelector('.close');

    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

content();

function content() {
    const tabItem = document.querySelectorAll('.tab-item'),
        offer = document.querySelectorAll('.view');
    
        function selectContent (e) {
            removeBorder();
            removeShow();
            this.classList.add('tab-border');

            const tabContent = document.querySelector(`#${this.id}-content`);
            tabContent.classList.add('show');
        }

        function removeBorder() {
            tabItem.forEach(i => i.classList.remove('tab-border'));
        }

        function removeShow() {
            offer.forEach(i => i.classList.remove('show'));
        }
    
    tabItem.forEach(i => i.addEventListener('click', selectContent));
}
