# 🏃 Sprint Plan — Tasks Manager API

## Contexto

Projeto backend (API REST) para gerenciamento de tarefas, com prazo total de **1 dia**.
Objetivo: entregar um MVP profissional, estável e bem documentado.

---

# 📅 Sprint Única — Plano de Execução (1 Dia)

## Sprint 0 — Preparação (30 min)

**Objetivo:** garantir ambiente pronto para codar sem bloqueios.

* [ ] Criar repositório Git
* [ ] Inicializar projeto Node.js
* [ ] Configurar TypeScript
* [ ] Configurar scripts básicos (dev/build)
* [ ] Configurar .gitignore

---

## Sprint 1 — Foundation (2h)

**Objetivo:** base técnica e estrutura do projeto.

* [ ] Criar estrutura modular de pastas
* [ ] Configurar Express
* [ ] Criar app.ts e server.ts
* [ ] Criar health check endpoint (/health)
* [ ] Configurar SQLite + better-sqlite3
* [ ] Criar conexão em config/database.ts
* [ ] Criar script de criação da tabela tasks

---

## Sprint 2 — Core Tasks Module (4h)

**Objetivo:** CRUD completo de tasks.

### Create Task

* [ ] DTO: create-task.dto.ts
* [ ] Repository: insert task (SQL)
* [ ] Service: regra de criação
* [ ] Controller: POST /tasks

### List Tasks

* [ ] Repository: select with filters
* [ ] Service: aplicar filtros
* [ ] Controller: GET /tasks

### Get Task by ID

* [ ] Repository: select by id
* [ ] Service: validar existência
* [ ] Controller: GET /tasks/:id

### Update Task

* [ ] DTO: update-task.dto.ts
* [ ] Repository: update SQL
* [ ] Service: regras de update
* [ ] Controller: PUT /tasks/:id

### Delete Task

* [ ] Repository: delete SQL
* [ ] Service: validar existência
* [ ] Controller: DELETE /tasks/:id

---

## Sprint 3 — Qualidade & Profissionalismo (2h)

**Objetivo:** elevar nível do projeto.

* [ ] Criar AppError
* [ ] Middleware global de erro
* [ ] Padronizar responses
* [ ] Validação básica de DTOs
* [ ] Filtros por status e priority
* [ ] Ordenação por created_at

---

## Sprint 4 — Finalização (1.5h)

**Objetivo:** deixar pronto para entrega.

* [ ] Criar README.md profissional
* [ ] Documentar endpoints
* [ ] Criar exemplos curl/Postman
* [ ] Refatorar nomes e responsabilidades
* [ ] Revisar arquitetura

---

# 🧩 Task Breakdown — Lista de Tasks Técnicas

## Setup & Infra

* [ ] Criar package.json
* [ ] Instalar dependências:

  * express
  * better-sqlite3
  * typescript
  * ts-node-dev
  * @types/express
* [ ] Criar tsconfig.json

---

## Database

* [ ] Implementar config/database.ts
* [ ] Criar função initDatabase()
* [ ] Criar tabela tasks
* [ ] Criar seed opcional (dados fake)

---

## Tasks Module — Repositories

* [ ] createTask()
* [ ] findAllTasks(filters)
* [ ] findTaskById(id)
* [ ] updateTask(id, data)
* [ ] deleteTask(id)

---

## Tasks Module — Services

* [ ] CreateTaskService
* [ ] ListTasksService
* [ ] GetTaskByIdService
* [ ] UpdateTaskService
* [ ] DeleteTaskService

---

## Tasks Module — Controllers

* [ ] CreateTaskController
* [ ] ListTasksController
* [ ] GetTaskByIdController
* [ ] UpdateTaskController
* [ ] DeleteTaskController

---

## Rotas

* [ ] Criar task.routes.ts
* [ ] Registrar rotas no app.ts

---

## Erros & Middlewares

* [ ] Criar AppError
* [ ] Criar error-handler.middleware.ts
* [ ] Criar middleware de not found

---

## Documentação

* [ ] Criar README.md
* [ ] Adicionar descrição do projeto
* [ ] Documentar arquitetura
* [ ] Exemplos de requests

---

# ✅ Definition of Done (DoD)

Uma task é considerada pronta quando:

* Código compilando
* Endpoint funcionando
* Erros tratados
* Responsabilidades respeitadas (Controller/Service/Repository)
* Testado manualmente

---

# 🎯 Status Geral

* [ ] Setup completo
* [ ] Banco configurado
* [ ] CRUD Tasks completo
* [ ] Filtros funcionando
* [ ] Erros padronizados
* [ ] Documentação finalizada

➡️ Pronto para entrega técnica.

