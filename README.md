# Flights
# lab part 1
Using Express generator to create a mongoose-flights project.
Install node module after you cd in to the project.
config/database.js module that connects to the database named flights.
Make sure the module in server.js

- [] Create a Flight Model with the following properties:

Property	Type	Validations	Default Value
airline	String	enum to include 'American', 'Southwest' & 'United'	n/a
flightNo	Number	Required
Between 10 and 9999	n/a
departs	Date	n/a	One year from date created

Implement the following User Stories: 

- [] I want to view a list of all flights (index view) that displays each flight's airline, flight no., and departure date/time.

- [] I want to create flights by entering the information on a page (new view) that has a form and submitting it.

Checkout the <input type="datetime-local"> to assist users in entering valid date/time values.

# lab part2
- [] Created a schema used to embed review subdocuments in a movie document.

- [] Created routes and a controller for the reviews data resource.

- [] Created UI for creating and displaying the reviews on the show view of a movie.

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
- [] AAU, when viewing the details page (show view) for a flight, I want to be able to add a destination for that flight, including its arrival date/time & one of the established airport codes

Implement the following User Story:
- [] AAU, when viewing the details page (show view) for a flight, I want to see a list of that flight's destinations (airport & arrival)

# Goal
The goal of this lab is to practice referencing related data.

You will add the ability to create tickets for a given flight in the mongoose-flight project.

The relationship between the data entities is:
Flight --< Ticket
A flight has many tickets

Styling is secondary, spend time on it only after the functionality has been implemented.

# lab part 3

# Exercises
Create a ticketSchema that will be compiled into a Ticket Model with the following properties:

Property	Type	Validations	Default Value
seat	String	Must be 'A1' thru 'F99' (see hints)	n/a
price	Number	Minimum of 0	n/a
flight	ObjectId	Include ref: 'Flight' to enable population	n/a
Hints
Notice how we don't have to use an array to implement the 1:M relationship between Flight and Ticket. Instead, referencing the ObjectId of the flight in the flight property of a ticket enables the relationship. FYI, to implement this 1:M relationship, we could have put a tickets array on the Flight model instead, or in addition to the flight property on Ticket. Be aware however, that M:M relationships would always require the use of an array property.

Define the seat property as follows:
seat: {type: String, match: /[A-F][1-9]\d?/} - that's what we call a regular expression that's being assigned to the match validator. Now for the best part, which just might blow your mind! You ready? Are you sure? Here it is... HTML <input> tags have a pattern attribute that accept a regex pattern; and if what's typed in the <input> doesn't match the pattern, the form can't be submitted! Here's what your <input> should look like for entering the seat:

<input name="seat" required pattern="[A-F][1-9]\d?">
That regex pattern will match the following characters:

An A thru F character, followed by
a 1 thru 9 character, followed by
zero or one 0 thru 9 character.
We'll cover more about regular expressions later in SEI, but this opportunity to preview them was too hard to pass up! Combined with the HTML pattern attribute, they provide an excellent way to perform client-side validation of inputs.

Modify the show view for a flight to render, as you see fit (table, grid, etc.), a list of tickets that have been created for that flight.

# Hints
To show a list of tickets that belong to a flight, you're going to have to make a separate query (inside of the callback of the Flight.findById call) to retrieve the flights as follows:

Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
        ...
    });
});
Be sure to pass both flight & tickets to the flight's show view so that they can be rendered.

Note that there's no reason to populate the flight property because in this case, you already have obtained the flight using findById.

For future reference, here's how to populate a ticket's flight property:

Ticket.findById(req.params.id)
.populate('flight')
.exec(function(err, ticket) {...
Also on the flight's show view, display a New Ticket link (perhaps styled to look like a button) that when clicked, shows the ticket's new view used to create a ticket for the flight. When the form is submitted, create the ticket on the server and redirect back to the flight's show view.

# Hints
To display the view/form for adding a ticket, the path of the href for the New Ticket link will need to include the flight's _id. The path should match this route on the server: /flights/:id/tickets/new. The req.params.id can now be passed to the tickets/new.ejs and used for the ticket form's action attribute...

If you use the "proper" route for the ticket form's action attribute, the ticketsCtrl.create action will have access to the _id of the flight the ticket is being created for.

In the controller action, there will not be a flight property on the req.body object. You must add that property yourself before using req.body to create the ticket. Failure to do so will result in the ticket being created without a flight property that references the flight it belongs to - so if newly added tickets are not showing up with the flight, this is probably the cause.

# More Hints
Learn it, know it, live it... When adding functionality to the app:
Identify the "proper" Route (Verb + Path)
Create the UI that issues a request that matches that route.
Define the route on the server and map it to a controller action.
Code and export the controller action.
