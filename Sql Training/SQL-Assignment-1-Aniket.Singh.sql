-- create database
CREATE DATABASE BookStore15;
GO
USE BookStore15;
GO

-- book table
CREATE TABLE Book (
    BookID INT PRIMARY KEY,
    Title VARCHAR(255),
    Author NVARCHAR(255),
    PublicationYear INT,
    Price DECIMAL(10, 2)
);
GO

INSERT INTO Book VALUES
    (1, 'The Catcher in the Rye', 'J.D. Salinger', 2004, 19.99),
    (2, 'To Kill a Mockingbird', 'Harper Lee', 217, 24.99),
    (3, '1984', 'George Orwell', 2018, 15.99),
    (4, 'The Great Gatsby', 'F. Scott Fitzgerald', 2009, 29.99),
    (5, 'The Hobbit', 'J.R.R. Tolkien', 2011, 22.99),
	(6, 'Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', 1997, 29.99),
    (7, 'The Lord of the Rings', 'J.R.R. Tolkien', 2021, 34.99),
    (8, 'The Da Vinci Code', 'Dan Brown', 2022, 25.99),
    (9, 'Pride and Prejudice', 'Jane Austen', 2015, 18.99),
    (10, 'The Shining', 'Stephen King', 2005, 27.99);
GO

SELECT * FROM Book;
GO

-- agency table
CREATE TABLE Agency (
    AgencyID INT PRIMARY KEY,
    Name VARCHAR(255),
    Location NVARCHAR(255),
    ContactPerson NVARCHAR(255),
    Phone VARCHAR(15)
);
GO

INSERT INTO Agency VALUES
    (1, 'HSC Books', 'Nashik', 'John Doe', '1234567890'),
    (2, 'Nashik Bookstore', 'Nashik', 'Jane Smith', '9876543210'),
    (3, 'Book Haven', 'Mumbai', 'Bob Johnson', '5551234567'),
    (4, 'Readers Paradise', 'Pune', 'Alice Brown', '7778889999'),
    (5, 'Book World', 'Thane', 'David White', '1112223333'),
	(6, 'Book Emporium', 'Agra', 'Eva Green', '4445556666'),
    (7, 'Pages & More', 'New Delhi', 'Tom Wilson', '7777777777'),
    (8, 'Novel Nook', 'Pune', 'Sara Miller', '8888888888'),
    (9, 'Literary Lounge', 'Nashik', 'Michael Brown', '9999999999'),
    (10, 'Bookshelf Boutique', 'Nashik', 'Emma Davis', '1239876543');
GO

SELECT * FROM Agency;
GO

-- declare variables
DECLARE @bookCount INT;
SELECT @bookCount = COUNT(*) FROM Book;
SELECT @bookCount AS BookCount;
GO

DECLARE @lowCostBooks INT;
SELECT @lowCostBooks = COUNT(*) FROM Book WHERE Price < 20.00;
SELECT @lowCostBooks AS LowCostBooks;
GO

DECLARE @latestYear INT;
SELECT @latestYear = MAX(PublicationYear) FROM Book;
SELECT @latestYear AS LastYear;
GO

DECLARE @agencyCount INT;
SELECT @agencyCount = COUNT(*) FROM Agency;
SELECT @agencyCount AS AgencyCount;
GO

-- select queries
SELECT Title, Author, PublicationYear FROM Book WHERE Price > 20.00;
GO

SELECT Name, ContactPerson FROM Agency WHERE Location = 'Nashik';
GO
