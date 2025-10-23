const prompt = require("prompt-sync")();

function menu(){

console.log(`
1.addlivre
 2.affiche
 3.tier
 4.tieranne
 5.afficheseul
 6.rechid
 



`);
let choix = prompt("entrer un choix  :  ");
return choix
}
  

bebliotheque = [
    {id_livre:22 ,titre:"riche pere",auteur:"jonh marcile",annéepub:1905,disponible:false},
    {id_livre:24,titre:"pouvre pere",auteur:"marina cartile",annéepub: 1846,disponible:true}
];


//  ajouter un livre 
function addlivre(){


   nouveau= {
        id_livre:prompt("entrer un id_livre:  "),
        titre:prompt("entrer un titre :  "),
        auteur:prompt("entrer un auteur:  "),
        annéepub:prompt("entrer anne de publication:  "),
        

        
    };
   
   
         
    
    bebliotheque.push(nouveau)


 console.log("liste livre: ",bebliotheque)   
 
    for(let i=0 ;i<bebliotheque.length;i++){
         console.log(`livre${i+1}`,
    bebliotheque[i]);
         ;}
    }


// afficher les levres 
    function affiche(){
        if (bebliotheque.length===0){
            console.log("aucun livre dune bibliotheque ");
            
        }  else{
            for(let i=0; i<bebliotheque.length;  i++ ){
        let tache = bebliotheque[i];
        
console.log(" id_livre :  "+ tache.id_livre +" |titre est :   "+ tache.titre +"| auteur appelle :   " + tache.auteur +" | annee de publication  en :   "  +tache.annéepub)
 ;

    }
}
    }
    

//  Trier les livres par titre (ascendant/descendant) 

function trier(){
    let h= prompt("entrer un votre choix :    1.ascendant    |    2.descendant   ");

    if(h==1){
   bebliotheque.sort((a, b) => a.titre.localeCompare(b.titre));



    }else if (h==2){bebliotheque.sort((a, b) => b.titre.localeCompare(a.titre));

    }
    
}
    console.log(bebliotheque)
// Trier les livres par année de publication 



function trieranne(a,b){
    bebliotheque.sort(function(a,b){
        return a.annéepub-b.annéepub ;

    });
    for(let i= 0 ;i<bebliotheque.length ;i++){
        console.log(bebliotheque[i].annéepub);
        
    }
    
    
}


//  Afficher uniquement les livres disponibles function afficherobjet (){
    

function afficheseul(){


    for(let i=0 ; i < bebliotheque.length;i++)
        {
            if(bebliotheque[i].disponible ===true ){
                    console.log(bebliotheque[i]);
            }  else(bebliotheque[i].disponible===!false)

                                                                         
           
            }
            }
// recherche un nom par id
function cherid (idnom){
    for(let i=0 ;i< bebliotheque.length ;i++){
if(bebliotheque[i].id_livre == idnom){ 
return  bebliotheque[i];
}} }
let idobj = Number(prompt("entre votre id_livre : "));
let livreok = cherid(idobj);
if (livreok){
    console.log("waw : ")
}; 




  let choix;
  do{
    choix= menu();
    switch(choix){
        case'1':
        
        addlivre()
        break;
        case'2':
        affiche()
        break;
        case'3':
        trier()
        break;
        case'4':
        trieranne()

        break;
        case'5':
        afficheseul()
        break;
        case'6':
        cherid()
        break;
        case'0':
        console.log("choix inalid ");
    }}while(choix!=="0");



    





















   
