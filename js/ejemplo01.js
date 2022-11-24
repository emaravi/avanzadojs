function f01(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.strokeText("Hello World",10,50);

    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

//arreglo  de cursos    
var cursos = [
    {nombre: "HTML", duracion: 40},
    {nombre: "CSS", duracion: 40},
    {nombre: "JavaScript", duracion: 40},
    {nombre: "PHP", duracion: 40},
    {nombre: "MySQL", duracion: 40}
];

//convertir a String el arreglo cursos
var cursosString = JSON.stringify(cursos);
console.log(cursosString);

//convertir a JSON el arreglo cursosString
var cursosJSON = JSON.parse(cursosString);
console.log(cursosJSON);

//llenar tcursos con los datos del arreglo cursosJSON con for in
function f05(){
    var tcursos = document.getElementById("tcursos");
    for (var i in cursosJSON){
        var fila = tcursos.insertRow(-1);
        var celda1 = fila.insertCell(0);
        var celda2 = fila.insertCell(1);
        celda1.innerHTML = cursosJSON[i].nombre;
        celda2.innerHTML = cursosJSON[i].duracion;
    }
}

function f04(){
    var tcursos = document.getElementById("tcursos");   
    for(var i=0; i<cursosJSON.length; i++){
        var fila = tcursos.insertRow(-1);
        var celda1 = fila.insertCell(0);
        var celda2 = fila.insertCell(1);
        celda1.innerHTML = cursosJSON[i].nombre;
        celda2.innerHTML = cursosJSON[i].duracion;
    }
}

//llenar la tcursos con los datos del arreglo cursos
function f02(){
    var tcursos = document.getElementById("tcursos");
    for(var i=0; i<cursos.length; i++){
        var fila = tcursos.insertRow(-1);
        var celda1 = fila.insertCell(0);
        var celda2 = fila.insertCell(1);
        celda1.innerHTML = cursos[i].nombre;
        celda2.innerHTML = cursos[i].duracion;
    }
}

function f03(){
    for (var i = 0; i < cursos.length; i++) {
        document.getElementById("pNombre"+(i+1)).innerHTML = "<b>"+cursos[i].nombre+"</b>";
        document.getElementById("pDuracion"+(i+1)).innerHTML = `<b>${cursos[i].duracion}</b>`;
    }
}