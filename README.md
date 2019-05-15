# twoSum

## https://twosum.appspot.com/

>Aplicación basica, hecha en Node JS, html, deploy en AppEngine.
>La performance de la busqueda está en el orden de n log(n).

  - Limite de 500mb. (recibe archivos txt, de texto delimitado)
  - Delimitador personalizado.
  - Devuelve un boolean. (true/false)
  
#### Contiene los paquetes:
|Paquete | url |
| ------ | ------ |
| multer| [https://www.npmjs.com/package/multer]|
| express| [https://www.npmjs.com/package/express]|
| body-parser| [https://www.npmjs.com/package/body-parser]|


Mejoras posibles:

* Ingresar por texto el array directamente.
* Validación de fichero
* Validación de elementos.
* Logs.
* Registros de busqueda | hash de arrays para cachear resultados.
* Generador aleatorio de arrays para buscar.
* Deploy en kubernetes.
* Reject en concurrencia para prevenir fallos TCP.
* Mejoras de interfaz.
