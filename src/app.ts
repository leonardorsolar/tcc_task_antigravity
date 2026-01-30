import express from "express"

const app = express()

// Segurança: não expor tecnologia
app.disable("x-powered-by")

app.use(express.json())

app.get("/health", (req, res) => {
    res.json({ status: "ok" })
})

// Global error handler (sempre por último)
app.use(
    (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => {
        if (res.headersSent) {
            return next(err)
        }
        console.error(err)
        res.status(500).json({ error: "Internal Server Error" })
    },
)

export { app }
