// Imports
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers')


// Order Details
router.route("/order_details")
.get(controllers.getDetailsAll)
.post(controllers.postDetailsAll)
.delete(controllers.deleteDetailsAll);

router.route("/order_details/:id")
.get(controllers.getDetailsById)
.put(controllers.putDetailsById)
.delete(controllers.deleteDetailsById);

// Products
router.route("/products")
.get(controllers.getProductsAll)
.post(controllers.postProductsAll)
.delete(controllers.deleteProductsAll);

router.route("/products/:id")
.get(controllers.getProductsById)
.put(controllers.putProductsById)
.delete(controllers.deleteProductsById);


// Orders
router.route("/orders")
.get(controllers.getOrdersAll)
.post(controllers.postOrdersAll)
.delete(controllers.deleteOrdersAll);

router.route("/orders/:id")
.get(controllers.getOrdersById)
.put(controllers.putOrdersById)
.delete(controllers.deleteOrdersById);

// Shippers
router.route("/shippers")
.get(controllers.getShippersAll)
.post(controllers.postShippersAll)
.delete(controllers.deleteShippersAll);

router.route("/shippers/:id")
.get(controllers.getShippersById)
.put(controllers.putShippersById)
.delete(controllers.deleteShippersById);

// Employees
router.route("/employees")
.get(controllers.getEmployeesAll)
.post(controllers.postEmployeesAll)
.delete(controllers.deleteEmployeesAll);

router.route("/employees/:id")
.get(controllers.getEmployeesById)
.put(controllers.putEmployeesById)
.delete(controllers.deleteEmployeesById);


// Exports
module.exports = router;