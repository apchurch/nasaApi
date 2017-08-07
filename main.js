
var ourRequest = new XMLHttpRequest()
ourRequest.open('GET', 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-23&end_date=2017-07-29&api_key=Lhfmo5GJFKkymB61crhYsjHIUjNc8Eq8iuFBr4pn')
ourRequest.onload = function() {
	var obj = JSON.parse(ourRequest.responseText)
	console.log(obj)


}	
ourRequest.send()


// .then(function(data){		
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
// $(function() {
// 	var $Object = $('#Object')
// 	var $name = $('#name')
// 	var $miles_per_hour = $('miles_per_hour')
// 	$.ajax( {
// 		type: 'Get',
// 		url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-23&end_date=2017-07-29&api_key=Lhfmo5GJFKkymB61crhYsjHIUjNc8Eq8iuFBr4pn',
// 		ObjectType: "text",
// 		success: function(Object) {
// 			$.each(Object, function(i, asteroid) {
// 				$Object.append('<li>name: '+ asteroid.name +', miles_per_hour: '+ asteroid.miles_per_hour +'</li>')
				
// 			})
// 		},
// 		error: function() {
// 			alert('error loading asteroids')
// 		}
		

// 	})
// 	$('#add-asteroid').on('click', function() {
// 		var asteroid = {
// 			name: $name.val(),
// 			miles_per_hour: $miles_per_hour.val(),
// 		}
// 		$.ajax({
// 			type: 'POST',
// 			url: '/backEnd',
// 			data: asteroid,
// 			success: function(newAsteroid) {
// 				$Object.append('<li>name: '+ newAsteroid.name +', miles_per_hour: '+ newAsteroid.miles_per_hour +'</li>')


// 			}
// 		})


// 	})
// })

// })
