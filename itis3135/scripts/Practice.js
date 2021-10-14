var $ = function(id) 
{
	return document.getElementById(id);
};

window.onload = function() 
{
	let order = [];

	//add onclick event handler for each image
	const images = document.getElementsByTagName('img');
	// for click event add item to order and update total
	for (let i = 1; i < images.length; i++) 
	{
		images[i].onclick = e => 
		{ 
			e.preventDefault();
			addItem(images[i].alt, order);
		};
	}

	document.getElementById('clear_order').onclick = e => 
	{
		e.preventDefault();
		order = [];
		displayResults(order);
	}
	document.getElementById('place_order').onclick = e =>
	{
		e.preventDefault();
		if (order.length > 0) 
		{
			alert(`Your order will be ready shortly. Please pay $${ calculateTotal(order) } at the counter.`);
			order = [];
			displayResults(order);
		}
	}

	// display order and total
	displayResults(order);
	
		
}; // end onload

function addItem(item, order) 
{
	const espresso = 
	{
		name: 'Espresso',
		price: 1.95,
		details: 'Delicious esspresso. Wanna try it?'
	}
	const cappuccino = 
	{
		name: 'Cappuccino',
		price: 3.45,
		details: 'Delicious Cappuccino!'
	}

	if (item.startsWith('e')) 
	{
		order.push(espresso);
	}
	if(item.startsWith('c')) 
	{
		order.push(cappuccino);
	}

	displayResults(order);
}

function displayOrder(order) 
{
	let html = '';
	for (let i = 0; i < order.length; i++) 
	{
		html += `<p>$${ order[i].price } - ${ order[i].name } - ${ order[i].details }<p>\n`;
	}

	document.getElementById('order').innerHTML = html;
}

function displayResults(order) 
{
	displayOrder(order);
	displayTotal(order);
}

function calculateTotal(order) 
{
	let total = 0;
	for (let i = 0; i < order.length; i++) 
	{
		total += order[i].price;
	}

	return total.toFixed(2);
}

function displayTotal(order) 
{
	document.getElementById('total').innerHTML = `<em>$${ calculateTotal(order) }</em>`;
}