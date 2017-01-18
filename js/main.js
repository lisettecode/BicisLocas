function validateForm(){
		
	
    var name = document.getElementById("name").value;
	if (name == ""){
		alert("Ingresa tu nombre por favor.");
	} else if (/^[a-z]/.test(name.charAt(0))){
		alert("Por favor ingrese la primera letra en mayúscula.");
	} else if (/^[0-9]/.test(name.charAt(0))){
		alert("Por favor no ingrese números.");
	}
	
   
     var lastname = document.getElementById("lastname").value;
	if (lastname == ""){
		alert("Ingresa tu apellido por favor.");
	} else if (/^[a-z]/.test(lastname.charAt(0))){
		alert("Por favor ingrese la primera letra en mayúscula.");
	} else if (/^[0-9]/.test(lastname.charAt(0))){
		alert("Por favor no ingrese números.");
	}
    
	
    var correovalidado=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var email = document.getElementById("input-email").value;
	if (email == "" ){
		alert("Ingresa tu correo por favor.");
	} else if(!correovalidado.test(email)) {
        alert("Ingrese un correo válido por favor.");
    }
	
    var password = document.getElementById("input-password").value;
	if (password == "") {
		alert("Ingresa una contraseña por favor.");
	} else if (password.length < 6){ 
     	alert("Ingrese  al menos 6 caracteres."); 
    } else if (password == "123456" || password == "password" || password == "098754"){
    	alert("Ingrese una contraseña válida por favor.");
    }
   
    var menu = document.querySelector("select").value;
	if (menu == 0) {
		alert("Seleccione un tipo de bici por favor");
	}  
    
}


//Finalizado
