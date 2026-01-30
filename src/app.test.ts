import { describe, it, expect, vi } from "vitest"
import request from "supertest"
import { app, errorHandler } from "./app"

describe("App", () => {
    it("GET /health should return 200 and status ok", async () => {
        const response = await request(app).get("/health")

        expect(response.status).toBe(200)
        expect(response.body).toEqual({ status: "ok" })
    })

    it("should have x-powered-by disabled", async () => {
        const response = await request(app).get("/health")
        expect(response.headers["x-powered-by"]).toBeUndefined()
    })

    it("should handle global errors", async () => {
        // Mock console.error to avoid polluting the test output
        const consoleSpy = vi
            .spyOn(console, "error")
            .mockImplementation(() => {})

        // Trigger a JSON parsing error by sending invalid JSON
        const response = await request(app)
            .post("/health")
            .set("Content-Type", "application/json")
            .send("{ invalid json }")

        expect(response.status).toBe(500)
        expect(response.body).toEqual({ error: "Internal Server Error" })

        expect(consoleSpy).toHaveBeenCalled()
        consoleSpy.mockRestore()
    })
    it("should return 500 when error is thrown in route", async () => {
        const consoleSpy = vi
            .spyOn(console, "error")
            .mockImplementation(() => {})

        const response = await request(app).get("/error")

        expect(response.status).toBe(500)
        expect(response.body).toEqual({ error: "Internal Server Error" })

        consoleSpy.mockRestore()
    })

    it("should call next(err) if headers are already sent", () => {
        const req = {} as any
        const res = {
            headersSent: true,
        } as any
        const next = vi.fn()
        const err = new Error("Test Error")

        errorHandler(err, req, res, next)

        expect(next).toHaveBeenCalledWith(err)
    })
})
