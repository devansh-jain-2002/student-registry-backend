# student-registry-backend  
## PClub secy task 4  
This app requires a local mongodb server hosted on mongodb://127.0.0.1:27017  
`git clone https://github.com/devansh-jain-2002/student-registry-backend.git`  
`cd student-registry-backend`  
`npm install`  
`npm run start`  
The app will run on localhost at port 3000  
To send requests to the app , it is recommended to use postman  
The app provides following functionalities:  
- Create Student :- `POST /students` with request body containing a JSON object of new student object   
- Filter Student(s) :- `GET /students` with request body containing a JSON object of filter parameters  
- Get Student with Roll :- `GET /students/<roll>`  
- Update Student :- `PATCH /students/<roll>` with request body containing a JSON object of updated paramaters  
- Delete Student :- `DELETE /students/<roll>`
- Get SG :- `GET /students/<roll>/sg`
- Get Bacchas :- `GET /students/<roll>/bacchas`
