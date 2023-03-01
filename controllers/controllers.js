// Imports
const Employees = require('../models/Employees');
const Orders = require('../models/Orders');
const OrderDetails = require('../models/OrderDetails')
const Shippers = require('../models/Shippers');
const Products = require('../models/Products');


// Order Details
exports.getDetailsAll = async (req, res, next) => {
    try {
        let [orderDetails,_] = await OrderDetails.findAll();
        res.status(200).json({ count: orderDetails.length, orderDetails});
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.postDetailsAll = async (req, res, next) => {
    try{
        let { OrderID, ProductID, UnitPrice, Quantity, Discount } = req.body;
        let orderDetails = new OrderDetails(OrderID, ProductID, UnitPrice, Quantity, Discount);
        orderDetails = await orderDetails.save();
        res.status(201).json({ message: "Post created"})
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.deleteDetailsAll = async (req, res, next) => {
    try {
        await OrderDetails.deleteAll();
        res.status(201).json({ message: "Everything deleted"})
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.getDetailsById = async (req, res, next) => {
    try{
        let orderID = req.params.id;
        let [orderDetails,_] = await OrderDetails.findById(orderID);
        res.status(200).json({ orderDetails: orderDetails[0] });
    } catch (error){
        next(error)
    }
};

exports.putDetailsById = async (req, res, next) => {
    try{
        let orderID = req.params.id;
        let { ProductID, UnitPrice, Quantity, Discount } = req.body;
        let orderDetails = new OrderDetails(orderID, ProductID, UnitPrice, Quantity, Discount);
        await orderDetails.update();
        res.status(200).json({ message: "Updated successfully" });
    } catch (error){
        console.log(error);
        next(error);
    }
};

exports.deleteDetailsById = async (req, res, next) => {
    try{
        let orderID = req.params.id;
        await OrderDetails.deleteById(orderID);
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error){
        console.log(error);
        next(error);
    }
};

// Products
exports.getProductsAll = async (req, res, next) => {
    try {
        let [products,_] = await Products.findAll();
        res.status(200).json({ count: products.length, products});
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.postProductsAll = async (req, res, next) => {
    try{
        let { ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice } = req.body;
        let products= new Products(ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice);
        products = await products.save();    
        res.status(201).json({ message: "Post created"})
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.deleteProductsAll = async (req, res, next) => {
    try {
        await Products.deleteAll();
        res.status(201).json({ message: "Everything deleted"})
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.getProductsById = async (req, res, next) => {
    try{
        let productID = req.params.id;
        let [product,_] = await OrderDetails.findById(productID);
        res.status(200).json({ product: product[0] });
    } catch (error){
        next(error)
    }
};

exports.putProductsById = async (req, res, next) => {
    try{
        let ProductID = req.params.id;
        let { ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice } = req.body;
        let product = new Products(ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice);
        await product.update();
        res.status(200).json({ message: "Updated successfully" });
    } catch (error){
        console.log(error);
        next(error);
    }
};

exports.deleteProductsById = async (req, res, next) => {
    try{
        let productID = req.params.id;
        await Products.deleteById(productID);
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error){
        console.log(error);
        next(error);
    }
};

// Orders
exports.getOrdersAll = async (req, res, next) => {
    try {
        let [orders,_] = await Orders.findAll();
        res.status(200).json({ count: orders.length, orders});
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.postOrdersAll = async (req, res, next) => {
    try{
        let { OrderID, CustomerID, EmployeeID, OrderDate } = req.body;
        let orders = new Orders(OrderID, CustomerID, EmployeeID, OrderDate);
        orders = await orders.save();
        res.status(201).json({ message: "Post created"})
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.deleteOrdersAll = async (req, res, next) => {
    try {
        await Orders.deleteAll();
        res.status(201).json({ message: "Everything deleted"})
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.getOrdersById = async (req, res, next) => {
    try{
        let orderID = req.params.id;
        let [orders,_] = await Orders.findById(orderID);
        res.status(200).json({ orders: orders[0] });
    } catch (error){
        next(error)
    }
};

exports.putOrdersById = async (req, res, next) => {
    try{
        let OrderID = req.params.id;
        let { CustomerID, EmployeeID, OrderDate } = req.body;
        let orders = new Orders(OrderID, CustomerID, EmployeeID, OrderDate);
        await orders.update();
        res.status(200).json({ message: "Updated successfully" });
    } catch (error){
        console.log(error);
        next(error);
    }
};

exports.deleteOrdersById = async (req, res, next) => {
    try{
        let orderID = req.params.id;
        await Orders.deleteById(orderID);
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error){
        console.log(error);
        next(error);
    }
};

// Shippers
exports.getShippersAll = async (req, res, next) => {
    try {
        let [shippers,_] = await Shippers.findAll();
        res.status(200).json({ count: shippers.length, shippers});
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.postShippersAll = async (req, res, next) => {
    try{
        let { ShipperID, CompanyName, Phone } = req.body;
        let shippers = new Shippers(ShipperID, CompanyName, Phone);
        shippers = await shippers.save();
        res.status(201).json({ message: "Post created"})
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.deleteShippersAll = async (req, res, next) => {
    try {
        await Shippers.deleteAll();
        res.status(201).json({ message: "Everything deleted"})
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.getShippersById = async (req, res, next) => {
    try{
        let shippersID = req.params.id;
        let [shippers,_] = await Shippers.findById(shippersID);
        res.status(200).json({ shippers: shippers[0] });
    } catch (error){
        next(error)
    }
};

exports.putShippersById = async (req, res, next) => {
    try{
        let ShipperID = req.params.id;
        let { CompanyName, Phone } = req.body;
        let shippers = new Shippers(ShipperID, CompanyName, Phone);
        await shippers.update();
        res.status(200).json({ message: "Updated successfully" });
    } catch (error){
        console.log(error);
        next(error);
    }
};

exports.deleteShippersById = async (req, res, next) => {
    try{
        let shipperID = req.params.id;
        await Shippers.deleteById(shipperID);
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error){
        console.log(error);
        next(error);
    }
};

// Employees
exports.getEmployeesAll = async (req, res, next) => {
    try {
        let [employees,_] = await Employees.findAll();
        res.status(200).json({ count: employees.length, employees});
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.postEmployeesAll = async (req, res, next) => {
    try{
        let { EmployeeID, LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City } = req.body;
        let employees = new Employees(EmployeeID, LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City);
        employees = await employees.save();
        res.status(201).json({ message: "Post created"})
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.deleteEmployeesAll = async (req, res, next) => {
    try {
        await Employees.deleteAll();
        res.status(201).json({ message: "Everything deleted"})
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.getEmployeesById = async (req, res, next) => {
    try{
        let employeeID = req.params.id;
        let [employees,_] = await Employees.findById(employeeID);
        res.status(200).json({ employees: employees[0] });
    } catch (error){
        next(error)
    }
};

exports.putEmployeesById = async (req, res, next) => {
    try{
        let EmployeeID = req.params.id;
        let { LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City } = req.body;
        let employee = new Employees(EmployeeID, LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City);
        await employee.update();
        res.status(200).json({ message: "Updated successfully" });
    } catch (error){
        console.log(error);
        next(error);
    }
};

exports.deleteEmployeesById = async (req, res, next) => {
    try{
        let employeeID = req.params.id;
        await Employees.deleteById(employeeID);
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error){
        console.log(error);
        next(error);
    }
};