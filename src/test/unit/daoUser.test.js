const userDao = require("../../models/daoUser");

describe("User Model Create", () =>{
    it("should have a signup function", ()=>{
        expect(typeof userDao.signup).toBe("function");
    })
})