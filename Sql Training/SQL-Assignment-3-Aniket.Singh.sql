-- create databse
CREATE DATABASE Assignment_Aniket;
USE Assignment_Aniket;

-- department table
CREATE TABLE Department(
	DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50),
    Location NVARCHAR(50),
    DeanName VARCHAR(50),
    Courses INT
);

INSERT INTO Department VALUES 
	(1, 'Computer Science', 'Annexe 1', 'Rupali Deshmukh', 5),
	(2, 'Mathematics', 'Main Building', 'Rohit Patil', 3),
	(3, 'Physics', 'Annexe 2', 'Suraj Golvad', 4);

-- teacher table
CREATE TABLE Teacher (
    TeacherID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT FOREIGN KEY REFERENCES Department(DepartmentID),
    HireDate DATE,
    Salary DECIMAL(10, 2)
);

INSERT INTO Teacher VALUES 
	(101, 'Alenna', 'Johnson', 1, '2020-01-15', 60000),
	(102, 'Mene', 'Shilpa', 2, '2018-05-20', 55000),
	(103, 'Shreyas', 'Pathak', 1, '2019-08-10', 69000),
	(104, 'Sahil', 'Tatiya', 3, '2019-08-10', 62000);

-- student table
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(100),
    DepartmentID INT FOREIGN KEY REFERENCES Department(DepartmentID),
    EnrollmentDate DATE,
    GPA DECIMAL(3, 2)
);

INSERT INTO Student VALUES
	(201, 'Anjali Bhawari', 1, '2021-02-28', 9.5),
	(202, 'Abhishek Patil', 1, '2021-02-28', 8.5),
	(203, 'Prachi Potkhule', 2, '2020-09-10', 9.2),
	(204, 'Vinay Chopda', 3, '2022-01-05', 7.8),
	(205, 'Suhaan Bhandary', 1, '2021-02-28', 8.5),
	(206, 'Rakhi Bhagwat', 3, '2022-01-05', 6.8),
	(207, 'Ankita Sinkar', 3, '2022-01-05', 7.8);

SELECT * FROM Department;
SELECT * FROM Teacher;
SELECT * FROM Student;

--  aggregate functions
SELECT COUNT(TeacherID) AS TotalTeachers FROM Teacher;
SELECT AVG(GPA) AS AverageGPA FROM Student;
SELECT SUM(Salary) AS TotalSalary FROM Teacher;

-- group teachers by department and show average salary 
SELECT DepartmentID,AVG(Salary) AS AverageSalary
FROM Teacher
GROUP BY DepartmentID
HAVING AVG(Salary)>60000;

-- predefined functions
SELECT CONCAT(FirstName, ' ', LastName) AS Full_Name FROM Teacher;

SELECT UPPER(DeanName) AS Uppercase_Names FROM Department;

SELECT LOWER(StudentName) AS Lowercase_Names FROM Student;

SELECT LEN(DepartmentName) AS Name_Length FROM Department;

SELECT LEFT(FirstName, 3) AS Left_Chars FROM Teacher;

SELECT RIGHT(FirstName, 3) AS Right_Chars FROM Teacher;

SELECT SUBSTRING(DepartmentName, 1, 3) AS Substring_Dept FROM Department;

SELECT LTRIM(StudentName) AS Ltrim_Name FROM Student;

SELECT RTRIM(StudentName) AS Rtrim_Name FROM Student;

SELECT ROUND(GPA,1) AS New_GPA FROM Student;

SELECT REVERSE(StudentName) AS Reverse_Name FROM Student;
