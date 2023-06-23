create Database HealthCareFinalDB



  CREATE TABLE Users (
    UserId INT PRIMARY KEY identity,
    Name VARCHAR(255),
    email VARCHAR(255),
    Password VARCHAR(255),
    cpassword VARCHAR(255)
);

CREATE TABLE Admin (
    AdminId INT PRIMARY KEY,
    Email VARCHAR(255),
    Password VARCHAR(255),
    Status VARCHAR(50)
);

drop table Admin

INSERT INTO Admin (AdminId, Email, Password, Status)
VALUES
    (1, 'Niteshrevankarspektra@gmail.com', 'Spektra@225597', 'offline'),
    (2, 'salonispektra@gmail.com', 'Saloni@1672', 'offline'),
    (3, 'azharspektra@gmail.com', 'azhar@123Spektra', 'offline');

select * from
 Orders
  -- Create the Categories table
  CREATE TABLE Categories (
      CategoryID INT PRIMARY KEY identity,
      CategoryName VARCHAR(255)
  );
  
  INSERT INTO Categories (CategoryName)
VALUES ('Painkillers');

INSERT INTO Categories (CategoryName)
VALUES ('Anti-inflammatories');

INSERT INTO Categories (CategoryName)
VALUES ('Blood Thinners');

INSERT INTO Categories (CategoryName)
VALUES ('Cough and Cold Medicines');

INSERT INTO Categories (CategoryName)
VALUES ('Antibiotics');


  -- Create the Medicines table
  CREATE TABLE Medicines (
      MedicineID INT PRIMARY KEY identity,
      CategoryID INT,
      Name VARCHAR(255),
      Price DECIMAL(10, 2),
      Quantity INT,
      ExpirationDate DATE,
      Seller VARCHAR(255),
      Description VARCHAR(255),
      Image NVARCHAR(MAX),
      FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
  );
--  ALTER TABLE Medicines
--ALTER COLUMN Image VARCHAR(255);
 Select * from Medicines

 --drop table Medicines

-- Inserting sample values into the Medicines table
INSERT INTO Medicines (CategoryID, Name, Price, Quantity, ExpirationDate, Seller, Description, Image)
VALUES (1, 'Ibuprofen', 9.99, 100, '2024-12-31', 'Pharmacy ABC', 'Relieves pain and reduces inflammation.', 'ibuprofen.jpg');

INSERT INTO Medicines (CategoryID, Name, Price, Quantity, ExpirationDate, Seller, Description, Image)
VALUES (2, 'Amoxicillin', 12.50, 50, '2023-10-15', 'Pharmacy XYZ', 'Treats bacterial infections.', 'amoxicillin.jpg');

INSERT INTO Medicines (CategoryID, Name, Price, Quantity, ExpirationDate, Seller, Description, Image)
VALUES (3, 'Multivitamin', 19.99, 200, '2025-06-30', 'Health Store ABC', 'Provides essential vitamins and minerals.', 'multivitamin.jpg');

INSERT INTO Medicines (CategoryID, Name, Price, Quantity, ExpirationDate, Seller, Description, Image)
VALUES (4, 'Loratadine', 7.99, 80, '2023-08-31', 'Pharmacy XYZ', 'Relieves allergy symptoms.', 'loratadine.jpg');

INSERT INTO Medicines (CategoryID, Name, Price, Quantity, ExpirationDate, Seller, Description, Image)
VALUES (5, 'Dextromethorphan', 8.50, 40, '2023-11-30', 'Pharmacy ABC', 'Relieves cough symptoms.', 'dextromethorphan.jpg');




--//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 CREATE TABLE Orders (

    OrderId INT PRIMARY KEY IDENTITY(1,1),
    UserId INT,
    FullName NVARCHAR(255),
    Email NVARCHAR(255),
    Phone NVARCHAR(20),
    Address NVARCHAR(255),
    City NVARCHAR(100),
    State NVARCHAR(100),
    Zip NVARCHAR(10),
    TotalAmount DECIMAL(10, 2),
    ShippingCharges DECIMAL(10, 2),
    OrderDate DATETIME
);

select * from Orders;

delete  from Orders where OrderId =1

  CREATE TABLE OrderItems (

    OrderItemId INT PRIMARY KEY IDENTITY(1,1),
    OrderId INT,
    MedicineId INT,
    Quantity INT,
    Price DECIMAL(10, 2),
    FOREIGN KEY (OrderId) REFERENCES Orders(OrderId)

);


CREATE PROCEDURE InsertOrder
    @UserId INT,
    @FullName NVARCHAR(255),
    @Email NVARCHAR(255),
    @Phone NVARCHAR(20),
    @Address NVARCHAR(255),
    @City NVARCHAR(100),
    @State NVARCHAR(100),
    @Zip NVARCHAR(10),
    @TotalAmount DECIMAL(10, 2),
    @ShippingCharges DECIMAL(10, 2),
    @OrderDate DATETIME,
    @OrderItems NVARCHAR(MAX)
AS
BEGIN
    DECLARE @OrderId INT;
    INSERT INTO Orders (UserId, FullName, Email, Phone, Address, City, State, Zip, TotalAmount, ShippingCharges, OrderDate)
    VALUES (@UserId, @FullName, @Email, @Phone, @Address, @City, @State, @Zip, @TotalAmount, @ShippingCharges, @OrderDate);
    SET @OrderId = SCOPE_IDENTITY();
    DECLARE @OrderItemsTable TABLE (
        MedicineId INT,
        Quantity INT,
        Price DECIMAL(10, 2)
    );
    INSERT INTO @OrderItemsTable
    SELECT * FROM OPENJSON(@OrderItems)
    WITH (
        MedicineId INT '$.MedicineId',
        Quantity INT '$.Quantity',
        Price DECIMAL(10, 2) '$.Price'
    );
    INSERT INTO OrderItems (OrderId, MedicineId, Quantity, Price)
    SELECT @OrderId, MedicineId, Quantity, Price
    FROM @OrderItemsTable;
END;



DECLARE @OrderItems NVARCHAR(MAX);
SET @OrderItems = N'[{"MedicineId": 1, "Quantity": 2, "Price": 10.00},
                     {"MedicineId": 2, "Quantity": 1, "Price": 15.00},
                     {"MedicineId": 3, "Quantity": 3, "Price": 5.00}]';
EXEC InsertOrder
    @UserId = 1,
    @FullName = 'Priya',
    @Email = 'Priya@gmail.com',
    @Phone = '987657654',
    @Address = '123 Main',
    @City = 'New York',
    @State = 'NY',
    @Zip = '10001',
    @TotalAmount = 45.00,
    @ShippingCharges = 5.00,
    @OrderDate = '2023-06-15T00:00:00',
    @OrderItems = @OrderItems;



	-- Stored procedure for adding a new category
CREATE PROCEDURE AddCategory
    @CategoryName VARCHAR(255)
AS
BEGIN
    INSERT INTO Categories (CategoryName)
    VALUES (@CategoryName)
END
GO
-- Stored procedure for adding a new medicine
CREATE PROCEDURE AddMedicine
    @CategoryID INT,
    @Name VARCHAR(255),
    @Price DECIMAL(10, 2),
    @Quantity INT,
    @ExpirationDate DATE,
    @Seller VARCHAR(255),
    @Description VARCHAR(255),
    @Image NVARCHAR(MAX)
AS
BEGIN
    INSERT INTO Medicines (CategoryID, Name, Price, Quantity, ExpirationDate, Seller, Description, Image)
    VALUES (@CategoryID, @Name, @Price, @Quantity, @ExpirationDate, @Seller, @Description, @Image)
END


--//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

CREATE PROCEDURE GetAllData
AS
BEGIN
    SELECT M.MedicineID, M.CategoryID, C.CategoryName, M.Name, M.Price, M.Quantity, M.ExpirationDate, M.Seller, M.Description, M.Image
    FROM Medicines M
    INNER JOIN Categories C ON M.CategoryID = C.CategoryID;
END

drop proc  GetAllData

GetAllData



--////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
CREATE PROCEDURE UpdateMedicine
    @MedicineID INT,
    @CategoryName NVARCHAR(100),
    @Name NVARCHAR(100),
    @Price DECIMAL(10, 2),
    @Quantity INT,
    @ExpirationDate DATE,
    @Seller NVARCHAR(100),
    @Description NVARCHAR(MAX),
    @Image NVARCHAR(MAX)
AS
BEGIN
    DECLARE @CategoryID INT

    SELECT @CategoryID = CategoryID
    FROM Categories
    WHERE CategoryName = @CategoryName

    IF @CategoryID IS NULL
    BEGIN
        RAISERROR('Invalid CategoryName', 16, 1)
        RETURN
    END

    UPDATE Medicines
    SET CategoryID = @CategoryID,
        Name = @Name,
        Price = @Price,
        Quantity = @Quantity,
        ExpirationDate = @ExpirationDate,
        Seller = @Seller,
        Description = @Description,
        Image = @Image
    WHERE MedicineID = @MedicineID;

    SELECT @MedicineID AS MedicineID, @CategoryID AS CategoryID, @CategoryName AS CategoryName, @Name AS Name, @Price AS Price, @Quantity AS Quantity, @ExpirationDate AS ExpirationDate, @Seller AS Seller, @Description AS Description, @Image AS Image;
END



	
--//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
drop proc DeleteMedicine

	CREATE PROCEDURE DeleteMedicine
    @MedicineID INT
		AS
		BEGIN
			DELETE FROM Medicines
			WHERE MedicineID = @MedicineID;
		END

		
		select * from Medicines



--////////////////////////////////////////////////////////////////////////////////////

CREATE PROCEDURE InsertMedicine
    @CategoryName NVARCHAR(100),
    @Name NVARCHAR(100),
    @Price DECIMAL(10, 2),
    @Quantity INT,
    @ExpirationDate DATE,
    @Seller NVARCHAR(100),
    @Description NVARCHAR(MAX),
    @Image NVARCHAR(MAX)
AS
BEGIN
    DECLARE @MedicineID INT
    DECLARE @CategoryID INT
    
    SELECT @CategoryID = CategoryID
    FROM Categories
    WHERE CategoryName = @CategoryName
    
    IF @CategoryID IS NULL
    BEGIN
        RAISERROR('Invalid CategoryName', 16, 1)
        RETURN
    END
    
    INSERT INTO Medicines (CategoryID, Name, Price, Quantity, ExpirationDate, Seller, Description, Image)
    VALUES (@CategoryID, @Name, @Price, @Quantity, @ExpirationDate, @Seller, @Description, @Image)
    
    SET @MedicineID = SCOPE_IDENTITY()

    SELECT @MedicineID AS MedicineID, @CategoryID AS CategoryID, @CategoryName AS CategoryName, @Name AS Name, @Price AS Price, @Quantity AS Quantity, @ExpirationDate AS ExpirationDate, @Seller AS Seller, @Description AS Description, @Image AS Image;
END

Select * from Categories
GetAllData


drop proc InsertMedicine


EXEC InsertMedicine
    @CategoryName = 'Painkillers',
    @Name = 'Ibuprofen',
    @Price = 9.99,
    @Quantity = 100,
    @ExpirationDate = '2024-12-31',
    @Seller = 'Pharmacy ABC',
    @Description = 'Relieves pain and reduces inflammation.',
    @Image = 'ibuprofen.jpg';

	EXEC UpdateMedicine
    @MedicineID = 6,
    @CategoryName = 'Painkillers',
    @Name = 'Ibuprofen14',
    @Price = 20.99,
    @Quantity = 200,
    @ExpirationDate = '2025-12-31',
    @Seller = 'Pharmacy XYZ',
    @Description = 'Relieves pain and reduces inflammation.',
    @Image = 'ibuprofen_new.jpg';

	GetAllData