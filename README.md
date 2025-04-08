# Blob

Um site para visualizar a temperatura de uma cidade.

## Tecnologias Utilizadas

- `Next.js`
- `Tailwind CSS`
- Consumo de API

## Telas

- **Login**: `/login`
- **Cadastro**: `/register`
- **Tela Principal**: `/`
- **Erro**: `/` (exibida em caso de erro na requisição)

## Navegação

Por padrão, o site inicia na **Tela Principal** (`/`).  
Caso queira acessar a tela de **Login** ou **Cadastro**, utilize as URLs `/login` ou `/register`.

Se quiser visualizar a tela de erro, acesse `/error`. Essa URL foi criada apenas para demonstração.

> **Observação:** As telas de Login e Cadastro não estão conectadas a um backend. Basta clicar em **"Login"** ou **"Sign Up"** que você será redirecionado automaticamente para a **Tela Principal**.

## Configuração

> Altere o arquivo de ambiente:

```sh
.env.test → .env.development
```
