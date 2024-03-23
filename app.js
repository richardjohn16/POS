// Global variable to store the total order amount
var totalOrderAmount = 0;

// Function to add a food item
function addFoodItem() {
    var foodOption = document.getElementById('foodOptions').value;
    var choice = foodOption.split('|')[0];
    var price = parseFloat(foodOption.split('|')[1]);
    var quantity = document.getElementById('asd').value;

    if (quantity > 0) {
        addToOrder(choice, quantity, price);
        showTableSection(); // Show the table section
    }
}

// Function to finalize order
function finalizeOrder() {
    totalOrderAmount = calculateTotal(); // Calculate total order amount
    alert('Total order amount: ' + totalOrderAmount + ' Pesos');
}

// Function to add food item to order
function addToOrder(choice, quantity, price) {
    var table = document.querySelector('table');
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = choice;
    cell2.innerHTML = quantity;
    cell3.innerHTML = price * quantity; // Calculate total price for this item
    updateTotal(); // Update the total after adding the item
}

// Function to update total order amount
function updateTotal() {
    var table = document.querySelector('table');
    var rows = table.rows;
    var total = 0;

    for (var i = 1; i < rows.length; i++) {
        total += parseFloat(rows[i].cells[2].innerHTML); // Add up total prices
    }

    document.getElementById('totalAmount').innerHTML = total.toFixed(2); // Display total amount
}

// Function to show table section
function showTableSection() {
    var tablesSection = document.querySelector('.tablesSection');
    tablesSection.style.display = 'block';
}

// Function to calculate total
function calculateTotal() {
    var table = document.querySelector('table');
    var rows = table.rows;
    var total = 0;

    for (var i = 1; i < rows.length; i++) {
        total += parseFloat(rows[i].cells[2].innerHTML); // Add up total prices
    }

    return total;
}
// Function to pay
function pay() {
    var cash = document.getElementById('qwe').value;
    var numericCash = parseFloat(cash);
    var totalAmount = parseFloat(document.getElementById('totalAmount').innerHTML);

    if (isNaN(numericCash) || numericCash < totalAmount) {
        alert('Insufficient cash or invalid amount. Please enter the correct amount.');
    } else {
        alert('Payment successful!');
        clearTable();
        totalOrderAmount = 0; // Reset total order amount after payment
        document.getElementById('totalAmount').innerHTML = "0.00"; // Reset displayed total amount
    }
}

// Function to clear table
function clearTable() {
    var table = document.querySelector('table');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
}