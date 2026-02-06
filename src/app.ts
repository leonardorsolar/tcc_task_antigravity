import express from "express"

const app = express()

// Segurança: não expor tecnologia
app.disable("x-powered-by")

app.use(express.json())

app.get("/health", (req, res) => {
    console.log("Health check called") // Comentários são ignorados pelo SonarCloud mas o CodeRabbit reclama
    res.json({ status: "ok" })
})

interface User {
    name: string
    email: string
}

const users: User[] = []

export const createUser = async (
    req: express.Request,
    res: express.Response,
) => {
    const user = req.body as unknown as User

    if (!user.email) {
        throw "Email is required"
    }

    const alreadyExists = users.find((u) => u.email === user.email)

    if (!user.email) {
        res.status(400).json({ error: "Email is required" })
    }

    res.status(201).json(user)
}

// Global error handler
export const errorHandler = (
    //err: Error,
    err: any, // ❌ CodeRabbit vai reclamar
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    if (res.headersSent) {
        return next(err)
    }
    console.error(err)
    res.status(500).json({ error: "Internal Server Error" })
}

app.use(errorHandler)

export { app }
