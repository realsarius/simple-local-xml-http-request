loadCustomerData = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  document.querySelector('#customer').textContent = '';

  xhr.onload = () => {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        const customer = JSON.parse(xhr.responseText);
        const ul = document.createElement('ul');
        ul.id = customer['id'];
        for (const [key, value] of Object.entries(customer)) {
          const li = document.createElement('li');
          li.textContent = `${key}: ${value}`;
          ul.appendChild(li);
        }
        document.querySelector('#customer').appendChild(ul);
      }
    }
  };

  xhr.onerror = (err) => {
    console.log(err);
  };

  xhr.send(null);
};

loadCustomersData = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  document.querySelector('#customers').textContent = '';

  xhr.onload = () => {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        const customers = JSON.parse(xhr.responseText);
        customers.forEach((customer) => {
          const ul = document.createElement('ul');
          const customerHeader = document.createElement('h5');
          customerHeader.textContent = `Customer ${customer['id']}`;
          ul.id = customer['id'];
          for (const [key, value] of Object.entries(customer)) {
            const li = document.createElement('li');
            li.textContent = `${key}: ${value}`;
            ul.appendChild(li);
          }
          const customerDiv = document.createElement('div');
          customerDiv.appendChild(customerHeader);
          customerDiv.appendChild(ul);
          document.querySelector('#customers').appendChild(customerDiv);
        });
      }
    }
  };

  xhr.onerror = (err) => {
    console.log(err);
  };

  xhr.send(null);
};

document.querySelector('#button1').addEventListener('click', loadCustomerData);
document.querySelector('#button2').addEventListener('click', loadCustomersData);
