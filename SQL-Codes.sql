-- Tabela de Usuários
CREATE TABLE users (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(510) NOT NULL,
   email VARCHAR(254) NOT NULL UNIQUE,
   password VARCHAR(256) NOT NULL,
   date DATETIME NOT NULL,
   description TEXT,
   gender VARCHAR(62),
   premium DATETIME,
   userType INT NOT NULL
);
 
-- Tabela de Aulas
CREATE TABLE classes (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   instructorId INT NOT NULL,
   title VARCHAR(255) NOT NULL,
   description TEXT,
   creationDate DATETIME NOT NULL,
   cost DECIMAL(10, 2) NOT NULL,
   extraFiles TEXT[],
   tags TEXT[],
   FOREIGN KEY (instructorId) REFERENCES users(id)
);
 
-- Tabela de Compras
CREATE TABLE sells (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   studentId INT NOT NULL,
   classId INT NOT NULL,
   date DATETIME NOT NULL,
   cost DECIMAL(10, 2) NOT NULL,
   FOREIGN KEY (studentId) REFERENCES users(id),
   FOREIGN KEY (classId) REFERENCES classes(id)
);
 
-- Tabela de Avaliações
CREATE TABLE evaluations (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   classId INT NOT NULL,
   studentId INT NOT NULL,
   note DECIMAL(1, 1) NOT NULL,
   contents TEXT,
   date DATETIME NOT NULL,
   FOREIGN KEY (classId) REFERENCES classes(id),
   FOREIGN KEY (studentId) REFERENCES users(id)
);
 
-- Tabela de Mensagens
CREATE TABLE messages (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   senderId INT NOT NULL,
   recipientId INT NOT NULL,
   contents TEXT NOT NULL,
   date DATETIME NOT NULL,
   FOREIGN KEY (senderId) REFERENCES users(id),
   FOREIGN KEY (recipientId) REFERENCES users(id)
);
 
-- Tabela de Fórum
CREATE TABLE forum (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   authorId INT NOT NULL,
   title VARCHAR(255) NOT NULL,
   contents TEXT NOT NULL,
   date DATETIME NOT NULL,
   FOREIGN KEY (authorId) REFERENCES users(id)
);
