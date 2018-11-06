# Coding Test #

This is a project built with the intention of serving as a pair coding test
for a job interview. By pair coding, rather than focusing of the potential
of a person to accomplish specific tasks on himself without knowledge about
the specific workflow followed, you can focus on the approach to problems,
communication skills, multi-tool usage and the infinite array of human
factors that may make somebody more or less suitable for a specific position
or role even without the best match of skills.

## Technical Challenges ##

The different technical difficulties that this repo tries to propose relate
to:

- git skills
- TDD
- naming convention / elections
- documentation writting
- code reviewing
- angular


## Building the repo ##

This is an angular application. It has been set up using the angular
[quickstart guide](https://angular.io/guide/quickstart) in a windows
environment (just to make it awkward).

The versions used:

* node 10.11.0,
* npm  6.4.1
* yarn v1.10.1


## Exercises

- Given the current state of the application, write a new component 
  that using [ngx-datatable](https://github.com/swimlane/ngx-datatable) 
  displays a list of notes.
 * The notes are identified by a timestamp but also contain the body and a title that always 
   is a truncation of the body.
 * When there are no notes, a message should be displayed saying there are no notes.
 * The notes must ONLY be allowed to be ordered by date in a descending fashion.

- Implement a service that will use the browser memory to store / retrieve and update the notes.

- Add a new button to the notes list that will save the notes stored in the local cache to a backend.

- Write (or describe in pseudocode) an acceptance test for a node backend for the POST and GET methods of an endpoint that would process the previous information.


## Expectations

- Commits at the end of every phase
- Tests for public methods
- No unnecessary comments
- Documentation for the methods
- Linting


## Additional questions

- What security concerns does the architecture of the application currently hold.
- What would be a possible solution to allow multiple users to have separate notes on the same browser.
- Possible solutions to enabling push notifications.
