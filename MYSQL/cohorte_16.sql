create database generation;
use generation;
create table cohorte_16 (alumno_id int not null auto_increment primary key,
nombre char(50) not null,
apellido char(50) not null,
 companieros int not null,
 direccion varchar(150) not null,/*no usar ñ*/
 proyecto varchar(150) not null); 
 
 select * from cohorte_16;
 
 insert into cohorte_16 (nombre, apellido, companieros, direccion, proyecto)
 values ("victror", 'Fernandez', 7, 'Tulancingo', 'java'),
 ("victror", 'Fernandez', 7, 'Tulancingo', 'java');
 
 delete from cohorte_16
 where alumno_id = 3;
 
 update cohorte_16
 set nombre = 'Pedro', 
 apellido = 'Pardo'
 where alumno_id = 5;