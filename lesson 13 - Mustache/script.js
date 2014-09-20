var data = {
	languages: [
		{name: 'JavaScript', year: '1995', developer: {firstName: 'Brendan', lastName: 'Eich'}},
		{name: 'Ruby', year: '1993', developer: {firstName: 'Matz'}},
		{name: 'Python', year: 'late 1980s'},
		{name: 'C', year: '1973', developer: {firstName: 'Dennis', lastName: 'Ritchie'}}
	]
}


var template = $("#languagesTpl").html();
var partials = {
	developer: '<em>{{firstName}} {{lastName}}</em>'
}
var html = Mustache.to_html(template, data, partials);
$('#languages').html(html);