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

1. **Criação de Branch**
   Uma branch é criada para a nova feature ou correção.

2. **Criação do Prompt da Issue**
   Definição do prompt e contexto da tarefa.

3. **Criação do Plano da Issue**
   O agente gera o plano, que é revisado e aprovado.

4. **Execução do Plano (Implementação)**
   O agente implementa a funcionalidade conforme o plano.

5. **Revisão Manual do Código Gerado**
   O desenvolvedor revisa o código implementado.

6. **Testes Manuais**
   Validação manual básica da funcionalidade.

7. **Criação de Testes Automatizados da Feature**
   Desenvolvimento de testes unitários e/ou de integração.

8. **Execução de Testes Automatizados (Local)**
   Testes automatizados validam o comportamento da aplicação.

9. **Commit Local**
   Código aprovado localmente:
   `git add .` → `git commit`

10. **Abertura de Pull Request (PR)**
    O código é submetido para revisão via Pull Request.

11. **Revisão Automatizada (CodeRabbit)**
    O CodeRabbit analisa o PR (arquitetura, segurança, boas práticas, testes).

12. **CI (GitHub Actions)**
    O pipeline executa build, testes e validações automatizadas.

13. **Análise Estática (SonarCloud)**
    O SonarCloud avalia métricas de qualidade, bugs, vulnerabilidades e hotspots.

14. **Execução de Testes via TestSprite (MCP)**
    O TestSprite executa e orquestra cenários automatizados de teste no contexto do PR/CI.

15. **Quality Gates**
    O merge só é permitido se CodeRabbit, SonarCloud, TestSprite e testes estiverem aprovados.

16. **Merge no Branch Principal**
    Após aprovação, o código é integrado ao branch principal.

Task_02:

Seguir para a próxima task.
