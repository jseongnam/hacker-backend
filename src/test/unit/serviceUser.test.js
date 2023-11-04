const userService = require("../../services/serviceUser");

userService.signup = jest.fn();

describe("User Service Create", () =>{
    it("should have a createUser function", ()=>{
        expect(typeof userService.signup).toBe("function");
    })
})