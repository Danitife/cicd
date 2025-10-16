// import request from "supertest"
const request = require("supertest")
// import app from "./cicd.js"
const app = require("./cicd")
let server; // Declare a variable for the server

beforeAll((done) => {
    // Start the server and save the instance
    server = app.listen(done);
});

afterAll((done) => {
    // Close the server instance
    server.close(done);
});


describe("GET /", () => {
    it("should return a greeting message", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Expected result should be Daniel");
    });
});
