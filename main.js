// $.fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-23&end_date=2017-07-29&api_key=Lhfmo5GJFKkymB61crhYsjHIUjNc8Eq8iuFBr4pn').then(function(data){
// 	console.log(data)
// if(is_potentially_hazardous_asteroid = true) {
// 	return Object
// 	}
// })
// function createNode(element) {
// 	return document.createElement(element)
// }
// function append(parent, el) {
// 	return parent.appendChild(el)
// }
// const ul = document.getElementById('asteroids')
// const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-23&end_date=2017-07-29&api_key=Lhfmo5GJFKkymB61crhYsjHIUjNc8Eq8iuFBr4pn'
// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
// 	let asteroids = data.results
// 	return function asteroids(asteroid) 
// 		let li = createNode('li'),
// 		img = createNode('img'),
// 		span = createNode('span')
		


// })
$(function() {
	var $data = $('#data')
	$.ajax( {
		type: 'Get',
		url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-23&end_date=2017-07-29&api_key=Lhfmo5GJFKkymB61crhYsjHIUjNc8Eq8iuFBr4pn',
		success: function(data) {
			$.each(data, function(i, asteroid) {
				$data.append('<li>first asteroid</li>')
			})
		}
		

	})
})
