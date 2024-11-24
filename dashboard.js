
// Mock data for orders
const orders = {
    table1: [{ item: 'Pizza', quantity: 2 }, { item: 'Pasta', quantity: 1 }],
    table2: [{ item: 'Burger', quantity: 3 }],
    table3: [],
    table4: [{ item: 'Salad', quantity: 2 }, { item: 'Soup', quantity: 1 }],
    table5: [{ item: 'Coffee', quantity: 4 }],
  };
  
  // Load orders dynamically
  function loadOrders() {
    const ordersList = document.getElementById('orders-list');
    const totalOrders = document.getElementById('total-orders');
    let totalCount = 0;
  
    // Clear previous orders
    ordersList.innerHTML = '';
  
    // Loop through each table's orders
    Object.keys(orders).forEach((table) => {
      const tableOrders = orders[table];
      totalCount += tableOrders.length;
  
      // Create an order card for each table
      const orderCard = document.createElement('div');
      orderCard.classList.add('order-card');
      orderCard.innerHTML = `
        <h3>${table.toUpperCase()}</h3>
        <ul>
          ${tableOrders.map(order => `<li>${order.item} - ${order.quantity}</li>`).join('')}
        </ul>
        <button class="process-btn" onclick="processOrder('${table}')">Mark as Processed</button>
      `;
  
      ordersList.appendChild(orderCard);
    });
  
    // Update total orders count
    totalOrders.innerText = totalCount;
  }
  
  // Process an order
  function processOrder(table) {
    // Clear the table's orders
    orders[table] = [];
  
    // Reload orders
    loadOrders();
  
    alert(`Orders from ${table.toUpperCase()} have been processed!`);
  }
  
  // Initial load
  document.addEventListener('DOMContentLoaded', loadOrders);
  