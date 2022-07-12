// agregar alumno javascript function
function add_member() {
    // iniciamos el proceso
    var url = 'process.php';
    var method = 'POST';
    var params = 'nombres=' + document.getElementById('nombres').value;
    params += '&apellidos=' + document.getElementById('apellidos').value;
    params += '&correo=' + document.getElementById('correo').value;
    params += '&tipoDocumento=' + document.getElementById('tipoDocumento').value;
    params += '&ndocumento=' + document.getElementById('ndocumento').value;
    params += '&institucion=' + document.getElementById('institucion').value;
    params += '&ocupacion=' + document.getElementById('ocupacion').value;
    params += '&carta=' + document.getElementById('carta').value;
    var container_id = 'list_container';
    var loading_text = '<img src="images/fb_loading.gif">';
    // llamamos ajax function
    ajax(url, method, params, container_id, loading_text);
}



// ajax : basic function for using ajax easily
function ajax(url, method, params, container_id, loading_text) {
    try { // For: chrome, firefox, safari, opera, yandex, ...
        xhr = new XMLHttpRequest();
    } catch (e) {
        try { // for: IE6+
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e1) { // if not supported or disabled
            alert("Not supported!");
        }
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) { // when result is ready
            document.getElementById(container_id).innerHTML = xhr.responseText;
        } else { // waiting for result 
            document.getElementById(container_id).innerHTML = loading_text;
        }
    }
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(params);
}