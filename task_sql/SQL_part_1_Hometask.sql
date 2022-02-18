-- Part 1

-- 1)Update the Employees table, so it contains the HireDate values from 2017 till the current (2019) year. 
UPDATE employees
SET HireDate = date_sub(HireDate, INTERVAL 1 Year) or date_add
WHERE HireDate IS NOT NULL 

-- 2) Delete records from the Products table which weren't ordered (from another table)
SET FOREIGN_KEY_CHECKS=0;
DELETE FROM products 
WHERE ProductID NOT IN 
(SELECT od.ProductID FROM `order details` od)  

-- rewiev 2 + I suppose you can use a simpler query like 

DELETE FROM `order details`

WHERE ProductID IN (SELECT ProductID FROM `products` WHERE UnitsOnOrder = 0);.

-- 3) Get the list of data about employees: First Name, Last Name, Title, Hire Date who was hired this year (2019).
SELECT FirstName, LastName, Title, HireDate FROM employees 
WHERE HireDate BETWEEN '2019-01-01' AND '2019-12-31'

-- 4) Find quantity of employees in each department. Note: Departments is the same as a title in the Employees table 

CREATE TABLE departments (
  `EmployeeID` INT NOT NULL,
  `DepartmentID` INT NOT NULL,
  PRIMARY KEY (`EmployeeID`))
  
INSERT INTO departments (EmployeeID, DepartmentID) 
VALUES (1, 1),(2, 2),(3, 3),(4, 4),(5, 5),(6, 5),(7, 5),(8, 5),(9, 5),(10, 4),(11, 4),(12, 4),(13, 1),(14, 1),(15, 1)

SELECT * FROM departments d 

SELECT e.EmployeeID, COUNT(*) as employees_count, d.DepartmentID 
FROM Employees e 
INNER JOIN departments d 
ON e.EmployeeID = d.DepartmentID
GROUP BY d.DepartmentID 

-- 5) Get the list of suppliers, which are located in USA and have a specified region.
SELECT * FROM suppliers 
WHERE Country = 'USA' AND Region IS NOT NULL 

-- 6) Get the amount of products that were delivered by each supplier (company), which have a discount from the Unit Price more than 10%. 
SELECT p.product_id, COUNT(*) as products_amount, s.discount_rate
FROM Product p
INNER JOIN Supplier s 
ON p.product_id = s.discount_rate
HAVING COUNT(*) > 10
GROUP BY product_id
ORDER BY DESC;

-- Where record are represented from the biggest to lowest discount.

-- 7) Get the top five product categories with the list of the most buyable products in Germany.

SELECT p.CategoryID, GROUP_CONCAT(p.ProductName SEPARATOR ', ') productList, COUNT(o.OrderID) orderCount
FROM products p
INNER JOIN `order details` od
ON od.ProductID = p.ProductID
INNER JOIN orders o
ON o.OrderID = od.OrderID
INNER JOIN customers c
ON o.CustomerID = c.CustomerID
AND c.Country = 'Germany'
GROUP BY p.CategoryID
ORDER BY orderCount DESC
LIMIT 5;

-- 8) Get the First Name, Last Name and Title of Managers and their subordinates.

-- 9) Get the Firts Name, Lastn Name, Title of Sales who has the least amount of orders. (Amount of sold products should be also in the result set).

