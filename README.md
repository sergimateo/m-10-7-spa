# m-10-7-spa

## Project comments

```
Para realizar el nivell 3, he mantenido en la app lo que he realizado de nivell 1 y nivell 2, y he creado un nuevo dropdown en la ruta Warehouse.

Entonces he incorporado un Vuex store para comunicacion entre componentes:

-App.vue hace un commit para actualizar el valor de currentComponent de vuex store

-Warehouse.vue recibe del mapState de vuex el componente dinamico a renderizar

- ClientContainer.vue recibe la lista de clientes de la store (para aprovechar vuex store y no perder la practica)

```
