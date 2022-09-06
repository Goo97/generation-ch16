create database tienda;
use tienda;
create table clientes (cliente_id int primary key not null auto_increment,
nombre char(50) not null,
apellido char(50) not null,
telefono char(50) not null,
direccion char(150) not null );
insert into clientes (nombre, apellido, telefono, direccion)
values ("Pedro", "Páramo", "55214587", "Comala");

select * from tienda.clientes;


