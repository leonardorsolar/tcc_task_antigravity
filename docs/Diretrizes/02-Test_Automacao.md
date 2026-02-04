# sonarcloud

https://sonarcloud.io/ (logar com o github)
configurado o SonarCloud via GitHub Actions (Continuons integration)

Como usar:

Git push: O SonarCloud roda automaticamente

Na página do projeto no SonarCloud, você verá o status da análise.

1. Overview (Visão geral)
2. Main Branch (Branch principal)
3. Pull Requests
4. Branches

---

1. Overview (Visão geral)

- Main Branch Status (Failed or Passed)

2. Main Branch (Branch principal)

- Summary->Overall Code (estado geral da base de código): Reliability(confiabilidade), Security(segurança), Maintainability(manutenibilidade)
- Issues (Problemas)
    - Severity (Severidade): Critical(crítica), Major(maior), Minor(menor), Info(informação)
    - Type (Tipo): Bug(bug), Vulnerability(vulnerabilidade), Code Smell(cheiro de código)
        - Onde está o problema, Por que isso é um problema, atividade e Mais informações
            - Alteração de status:
                - Accept(Aceitar)
                    - Problema válido, mas não será corrigido agora. É aceitável por enquanto.
                - False Positive(Falso Positivo)
                    - A análise está incorreta
                - Confirm(Confirmar)
                    - Deprecated(Obsoleto)
                - Fixed(Corrigido)
                    - Deprecated(Obsoleto)
- Code Smells (Cheiros de código): algo pode estar errado no design ou na estrutura, mesmo que o código funcione.
- Security Hotspots (Pontos de atenção de segurança)
- Coverage (Cobertura de testes)
- Duplications (Duplicações)
- Lines of Code (Linhas de código)
- Activity (Atividade)

ver

---

# Coderrabit

https://app.coderabbit.ai/login

- git checkout -b test/coderabbit && git push origin test/coderabbit
