window.onload = function cargarPantalla() {
    document.getElementById('editar-producto').style.display = "none";
    document.getElementById('btnEditarProducto').style.display = "none";
    document.getElementById('btnEliminarProducto').style.display = "none";

    cargarDatosAlmacenados();
};

function cargarDatosAlmacenados()
{
    const cuerpoTabla = document.getElementById('generarTablaDatos');
    let datosTabla = JSON.parse(localStorage.getItem('tabla-crud')) || [];
    cuerpoTabla.innerHTML = "";
    let html = `` ;
    if(datosTabla)
    {
       datosTabla.forEach( (datos, idx) => {

            html += `
                        <tr>
                              <th scope="row">${idx + 1}</th>
                              <td>${datos.id}</td>
                              <td>${datos.nombre}</td>
                              <td>${datos.precio}</td>  
                              <td><button >Editar</button></td>
                              <td><button >Borrar</button></td>
                        </tr>
                `; 

          }); 
    }
    cuerpoTabla.innerHTML = html;
}

function registrarProducto()
{
    const idProducto = document.getElementById('idProducto').value;
    const nombreProducto = document.getElementById('nombreProducto').value;
    const precioProducto = document.getElementById('precioProducto').value;

    if(idProducto == '')
    {
        return alert("Debe ingresar el código");
    }
    else if( nombreProducto == '')
    {
        return alert("Debe ingresar el nombre");
    }
    else if (precioProducto <=0 )
    {
        return alert("Debe ingresar un precio superior a 0");
    }
    let datosTabla = JSON.parse(localStorage.getItem("tabla-crud")) || [];
   // const nuevo_registro = generarUnicoId(6);
     datosTabla.push({
        id : idProducto,
        nombre : nombreProducto,
        precio : precioProducto
     });

     localStorage.setItem("tabla-crud", JSON.stringify(datosTabla));
     cargarDatosAlmacenados();



}