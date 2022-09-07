USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY population DESC;

SELECT Name, Population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE Name = 'Mexico';

-- Alias

SELECT 5 + 5;

SELECT Name AS Nombre_de_pais, Population AS 'Población del país' FROM country ORDER BY Nombre_de_pais DESC;

SELECT DISTINCT Continent FROM country; -- Distinct OMITE los datos repetidos

-- WHERE cláusula - si no se cumple la condición, la búsqueda no se realiza

SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent DESC;

-- between 

SELECT * FROM country WHERE Population not between 50000000 and 70000000 ORDER BY Population DESC;

-- or and !=

SELECT * FROM country WHERE Continent = 'Asia' or 'Europe';

-- in 

SELECT * FROM country WHERE Continent in ('Asia', 'Europe');

SELECT * FROM country WHERE IndepYear is null;
/*like sirve par a buscar patrones en especifico
'%' buscar cualquier cantidad de caracteres
'_' especificamos un caracter
*/
