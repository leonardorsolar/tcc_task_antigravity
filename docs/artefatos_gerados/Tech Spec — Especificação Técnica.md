

# 🛠️ Tech Spec — Especificação Técnica

## 1. Stack Tecnológica

**Linguagem:** TypeScript

**Runtime:** Node.js

**Framework:** Express

**Banco de Dados:** SQLite

**Driver:** better-sqlite3

**ORM:** Nenhum (SQL nativo)

---

## 2. Arquitetura

### Padrão:

Camadas + Repository + Modular por domínio

### Estrutura:

```
src/
├── config/
│   └── database.ts
├── modules/
│   └── tasks/
│       ├── controllers/
│       ├── services/
│       ├── repositories/
│       ├── dtos/
│       ├── models/
│       └── routes/
├── shared/
│   ├── errors/
│   ├── middlewares/
│   └── utils/
├── app.ts
└── server.ts
```

---

## 3. Modelagem do Banco (SQLite)

### Tabela: tasks

```sql
CREATE TABLE tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  priority TEXT NOT NULL DEFAULT 'medium',
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);
```

---

## 4. Endpoints da API

### Criar Task

```
POST /tasks
```

Request:

```json
{
  "title": "Implement login",
  "description": "Criar tela de login",
  "priority": "high"
}
```

---

### Listar Tasks

```
GET /tasks?status=pending&priority=high
```

---

### Buscar Task por ID

```
GET /tasks/:id
```

---

### Atualizar Task

```
PUT /tasks/:id
```

Request:

```json
{
  "title": "Implement login V2",
  "status": "in_progress"
}
```

---

### Deletar Task

```
DELETE /tasks/:id
```

---

## 5. Camadas Técnicas

### Controller

Responsável por:

* HTTP
* Status codes
* Chamar services

---

### Service

Responsável por:

* Regras de negócio
* Validações
* Orquestração

---

### Repository

Responsável por:

* SQL
* Acesso ao SQLite
* Mapear rows → models

---

## 6. Tratamento de Erros

* AppError customizado
* Middleware global de erro
* Erros retornam:

```json
{
  "message": "Task not found",
  "code": "TASK_NOT_FOUND"
}
```

---

## 7. Padrões de Qualidade

* DTOs para entrada
* SQL centralizado em repositories
* Nenhum SQL em controllers
* Nenhuma regra de negócio em controllers

---

## 8. Não-Escopo

* Autenticação
* Usuários
* Permissões
* Frontend

---

## 9. Pronto para Implementação

Checklist:

* [x] PRD definido
* [x] Tech Spec definido
* [x] Arquitetura definida
* [x] Banco modelado
* [x] Endpoints definidos

➡️ Projeto pronto para iniciar implementação.

