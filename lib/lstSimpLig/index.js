import {Lista} from './lista.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let lista=null;
//INSERTA INICIO//
export async function insertar_al_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null || DATO.trim()=="")
        return;

    try{
        DATO=DATO.trim();
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    
    }catch(e){

        await bootbox_alert(e.message);
    }
}
//INSERTA FINAL//
export async function insertar_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var DATO = await bootbox_prompt("ingrese valor de nodo");
        if(DATO==null || DATO.trim()=="")
            return;

        DATO=DATO.trim();
        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_final(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    
    }catch(e){

       await bootbox_alert(e.message);
    }

}
//INSERTA ANTES DE X//
export async function insertar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null || DATO.trim()=="")
                return;

        DATO=DATO.trim();
        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");

        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null || DATO.trim()=="")
                return;
        
        X=X.trim();
        lista.inserta_antes_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
        
    }catch(e){

        await bootbox_alert(e.message);
    }

}
//INSERTA DESPUES DE X//
export async function inserta_despues_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
    }
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");  
        }
        
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null || DATO.trim()=="")
                return;
        DATO=DATO.trim();
        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");
        
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null || DATO.trim()=="")
                return;
        X=X.trim();
        lista.inserta_despues_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
        
    }catch(e){

        await bootbox_alert(e.message);
    }

}
//ELIMINA INICIO//
export async function elimina_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        await lista.elimina_inicio();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }
}
//ELIMINA FINAL//
export async function Elimina_ultimo(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        await lista.Elimina_ultimo();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }

}
//ELIMINA X//
export async function Elimina_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        let X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
            return
        await lista.Elimina_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
        
    }catch(e){
        await bootbox_alert(e.message);
    }

} 
//ELIMINA ANTES DE X//
export async function Elimina_antes_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
        //lista.canvas=canvas;//despues contructor	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        if(lista.veriantesydespues()==true){
            throw new Error("SOLO EXISTE UN NODO");
        }
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null )
            return;
        await lista.Elimina_antes_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
        
    }catch(e){

        await bootbox_alert(e.message);
    }

}
//ELIMINA DESPUES DE X//
export async function Eliminar_Posterior_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);	
        //lista.canvas=canvas;//despues contructor	
    }
    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        if(lista.veriantesydespues()==true){
            throw new Error("SOLO EXISTE UN NODO");
        }
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
            return;
        await lista.Eliminar_Posterior_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
        
    }catch(e){

        await bootbox_alert(e.message);
    }
}
