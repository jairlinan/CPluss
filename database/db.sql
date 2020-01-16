CREATE DATABASE dbcerganpluss;

USE dbcerganpluss;

CREATE TABLE proveedor (
	cc INT UNSIGNED NOT NULL PRIMARY KEY,
    fullname VARCHAR(80) NOT NULL,
    dir VARCHAR(60),
    phone VARCHAR(10) not null
);

SHOW TABLES;

DESCRIBE proveedor;

CREATE TABLE finca (
	id INT UNSIGNED auto_increment PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50),
    ccproveedor INT UNSIGNED not null,
    CONSTRAINT fk_finca FOREIGN KEY(ccproveedor) REFERENCES proveedor(cc)
);

INSERT INTO proveedor (cc, fullname, dir, phone) VALUES (12645627, "Jair Isaac Liñan", "Calle 11 # 3 - 25, Cucuta", "3153183792");
INSERT INTO proveedor (cc, fullname, dir, phone) VALUES (37, "Aura Maria Franco", "Calle 11 # 3 - 25, Cucuta", "3162120327");

show tables;

select * from proveedor;

UPDATE proveedor set cc = 3773 where cc = 37;

select * from proveedor order by fullname asc;

drop table finca;
insert into finca (name, location, ccproveedor) VALUES ("Las Marias", "Cucuta", 12645627);
insert into finca (name, location, ccproveedor) VALUES ("La bendición", "Chinacota", 37);
select * from finca;

CREATE TABLE animal (
	id int unsigned auto_increment primary key,
    chapeta varchar(8),
    peso float(6,2) unsigned not null,
    color varchar(15),
    genero char(2) not null,
    vrmacho int unsigned,
    vrhembra int unsigned,
     fincaid INT UNSIGNED not null,
    CONSTRAINT fk_animal FOREIGN KEY(fincaid) REFERENCES finca(id)
);

show tables;

drop table animal;

insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid) values (null, 580, "marron", "M", 4200, null, 1);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid) values (null, 520, "chocolate", "M", 4200, null, 1);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid) values (null, 480, "blanco", "H", null, 3500, 1);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid) values (null, 450, "negra", "H", null, 3500, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid) values ( null, 580, "negro", "M", 4200, null, 1);

select * from animal where fincaid = 1;