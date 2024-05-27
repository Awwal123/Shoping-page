document.addEventListener("DOMContentLoaded", function() {

    function updateButton(button) {
        button.classList.remove('cancel_btn');
        button.classList.add('btn');
        button.innerHTML = "Add";
        button.style.color = 'yellow';
        button.style.backgroundColor = 'transparent';
        button.style.padding = '10px 30px'; 
    }
    
    function updateToCancel(button) {
        button.classList.remove('btn');
        button.classList.add('cancel_btn');
        button.innerHTML = "<img class='cancel' src='./icon-close.svg' alt='close_icon'>";
    }
    
    //   toggle between increasing and decreasing the number
    function toggleNumber(button) {
        const textArea2 = document.querySelector('.text-area2');
        let number = parseInt(textArea2.value, 10);
        if (button.classList.contains('cancel_btn')) {
            if (!isNaN(number) && number > 0) {
                textArea2.value = number - 1;
            }
            updateButton(button);
        } else if (button.classList.contains('btn')) {
            textArea2.value = number + 1;
            updateToCancel(button);
        }
    }
    
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('cancel')) {
            const cancelButton = target.closest('.cancel_btn');
            if (cancelButton) {
                toggleNumber(cancelButton);
            }
        } else if (target.classList.contains('btn')) {
            const addButton = target.closest('.btn');
            if (addButton) {
                toggleNumber(addButton);
            }
        }
    });
    });