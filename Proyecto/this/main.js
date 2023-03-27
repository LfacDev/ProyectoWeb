'use strict'

/*LOGIN */
//seleccionar los elementos HTML

const Registrarse = document.querySelector("#registrarse"),
      Iniciar = document.querySelector("#iniciar"),
      btnRegistrarse = document.querySelector("#registrarse-btn"),
      btnIniciar = document.querySelector("#iniciar-btn");


//La propiedad event.target ayuda a encontrar el nombre del elemento HTML utilizado para desencadenar el evento

document.addEventListener("click", (e)=>{
    if(e.target === btnRegistrarse || e.target === btnIniciar){
        //toogle (agrega la clase si no existe, si existe la remueve)
        Registrarse.classList.toggle("active");
        Iniciar.classList.toggle("active");
        
    }
});

/* INDEX */

const btnVegan = document.querySelector("#vegan");
const btnTrad = document.querySelector("#trad");
const btn = document.querySelector(".btnI");
const iconoI = document.querySelector("#iconoI");
const iconoI2 = document.querySelector("#iconoI2");
const iconoI3 = document.querySelector("#iconoI3");
const mainIndex = document.querySelector("#mainIndex");
const img1 = document.querySelector("#img1");



      document.addEventListener("mousemove", (e)=>{
        if(e.target === btnTrad){
            //toogle (agrega la clase si no existe, si existe la remueve)
            mainIndex.classList.add("fondo2T");
            btn.classList.add("inputT");
            btnTrad.classList.add("inputT");
            iconoI.classList.add("IconoT");
            iconoI2.classList.add("IconoT");
            iconoI3.classList.add("IconoT");
            img1.classList.add("img1T");

            //cambiar imagen
            document.getElementById("img1").src = "./content/img/heather-ford-7x-pVru8hQc-unsplash-removebg-preview.png";
            document.getElementById("img2").src = "./content/img/vitor-monthay-zqmlcfdxgHQ-unsplash-removebg-preview.png";
            
        }else if(e.target === btnVegan){
            mainIndex.classList.remove("fondo2T");
            btn.classList.remove("inputT");
            btnTrad.classList.remove("inputT");
            iconoI.classList.remove("IconoT");
            iconoI2.classList.remove("IconoT");
            iconoI3.classList.remove("IconoT");
            img1.classList.remove("img1T");

            //cambiar imagen
            document.getElementById("img1").src = "./content/img/Roasted_Tomatillo_Salsa_Verde-removebg-preview.png";
            document.getElementById("img2").src = "./content/img/sonny-mauricio-yhc4pSbl01A-unsplash-removebg-preview.png";
        }
    }); 

    
