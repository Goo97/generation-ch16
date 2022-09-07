-- sumar contar promedio
use sakila;

select * from Payment;
-- sum(), avg (), count()

select customer_id amount from Payment;

-- count cuenta las filas de una tabla
select count(*) as 'cantidad de filas' from Payment;

-- distinct cantidad de valores distintos en una columna

-- group by agrupa pero omite los valore repetidos 
-- oreder by ordena según la columna o funcion que le indiquemos 

SELECT customer_id, SUM(amount) as total FROM payment GROUP BY customer_id ORDER BY total DESC;
SELECT customer_id, AVG(amount) AS promediocliente FROM payment GROUP BY customer_id ORDER BY promedioclient DESC;

