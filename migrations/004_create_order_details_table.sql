CREATE TABLE Order_Details (
  OrderID INT,
  ProductID INT,
  UnitPrice DECIMAL(10,2),
  Quantity INT,
  Discount FLOAT,
  PRIMARY KEY (OrderID, ProductID)
);
