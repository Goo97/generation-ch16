use tienda;
select * from compras;

create table compras (orden_id int not null primary key auto_increment,
cliente_id int not null,
fecha_compra date not null,
total decimal not null,
cantidad_productos int not null);

-- Agregar llave foranea
alter table compras 
add constraint fk_clientes_compra 
foreign key (cliente_id)
references clientes (cliente_id);

-- borrar llave foranea
alter table compras
drop foreign key fk_clientes_compra;

insert into compras (cliente_id, fecha_compra, total, cantidad_productos)
values (1, '1999-12-28', 500, 1 );

drop table clientes;

-- cosas que no entiendo jeje
INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
VALUES (1, '2022-09-06', 300.50, 2);

