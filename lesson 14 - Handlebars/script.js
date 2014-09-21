var data = {
	languages: [
		{name: 'JavaScript', year: '1995'},
		{name: 'Ruby', year: '1993'},
		{name: 'Python', year: 'late 1980s'},
		{name: 'C', year: '1973'}
	],
	type: "programming languages"
}

Handlebars.registerHelper("formatLanguage", function(language){
	return '<code>' + language + '</code>'
});

Handlebars.registerHelper("list", function(items, options){
	var out = "<ul>";
	for (var i = 0; i < items.length; i++) {
		out += "<li>" + options.fn(items[i]) + "</li>";
	}
	return out += "</ul>";
});


var html = Handlebars.templates['languages.tpl'];
$('#languages').html(html(data));