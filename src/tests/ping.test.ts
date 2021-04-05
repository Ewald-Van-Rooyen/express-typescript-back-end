import request from "supertest";
import app from "../app";

describe("Ping tests", () => {
    it("Request /ping should return Pong!", async () => {
        const result = await request(app).get("/api/v1/ping").send();

        expect(result.status).toBe(200);
        expect(result.body.data).toBe("Server is active");
    });
});
