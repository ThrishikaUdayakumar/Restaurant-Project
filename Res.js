
const myForm = document.getElementById('my-form');
const priceInput=document.getElementById('price');
const dishInput=document.getElementById('dish');
const tableInput=document.getElementById('table');
const table1=document.getElementById('table-1');
const table2=document.getElementById('table-2');
const table3=document.getElementById('table-3');
myForm.addEventListener('submit', function(e){
    e.preventDefault();
    const data={
        price:priceInput.value,
        dish:dishInput.value,
        table:tableInput.value

    };
    
    axios.post("https://crudcrud.com/api/9b699f262f0b4720bba9642ccb22012e/Data",data)
        .then((response) => {
            console.log(response.data);

            priceInput.value = '';
            dishInput.value = '';
            tableInput.value = '';
            getRequest();

        })
        .catch((error) => {
            console.error(error);
        });
});
function getRequest() {
    axios.get("https://crudcrud.com/api/9b699f262f0b4720bba9642ccb22012e/Data")
        .then((response) => {
            const orders = response.data;
            
            orders.forEach((order) => {
                if (order.table === "Table 1") {
                    table1.textContent = "Table 1: " + order.price + " - " + order.dish;
                } else if (order.table === "Table 2") {
                    table2.textContent = "Table 2: " + order.price + " - " + order.dish;
                } else if (order.table === "Table 3") {
                    table3.textContent = "Table 3: " + order.price + " - " + order.dish;
                }
                <button class="delete-button">Delete</button>
                
                const deleteButton = document.getElementsByClassName('.delete-button');
                deleteButton.addEventListener('click', () => handleDelete(userId));
            });
        })
        .catch((error) => {
            console.error(error);
        });
}

function handleDelete(userId) {
    axios.delete(`https://crudcrud.com/api/9b699f262f0b4720bba9642ccb22012e/Data/${userId}`)
        .then(() => {
            console.log('User deleted successfully');
            getrequest();
        })
        .catch((error) => {
            console.error('Error deleting user:', error);
        });
}
getRequest();
