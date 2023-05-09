Mi Guia Github 
# Paso 1 Github

Nota : Leer antes de comenzar a trabajar Con el Equipo, Preguntar si tenes dudas .


 Tener una cuenta en Github Ya creada y tu token Recuerda guardar tu token ya que solote lo mostrara una vez, lo puedes guardar donde tu desees 

# Token . Pasos Para general un token en github .

Inicia sesión en tu cuenta de GitHub y haz clic en tu avatar en la esquina superior derecha de la pantalla.

En el menú desplegable, selecciona "Settings".

En la barra lateral izquierda, selecciona "Developer settings".

Selecciona "Personal access tokens" y luego haz clic en el botón "Generate new token".

A continuación, se te pedirá que proporciones un nombre para tu token y selecciones los permisos que deseas otorgarle. Puedes otorgar permisos de lectura y/o escritura para diferentes áreas, como repositorios, issues, pull requests, entre otros.

Una vez que hayas seleccionado los permisos que deseas otorgar, haz clic en el botón "Generate token".

Se te mostrará una pantalla que contiene tu token de acceso personal. Es importante que guardes este token en un lugar seguro, ya que no podrás volver a verlo en el futuro. Si pierdes el token, tendrás que crear uno nuevo.

Nota : Es importante tener tu token ya que te lo pedira cada vez que subas un cambio en tus repositorios , o rama de Proyecto con los companeros .


# Paso 2 GitHub 

Dentro de tu directorio de o carpeta creada en tu ordenador debes iniciar seccion si no lo has realizado con los siguientes comandos nombre de usuario de github y tu correo usado en github .

```bash
git config --global user.name "tu nombre"
```

```bash
git config --global user.email "tucorreo.name"
```


``` bash
Usa git init "En caso de crear un repositorio desde cero . de lo contrario si clonas un Repositorio no hace falta inicial un seguimiento desde Cero . (Ya El seguimiento Fue creado ) "
```


* Comandos Comunes -->

Git te muestra un estado de tu repositorio

```shell
git status "Este comando te muestra el estado del repositorio te indicara sidetecto algun cambio del seguimiento "

git add  "Nombre_del_archivo"

git rm "Nombre del archivo con su ruta" "Eliminar un Archivo"

```


si quieres subir todos los cambios  en un solo comando (nota , no es recomendable se recomienda agregar cada archivo por separado ) usa el siguiente comando

```shell
git add *
```

Para agregar cambios de un archivo o agregar nuevos archivos 


```shell
git commit -m 'mensaje'
```

Despues de hace un commit de los cambios guardados despues de git add 

```bash 

git push ": Este comando se utiliza para enviar los cambios confirmados a un repositorio remoto. Esto actualiza el repositorio remoto con los cambios que se han hecho en el repositorio local.
"
git pull ": Este comando se utiliza para traer los cambios de un repositorio remoto y fusionarlos con el repositorio local. Esto se utiliza para mantener el repositorio local actualizado con los cambios realizados en el repositorio remoto."
```

# Nota 

Es importante Realizar un Commit y hacegurarte del status del repositorio si todos los seguimientos estan actualizados o no  antes de realizad un git Pull verifica en que rama te encuentras. 

Una vez que se realice un git pull Te pedira el usuario de tu cuenta github y luego tu llave toket ( debes crear una si no posees.  ) 


# Paso 3 Github - Trabajar como colaborador 


* Clonar el repositorio en tu Ordenador desde tu consola 


git clone https://github.com/nombre-de-usuario/nombre-del-repositorio.git

* Ingresa a la Carpeta del Proyecto

cd nombre-del-repositorio

* Puedes crear tu Propia Rama ( solo usalo una vez o si necesitas crear mas rama , usa cualquier nombre que deseas , )

git checkout -b nombre-de-tu-rama

* Para Subir tus cambio o archivos en tu Rama necesitas realizar 

Una vez que realices algun cambio o creado tus documentos Tienes que agregar tus archivos al seguimiento de git 

git add "nombre del archivo"

o 

git rm "nombre del archivo si deseas borrar"


git commit -m "Detalle de lo que realizaste" (esto toma una foto de tu stado estara en espera para luego subirlo al repositorio, si no se realizar el commit entonces nose subira los cambio al repositorio) .

# Antes de Trabajar con algun repositorio

antes de realizar un Push por primera vez en una Rama creada debes usar el comando :

git push --set-upstream origin Nombre_de_tu Rama

(Si tienes problemas para realizar este comando verifica una guia , solicita ayuda o verifica primordialmente que te muestra en la consola)

# Comandos Extras para trabar con Ramas

Conceptos :

```bash

nombre-de-rama: "es el nombre de la rama que deseas utilizar o manipular. Por ejemplo, si deseas crear una nueva rama, debes escribir el nombre de la rama que quieres crear después del comando git branch o git checkout -b."
```

```bash
nombre-remoto: "es el nombre del repositorio remoto en GitHub. Por defecto, este nombre es origin. Si has creado otros repositorios remotos, debes usar el nombre que les hayas dado."
```

```bash
git branch: "muestra una lista de todas las ramas en tu repositorio local."
```

```bash
git branch [nombre-de-rama]: "crea una nueva rama con el nombre especificado."
```

```bash
git checkout [nombre-de-rama]: "cambia a la rama especificada."
```

```bash
git checkout -b [nombre-de-rama]: "crea una nueva rama con el nombre especificado y cambia a ella."

-b: Este es un argumento que se utiliza con el comando git checkout para crear una nueva rama y cambiar a ella en un solo comando. Es una forma abreviada de escribir git branch y git checkout en dos comandos separados.
```

```bash
git merge [nombre-de-rama]: "fusiona la rama especificada con la rama actual."
```

```bash
git push -u [nombre-remoto] [nombre-de-rama]: "empuja la rama especificada al repositorio remoto con el nombre especificado."

-u: Este es un argumento que se utiliza con el comando git push para establecer una relación entre la rama local y la rama remota. Al utilizar este argumento, Git recordará el repositorio remoto y la rama a la que está vinculada la rama local, por lo que en el futuro, solo tendrás que escribir git push sin especificar el nombre del repositorio remoto ni la rama de destino.
```

```bash
git pull [nombre-remoto] [nombre-de-rama]: "trae los cambios de la rama especificada desde el repositorio remoto con el nombre especificado y fusiona los cambios en la rama actual."
```

```bash
git log [nombre-de-rama]: "muestra el historial de cambios en la rama especificada."
```

```bash
git diff [nombre-de-rama]: "muestra las diferencias entre la rama especificada y la rama actual."
```

```bash
git branch -d [nombre-de-rama]: "elimina la rama especificada."
```
```bash
Para cambiar a otra rama, debes utilizar el comando 

git checkout [nombre-de-rama]. 

"Por ejemplo, si deseas cambiar a la rama develop, debes escribir "

git checkout develop.
```

```bash
"Para editar una rama, debes cambiar a ella primero utilizando el comando"

git checkout [nombre-de-rama]. 

"Luego, puedes realizar cambios en los archivos del repositorio. Para guardar los cambios, debes hacer un commit utilizando el comando 
"
git commit 

```


```bash
"Para descargar una rama remota, debes utilizar el comando "

git fetch [nombre-remoto] [nombre-de-rama]. 

"Esto descarga los cambios de la rama remota, pero no los fusiona con la rama local. Si deseas fusionar los cambios, debes utilizar el comando" 

git merge [nombre-remoto]/[nombre-de-rama].

```

```bash
"Para descargar el repositorio principal o los creados por tus compañeros, debes utilizar el comando "

git clone [URL-del-repositorio]. 

"Esto descargará el repositorio completo en tu máquina local. Luego, puedes utilizar los comandos que te mencioné anteriormente para trabajar con las ramas del repositorio."
```






# Descargar otras Ramas 


``` bash

"Para descargar todas las ramas de un repositorio remoto, debes utilizar el comando "

git fetch [nombre-remoto].

"Por ejemplo, si el nombre del repositorio remoto es origin, debes escribir 
"
git fetch origin. 

"Esto descargará todas las ramas del repositorio remoto, pero no las fusionará con las ramas locales. "

```

```bash

"Para fusionar una rama remota con una rama local, debes utilizar el comando "

git merge [nombre-remoto]/[nombre-de-rama]. 

"Por ejemplo, si deseas fusionar la rama remota feature con la rama local master, debes escribir"

 git merge origin/feature.

```
```bash
" Para verificar las actualizaciones en el repositorio remoto, debes utilizar el comando git "

fetch [nombre-remoto]. 

"Esto descargará todas las actualizaciones del repositorio remoto, pero no las fusionará con las ramas locales. "
```
```bash

"Para fusionar las actualizaciones con las ramas locales, debes utilizar el comando "

git merge [nombre-remoto]/[nombre-de-rama] 
o 
git pull [nombre-remoto] [nombre-de-rama]. 

```

```bash

"El comando "
git pull 

"es una forma abreviada de escribir "
git fetch "y" git merge 
"en un solo comando"
```


Si deseas ver las ramas y las actualizaciones en GitHub, debes ingresar al repositorio en la plataforma y navegar por las pestañas de Branches o Pull Requests. Allí encontrarás una lista de todas las ramas y las actualizaciones que se han realizado en el repositorio. También puedes utilizar los comandos que te mencioné anteriormente para descargar las ramas y las actualizaciones en tu máquina local.
