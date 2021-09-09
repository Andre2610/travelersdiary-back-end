## **Traveler's Diary**

The idea behind this project is to give user's a platform to write their experiences while traveling by starting a trip and then make posts on that trip in a blog like style. Once the trip is over, the user can end the trip and all of the posts created during his/her trip will always remain grouped up. Once a user visits a trip, they will be able to read all the posts of that trip as well as check where the posts where made from, creating a sort of timeline of the trip.

## **Database**

Diagram of data models:
![Database-model](https://github.com/Andre2610/travelersdiary-front-end/blob/master/Project_Info/Database_Models.png?raw=true)

## **Endpoints**

| Method | Path           | Purpose                                                             | Required arguments                   |
| ------ | -------------- | ------------------------------------------------------------------- | ------------------------------------ |
| POST   | /auth/signup   | create a new user account, a token will be included in the response | email, password, firstName, lastName |
| POST   | /auth/login    | login with an existing user account, creating a token               | email, password                      |
| GET    | /auth/me       | fetch information of the user connected to the token in store       | none                                 |
| GET    | /trips         | fetch the data of all the trips                                     | none                                 |
| GET    | /trips/:id     | fetch all the data of a specific trip                               | id                                   |
| POST   | /trips/newtrip | create a new trip                                                   | tripTitle, startDate, userId, token  |
| PATCH  | /trips/endtrip | end the selected trip                                               | endData, tripId ,token               |
| POST   | /trips/newpost | create a new post on the selected trip                              | title, content, tripId, token        |

## **Front end repo**

For more information regarding **Traveler's Diary** please find the front end repo [HERE](https://github.com/Andre2610/travelersdiary-front-end)
