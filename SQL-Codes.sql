-- Tabela de Usuários
CREATE TABLE Usuarios (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   nome VARCHAR(510) NOT NULL,
   email VARCHAR(254) NOT NULL UNIQUE,
   senha VARCHAR(255) NOT NULL,
   criado_em DATETIME NOT NULL,
   perfil_descricao TEXT,
   genero VARCHAR(62),
   premium DATETIME,
   tipo INT NOT NULL
);
 
-- Tabela de Aulas
CREATE TABLE Aulas (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   instrutor_id INT NOT NULL,
   titulo VARCHAR(255) NOT NULL,
   descricao TEXT,
   data DATETIME NOT NULL,
   preco DECIMAL(10, 2) NOT NULL,
   arquivos_extras JSON,
   FOREIGN KEY (instrutor_id) REFERENCES Usuarios(id)
);
 
-- Tabela de Compras
CREATE TABLE Compras (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   aluno_id INT NOT NULL,
   aula_id INT NOT NULL,
   data_compra DATETIME NOT NULL,
   preco DECIMAL(10, 2) NOT NULL,
   FOREIGN KEY (aluno_id) REFERENCES Usuarios(id),
   FOREIGN KEY (aula_id) REFERENCES Aulas(id)
);
 
-- Tabela de Avaliações
CREATE TABLE Avaliacoes (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   aula_id INT NOT NULL,
   aluno_id INT NOT NULL,
   nota DECIMAL(1, 1) NOT NULL,
   comentario TEXT,
   data_avaliacao DATETIME NOT NULL,
   FOREIGN KEY (aula_id) REFERENCES Aulas(id),
   FOREIGN KEY (aluno_id) REFERENCES Usuarios(id)
);
 
-- Tabela de Mensagens
CREATE TABLE Mensagens (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   remetente_id INT NOT NULL,
   destinatario_id INT NOT NULL,
   conteudo TEXT NOT NULL,
   enviado_em DATETIME NOT NULL,
   FOREIGN KEY (remetente_id) REFERENCES Usuarios(id),
   FOREIGN KEY (destinatario_id) REFERENCES Usuarios(id)
);
 
-- Tabela de Fórum
CREATE TABLE Forum (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   autor_id INT NOT NULL,
   titulo VARCHAR(255) NOT NULL,
   conteudo TEXT NOT NULL,
   data_postagem DATETIME NOT NULL,
   FOREIGN KEY (autor_id) REFERENCES Usuarios(id)
);
