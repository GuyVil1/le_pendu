let mot = "bonjour";
let tableauLettre = ['-', '-', '-', '-', '-', '-', '-'];
let score = 10;
let lettreJoueur ="";
let trouvé = false;


function choisirLettre(){
    lettreJoueur = prompt(`le mot à trouver est ${tableauLettre.join()}\nIl vous reste ${score} essais,\n Choisissez une lettre.`);
    console.log(lettreJoueur);
    vérifierLettre(lettreJoueur);
}

function vérifierLettre(x){
    for(i = 0; i < mot.length; i++){
        if(mot[i] == x){
            trouvé = true;
            tableauLettre[i] = x;
        }
    }
    if(trouvé == false){
        score --;
    }
    checkTableau();
}

function checkTableau(){
    trouvé = false;
    if(score == 0){
        alert(`Vous avez perdu, le mot à trouver était ${mot}`);
    } else {
        let reponse = 0;
        for(i = 0; i < tableauLettre.length; i++){
            if(tableauLettre[i] != "-"){
                reponse++;
            }
        }
        
        if(reponse == mot.length){
            alert(`Bravo, vous avez gagné, le mot à trouver était bien ${mot}`);
        } else{
            choisirLettre();
        }
    }
}

choisirLettre();
