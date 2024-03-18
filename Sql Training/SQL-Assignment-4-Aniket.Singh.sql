-- create database
CREATE DATABASE Assignment4_Aniket;
GO
USE Assignment4_Aniket;
GO

-- creating temporary #tables
-- department table
CREATE TABLE #Department(
	DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50),
    Location NVARCHAR(50),
    DeanName VARCHAR(50),
    Courses INT
);
GO

INSERT INTO #Department VALUES 
	(1, 'Computer Science', 'Annexe 1', 'Rupali Deshmukh', 5),
	(2, 'Mathematics', 'Main Building', 'Rohit Patil', 3),
	(3, 'Physics', 'Annexe 2', 'Suraj Golvad', 4);
GO

SELECT * FROM #Department;
GO

-- teacher table

CREATE TABLE #Teacher (
    TeacherID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    HireDate DATE,
    Salary DECIMAL(10, 2)
);
GO

INSERT INTO #Teacher VALUES 
	(101, 'Alenna', 'Johnson', 1, '2020-01-15', 60000),
	(102, 'Mene', 'Shilpa', 2, '2018-05-20', 55000),
	(103, 'Shreyas', 'Pathak', 1, '2019-08-10', 69000),
	(104, 'Sahil', 'Tatiya', 3, '2019-08-10', 62000),
	(105, 'Riya', 'Kumar', 2, '2020-02-28', 58000),
    (106, 'Aditya', 'Singh', 3, '2021-01-10', 63000),
    (107, 'Neha', 'Gupta', 1, '2017-06-15', 57000),
    (108, 'Raj', 'Patil', 2, '2019-11-20', 60000);
GO

SELECT * FROM #Teacher;
GO

-- student table
CREATE TABLE #Student (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(100),
    DepartmentID INT,
    EnrollmentDate DATE,
    GPA DECIMAL(3, 2)
);
GO

INSERT INTO #Student VALUES
	(201, 'Anjali Bhawari', 1, '2021-02-28', 9.5),
	(202, 'Abhishek Patil', 1, '2021-02-28', 8.5),
	(203, 'Prachi Potkhule', 2, '2020-09-10', 9.2),
	(204, 'Vinay Chopda', 3, '2022-01-05', 7.8),
	(205, 'Suhaan Bhandary', 1, '2021-02-28', 8.5),
	(206, 'Rakhi Bhagwat', 3, '2022-01-05', 6.8),
	(207, 'Ankita Sinkar', 3, '2022-01-05', 7.8);
GO

SELECT * FROM #Student;
GO


-- create temporary table using select

SELECT *
INTO #DepartmentOneTeachers
FROM #Teacher
WHERE DepartmentID = 1;
GO

SELECT * FROM #DepartmentOneTeachers;
GO

-- CTE - Find second highest salary of teacher from each Department

WITH TeacherSalaries AS (
    SELECT 
        *,
        ROW_NUMBER() OVER (PARTITION BY DepartmentID ORDER BY Salary DESC) AS RowNum
    FROM 
        #Teacher
)
SELECT 
    DepartmentID, 
    TeacherID, 
    Salary 
FROM 
    TeacherSalaries 
WHERE 
    RowNum = 2;
GO

-- Fetch All Teachers details with Department Name using INNER JOIN for all Departments.

SELECT 
    T.TeacherID, 
    T.FirstName,
	T.LastName, 
    D.DepartmentName
FROM 
    #Teacher T
INNER JOIN 
    #Department D ON T.DepartmentID = D.DepartmentID;


-- Fetch Teacher and Student details of last department using LEFT JOIN.

SELECT 
	T.TeacherID, 
    T.FirstName + ' ' + T.LastName AS TeacherName,  
    S.StudentID,
    S.StudentName,
	S.GPA
FROM 
	#Teacher T
LEFT JOIN 
	#Student S ON T.DepartmentID = S.DepartmentID
WHERE 
	T.DepartmentID = (SELECT MAX(DepartmentID) FROM #Department); -- to fetch the last department

