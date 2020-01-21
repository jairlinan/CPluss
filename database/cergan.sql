CREATE DATABASE dbcerganpluss;

USE dbcerganpluss;

CREATE TABLE users (
	iduser INT UNSIGNED auto_increment PRIMARY KEY,
    username VARCHAR(40) NOT NULL,
    password VARCHAR(30) NOT NULL,
    fullname VARCHAR(80) NOT NULL
);


CREATE TABLE proveedor (
    idprov int UNSIGNED auto_increment PRIMARY KEY,
	cc varchar(15) NOT NULL,
    fullname VARCHAR(80) NOT NULL,
    dir VARCHAR(60),
    phone VARCHAR(10) not null
);

SHOW TABLES;

DESCRIBE proveedor;

CREATE TABLE finca (
	idfinca INT UNSIGNED auto_increment PRIMARY KEY,
    namefinca VARCHAR(50) NOT NULL,
    location VARCHAR(50),
    provid INT UNSIGNED not null,
    CONSTRAINT fk_finca FOREIGN KEY(provid) REFERENCES proveedor(idprov)
);

CREATE TABLE compra (
	idcompra int unsigned auto_increment primary key,
    fecha varchar(10),
    guia varchar(25),
    vrflete int unsigned not null,
    nviajes int unsigned not null,
    fincaid INT UNSIGNED not null,
    CONSTRAINT fk_compra FOREIGN KEY(fincaid) REFERENCES finca(idfinca)
);

CREATE TABLE animal (
	idanimal int unsigned auto_increment primary key,
    chapeta varchar(8),
    peso varchar(8) not null,
    color varchar(15),
    genero char(2) not null,
    vrmacho varchar(10),
    vrhembra varchar(10),
    fincaid INT UNSIGNED not null,
    compraid INT UNSIGNED not null,
    CONSTRAINT fk_animal FOREIGN KEY(fincaid) REFERENCES finca(idfinca),
    CONSTRAINT fk_compras FOREIGN KEY(compraid) REFERENCES compra(idcompra)
);



INSERT INTO proveedor (cc, fullname, dir, phone) VALUES (123451, "ILARIO CAMACHO", "Pendiente", "Pendiente");
INSERT INTO proveedor (cc, fullname, dir, phone) VALUES (123452, "CLEMENTE VILLAREAL", "Pendiente", "Pendiente");
INSERT INTO proveedor (cc, fullname, dir, phone) VALUES (123453, "PEDRO PARADA", "Pendiente", "Pendiente");
INSERT INTO proveedor (cc, fullname, dir, phone) VALUES (123454, "EVARISTO CHACON", "Pendiente", "Pendiente");
INSERT INTO proveedor (cc, fullname, dir, phone) VALUES (123455, "MARIA RODRIGUEZ", "Pendiente", "Pendiente");


insert into finca (namefinca, location, ccproveedor) VALUES ("LA POPA", "Pendiente", 123451);
insert into finca (namefinca, location, ccproveedor) VALUES ("LA ESMERALDA", "Pendiente", 123452);
insert into finca (namefinca, location, ccproveedor) VALUES ("LAS DELICIAS", "Pendiente", 123453);
insert into finca (namefinca, location, ccproveedor) VALUES ("LAS PALMERAS", "Pendiente", 123454);
insert into finca (namefinca, location, ccproveedor) VALUES ("LA SONORA", "Pendiente", 123455);

insert into compra (fecha, guia, vrflete, nviajes, fincaid) VALUES ("18/01/2020", "123", 400000, 2, 6);



insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 580, "marron", "M", 4200, 0, 6, 1);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 520, "chocolate", "M", 4200, 0, 6, 1);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 400, "pintada", "H", 0, 3500, 6, 1);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 380, "blanco", "H", 0, 3500, 6,  1);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values ( null, 580, "negro", "M", 4200, 0, 6, 1);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 580, "marron", "M", 4200, 0, 6, 1);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 520, "chocolate", "M", 4200, 0, 6, 1);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 480, "blanco", "H", 0, 3500, 6, 1);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 450, "negra", "H", 0, 3500, 6, 1);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values ( null, 580, "negro", "M", 4200, 0, 6, 1);




insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 580, "marron", "M", 4200, 0, 3, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 520, "chocolate", "M", 4200, 0, 3, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 480, "blanco", "H", 0, 3500, 3, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 450, "negra", "H", 0, 3500, 3, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values ( null, 580, "negro", "M", 4200, 0, 3, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 580, "marron", "M", 4200, 0, 3, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 520, "chocolate", "M", 4200, 0, 3, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 480, "blanco", "H", 0, 3500, 3, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 450, "negra", "H", 0, 3500, 3, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values ( null, 580, "negro", "M", 4200, 0, 3, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 580, "marron", "M", 4200, 0, 3, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 520, "chocolate", "M", 4200, 0, 3, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 480, "blanco", "H", 0, 3500, 3, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values (null, 450, "negra", "H", 0, 3500, 3, 2);
insert into animal (chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid) values ( null, 580, "negro", "M", 4200, 0, 3, 2);



show tables;

select * from proveedor;

UPDATE proveedor set cc = 3773 where cc = 37;

select * from proveedor order by fullname asc;

drop table finca;


select name, id
from finca inner join compra on finca.id = compra.fincaid
where compra.id = 1;





chapeta, peso, color, genero, vrmacho, vrhembra,

select * from finca;

/*
        segunda tabla (Modificada)
*/



select namefinca, idcompra
from finca inner join compra on finca.id = compra.fincaid
where compra.id = 1;


show tables;

drop table animal;




select namefinca, fincaid, chapeta, peso, color, genero, vrmacho, vrhembra
from animal inner join finca on animal.fincaid = finca.id
where animal.fincaid = 1;

select * from animal where fincaid = 1;

/*------- Muestra las finca con un ID ----------*/
select * from finca;
select * from finca where finca.id = 1;

/*------- Muestra los proveedores y las finca ----------*/
select  fullname, namefinca
from proveedor inner join finca on proveedor.cc = finca.ccproveedor;

/*------- Muestra los animales de todas las fincas ----------*/
select namefinca, chapeta, peso, genero  
from finca inner join animal on finca.id = animal.fincaid;

/*------- Selecciona los animales de una finca ----------*/
select  namefinca, chapeta, peso, genero
from finca inner join animal on finca.id = animal.fincaid
where finca.id =2;




inner join finca on animal = finca.ccproveedor
where proveedor.cc='12645627';

select  fullname, namefinca, chapeta, peso, genero
from finca inner join animal on finca.id = animal.fincaid
inner join finca on proveedor = finca.ccproveedor
where proveedor.cc='12645627';