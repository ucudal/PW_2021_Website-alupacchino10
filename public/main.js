var btn = document.querySelector('.btn__imprimir');
btn.onclick = () =>{
    window.print();
}


function generarExperiencias(listaExperiencias) {
    var eHtml = "";
    listaExperiencias["experiencia-laboral"].forEach(function (exp) {
        var fechaInicio = exp.fechaInicio, fechaFin = exp.fechaFin, empresa = exp.empresa, puesto = exp.puesto, descripcion = exp.descripcion;
        eHtml += "<div class=\"edu\">\n                                <div class=\"edu\">\n                                    <h5>".concat(fechaInicio, " - ").concat(fechaFin, "</h5>\n                                    <h5>").concat(empresa, "</h5>\n                                </div>\n                                <div class=\"text\">\n                                    <h4>").concat(puesto, "</h4>\n                                    <p>").concat(descripcion, "</p>\n                                </div>\n                            </div>");
    });
    document.getElementById("experiencias").innerHTML = eHtml;
}
    
function getExperienciaLaboral() {
    fetch("https://PW2021-APINode-alupacchino10.alupacchino10.repl.co/experiencia-laboral")
        .then(function (res) {
        if (!res.ok) {
            throw Error("rechazo");
        }
        return res.json();
    }).then
    (function (res) {
        generarExperiencias(res);
    })["catch"](function (error) {
        console.log(error);
    });
}


function Submit(){
    alert("Entro!");
    console.log("ENTRO!!!!")

    var toSend = {
        nombreContacto: document.getElementById("fname").value + " " + document.getElementById("lname").value,
        phone: document.getElementById("cel").value,
        pais: document.getElementById("pais").value,
        
    };
    var jsonStr = JSON.stringify(toSend);
    var url = "https://PW2021-APINode-alupacchino10.alupacchino10.repl.co/enviar-formulario";
    console.log(jsonStr);
    fetch(url, {method: "POST", body: jsonStr, headers: {
            'Content-Type': 'application/json'
        }
    })

    alert("Bienvenido " + toSend.nombreContacto +"!");

    var modal = document.getElementById("modal");
    var cerrar = document.getElementById("btn__cerrar");
    modal.style.display="none";
    cerrar.style.display="none";
}

document.addEventListener("DOMContentLoaded", function () {
    getExperienciaLaboral();
});



