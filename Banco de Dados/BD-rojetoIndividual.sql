create database ProjetoIndividual;
use ProjetoIndividual;

create table usuario(
idUsuario int primary key auto_increment not null,
email varchar(45) unique not null,
usuario varchar(45) not null,
senha varchar(45)
);show tables;

describe usuario;

select * from usuario;

CREATE TABLE armas (
    idArma INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    preço INT,
    tipoMunição VARCHAR(50),
    porte ENUM('pequeno', 'médio', 'grande'),
    danoMin INT,
    danoMax INT,
    imagem VARCHAR(255),
    tipo VARCHAR(50)
);

select * from armas;

drop table armas;


INSERT INTO armas (nome, preço, tipoMunição, porte, danoMin, danoMax, imagem, tipo) VALUES
('Berthier Mle 1892', 150, 'Long', 'grande', 132, 132, 'https://hunt-stats.com/equipment/weapons/berthier_1892.png', 'Rifle'),
('Sparks LRR Sniper', 199, 'Long', 'grande', 149, 149, 'https://hunt-stats.com/equipment/weapons/sparks_sniper.png', 'Rifle'),
('Mosin-Nagant M1891', 490, 'Long', 'grande', 136, 136, 'https://hunt-stats.com/equipment/weapons/mosin-nagant.png', 'Rifle'),
('Lebel 1886', 397, 'Long', 'grande', 132, 132, 'https://hunt-stats.com/equipment/weapons/lebel_1886.png', 'Rifle'),
('Springfield 1866', 34, 'Medium', 'grande', 132, 132, 'https://hunt-stats.com/equipment/weapons/springfield_1866.png', 'Rifle'),
('Martini-Henry IC1', 122, 'Long', 'grande', 143, 143, 'https://hunt-stats.com/equipment/weapons/martini-henry.png', 'Rifle'),
('Vetterli 71 Karabiner Cyclone', 130, 'Medium', 'grande', 130, 130, 'https://hunt-stats.com/equipment/weapons/vetterli_71_cyclone.png', 'Rifle'),
('Winfield M1876 Centennial', 150, 'Medium', 'grande', 110, 110, 'https://hunt-stats.com/equipment/weapons/centennial.png', 'Rifle'),
('Drilling', 275, 'Medium/Shotgun', 'médio', 10, 125, 'https://hunt-stats.com/equipment/weapons/drilling.png', 'Shotgun'),
('Winfield 1893 Slate Riposte', 95, 'Shotgun', 'médio', 10, 125, 'https://hunt-stats.com/equipment/weapons/slate_riposte.png', 'Shotgun'),
('Romero 77 Alamo', 68, 'Shotgun', 'médio', 10, 200, 'https://hunt-stats.com/equipment/weapons/romero_77_alamo.png', 'Shotgun'),
('Caldwell Rival 78', 150, 'Shotgun', 'médio', 10, 190, 'https://hunt-stats.com/equipment/weapons/rival_78.png', 'Shotgun'),
('Specter 1882 Bayonet', 190, 'Shotgun', 'médio', 10, 190, 'https://hunt-stats.com/equipment/weapons/specter_1882_bayonet.png', 'Shotgun'),
('Winfield 1887 Terminus', 150, 'Shotgun', 'médio', 10, 190, 'https://hunt-stats.com/equipment/weapons/terminus.png', 'Shotgun'),
('Nagant M1895', 24, 'Compact', 'pequeno', 91, 91, 'https://hunt-stats.com/equipment/weapons/nagant_m1895.png', 'Pistol'),
('Caldwell Conversion Pistol', 26, 'Compact', 'pequeno', 104, 104, 'https://hunt-stats.com/equipment/weapons/conversion.png', 'Pistol'),
('Bornheim No. 3 Extended', 201, 'Compact', 'pequeno', 74, 74, 'https://hunt-stats.com/equipment/weapons/bornheim_no._3_extended.png', 'Pistol'),
('Dolch 96', 750, 'Special', 'pequeno', 97, 97, 'https://hunt-stats.com/equipment/weapons/dolch_96.png', 'Pistol'),
('LeMat Mark II', 95, 'Compact/Shotgun', 'pequeno', 10, 97, 'https://hunt-stats.com/equipment/weapons/lemat.png', 'Pistol'),
('Caldwell Pax', 75, 'Medium', 'médio', 110, 110, 'https://hunt-stats.com/equipment/weapons/pax.png', 'Pistol');

select * from armas;

CREATE TABLE detalhesArma (
    idDetalhe INT AUTO_INCREMENT PRIMARY KEY,
    idArma INT NOT NULL,
    tiposMunicao VARCHAR(255),
    -- Dano com munição NORMAL por distância
    danoNormal_25m INT,
    danoNormal_50m INT,
    danoNormal_100m INT,
    danoNormal_150m INT,
    -- Dano com munição VENENO por distância
    danoVeneno_25m INT,
    danoVeneno_50m INT,
    danoVeneno_100m INT,
    danoVeneno_150m INT,
    -- Dano com munição SANGRAMENTO por distância
    danoSangramento_25m INT,
    danoSangramento_50m INT,
    danoSangramento_100m INT,
    danoSangramento_150m INT,
    -- Dano com munição EXPLOSIVA por distância
    danoExplosiva_25m INT,
    danoExplosiva_50m INT,
    danoExplosiva_100m INT,
    danoExplosiva_150m INT,
    -- Dano com munição INCENDIÁRIA por distância
    danoIncendiaria_25m INT,
    danoIncendiaria_50m INT,
    danoIncendiaria_100m INT,
    danoIncendiaria_150m INT,
    -- Dano com munição SUBSÔNICA por distância
    danoSubsonica_25m INT,
    danoSubsonica_50m INT,
    danoSubsonica_100m INT,
    danoSubsonica_150m INT,
    alcanceEfetivo INT, 
    tempoRecarga FLOAT,
    cadenciaTiro INT,
    descricao TEXT, 
    FOREIGN KEY (idArma) REFERENCES armas(idArma)
);

INSERT INTO detalhesArma 
(idArma, tiposMunicao, 
danoNormal_25m, danoNormal_50m, danoNormal_100m, danoNormal_150m,
danoVeneno_25m, danoVeneno_50m, danoVeneno_100m, danoVeneno_150m,
danoSangramento_25m, danoSangramento_50m, danoSangramento_100m, danoSangramento_150m,
danoExplosiva_25m, danoExplosiva_50m, danoExplosiva_100m, danoExplosiva_150m,
danoIncendiaria_25m, danoIncendiaria_50m, danoIncendiaria_100m, danoIncendiaria_150m,
danoSubsonica_25m, danoSubsonica_50m, danoSubsonica_100m, danoSubsonica_150m,
alcanceEfetivo, tempoRecarga, cadenciaTiro, descricao)
VALUES
-- Berthier Mle 1892 (Rifle médio)
(1, 'Normal, Dumdum, Incendiária', 
 132, 120, 95, 70,
 NULL, NULL, NULL, NULL,
 132, 115, 82, 52,
 NULL, NULL, NULL, NULL,
 132, 118, 90, 65,
 NULL, NULL, NULL, NULL,
 250, 2.5, 40,
 'Rifle de repetição com carregador interno de 3 tiros. Alta precisão e dano consistente.'),

-- Sparks LRR Sniper (Rifle longo)
(2, 'Normal, Dumdum, Incendiária',
 149, 145, 130, 100,
 NULL, NULL, NULL, NULL,
 149, 140, 115, 80,
 NULL, NULL, NULL, NULL,
 149, 142, 125, 95,
 NULL, NULL, NULL, NULL,
 300, 3.8, 26, 
 'Rifle de um tiro com alcance extremo. Dano muito alto mas recarga lenta.'),

-- Mosin-Nagant M1891 (Rifle longo)
(3, 'Normal, Incendiária, Explosiva',
 136, 130, 115, 90,
 NULL, NULL, NULL, NULL,
 NULL, NULL, NULL, NULL,
 136, 125, 100, 70,
 136, 128, 110, 85,
 NULL, NULL, NULL, NULL,
 280, 3.5, 38, 
 'Rifle de repetição com carregador destacável. Excelente cadência para um rifle longo.'),

-- Lebel 1886 (Rifle longo)
(4, 'Normal, Dumdum, Incendiária',
 132, 125, 105, 80,
 NULL, NULL, NULL, NULL,
 132, 122, 95, 65,
 NULL, NULL, NULL, NULL,
 132, 123, 100, 75,
 NULL, NULL, NULL, NULL,
 270, 3.0, 35, 
 'Rifle de repetição com carregador tubular. Boa cadência e dano consistente.'),

-- Springfield 1866 (Rifle médio)
(5, 'Normal, Explosiva, Incendiária',
 132, 120, 90, 65,
 NULL, NULL, NULL, NULL,
 NULL, NULL, NULL, NULL,
 132, 110, 75, 45,
 132, 115, 85, 60,
 NULL, NULL, NULL, NULL,
 230, 2.8, 30, 
 'Rifle de um tiro com versões de munição especial. Dano decente mas recarga lenta.'),

-- Martini-Henry IC1 (Rifle longo)
(6, 'Normal, Incendiária, Explosiva',
 143, 135, 115, 85,
 NULL, NULL, NULL, NULL,
 NULL, NULL, NULL, NULL,
 143, 125, 95, 60,
 143, 130, 105, 75,
 NULL, NULL, NULL, NULL,
 260, 3.2, 28, 
 'Rifle de um tiro com ação de alavanca. Dano muito alto mas cadência baixa.'),

-- Vetterli 71 Karabiner (Rifle médio)
(7, 'Normal, Dumdum, Incendiária',
 130, 120, 95, 70,
 NULL, NULL, NULL, NULL,
 130, 117, 85, 55,
 NULL, NULL, NULL, NULL,
 130, 118, 90, 65,
 NULL, NULL, NULL, NULL,
 240, 2.3, 48, 
 'Rifle de repetição com boa cadência de tiro. Versátil para combates em média distância.'),

-- Winfield M1876 Centennial (Rifle curto)
(8, 'Normal, Dumdum, Incendiária',
 110, 100, 80, 60,
 NULL, NULL, NULL, NULL,
 110, 97, 70, 45,
 NULL, NULL, NULL, NULL,
 110, 98, 75, 55,
 NULL, NULL, NULL, NULL,
 220, 2.0, 50, 
 'Rifle de repetição com carregador tubular. Alta cadência mas dano reduzido.'),

-- Drilling (Combinada)
(9, 'Normal, Slug, Incendiária',
 125, 100, 70, 40,
 NULL, NULL, NULL, NULL,
 NULL, NULL, NULL, NULL,
 NULL, NULL, NULL, NULL,
 125, 95, 65, 38,
 NULL, NULL, NULL, NULL,
 180, 4.0, 20, 
 'Arma combinada com dois canos de espingarda e um rifle. Versátil mas complexa.'),

-- Winfield 1893 Slate Riposte (Espingarda)
(10, 'Normal, Slug, Incendiária',
 125, 100, 70, 40,
 NULL, NULL, NULL, NULL,
 NULL, NULL, NULL, NULL,
 NULL, NULL, NULL, NULL,
 125, 95, 65, 38,
 NULL, NULL, NULL, NULL,
 150, 2.5, 60, 
 'Espingarda de ação por bombeamento com baioneta. Alta cadência para uma espingarda.'),

-- Nagant M1895 (Revólver)
(15, 'Normal, Veneno, Dumdum',
 91, 80, 60, 40,
 91, 75, 50, 30,
 91, 78, 55, 35,
 NULL, NULL, NULL, NULL,
 NULL, NULL, NULL, NULL,
 NULL, NULL, NULL, NULL,
 100, 1.8, 70, 
 'Revólver de baixo dano mas alta cadência. Silencioso quando equipado com supressor.'),

-- Caldwell Conversion Pistol (Revólver)
(16, 'Normal, Dumdum, Incendiária',
 104, 90, 65, 40,
 NULL, NULL, NULL, NULL,
 104, 85, 55, 30,
 NULL, NULL, NULL, NULL,
 104, 88, 60, 35,
 NULL, NULL, NULL, NULL,
 110, 2.0, 60, 
 'Revólver balanceado com bom dano e cadência.');

 SELECT * FROM detalhesArma;

CREATE TABLE armasFavoritos (
    idUsuario INT,
    idArma INT,
    PRIMARY KEY (idUsuario, idArma),
    CONSTRAINT fk_usuario FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
    CONSTRAINT fk_arma FOREIGN KEY (idArma) REFERENCES armas(idArma)
);

select * from armasFavoritos;

--ATodas as armas favoritadas do sistema
SELECT af.idArma, a.nome, COUNT(*) AS TotalFavoritadas FROM armasFavoritos AS af 
JOIN armas AS a ON af.idArma = a.idArma
GROUP BY af.idArma, a.nome ORDER BY TotalFavoritadas DESC;

-- Tipos de munição mais favoritadas dentro das armas favoritadas
SELECT a.tipoMunição, COUNT(*) AS TipoMuniçãoMaisFavoritadas
FROM armasFavoritos AS af
JOIN armas AS a ON af.idArma = a.idArma
GROUP BY a.tipoMunição ORDER BY TipoMuniçãoMaisFavoritadas DESC;                                 

-- Arma Mais Favritada
SELECT a.tipo, COUNT(*) AS vezesFavoritados
FROM armas AS a
JOIN armasFavoritos AS af ON a.idArma = af.idArma
GROUP BY a.tipo
ORDER BY vezesFavoritados DESC LIMIT 1;

-- Arma Menos Favritada
SELECT a.tipo, COUNT(*) AS vezesFavoritados
FROM armas AS a
JOIN armasFavoritos AS af ON a.idArma = af.idArma
GROUP BY a.tipo
ORDER BY vezesFavoritados ASC LIMIT 1;

-- Armas Favoritadas pelo usuario
SELECT a.nome , a.imagem from armas as a join armasFavoritos as f on a.idArma = f.idArma where f.idUsuario = 4;

-- TESTES
SELECT idArma,idUsuario FROM armasFavoritos WHERE idUsuario = 1;


DELETE FROM armasFavoritos WHERE idArma = 1 AND idUsuario = 1;

drop table armasFavoritos;

INSERT INTO armasFavoritos (idUsuario, idArma) VALUES (1, 3);

