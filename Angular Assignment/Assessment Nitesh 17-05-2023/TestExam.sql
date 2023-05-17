

--Create a Stored procedure to locate all of the employees' duplicate emails (without capital letters). Return email addresses.



create or alter procedure GetUniqueEmailAddres 
AS
BEGIN
 create table UniqueMaills(emailAddress NVARCHAR(100));

 insert into UniqueMaills(emailAddress)
 Select Distinct LOWER(emailAddress) from HumanResources.Employee as a inner join Person.EmailAddress as b on a.BusinessEntityID = b.BusinessEntityID;
 
 select emailAddress from UniqueMaills;
end



EXEC GetUniqueEmailAddres;



    