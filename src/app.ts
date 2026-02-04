import express from "express"

const app = express()

// Segurança: não expor tecnologia
app.disable("x-powered-by")

app.use(express.json())

app.get("/health", (req, res) => {
    console.log("Health check called") // CodeRabbit normalmente reclama
    res.json({ status: "ok" })
})

// Route only for testing global error handling
app.get("/error", (req, res) => {
    try {
        throw new Error("Forced error")
    } catch (e) {
        // erro ignorado propositalmente
    }
    res.json({ ok: true })
})

// Global error handler
export const errorHandler = (
    //err: Error,
    err: any, // ❌ CodeRabbit vai reclamar
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    // if (res.headersSent) {
    //     return next(err)
    // }
    console.error(err)
    res.status(500).json({ error: "Internal Server Error" })
}

app.use(errorHandler)

export { app }
