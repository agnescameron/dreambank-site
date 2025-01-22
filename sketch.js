var container = document.getElementById('dreambank-container')

function get_random(data) {
	return data[Math.floor(Math.random()*data.length)];
}

function filter_json(data, field, query) {
	var filtered_data = data.filter(el => {
		return el[field].includes(query)
	})
	return filtered_data
}

function make_page(data) {
	// new_data = filter_json(data, 'name', 'Barb')

	data.forEach(el => {
		console.log(el);
		container.innerHTML += "<li><b>" + el.name + "</b><p>" + el.report+ "</p></li>";
	})
}

fetch('./dreambank-sample.json')
	.then(result => result.json())
	.then(data => make_page(data))
