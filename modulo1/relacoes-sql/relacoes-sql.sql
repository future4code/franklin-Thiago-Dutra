USE `franklin-thiago-dutra`

a) Explique o que é uma chave estrangeira

R: Uma chave estrangeira é uma chave que faz referência a uma chave primaria de outra tabela

b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
R: INSERT INTO Rating VALUES('001','muito bom',10,'002')


c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
R: É retornado um erro.

d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
ALTER TABLE Filmes DROP COLUMN avaliacao;

e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
delete * from Filmes WHERE id="001"
Não é possível deletar uma registro que tenha uma relacionamento com outra tabela;

a) Explique, com as suas palavras, essa tabela
Essa é uma tabela com apenas duas colunas, ambas são chaves estrangeiras, ou seja, fazem referência a um registro de outra tabela.

b) Crie, ao menos, 6 relações nessa tabela 
INSERT INTO MovieCast VALUES ('001', '002'),
    ('001', '005'),('003', '004'),('003', '005'),
    ('004', '002'),('004','004')
    
    select * from MovieCast
    
c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
É retornado um erro pois não é possível fazer referência a uma chave que não existe.

d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
Não é possível deletar uma registro que tenha uma relacionamento com outra tabela;

SELECT * FROM Filmes  
INNER JOIN Rating ON Filmes.id = Rating.movie_id;

a) Explique, com suas palavras, a query acima. O que é o operador ON?
operador que junta duas tabelas através de uma foreinkey

SELECT Filmes.id, Filmes.name, Rating.rate FROM Filmes JOIN Rating ON Filmes.id = Rating.movie_id;
