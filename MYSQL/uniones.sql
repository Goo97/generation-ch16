
-- inner join
-- explícicta
select clientes.cliente_id, clientes.nombre, compras.* from clientes
inner join compras
on clientes.cliente_id = compras.cliente_id;

-- unión implicita
select * from clientes, compras
where clientes.cliente_id = compras.cliente_id;

-- left join 
select * from clientes 
left join compras
on clientes.cliente_id = compras.cliente_id;

/*
address - city_id / address

city    - city_id / city / country_id 

country  - country_id / country
*/

SELECT
address.address,
city.city,
city.country_id
FROM address
INNER JOIN city
ON address.city_id = city.city_id;

/*
address - city_id / address

city    - city_id / city / country_id 

country  - country_id / country
*/

SELECT
country.country AS Pais,
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON city.country_id = country.country_id
INNER JOIN address ON address.city_id = city.city_id;
