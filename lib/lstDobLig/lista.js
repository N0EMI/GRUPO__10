class Nodo{

    info=0;
    ligaDer=null;
    ligaIzq=null;
}
export class ListaDoblementeLigada{

   INICIO=null;
   FIN=null;

   LISTA_CANVAS=null;

   constructor(listaCanvas) {
        this.LISTA_CANVAS = listaCanvas;
   }///////////////////////////////////////////
   isVacio(){
        if(this.INICIO==null)
            return true;
        else 
            return false;
   }///////////////////////////////////////////
   buscar(DATO){
    var encontrado=false;
    var	tmp=this.INICIO;
    while(tmp!=null){
        if(tmp.info==DATO){
            encontrado=true;
            break;
        }
        tmp=tmp.ligaDer;
    }
    
    return encontrado;
   }///////////////////////////////////////////
  
   inserta_inicio(DATO){

        if(this.INICIO==null){//Algoritmo Jorge
            
            var Q=new Nodo();
            Q.info=DATO;
            
            this.INICIO=Q;
            this.FIN=Q;
        }
        else{//Algoritmo cairo
            
            var P=this.INICIO;
                
            var Q=new Nodo();
            Q.info=DATO;
            Q.ligaDer=P;
            P.ligaIzq=Q;
            Q.ligaIzq=null;//Opcional no es necesario
            P=Q;
            
            this.INICIO=P;    
        }

        this.LISTA_CANVAS.inserta_inicio(this.INICIO);

    }///////////////////////////////////////////
    inserta_final(DATO){
        var F = this.FIN;
        var Q= new Nodo();
        Q.info = DATO;
        F.ligaDer = Q;
        Q.ligaIzq = F;
        Q.ligaDer = null;
        F = Q;

        this.FIN = F;

        this.LISTA_CANVAS.inserta_final(this.INICIO);

    }///////////////////////////////////////////
    inserta_antes_X(DATO,X){

        if(this.INICIO==null){
            throw new Error("NO IMPLEMENTADO");
        }
        
        var P=this.INICIO;
        
        var Q=P;
        while(Q.ligaDer!=null && Q.info!=X){
            Q=Q.ligaDer;
        }
        if(Q.info==X){
            var T=new Nodo();
            T.info=DATO;
            T.ligaDer=Q;
            var R=Q.ligaIzq;
            Q.ligaIzq=T;
            
            if(P==Q){//LA lista tiene solo un elemento
                P=T;
                T.ligaIzq=null;//OPCIONAL 
            }
            else{
                R.ligaDer=T;
                T.ligaIzq=R;
            }
        }
        else{

            throw new Error("EL elemento no se encuentra en la lista");
        }
        
        this.INICIO=P;

        this.LISTA_CANVAS.inserta_antes_X(this.INICIO,T);

    }///////////////////////////////////////////
    inserta_despues_X (DATO,X){
        var P=this.INICIO;
        var F=this.FIN;
        
        var Q=P;
        var BAND=1;
        while ( Q.info!=X && BAND==1 ){
            if(Q.ligaDer!=null){
                Q=Q.ligaDer;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.ligaDer=Q.ligaDer;
            Q.ligaDer=T;
            
            ////------------------
            T.ligaIzq=Q;
            if(Q==F){//ULTIMO NODO
                
                F=T;
            }
            else{
                
                T.ligaDer.ligaIzq=T;    
            }
            ////----------------------
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;
        this.FIN=F;

        this.LISTA_CANVAS.inserta_despues_X(this.INICIO,T);

    }//////////////////////////////////////////////////////////////////
    async elimina_inicio(){

        await this.LISTA_CANVAS.elimina_inicio_pre(this.INICIO);

        let Q = this.INICIO;
        this.INICIO = Q.ligaDer;
        
        if(this.INICIO!=null)//Solo si hay mas de un nodo
            this.INICIO.ligaIzq=null;//Necesario
        
        Q=null;//En c++ "delete Q",como buena práctica(en esta caso no es necesario) revisar https://es.javascript.info/garbage-collection
        
        this.LISTA_CANVAS.elimina_inicio_post(this.INICIO);
        
    }///////////////////////////////////////////////////////////
    elimina_final(){
        //window.alert("SI FUNCIONOOOOOOOO");
        var Q = this.FIN;
        if(Q.ligaIzq != null){
            this.FIN = Q.ligaIzq;
            this.FIN.ligaDer = null;
        }else{
            this.FIN = null;
            this.INICIO = null;
        }
        
        Q = null;
        
        this.LISTA_CANVAS.elimina_ultimo(this.INICIO);
       
   }/////////////////////////////////////////////////////////////////
   eliminar_x(X){
    var Q=this.INICIO;
    var T,R;    
    
    while(Q.ligaDer!=null && Q.info!=X){
        Q=Q.ligaDer;
    }
    
    
       if(Q.info == X){
           if((Q==this.INICIO) && (Q==this.FIN)){//si existe solo un nodo
               this.INICIO = null;
               this.FIN =null;
           }else if(Q == this.INICIO){
               this.INICIO = Q.ligaDer; 
              
               this.INICIO.ligaIzq=null;
           }else if(Q == this.FIN){
               this.FIN = Q.ligaIzq;
               this.FIN.ligaDer=null;
           }else{
               T=Q.ligaIzq;
               R=Q.ligaDer;
               T.ligaDer = R;
               R.ligaIzq = T;
               //this.INICIO = Q;
            }
            Q= null;
        }else{
           throw new Error("El elemento con informacion X no se encunetra en la lista");
       }
       
       
       this.LISTA_CANVAS.elimina_ultimo(this.INICIO);
   }/////////////////////////////////////////////////////////////////
    eliminar_antes_x( dato){
       var Q = this.INICIO;
       var T,R;
       while((Q.ligaDer != null)&&(Q.info != dato)){
           Q = Q.ligaDer;
       }
       
       if(Q.info == dato){
           if(this.INICIO == Q){
            throw new Error("No existe un nodo anterior al primero ");
               
           }else{
               T = Q.ligaIzq;
               if(this.INICIO == T){
                  this.INICIO = Q;
                  this.INICIO.ligaIzq = null;
               }else{
                  R = T.ligaIzq;
                  Q.ligaIzq = R;
                  R.ligaDer = Q;
               }
           }
           T=null;
       }else{
        throw new Error("El elemento con informacion X no se encunetra en la lista");
       }
       this.LISTA_CANVAS.elimina_ultimo(this.INICIO);
   }/////////////////////////////////////////////////////////////////
   eliminar_despues_x( dato){
       var Q = this.INICIO;
       var T,R;
       while((Q.ligaDer != null)&&(Q.info != dato)){
           Q = Q.ligaDer;
       }
       
       if(Q.info == dato){
           if(this.FIN == Q){
            throw new Error("No existe un nodo despues al ultimo ");
               
           }else{
               T = Q.ligaDer;
               if(this.FIN == T){//si el ultimo nodo se elimina
                  this.FIN = Q;
                  this.FIN.ligaDer = null;
               }else{
                  R = T.ligaDer;
                  Q.ligaDer = R;
                  R.ligaIzq = Q;
               }
           }
           T = null;
       }else{
        throw new Error("El elemento con informacion X no se encunetra en la lista");
       }
       this.LISTA_CANVAS.elimina_ultimo(this.INICIO);
   }
   
    dibujarNodosLogDer(){

        var P=this.INICIO;
        var cad="";
        while(P!=null){
            cad+=P.info+"::";
            P=P.ligaDer;
        }
        console.log(cad);

    }/////////////////////////////////////////////
    dibujarNodosLogIzq(){

        var P=this.FIN;
        var cad="";
        while(P!=null){
            cad+=P.info+"::";
            P=P.ligaIzq;
        }
        
        console.log(cad);
    }/////////////////////////////////////////////
}