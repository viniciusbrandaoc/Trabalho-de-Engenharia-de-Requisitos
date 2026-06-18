## EcoRede — Trabalho de Engenharia de Requisitos ##

Aplicação web estática para gestão e monitoramento de coleta seletiva, desenvolvida como parte de um trabalho de Engenharia de Requisitos.

## Visão Geral

EcoRede permite o cadastro e login de dois perfis de usuário:
- **Morador Consciente**: solicita agendamento de coleta seletiva e visualiza histórico de coletas.
- **Cooperativa / Coletor**: acessa as solicitações de coleta e atualiza o status das coletas.

## Tecnologias

- HTML
- CSS
- JavaScript
- Armazenamento local do navegador (`localStorage` / `sessionStorage`)

## Arquivos do Projeto

- `index.html` — página de login e cadastro de usuários.
- `morador.html` — interface do morador para agendar coletas e ver histórico.
- `coletor.html` — interface do coletor para gerenciar solicitações de coleta.
- `app.js` — lógica compartilhada e manipulação de dados.
- `styles.css` — estilos visuais da aplicação.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/viniciusbrandaoc/Trabalho-de-Engenharia-de-Requisitos.git
   ```
2. Abra o diretório do projeto no navegador.
3. Acesse `index.html` para iniciar o sistema.

> Observação: como o projeto usa `localStorage`, recomenda-se abrir os arquivos via servidor local ou usar o modo de visualização do editor para evitar problemas de restrição de arquivos.

## Usuários de Demonstração

- Morador:
  - E-mail: `morador@eco.com`
  - Senha: `12345678`
- Coletor:
  - E-mail: `coletor@eco.com`
  - Senha: `12345678`

## Funcionalidades Principais

- Cadastro de usuário com validação básica.
- Login por perfil de usuário.
- Simulação de histórico de coletas para morador.
- Atualização de status de coleta para coletor.
- Exibição de mensagens de sucesso e erro.

## Observações

- Este projeto é uma aplicação de demonstração e usa armazenamento local do navegador.
- Não há backend implementado; todos os dados ficam no navegador do usuário.

