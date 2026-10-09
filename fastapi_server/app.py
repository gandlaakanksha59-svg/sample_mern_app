from fastapi import FastAPI
from pydantic import BaseModel

class Student(BaseModel):
    stuname:str
    studept:str
    stuusername:str
    stupassword:str
    stuage:int
    stumarks:float

app=FastAPI()
#localhost:8000/getStudents
@app.get("/getStudents")
def get_students():
    return "Get Students method called"
#localhost:8000/addStudents
@app.post("/addStudent")
def add_student(stu: Student):
    return {"student_details":stu}  



#try two more routes
#updateStudent =>put &/deleteStudent =>delete
@app.put("/updateStudent")
def update_student():
    return "Update Student method called"

@app.delete("/deleteStudent")
def delete_student():
    return "Delete Student method called"

@app.get("/getParticularStudent/{id}")
def get_particular_student(id:int):
    return  {"userid": id}

#localhost:8000/filterdept?dept=CSE&marks=65
@app.get("/filterdept/")
def filter_dept(dept: str, marks: int):
    return {"department": dept, "marks": marks}