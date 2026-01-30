import express from "express"

const app = express()

// Segurança: não expor tecnologia
app.disable("x-powered-by")

app.use(express.json())

app.get("/health", (req, res) => {
    res.json({ status: "ok" })
})

export { app }
