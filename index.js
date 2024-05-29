document.addEventListener("DOMContentLoaded", function() {

    const data = [
    {
        id: 1,
        product: "Apple",
        quantity: 4
    },
    {
        id: 2,
        product: "Egg",
        quantity: 4
    },
    {
        id: 3,
        product: "Orange",
        quantity: 4
    },
    {
        id: 4,
        product: "Apple",
        quantity: 4
    }
]

const list = document.querySelector("#lists");

const form = document.querySelector("#add");

const inputOne = document.querySelector("#name");
const inputTwo = document.querySelector("#quantity");


form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log("before adding data",data)
    const productName = inputOne.value;
    const productQuantity = inputTwo.value;
    const quantity = parseInt(productQuantity);

    if(productName && quantity > 0 ){

        const item = {
            id: data.length + 1,
            product: productName,
            quantity: quantity
        }

        data.push(item);

        inputOne.value = '';
        inputTwo.value = 0;
        console.log("after adding data",data)
        setData()
    }
})


    function setData (){
        list.innerHTML = ''
        data.forEach(item => {
            const myDiv = document.createElement("div");
            myDiv.classList.add("what_am_buying")
            
            const prodcutCount = document.createElement("p");
            prodcutCount.textContent = item.quantity
            prodcutCount.classList.add("number_list");

            const productName = document.createElement("p");
            productName.textContent =  item.product
            productName.classList.add("item")

            const button = document.createElement("button");
            button.classList.add("cancel_btn");

            const icon = document.createElement("img");
            icon.src = "./icon-close.svg"
            icon.classList.add("cancel")

            const line = document.createElement("hr")
            line.classList.add("horizontal_line");

            button.appendChild(icon);

            button.addEventListener('click', (event) => {
                const index = data.findIndex(i => i.id == item.id); 
                data.splice(index,1);
                setData();
            })

            myDiv.appendChild(prodcutCount);
            myDiv.appendChild(productName);
            myDiv.appendChild(button);

            list.appendChild(myDiv)
            list.appendChild(line)


        })
    }

    setData()

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