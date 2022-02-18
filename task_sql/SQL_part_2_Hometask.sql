--Part 2
-- 1) Clone data from the Shippers table to the NewShippers table.
-- table was created before request 
  
  INSERT INTO NewShippers  
  SELECT * FROM Shippers;

-- 2) Get the list of suppliers which are related to each product name which has price greater than or equal 15$.

SELECT DISTINCT s.SupplierID, s.ContactName, p.UnitPrice 
FROM suppliers s
JOIN products p ON p.SupplierID = s.SupplierID 
WHERE p.UnitPrice >= 15
GROUP BY p.ProductID 
 
-- ( Which information about supplier will be present in result set is optional)

/* 3) Get the list of total quantities of ordered products which consists of: 
 total quantity ordered in Germany and the total quantity of products ordered in Sweden. (Result should contain 2 rows)*/

SELECT orders.ShipCountry AS COUNTRY, COUNT(orders.ShipCountry) AS TOTAL_QUANTITY
FROM `orders`
WHERE orders.ShipCountry IN ("Germany", "Sweden")
GROUP BY orders.ShipCountry;

-- 4) Find the list of different countries in Employees and Customers tables.
SELECT c2.Country
FROM   customers c2 
INNER JOIN employees e2 ON c2.Country != e2.Country 
GROUP BY c2.Country
-------------------------------------------------
SELECT c.country
FROM (
 SELECT IF(c.Country IN (
         SELECT e.Country
        FROM employees e
        GROUP BY e.Country), NULL, c.Country) as country
  FROM customers c
 GROUP BY c.Country
 ) c
WHERE c.Country IS NOT NULL;

 -- 5) Find the list of the same Postal Codes between Suppliers and Customers tables.

SELECT customers.PostalCode
FROM customers AS customers
INNER JOIN suppliers AS suppliers ON customers.PostalCode = suppliers.PostalCode
ORDER BY customers.PostalCode;

 -- 6) Find the top Region, City and Country from which sales specialists were hired (means who sold the biggest quantity of products).

SELECT e.Region, e.City, e.Country
    FROM 
          (SELECT order_day, max(quantity) as top_quantity
           from employees e 
           group by order_day) a
    inner join
         (select order_day, product_id, quantity*price as sales
          from ordr) b
    on a.order_day = b.order_day and a.sales = b.sales;
   
   Select a.order_day, b.product_id, a.sales 
    from  
          (select order_day, max(quantity*price) as sales
           from ordr
           group by order_day) a
    inner join
         (select order_day, product_id, quantity*price as sales
          from ordr) b
    on a.order_day = b.order_day and a.sales = b.sales;

-- 7) Get two lists of products: with a price < 50.00 with a discountinued flag and < 50  without a discountinued flag.
-- 2 lists of product

SELECT (SELECT GROUP_CONCAT(p.ProductName)
        FROM products p
        WHERE p.UnitPrice < 50
        AND p.Discontinued = 1) discountedList,
              (   SELECT GROUP_CONCAT(p2.ProductName)
                  FROM products p2
                  WHERE p2.UnitPrice < 50
                  AND p2.Discontinued = 0) nonDiscountedList;
 
-- 8) Create new table NewProducts based on the Products table with only discountinued products. Compare data sets between Products and NewProducts tables. 
-- (Check that only discountinued products are inserted).

CREATE table newproductstable AS (
SELECT productid, productname, supplierid, categoryid, Discontinued
FROM products where Discontinued > 0;
);

SELECT productid, productname, discontinued from newproductstable; 

-- The 9th query is optional 
-- Get the list of orders, where a required date is bigger than the Shipped date ( compare in days) and Ship Region is not specified.
SELECT *
FROM `orders`
WHERE DAY(RequiredDate) > DAY(ShippedDate) AND ShipRegion IS NULL;

 
