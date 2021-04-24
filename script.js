const   modalWindowContact = document.querySelector('#contact'),
        modalCloseContact = document.querySelector('[data-close-contact]'),
        modalTriggerContact = document.querySelector('[data-modal]'),
        modalCloseArea = document.querySelector('.modal__dialog'),
        modalCloseProject = document.querySelector('[data-close-project]')
        modalWindowProject = document.querySelector('#project'),
        modalTriggerProject = document.querySelector('#send_modal');

        function openModal (id) {
            id.classList.add('show');
            id.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        }

            modalClose.addEventListener('click', ()=> closeModal());

        function closeModal () {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        modalTriggerContact.addEventListener('click',() => openModal(modalWindowContact));
        modalTriggerProject.addEventListener('click', () => openModal(modalWindowProject));


        modalClose.addEventListener('click', () => closeModal());

        modalCloseArea.addEventListener('click', (e) => {
            if (e.target === modalCloseArea) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindowContact.classList.contains('show')) {
            closeModal();
        }
         });

        openModal();
        closeModal();
