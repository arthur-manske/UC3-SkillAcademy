# Planejamento de Requisitos para Aplicação

## 1. Objetivo da Aplicação
Criar uma plataforma que permite que estudantes compartilhem e vendam seu conhecimento em forma de cursos e aulas ao vivo, promovendo a aprendizagem colaborativa. O foco é possibilitar que qualquer estudante, com conhecimento em um determinado assunto, possa criar e comercializar cursos e dar aulas, enquanto outros estudantes podem comprá-los para aprender novas habilidades, ou pagar pelo seu tempo de aula em tempo real.

---

## 2. Funcionalidades Principais
Liste as principais funcionalidades que a aplicação deve oferecer.

Aqui estão os **requisitos funcionais e não funcionais** detalhados para o projeto da plataforma de ensino colaborativo:

### 1. **Requisitos Funcionais**
  - Cadastro e Login
    1. Usuários (Instrutores e Alunos) devem poder se cadastrar e fazer login com e-mail e senha.
    2. O sistema deve permitir login via Google ou Facebook.
    3. Opção de recuperar senha caso o usuário esqueça.
    4. Perfis de Usuário
    5. Alunos e Instrutores devem ter perfis com foto, biografia e histórico de aulas ou cursos.
    6. Alunos e Instrutores podem editar suas informações a qualquer momento.
       
  - Criação de Aulas
    1. Instrutores podem criar aulas ao vivo com:
    2. Título, descrição, data e preço.
    3. Opção de gravar a aula para alunos premium.
    4. Instrutores podem subir arquivos extras, como PDFs.

  - Busca e Compra de Aulas
    1. Alunos podem buscar aulas por categoria, palavras-chave e nível (iniciante, intermediário, avançado).
    2. Alunos podem comprar aulas e receber notificações sobre as aulas agendadas.

  - Avaliação
    1. Após a aula, os alunos podem avaliar a qualidade do conteúdo e do instrutor.
    2. As avaliações ficam visíveis no perfil do instrutor.

  - Dashboard do Instrutor
    1. Instrutores podem acompanhar suas aulas, ganhos e avaliações em um painel simples.

  - Fórum
    1. Alunos podem fazer perguntas sobre as aulas e conversar com outros alunos ou instrutores.

### 2. **Requisitos Não-Funcionais**
  - Performance
    1. Respostas rápidas: até 2 segundos para carregar páginas e buscar aulas.
    2. Suportar até 1000 usuários ao mesmo tempo.

  - Segurança
    1. Criptografar senhas dos usuários.
    2. Proteger contra ataques como roubo de dados e acessos indevidos.

  - Compatibilidade
    1. Funcionar em navegadores populares como Chrome, Firefox, Safari e Edge.
    2. Adaptar o design para celulares e computadores.

  - Escalabilidade
    1. O sistema deve crescer de acordo com o aumento de usuários, sem travar ou ficar lento.
  
  - Backup
    1. Realizar backups regulares dos dados para garantir que nada seja perdido.

  - Modelo de Monetização
    1. O sistema deve implementar um **mecanismo de comissão**, onde a plataforma cobra uma taxa de 10% sobre cada transação realizada.
    2. Deve oferecer um **plano de assinatura premium** para remover anúncios e permitir que os alunos gravem e acessem as aulas gravadas posteriormente.

---

## 4. Requisitos Técnicos
Defina as tecnologias que serão utilizadas, tanto no frontend quanto no backend, além do banco de dados e hospedagem.

- **Frontend**:
  - Framework: React ou Vue.js.
  - Biblioteca de componentes: Material UI ou Bootstrap.
  - Responsividade: CSS Grid/Flexbox.

- **Backend**:
  - Linguagem: Node.js com Express.js.
  - APIs: REST (ou GraphQL).

- **Banco de Dados**:
  - Tipo: Relacional (MySQL ou PostgreSQL) ou NoSQL (MongoDB).
  - Estrutura: Tabelas ou coleções para usuários, mensagens, etc.

- **Hospedagem e Infraestrutura**:
  - Hospedagem: AWS, DigitalOcean ou Heroku.
  - Banco de Dados: RDS ou serviço gerenciado de banco de dados.
  - CDN: Cloudflare para acelerar a entrega de conteúdo.

---

## 5. Definição das APIs

### 5.1 APIs Internas
Estas são as APIs que a aplicação vai fornecer para que o frontend se comunique com o backend. Elas permitem que os usuários interajam com o sistema (ex.: login, envio de mensagens).

| Método | Rota           | Descrição                           | Parâmetros              | Resposta                     |
|--------|----------------|-------------------------------------|-------------------------|------------------------------|
| POST   | /login          | Autenticar usuário                  | { email, senha }         | Token de autenticação         |
| POST   | /register       | Registrar novo usuário              | { nome, email, senha }   | Confirmação de registro       |
| GET    | /messages       | Obter mensagens recebidas           | Token de autenticação    | Lista de mensagens            |
| POST   | /messages       | Enviar nova mensagem                | { conteúdo, desenho }    | Confirmação de envio          |
| PUT    | /profile        | Atualizar informações de perfil     | { nome, preferências }   | Perfil atualizado             |

### 5.2 APIs de Terceiros (Externas)
Estas são APIs de serviços externos que sua aplicação vai consumir para adicionar funcionalidades ou melhorar a experiência do usuário. Algumas APIs populares que podem ser utilizadas:

- **API de Autenticação** (ex.: Auth0, Firebase Auth):
  - Usada para gerenciar o login de usuários de forma segura.
  - **URL**: `https://auth0.com/docs/api`
  - **Função**: Facilitar a autenticação sem a necessidade de implementar do zero.
  
- **API de Armazenamento de Arquivos** (ex.: AWS S3, Firebase Storage):
  - Usada para armazenar imagens ou arquivos, como os desenhos enviados pelos usuários.
  - **URL**: `https://docs.aws.amazon.com/s3/index.html`
  - **Função**: Permitir que a aplicação armazene grandes arquivos em um ambiente externo, escalável e seguro.

- **API de Envio de Emails** (ex.: SendGrid, Mailgun):
  - Usada para enviar emails de confirmação, recuperação de senha, etc.
  - **URL**: `https://sendgrid.com/docs/for-developers/sending-email/api-getting-started/`
  - **Função**: Gerenciar o envio de emails automáticos sem a necessidade de um servidor de emails próprio.

- **API de Geolocalização** (ex.: Google Maps API):
  - Usada para exibir a localização de usuários, ou verificar a localização de quem envia ou recebe mensagens.
  - **URL**: `https://developers.google.com/maps/documentation`
  - **Função**: Adicionar mapas e localização à aplicação.

### 5.3 Integração com APIs de Terceiros
Para utilizar essas APIs externas, você precisará configurar chaves de API (API keys), que são credenciais para acessar esses serviços de forma segura. Cada serviço geralmente oferece documentação detalhada sobre como integrar a API ao seu sistema.

**Exemplo de Fluxo de Integração com uma API Externa**:
1. **Obter uma chave de API**: Vá ao site da API (ex.: Auth0) e crie uma conta. Geração da chave de API.
2. **Configurar no Backend**: Adicione essa chave como uma variável de ambiente para garantir segurança.
3. **Chamar a API no código**: Usar a chave de API no backend para autenticar e fazer chamadas de serviço.

---

## 6. Modelo de Dados
Defina as tabelas ou coleções que serão usadas no banco de dados.

### Exemplo: Tabela de Usuários

| Campo      | Tipo       | Descrição                            |
|------------|------------|--------------------------------------|
| id         | INT        | Identificador único do usuário       |
| nome       | VARCHAR(50)| Nome do usuário                      |
| email      | VARCHAR(100)| Email do usuário                    |
| senha      | VARCHAR(255)| Senha criptografada                 |
| criado_em  | DATETIME   | Data de criação do usuário           |

### Exemplo: Tabela de Mensagens

| Campo         | Tipo        | Descrição                          |
|---------------|-------------|------------------------------------|
| id            | INT         | Identificador único da mensagem    |
| remetente_id  | INT         | ID do usuário remetente            |
| destinatario_id | INT       | ID do usuário destinatário         |
| conteúdo      | TEXT        | Texto da mensagem                  |
| desenho       | BLOB        | Desenho enviado (opcional)         |
| enviado_em    | DATETIME    | Data de envio                      |

---

## 7. Protótipos Visuais
Liste ferramentas ou links de protótipos visuais que mostram como será o layout da aplicação.

- **Figma**: Link para os protótipos do frontend.
- **Wireframes**: Desenhos simples de como as páginas principais serão organizadas.

---

## 8. Cronograma de Desenvolvimento
Defina um cronograma com as fases do projeto e estimativas de tempo para cada etapa.

| Fase                      | Descrição                                  | Tempo Estimado       |
|----------------------------|--------------------------------------------|----------------------|
| Planejamento                | Definição de requisitos e arquitetura      | 1 semana             |
| Desenvolvimento do Backend  | Implementação das APIs e banco de dados    | 3 semanas            |
| Desenvolvimento do Frontend | Implementação do frontend e integração     | 3 semanas            |
| Testes                      | Testes funcionais e ajustes                | 1 semana             |
| Implantação                 | Deploy da aplicação em ambiente de produção| 1 semana             |

---

## 9. Equipe
Liste as pessoas responsáveis por cada área do projeto.

- **Gestor de Projeto**: Nome da pessoa responsável pela gestão do projeto.
- **Desenvolvedor Backend**: Nome da pessoa responsável pelo backend.
- **Desenvolvedor Frontend**: Nome da pessoa responsável pelo frontend.
- **Designer UX/UI**: Nome da pessoa responsável pelo design.

---

## 10. Documentação Técnica
Lembre-se de criar documentação para que os futuros desenvolvedores possam entender o projeto facilmente.

- Documentação das APIs.
- Explicação da estrutura do banco de dados.
- Guia de configuração e deploy.

---

## 11. Considerações Finais
Inclua aqui qualquer outra informação que seja relevante para o desenvolvimento do projeto, como recomendações de bibliotecas, dicas de otimização ou requisitos futuros.

---
