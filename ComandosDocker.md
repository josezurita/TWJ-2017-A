# Comandos Docker

## docker ps

Este comando listaba los contenedores que estan **corriendo**.
```
>> docker ps
```

## docker ps -a

Este comando listaba **TODOS** los contenedores que estan **instalados**.
```
>> docker ps -a
```

## docker stop 'id' o 'nombre'

Este comando **detiene** los o el  contenedor que este **corriendo**.
```
>> docker stop 12mMC232udD micontenedor
>> docker stop 12
>> docker stop m
>> docker stop 12 mi
```


## docker start 'id' o 'nombre'

Este comando **levanta** los o el  contenedor que este **detenido**.
```
>> docker start 12mMC232udD micontenedor
>> docker start 12
>> docker start m
>> docker start 12 mi
```

## docker rm 'id' o 'nombre'

Este comando **elimina** los o el  contenedor que esten **detenido**.
```
>> docker rm 12mMC232udD micontenedor
>> docker rm 12
>> docker rm m
>> docker rm 12 mi
```

* No se puede **borrar** los contenedores que esten corriendo.


## Mysql

Para utilizar docker con mysql vamos a utilizar el siguiente comando:

```
>> docker run --name mySQL -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=twjs -e MYSQL_USER=jose -e MYSQL_PASSWORD=jose -p 3306:3306 -d mysql
```

### --name nombreContenedor

El nombre del contenedor

### -e MYSQL_ROOT_PASSWORD=

-e Le dice al docker que es una variable de entorno

La clave del usuario **root**


### -e MYSQL_DATABASE=

-e Le dice al docker que es una variable de entorno

El nombre de la **base de datos**

### -e MYSQL_USER=

-e Le dice al docker que es una variable de entorno

El nombre del **Usuario** de la base de datos.

### -e MYSQL_PASSWORD

-e Le dice al docker que es una variable de entorno

La clave del usuario **creado**

### -p 3306:3306

-p Es para el port binding con el sistema operativo **host**

- 3306 de la **izquierda** es el puerto que se **usa** en el contenedor.

- 3306 de la **derecha** es el puerto para acceder en la máquina **host**

## PostgreSQL

```
>> docker run --name postgres -e POSTGRES_PASSWORD=jose -e POSTGRES_USER=jose -e POSTGRES_DB=twjs -p 5432:5432 -d postgres
```

## MongoDB

```
>> docker run --name mongoDB -p 27017:27017 -d mongo
```