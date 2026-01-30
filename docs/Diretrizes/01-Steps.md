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
                "API_KEY": "sk-user-wNEQR9bKvZXdJdyAKo6Pf_UzdghYb9Tm18Vm-K32h2zJrKjbMiFItYaUWG0otUuXj_c7dtRXZSpqpPykUJfSvnH9TpjQR-ah6hwtVD8EYsMcgCoRdviBR_dB73YMG-GPFvo"
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

Seguir para a proxima task.

Task_02:

Seguir para a proxima task.
