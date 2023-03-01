// Imports
const db = require('../config/db')


class Products {
    constructor(ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice) {
      this.productID = ProductID;
      this.productName = ProductName;
      this.supplierID = SupplierID;
      this.categoryID = CategoryID;
      this.quantityPerUnit = QuantityPerUnit;
      this.unitPrice = UnitPrice;
    }
    async save() {
      let sql = `
          INSERT INTO Products(
              ProductID,
              ProductName,
              SupplierID,
              CategoryID,
              QuantityPerUnit,
              UnitPrice
          )
          VALUES(
              '${this.productID}',
              '${this.productName}',
              '${this.supplierID}',
              '${this.categoryID}',
              '${this.quantityPerUnit}',
              '${this.unitPrice}'
          )
          `;
      const [newProducts, _] = await db.execute(sql);
      return newProducts;
    }

    static findAll(){
      let sql = "SELECT * FROM Products;";
      return db.execute(sql);
    };

    static deleteAll(){
      let sql = "DELETE FROM Products;";
      return db.execute(sql);
    };

    static findById(id){
      let sql = `SELECT * FROM Products WHERE ProductID = ${id}`;
      return db.execute(sql);
    };

    async update() {
      let sql = `
        UPDATE Products SET
          ProductName = '${this.productID}',
          SupplierID = '${this.supplierID}',
          CategoryID = '${this.categoryID}',
          QuantityPerUnit = '${this.quantityPerUnit}',
          UnitPrice = '${this.unitPrice}'
        WHERE
          ProductID = '${this.productID}'
      `;
      const [updatedProduct, _] = await db.execute(sql);
      return updatedProduct;
    };

    static deleteById(id) {
      let sql = `DELETE FROM Products WHERE ProductID = ${id}`;
      return db.execute(sql);
    };
  };

// Exports
module.exports = Products;