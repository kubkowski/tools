# a comment

# variables

num = 2

a = "apple"

person = 
	fullName:
		firstName: "John"
		lastName: "Doe"
	occupation: "Web Developer"

# arrays

array = [
	1
	2
	3
]

months = [1..12]

days = [31..27]

# functions

doublePlusOne = (num) -> 
	answer = num * 2 + 1
	"The answer is #{answer}"
doublePlusOne 4 

# conditionals

sunny = true
rain = false
snowy = true

showRainbow = -> "Look! There is a rainbow"

if sunny and rain
	showRainbow

if sunny is true or snowy is true
	"It's snowy or sunny"

# classes

class Food
	constructor: (@name)
	shoutout: ->
		"Lovely food!"

class Vegetables extends Food
	shoutout: ->
		"Lovely vegetables!"

# pattern matching

start = "Earth"
destination = "Moon"

[start, destination] = [destination, start]
