// Imports
const db = require('../config/db')


class Employees {
    constructor(EmployeeID, LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City) {
        this.employeeID = EmployeeID;
        this.lastName = LastName;
        this.firstName = FirstName;
        this.title = Title;
        this.titleOfCourtesy = TitleOfCourtesy;
        this.birthDate = BirthDate;
        this.hireDate = HireDate;
        this.address = Address;
        this.city = City;
    }
    async save(){
        let sql = `
        INSERT INTO Employees(
            EmployeeID,
            LastName,
            FirstName,
            Title,
            TitleOfCourtesy,
            BirthDate,
            HireDate,
            Address,
            City
        )
        VALUES(
            '${this.employeeID}',
            '${this.lastName}',
            '${this.firstName}',
            '${this.title}',
            '${this.titleOfCourtesy}',
            '${this.birthDate}',
            '${this.hireDate}',
            '${this.address}',
            '${this.city}'
        )
        `;
        const [newEmployees, _] = await db.execute(sql);
        return newEmployees;
    }

    static findAll(){
        let sql = "SELECT * FROM Employees;";
        return db.execute(sql);
      };
  
      static deleteAll(){
        let sql = "DELETE FROM Employees;";
        return db.execute(sql);
      };
  
      static findById(id){
        let sql = `SELECT * FROM Employees WHERE EmployeeID = ${id};`;
        return db.execute(sql);
      };
  
      async update() {
        let sql = `
          UPDATE Employees SET
            LastName = '${this.lastName}',
            FirstName = '${this.firstName}',
            Title = '${this.title}',
            TitleOfCourtesy = '${this.titleOfCourtesy}',
            BirthDate = '${this.birthDate}',
            HireDate = '${this.hireDate}',
            Address = '${this.address}',
            City = '${this.city}'
          WHERE
          EmployeeID = '${this.employeeID}'
        `;
        const [updatedEmployee, _] = await db.execute(sql);
        return updatedEmployee;
      };
    
      static deleteById(id) {
        let sql = `DELETE FROM Employees WHERE EmployeeID = ${id}`;
        return db.execute(sql);
      };
};

// Exports
module.exports = Employees;