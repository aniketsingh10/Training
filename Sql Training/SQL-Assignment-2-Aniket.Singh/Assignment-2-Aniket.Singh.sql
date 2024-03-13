-- create database
CREATE DATABASE HospitalManagement15;
USE HospitalManagement15;

-- create tables
CREATE TABLE Hospital (
	Hospital_ID int PRIMARY KEY,
	Hospital_Name nvarchar(100) NOT NULL,
	Hospital_Location varchar(50) NOT NULL,
	Contact_Number varchar(15) NOT NULL,
	Specialization varchar(max) NOT NULL,
	Hospital_Time varchar(30),
	Total_Doctors int
);

CREATE TABLE Patient (
	Patient_ID int PRIMARY KEY,
	FirstName nvarchar(50) NOT NULL,
	LastName nvarchar(50) NOT NULL,
	Age int,
	DOB date,
	Gender varchar(10) NOT NULL,
	ContactNumber nvarchar(15) NOT NULL,
	Address nvarchar(max) NOT NULL,
	MedicalHistory nvarchar(max),
	RegistrationDate date NOT NULL
);

CREATE TABLE Appointment (
	Appointment_ID int PRIMARY KEY,
	Patient_ID int NOT NULL,
	Hospital_ID int NOT NULL,
	AppointmentDate datetime NOT NULL,
	Doctor varchar(100),
	Diagnosis nvarchar(MAX)
);


SELECT * FROM Hospital;
SELECT * FROM Patient;
SELECT * FROM Appointment;

	