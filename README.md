# Reelo_QuestionPaper Generator

The given repository contains the implementation of a question paper generator that generates the question paper based on the total marks and the distribution of marks based on Difficulty.

Project Link: https://reelo-question-paper.vercel.app/

## Features

1. An interactive UI where user can fill the total marks and marks distribution of easy, medium and hard level.
![Generate Paper UI](https://github.com/mihiraswal0/Reelo_QuestionPaper/blob/main/images/Screenshot%20(1156).png)
<br><br>

2.The required Question paper displayed in the form of table for better undestanding.
![paper table](https://github.com/mihiraswal0/Reelo_QuestionPaper/blob/main/images/Screenshot%20(1157).png)
<br><br>

3.A page to add question to Question store.
![add page](https://github.com/mihiraswal0/Reelo_QuestionPaper/blob/main/images/Screenshot%20(1158).png)
<br><br>

4.A button added to get all Question in the Store.
![all question](https://github.com/mihiraswal0/Reelo_QuestionPaper/blob/main/images/Screenshot%20(1159).png)
<br><br>

## Edge Cases Handled

- An alert stating "No Paper exist" will be generated if the required  distribution paper doesnt exist in the store.
- User will get error if the sum of distribution will not be equal to total Marks.
- Error will be displayed if user will enter any unwanted value.
- Duplicate question cannot be added.
- Errors if there is some missing fields.

### Technologies
- Frontend: React Js
- Backend: Node js,Express js
- Database: Mongo Db
### Prerequisites

You need to have `Node.js` and `npm` installed on your machine.

## Installing

1. Clone the repository.
```
git clone https://github.com/mihiraswal0/Reelo_QuestionPaper.git
```
2.Move to client directory
```
cd client
```
3.Install the required dependencies
```
npm install
```
4.Run the client part
```
npm start
```
5.Move to server directory
```
cd ../server
```
6.Install the required dependencies
```
npm install
```
4.Run the server part
```
npm start
```
5.Url for the website
```
http:\\localhost:3000
```
### Assumptions
- It is assumed easy question holds 1 marks.
- It is assumed medium question hold 5 marks.
- It is assumed hard question hold 10 marks.
- Make sure sum of distribution to equal to total marks.

### Future Improvments:
- Generating papers based on the topics or subjects.
- Generating paper with variable question marks.





