# 📄 PRD — Product Requirements Document

## 1. Visão Geral

**Produto:** Tasks Manager API

**Descrição:**
API REST para gerenciamento de tarefas (tasks), voltada para desenvolvedores que desejam organizar issues/tarefas de projetos de software.

**Tipo:** Backend (API REST)

**Público-alvo:**

* Desenvolvedores
* Times técnicos
* Avaliadores de teste prático

**Objetivo:**
Permitir que usuários criem, visualizem, atualizem, filtrem e removam tarefas, simulando um sistema real de gestão de issues.

---

## 2. Problema que o Produto Resolve

Desenvolvedores precisam de uma forma simples e organizada para:

* Controlar tarefas
* Priorizar atividades
* Acompanhar status
* Simular workflows reais de desenvolvimento

---

## 3. Escopo do Produto (MVP)

### Funcionalidades Principais

* Criar task
* Listar tasks
* Buscar task por ID
* Atualizar task
* Remover task
* Filtrar tasks por:

  * status
  * prioridade
* Ordenar por data de criação

---

## 4. Entidade Principal — Task

### Campos:

| Campo       | Tipo     | Obrigatório | Descrição           |             |      |
| ----------- | -------- | ----------- | ------------------- | ----------- | ---- |
| id          | number   | Sim         | Identificador único |             |      |
| title       | string   | Sim         | Título da task      |             |      |
| description | string   | Não         | Descrição detalhada |             |      |
| status      | string   | Sim         | pending             | in_progress | done |
| priority    | string   | Sim         | low                 | medium      | high |
| created_at  | datetime | Sim         | Data de criação     |             |      |
| updated_at  | datetime | Sim         | Última atualização  |             |      |

---

## 5. Regras de Negócio

* Uma task deve ter título obrigatório
* Status padrão: `pending`
* Priority padrão: `medium`
* Não permitir update em task inexistente
* Não permitir delete em task inexistente

---

## 6. Critérios de Aceite

* [ ] Criar task retorna status 201
* [ ] Listar tasks retorna array
* [ ] Buscar por ID retorna 404 se não existir
* [ ] Atualizar task persiste no banco
* [ ] Deletar task remove do banco
* [ ] Filtros funcionam corretamente

---
