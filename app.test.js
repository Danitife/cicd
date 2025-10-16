// import request from "supertest"
const request = require("supertest")
// import app from "./cicd.js"
const app = require("./cicd")
let server;

beforeAll((done) => {
    server = app.listen(done);
});

afterAll((done) => {
    server.close(done);
});


describe("GET /", () => {
    it("should return a greeting message", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Expected result should be Daniel");
    });
});
