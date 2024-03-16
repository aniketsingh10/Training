-- create database
CREATE DATABASE Assignment_Aniket;
GO
USE Assignment_Aniket;
GO

-- department table
CREATE TABLE Department(
	DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50),
    Location NVARCHAR(50),
    DeanName VARCHAR(50),
    Courses INT
);
GO

INSERT INTO Department VALUES 
	(1, 'Computer Science', 'Annexe 1', 'Rupali Deshmukh', 5),
	(2, 'Mathematics', 'Main Building', 'Rohit Patil', 3),
	(3, 'Physics', 'Annexe 2', 'Suraj Golvad', 4);
GO

-- teacher table
CREATE TABLE Teacher (
    TeacherID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT FOREIGN KEY REFERENCES Department(DepartmentID),
    HireDate DATE,
    Salary DECIMAL(10, 2)
);
GO

INSERT INTO Teacher VALUES 
	(101, 'Alenna', 'Johnson', 1, '2020-01-15', 60000),
	(102, 'Mene', 'Shilpa', 2, '2018-05-20', 55000),
	(103, 'Shreyas', 'Pathak', 1, '2019-08-10', 69000),
	(104, 'Sahil', 'Tatiya', 3, '2019-08-10', 62000);
GO

-- student table
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(100),
    DepartmentID INT FOREIGN KEY REFERENCES Department(DepartmentID),
    EnrollmentDate DATE,
    GPA DECIMAL(3, 2)
);
GO

INSERT INTO Student VALUES
	(201, 'Anjali Bhawari', 1, '2021-02-28', 9.5),
	(202, 'Abhishek Patil', 1, '2021-02-28', 8.5),
	(203, 'Prachi Potkhule', 2, '2020-09-10', 9.2),
	(204, 'Vinay Chopda', 3, '2022-01-05', 7.8),
	(205, 'Suhaan Bhandary', 1, '2021-02-28', 8.5),
	(206, 'Rakhi Bhagwat', 3, '2022-01-05', 6.8),
	(207, 'Ankita Sinkar', 3, '2022-01-05', 7.8);
GO

SELECT * FROM Department;
GO
SELECT * FROM Teacher;
GO
SELECT * FROM Student;
GO

-- aggregate functions
SELECT COUNT(TeacherID) AS TotalTeachers FROM Teacher;
GO
SELECT AVG(GPA) AS AverageGPA FROM Student;
GO
SELECT SUM(Salary) AS TotalSalary FROM Teacher;
GO

-- group teachers by department and show average salary 
SELECT DepartmentID, AVG(Salary) AS AverageSalary
FROM Teacher
GROUP BY DepartmentID
HAVING AVG(Salary) > 60000;
GO

-- predefined functions
SELECT CONCAT(FirstName, ' ', LastName) AS Full_Name FROM Teacher;
GO
SELECT UPPER(DeanName) AS Uppercase_Names FROM Department;
GO
SELECT LOWER(StudentName) AS Lowercase_Names FROM Student;
GO
SELECT LEN(DepartmentName) AS Name_Length FROM Department;
GO
SELECT LEFT(FirstName, 3) AS Left_Chars FROM Teacher;
GO
SELECT RIGHT(FirstName, 3) AS Right_Chars FROM Teacher;
GO
SELECT SUBSTRING(DepartmentName, 1, 3) AS Substring_Dept FROM Department;
GO
SELECT LTRIM(StudentName) AS Ltrim_Name FROM Student;
GO
SELECT RTRIM(StudentName) AS Rtrim_Name FROM Student;
GO
SELECT ROUND(GPA, 1) AS New_GPA FROM Student;
GO
SELECT REVERSE(StudentName) AS Reverse_Name FROM Student;
GO
