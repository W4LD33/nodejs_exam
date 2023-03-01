const db = require('../config/db')

class OrderDetails {
    constructor(OrderID, ProductID, UnitPrice, Quantity, Discount) {
      this.orderID = OrderID;
      this.productID = ProductID;
      this.unitPrice = UnitPrice;
      this.quantity = Quantity;
      this.discount = Discount;
    }
    async save() {
      let sql = `
          INSERT INTO Order_Details(
              OrderID,
              ProductID,
              UnitPrice,
              Quantity,
              Discount
          )
          VALUES(
              '${this.orderID}',
              '${this.productID}',
              '${this.unitPrice}',
              '${this.quantity}',
              '${this.discount}'
          )
          `;
      const [newOrderDetail, _] = await db.execute(sql);
      return newOrderDetail;
    }

    static findAll(){
      let sql = "SELECT * FROM Order_Details;";
      return db.execute(sql);
    };

    static deleteAll(){
      let sql = "DELETE FROM Order_Details;";
      return db.execute(sql);
    };

    static findById(id){
      let sql = `SELECT * FROM Order_Details WHERE OrderID = ${id};`;
      return db.execute(sql);
    };

    async update() {
      let sql = `
        UPDATE Order_Details SET
          ProductID = '${this.productID}',
          UnitPrice = '${this.unitPrice}',
          Quantity = '${this.quantity}',
          Discount = '${this.discount}'
        WHERE
          OrderID = '${this.orderID}'
      `;
      const [updatedOrderDetail, _] = await db.execute(sql);
      return updatedOrderDetail;
    };
  
    static deleteById(id) {
      let sql = `DELETE FROM Order_Details WHERE OrderID = ${id}`;
      return db.execute(sql);
    };
  };
  
module.exports = OrderDetails;