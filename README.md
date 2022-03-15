# Curso Front-end
#### EBAC

# GIT

## Conceitos de versionamento
    - Histórico
    - Controle de versão
    - Quem alterou
    - O quê alterou
    - Quando alterou
    - Todos os arquivos
    - Evolução contínua

Arquivo A │  Versão 1 │ Versão 2 
Arquivo B │  Versão 1 │ Versão 2 

## Instalação Git
https://git-scm.com/

- Windows: https://git-scm.com/download/win
- Linux (apt-get): sudo apt-get install git
- Mac (brew): brew install git
## Criar conta no Github

## Clonar o projeto
git clone https://github.com/cavalcantemmarcelo/curso-frontend.git
## Commits
Informação de alteração

- após testado todo seu código
- git add *
- git commit -m "mensagem"
- git push (enviar alterações para o repositório Github)
- git pull (puxar / trazer alterações do Github para sua maquina)
- após testado todo seu codigo
- teste para o pull


## GitFlow
Fluxo do Git

### Branchs
são ramificações do código / versões paralelas

-main / master (principal, a raiz e a que deve permanecer funcional)(quando o projeto é publicado)
-develop (uma branch separada para ser usada enquanto o código está sendo desenvolvido, não afetando a principal)
-DOD Definition of Done: critério de aceite
-versionamento (versões do codigo para controle de atualização)
-versão 0.2.11 (nivel de versão principal,atualização daquela versão, correção de bugs)

git checkout -b "nome da branch" (cria uma branch)
git checkout "nome da branch" (muda para aquela branch)

### Merge
Mescla de branchs