class Nodo{

    info=0;
    liga=null;
}
export class ListaCircularSimplementeLigada{

    INICIO=null;
    LISTA_CANVAS=null;

    constructor(listaCanvas) {
         this.LISTA_CANVAS = listaCanvas;
    }///////////////////////////////////////////
    inserta_inicio(DATO){
       
        if(this.INICIO==null){//vacio
            var P=this.INICIO;
            
            var Q=new Nodo();
            Q.info=DATO;
            Q.liga=Q;
            P=Q;
            
            this.INICIO=P;
      }
      else{//no vacio
        
          var P=this.INICIO;
      
          var Q=new Nodo();
          Q.info=DATO;
          
          var F=P;//buscar el ultimo
          while(F.liga!=P){
              F=F.liga;
          }
          F.liga=Q;
          Q.liga=P;
          P=Q;
          
          this.INICIO=P;
          
      }

      this.LISTA_CANVAS.inserta_inicio(this.INICIO);

    }///////////////////////////////////////////
    inserta_final(DATO){
        if(this.INICIO==null){
            var P=this.INICIO;
            var Q=new Nodo();
            Q.info=DATO;
            Q.liga=Q;
            P=Q; 
            this.INICIO=P;
        }
        else{
            var P=this.INICIO;
            var T=P;
            while(T.liga!=P){//ultimo nodo
                T=T.liga; 
            }
            var Q=new Nodo();
            Q.info=DATO;
            Q.liga=null;//no es necesario
            T.liga=Q;
            Q.liga=P;
            this.INICIO=P;
        } 
        this.LISTA_CANVAS.inserta_inicio(this.INICIO);
    }///////////////////////////////////////////
    inserta_antes_X (DATO, X){
        var P=this.INICIO;
        var Q=P;
        var BAND=1;
        var T;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=P){//<-------OJO
                T=Q;
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var X1=new Nodo();
            X1.info=DATO;
            if(P==Q){
                var U=P; /////////////////////////////
                while(U.liga!=P){//llegar al ultimo;
                    U=U.liga;
                }
                X1.liga=P; /////////////////////////////
                P=X1;
                U.liga=P; ////////////////////////////   
            }
            else{
                T.liga=X1;
                X1.liga=Q;
            }
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        this.INICIO=P;
        this.LISTA_CANVAS.inserta_inicio(this.INICIO);
    }//////////////////////////////////////////////////////////////////////
    inserta_despues_X(DATO, X){
        var P=this.INICIO;
        var Q=P;
        var BAND=1;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=P){//////<-------OJO
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.liga=Q.liga;
            Q.liga=T;
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        this.INICIO=P;
        this.LISTA_CANVAS.inserta_inicio(this.INICIO);
    }//////////////////////////////////////////////////////////////////////
    
    Elimina_inicio(){ 
        var P = this.INICIO;
        var Q = P;
        P=Q.liga;
        var T=Q;
        if(P.liga==P){
            P=null;
        }
        else{
            while(T.liga != Q){
                T = T.liga;
            }
            T.liga=P;
            Q=null;
        }
        this.INICIO = P;
        this.LISTA_CANVAS.inserta_inicio(this.INICIO);
    }//////////////////////////////////////////////////////////
    Elimina_ultimo(){
        let P = this.INICIO;
        let T;
        let Q = P;
        if(P.liga==P){
            P=null;
        }
        else{
            while(Q.liga != P){
                T = Q;
                Q = Q.liga;
            }
            T.liga=P;
        }
        Q=null;
        this.INICIO = P;
        this.LISTA_CANVAS.inserta_inicio(this.INICIO);
    }//////////////////////////////////////////////////////////
    Elimina_X(X){
        var P=this.INICIO;
        var Q=P;
        var T;
        var BAND=1;

        if(P.info == X){//si se quiere eliminar el primero
            T = P.liga;
            while(Q.liga != P){
                Q = Q.liga; // Q en el final
            }
            Q.liga = T ; 
            P = T;
        }else{
            while ( Q.info!=X && BAND==1 ){
                if(Q.liga!=P){//////<-------OJO
                    T=Q;
                    Q=Q.liga;
                }
                else{
                    BAND=0;
                }
            }
            if(BAND == 1){
                T.liga = Q.liga;
                Q=null;
            }
        }
        
        this.INICIO = P;
        this.LISTA_CANVAS.inserta_inicio(this.INICIO);
    }//////////////////////////////////////////////////////////
    
    Elimina_antes_X( X){
        var P=this.INICIO;
        var Q=P;
        var BAND=1;
        var T=P;
        if(P.info==X){
            while(Q.liga!=P){
                T=Q;
                Q=Q.liga;
            }
            T.liga=P;
            Q=null;
            this.INICIO=P;
        }
        else{
            var R=new Nodo();
            while ( Q.info!=X && BAND==1 ){
                if(Q.liga!=P){//////<-------OJO
                    R=T;
                    T=Q;
                    Q=Q.liga;
                }
                else{
                    BAND=0;
                }
            }
            if(BAND==1){
                if(P.liga==Q){
                    T=P.liga;
                    while(Q.liga!=P){
                        Q=Q.liga;
                    }
                    Q.liga=T;
                    P=null;
                    this.INICIO=T;
                }
                else{
                    R.liga=Q;
                    T=null;
                    this.INICIO=P;
                }
            }
            else{
                throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
            }
        }
        this.LISTA_CANVAS.inserta_inicio(this.INICIO);
    }
    //////////////////////////////////////////////////
    Eliminar_Posterior_X(X){
        var P=this.INICIO;
        
        var Q=P;
        var BAND=1;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=P){//////<-------OJO
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var T=new Nodo();
            if(Q.liga==P){
                T=P.liga;
                while(Q.liga!=P){
                    Q=Q.liga;
                }
                Q.liga=T;
                P=null;
                this.INICIO=T;;
            }
            else{
                T=Q.liga;
                Q.liga=T.liga;
                T=null;
                this.INICIO=P;
            }
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        this.LISTA_CANVAS.inserta_inicio(this.INICIO);
    }
    
    
    dibujarNodosLog(){

        var P=this.INICIO;
        if(P!=null){
            var F=P;
            
            var cad="";
            if(F.liga==P){//1
                
                cad+=P.info+"::";
                cad+=P.liga.info;
                
            }
            else{//2 o mas
                
                var cad="";
                while(F.liga!=P){
                    cad+=F.info+"::";
                    F=F.liga;
                }    
                cad+=F.info+"::";
                cad+=F.liga.info;
            }
                
            console.log(cad);
        }
       

    }/////////////////////////////////////////////
    buscar(DATO){
        if(this.INICIO==null)
                return false;
        
        var encontrado=false;
        var	tmp=this.INICIO;
        var P=this.INICIO;

        do{
            if(tmp.info==DATO){
                encontrado=true;
                break;
            }
            tmp=tmp.liga;

        }while(tmp!=P);
        
        return encontrado;
    }///////////////////////////////////////////
    isVacio(){                  
        if(this.INICIO==null)
           return true;
        else 
           return false;
    }
    //dato extra//
    veriantesydespues(){
        var P = this.INICIO;
        if(P.liga ==P ){
            return true;
        }else{
            return false;
        }
    }
}