// Imports
const db = require('../config/db')


class Shippers {
    constructor(ShipperID, CompanyName, Phone) {
      this.shipperID = ShipperID;
      this.companyName = CompanyName;
      this.phone = Phone;
    }
    async save() {
      let sql = `
          INSERT INTO Shippers(
              ShipperID,
              CompanyName,
              Phone
          )
          VALUES(
              '${this.shipperID}',
              '${this.companyName}',
              '${this.phone}'
          )
          `;
          return db.execute(sql);
    }

    static findAll(){
      let sql = "SELECT * FROM Shippers;";
      return db.execute(sql);
    };

    static deleteAll(){
      let sql = "DELETE FROM Shippers;";
      return db.execute(sql);
    };

    static findById(id){
      let sql = `SELECT * FROM Shippers WHERE ShipperID = ${id};`;
      return db.execute(sql);
    }

    async update() {
      let sql = `
        UPDATE Shippers SET
          CompanyName = '${this.companyName}',
          Phone = '${this.phone}'
        WHERE
          ShipperID = '${this.shipperID}'
      `;
      const [updatedOrderDetail, _] = await db.execute(sql);
      return updatedOrderDetail;
    }
  
    static deleteById(id) {
      let sql = `DELETE FROM Shippers WHERE ShipperID = ${id}`;
      return db.execute(sql);
    }
  };

// Exports
module.exports = Shippers;