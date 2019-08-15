# Flights
# lab part 1
Using Express generator to create a mongoose-flights project.
Install node module after you cd in to the project.
config/database.js module that connects to the database named flights.
Make sure the module in server.js

Create a Flight Model with the following properties:

Property	Type	Validations	Default Value
airline	String	enum to include 'American', 'Southwest' & 'United'	n/a
flightNo	Number	Required
Between 10 and 9999	n/a
departs	Date	n/a	One year from date created

Implement the following User Stories: 

I want to view a list of all flights (index view) that displays each flight's airline, flight no., and departure date/time.

I want to create flights by entering the information on a page (new view) that has a form and submitting it.

Checkout the <input type="datetime-local"> to assist users in entering valid date/time values.

# lab part2
Created a schema used to embed review subdocuments in a movie document.

Created routes and a controller for the reviews data resource.

Created UI for creating and displaying the reviews on the show view of a movie.

Wrote a create action that retrieved a movie document, pushed the review (req.body) into the document's reviews array, saved the movie doc, and redirected back to the show view for that movie.

The goal of this lab is to add the ability to specify the airport and destinations for a flight document.

Styling is secondary, spend time on it only after the functionality has been implemented.

Create a destinationSchema that will provide the structure for destination subdocuments with the following properties:

Property	Type	Validations	Default Value
airport	String	enum to include
'AUS', 'DAL', 'LAX' & 'SEA'	n/a
arrival	Date	n/a	n/a
Add the following two additional properties to the Flight Model:

Property	Type	Validations	Default Value
airport	String	enum to include
'AUS', 'DAL', 'LAX' & 'SEA'	'SEA'
destinations	[destinationSchema]	n/a	n/a
Modify the form for inputting a flight to add a <select name="airport"> element so assign a value to the new flight document's airport property. Ensure that there are <option> elements for the four allowable airport codes ('AUS', 'DAL', etc.).

Implement the following User Story:
AAU, when viewing the list of flights, I want to click on a "detail" link displayed next to each flight to view all of the properties for that flight (show view)

Implement the following User Story:
AAU, when viewing the details page (show view) for a flight, I want to be able to add a destination for that flight, including its arrival date/time & one of the established airport codes

Implement the following User Story:
AAU, when viewing the details page (show view) for a flight, I want to see a list of that flight's destinations (airport & arrival)