# book-record-management

This is an application called book-record-management/API

## Endpoints

## /users
POST: Create a new user
GET: Get all the list of the users

## /user/{id}
GET: Get a user by their ID
PUT: Update a user by ID
DELETE: Delete a user by their ID (Check if the user still has a issued book && is there any file to be collected from the user)

## /user/subscription-details/{id}
GET: Get user subscription details
1. Date of subscription
2. Valid till ?
3. Fine if any ?

## /books
GET: Get all the books
POST: Update a book by {id}

## /books/{id}
GET: Get a book by it's {id}
PUT: Update a book by ID

## /books/issued/by-user
GET: Get all the issued books here

## /books/issued/withFine
GET: Get all the books with Fine

## Subscription Types
Basic (3 months)
Standerd (6 months)
Premium (12 months)

If the user has an issued book and issued book is to be returned at 35/12/2022
and user missed the date of submission, then he gets the fine of Rs.50/-

If the user has an issued book and issued book is to be returned at 35/12/2022
and user missed the date of submission also if user's subscription is expires too, he gets the fine of Rs.150/-



<!-- MVC Artitecture
Modal(Structure), View and Controller
Modal & Controller related to backend
View is related to the view i.e. UI
 -->