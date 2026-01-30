1- PLANEJAMENTO
Inserir o prompt Agente DevMentor.md e responder as perguntas
Artefatos de saída: PRD, TechSpec, Tasks e Sprint planning

obs.: atualizar a ide

2- BACKEND:

Passo 1: instale o kit
• Atualizar a ide
• Instale o Antigravity Kit: https://github.com/vudovn/antigravity-kit
npx @vudovn/ag-kit init
• Adicione o mcp context7 (Clique nos 3 pontos (⋮), Manage MCPs, mAdd MCP Server...)
• Adicione o mcp TestSprite ( - https://www.testsprite.com/dashboard/mcp/tests (teste local mcp) - Quick install > create API Keys - outher ide > copie - Acesse os 3 pontinhos no lado direito e clique em mcp. Clique em Manage MCPs e adicione

```json
{
    "mcp_context7": {
        "name": "Context7",
        "description": "Context7 is a context for the Antigravity Kit.",
        "version": "1.0.0",
        "author": "Context7",
        "license": "MIT",
        "url": "https://github.com/context7/context7"
    },
    "mcpServers": {
        "TestSprite": {
            "command": "npx",
            "args": ["-y", "@testsprite/testsprite-mcp@latest"],
            "env": {
                "API_KEY": "sk-user-wNEQR9bKvZXdJdyAKo6Pf...vo"
            }
        }
    }
}
```

APÓS INSTALADO: abrir e fechar A IDE

Task_01:
1- Setup Inicial do Repositório: modo planning-> Adicionar o prompt Task_01.md
2- Revisar o plano da tasks
3- Proceed o plano criado: Implementation Plan - Setup Inicial do Repositório
4- Aceitar as modificações
5- Subir a aplicação: npm rum dev
6- crie um teste para verificar se a api está online (/health)
7- Proceed o plano criado: Implementation Plan - Testing Setup & Health Check
8- testar: npm run test
9- testar o TestSprite: TestSprite Hey, help me to test this project with TestSprite.
10 git add .
11 git commit -m "Setup Inicial do Repositório"
12 git push ...
13 Adicionar o sonarcloud no github https://sonarcloud.io/login (logar com o github)
configurar o SonarCloud via GitHub Actions (Continuons integration)

- analyzer new project > Select all on this page (tcc_task_antigravity) > Set up > Number of days > create project
- Adminstration > Analysis Metthod > With GitHub Actions > Name = SONAR_TOKEN e Value =
- 1-Desabilitar Automatic Analysis
- 2-github Actions secrets and variables > new repository secret > Name = SONAR_TOKEN e Value = > add secret
- 3-Escolher o tipo do projeto> Js/ts > crie.github/workflows/build.yml > crie sonar-project.properties
- 4 Security Hotspots>review se for o caso, corrigir e subir novamente > Safe (quando é falso positivo)

14- coderrabit (revisar o codigo): https://app.coderabbit.ai/login
1-login com github
2- add repository
3- github > Only select repositories > tcc_task_antigravity
4-Vá para o GitHub Marketplace (ou via dashboard do CodeRabbit) > Procure por CodeRabbit > Clique em Install
5- Arquivo .coderabbit.yaml
6- no prompt: @coderabbitai review
7- git checkout -b test/coderabbit && git push origin test/coderabbit
8- instalar a extensão

obs.:

### codeRabbit

https://app.coderabbit.ai/settings/repositories

codeRabbit: toda vez que fizer commit: O CodeRabbit detectará o seu commit e perguntará se você quer iniciar uma revisão. Mesmo antes do PR (dependendo da integração)
Opção 1 — Fluxo correto com PR (mais profissional)
Procedimento: Clique em No agora > Depois siga o fluxo padrão: git push origin feature... > Abra um Pull Request no GitHub >CodeRabbit vai rodar automaticamente no PR
Opção 2 — Revisão local rápida (menos formal)
Procedimento:Clique em Yes> Rodar uma revisão imediata> Não fica registrado no histórico do PR

# TestSprite MCP Server:

https://www.testsprite.com/dashboard/mcp/tests

# sonarcloud:

https://sonarcloud.io/project/

Seguir para a proxima task.

# Workflow de Desenvolvimento

Ótimo — seu fluxo está **conceitualmente certo**, só estava:

- Fora de ordem em alguns pontos
- Com numeração duplicada
- Com o TestSprite em uma posição que não reflete bem o papel dele
- Com pequenas correções de linguagem

Vou te devolver uma versão **corrigida, organizada e resumida**, com o **TestSprite no lugar mais lógico**, mantendo o modelo de agentes + CI.

Você pode copiar e colar:

---

# Workflow de Desenvolvimento (Ajustado)

Como funciona o processo de desenvolvimento:

1.  **Criação de Branch**
    Uma branch é criada (a partir da main/develop) para a nova feature ou correção.
    git checkout -b feature/nome-da-feature
    git checkout -b fix/nome-do-bug

2.  **Definição da Issue**

    2.1 Criação do Prompt da Issue
    Descrever claramente o problema/feature
    Definição do prompt e contexto da tarefa.

    2.2 Geração do Plano (Agent/Dev)
    O agente gera o plano.
    Revisar e ajustar o plano antes de prosseguir

3.  **Implementação**

    O agente implementa a funcionalidade conforme o plano.

    3.1 Execução do Plano
    Desenvolvimento assistido por IA seguindo o plano aprovado

    3.2 Revisão Manual Local do Código
    Leitura crítica do código gerado.
    Checklist:
    - Código legível e bem estruturado
    - Nomenclaturas seguem padrões do projeto
    - Lógica está clara e coesa
    - Sem código comentado ou debug logs
    - Tratamento de erros adequado

        3.2 Commits Semânticos
        `git add .`
        `git commit -m "feat: adiciona validação de email no formulário"`
        `git push origin feature/nome-da-feature`
        Conventional Commits (feat, fix, docs, refactor, test, etc.)

4.  **Validação (Testes)**

    4.1 Testes Manuais
    Validação manual básica da funcionalidade.

    4.2 Testes Automatizados da Feature
    Criação/ajuste de testes:
    - Testes unitários (funções, componentes isolados)
    - Testes de integração (fluxos completos)
    - Testes E2E (se aplicável)

        4.3 Execução Local
        Testes automatizados validam o comportamento da aplicação.
        npm test -- --coverage
        Meta mínima: 80% de cobertura nas áreas modificadas

        4.4 Execução de Testes via TestSprite (MCP)
        O TestSprite executa e orquestra cenários automatizados de teste
        Validar: Casos de uso complexos e regressões

        4.4 Commits pequenos e semânticos.
        `git add .` → `git commit -m "test:..."` → `git push`

5.  **Code Review**

        5.1 Abertura de Pull Request (PR)
        O código é submetido para revisão via Pull Request.
        ex.: Template do PR: Título do PR ## Contexto ## Alterações ## Como testar ## Lista de verificação

        5.2 Análise do Diff
        Visualizar as mudanças (diff) -> Revisão manual do código gerado.

        5.3 Revisão Automatizada (CodeRabbit)
        O CodeRabbit analisa o PR (Padrões arquiteturais, Vulnerabilidades de segurança, Code smells e anti-patterns, Qualidade de testes).
        Responder aos comentários e ajustar código

        5.4 CI (GitHub Actions)
        O pipeline executa:
        - Build do projeto
        - Linting (ESLint, Pylint, etc.)
        - Testes automatizados
        - Verificação de cobertura
        - Validações de segurança

        5.5 Análise Estática (SonarCloud)
        Métricas analisadas:
        - Bugs potenciais
        - Vulnerabilidades
        - Code smells
        - Duplicação de código
        - Complexidade ciclomática
        - Cobertura de testes

6.  **Quality Gates**

    6.1 Condições de Merge
    Merge bloqueado se qualquer check falhar.
    O merge só é permitido se CodeRabbit, SonarCloud e testes estiverem aprovados.
    Bloqueios automáticos se:
    - ❌ Testes falhando
    - ❌ Cobertura abaixo do threshold
    - ❌ CodeRabbit com issues críticas
    - ❌ SonarCloud Quality Gate failed
    - ❌ Build quebrado
    - ❌ Conflitos de merge não resolvidos

        6.2 Correções Iterativas de apontamentos anteriores
        Corrige na mesma branch
        `git add .` → `git commit -m "fix: ..."` → `git push`

        6.3 Repetir: Até todos os checks passarem ✅

7.  **Integração**

        7.1 Aprovação Final
        Requisitos:
        - ✅ Todos os checks passando
        - ✅ Aprovação de pelo menos 1 revisor (se aplicável)
        - ✅ Conflitos resolvidos
        - ✅ Quality gates satisfeitos

        7.2 Merge Strategy
        - Fazer o Merge: Clique no botão "Merge pull request" na interface do GitHub
        - Ma máquina local:
            - Voltar para a branch principal:git checkout main
            - Atualizar a branch main com as mudanças do GitHub:git pull origin main (Buscar e mergear mudanças do remote)
            - Deletar a branch local (safe delete): git branch -d fix/coderabbit-config
            - Verificar o status: git status, git branch -a e git log --oneline -5
        (Squash and merge (recomendado), Rebase and merge, Merge commit)

        7.3 Pós-Merge
        - Deletar a branch local: git branch -d fix/coderabbit-config
        - Deletar a branch remota: git push origin --delete fix/coderabbit-config
        - Voltar para main/develop: git checkout main > git pull origin main
        - Verificar se o deploy automático funcionou (se houver)
        - Confirmar que a issue relacionada foi fechada
        - Monitorar logs/métricas

### Métricas de Sucesso:

Lead Time: Tempo da issue até produção
Cycle Time: Tempo de codificação até merge
Deployment Frequency: Frequência de deploys
Change Failure Rate: % de deploys com problemas
Code Coverage: % de cobertura de testes
Quality Gate Pass Rate: % de PRs aprovados no SonarCloud

Task_02:

Seguir para a próxima task.
