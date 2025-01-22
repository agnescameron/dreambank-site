var container = document.getElementById('dreambank-container')

function make_page(data) {
	data.forEach(entry => {
		console.log(entry);
		container.innerHTML += "<li><b>" + entry.name + "</b><p>" + entry.report+ "</p></li>";
	})
}

fetch('./dreambank-sample.json')
	.then(result => result.json())
	.then(data => make_page(data))
