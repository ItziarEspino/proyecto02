En este proyecto vamos a introducir Nodejs.


Creamos la carpeta de nuestro proyecto y abrimos el terminal. En este debemos emplear los siguientes comandos:


npm init --yes para crear el archivo package.json.

npm install typescript -D.

npx tsc --init genera el archivo tsconfig.json. En este debemos cambiar en la línea 7 "target": "es6", en la línea 17 "outDir": "./dist" y en la línea 68 añadir "exclude": ["node_modules"]


Creamos el .gitignore y dentro ponemos dist y node_modules


Luego utilizamos npm install mongoose para instalar mongoose.

npm install @types/mongoose para que typescript reconozca los tipos de mongoose.


Empleamos npx tsc -w para compilar y se crea la carpeta dist.


En el proyecto deberá haber una carpeta view que contenga el menú y la entrada por teclado, y la carpeta src con el archivo del programa.


Para terminar empleamos los comandos que utilizamos para subir a github:
git init

git commit -m

git brach -M master

git remote add origin

git push -u origin master
