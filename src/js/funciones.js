   
    
  function opera()
    
    {
        /*obtenemos el valor del campo input y lo guardamos en la variable cantidad convirtiéndolo a float
        obtenemos los valores de los campos select y los guardamos en dos variables
        */
	var cantidad=0;          
       
        cantidad=parseFloat(document.fCantidad.cantidad.value);
        
        var idOrigen = document.fOrigen.origen.options[document.fOrigen.origen.selectedIndex].text;  
  
        var idDestino = document.fDestino.destino.options[document.fDestino.destino.selectedIndex].text;
        
        
        //Operamos la conversión comparando los valores de los select de los formularios
        
        if(idOrigen=="Euro"){
            if(idDestino=="Euro"){
                cantidad=cantidad*1;
            }
            else if(idDestino=="Dolar"){
                cantidad=cantidad*1.2;
            }
            else if(idDestino=="Libra esterlina"){
                cantidad=cantidad*0.71;
            }
        }
        
        if(idOrigen=="Dolar"){
            if(idDestino=="Euro"){
                cantidad=cantidad*0.83;
            }
            else if(idDestino=="Dolar"){
                cantidad=cantidad*1;
            }
            else if(idDestino=="Libra esterlina"){
                cantidad=cantidad*0.59;
            }
        }
        
        if(idOrigen=="Libra esterlina"){
            if(idDestino=="Euro"){
                cantidad=cantidad*1.4;
            }
            else if(idDestino=="Dolar"){
                cantidad=cantidad*1.68;
            }
            else if(idDestino=="Libra esterlina"){
                cantidad=cantidad*1;
            }
        }
    
        document.fCantidadCon.convertida.value=cantidad;
    }
    

