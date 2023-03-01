// Imports
const db = require('../config/db')


class Orders {
    constructor(OrderID, CustomerID, EmployeeID, OrderDate) {
        this.orderID = OrderID;
        this.customerID = CustomerID;
        this.employeeID = EmployeeID;
        this.orderDate = OrderDate;
    }
    async save(){
        let sql = `
        INSERT INTO Orders(
            OrderID,
            CustomerID,
            EmployeeID,
            OrderDate
        )
        VALUES(
            '${this.orderID}',
            '${this.customerID}',
            '${this.employeeID}',
            '${this.orderDate}'
        )
        `;
        const [newOrders, _] = await db.execute(sql);
        return newOrders;
    }

    static findAll(){
        let sql = "SELECT * FROM Orders;";
        return db.execute(sql);
      };
  
      static deleteAll(){
        let sql = "DELETE FROM Orders;";
        return db.execute(sql);
      };
  
      static findById(id){
        let sql = `SELECT * FROM Orders WHERE OrderID = ${id};`;
        return db.execute(sql);
      };
  
      async update() {
        let sql = `
          UPDATE Orders SET
            CustomerID = '${this.customerID}',
            EmployeeID = '${this.employeeID}',
            OrderDate = '${this.orderDate}'
          WHERE
            OrderID = '${this.orderID}'
        `;
        const [updatedOrderDetail, _] = await db.execute(sql);
        return updatedOrderDetail;
      };
    
      static deleteById(id) {
        let sql = `DELETE FROM Orders WHERE OrderID = ${id}`;
        return db.execute(sql);
      };
};

// Exports    
module.exports = Orders;