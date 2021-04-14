function game(){

    let mots_7 = ["abeille","abricot","abriter","acheter","adresse","affaire","affiche","afrique","ajouter","algebre","aliment","alliage","allumer","ampoule","amusant","analyse","ancetre","anglais","animaux","appeler","appetit","appuyer","armoire","arreter","arriere","arriver","arroser","article","asseoir","associe","astraux","automne","avancer","bagarre","baigner","bailler","baisser","balayer","baleine","barrage","barreau","bassine","bengali","biberon","bientot","bifteck","biscuit","bizarre","blesser","blottir","boisson","boucher","bouchon","bouquet","branche","briller","buisson","cabinet","cadenas","cagoule","caillou","caliner","caprice","caresse","carotte","carreau","cederom","celibat","cerceau","cereale","cerveau","chaises","chaleur","chambre","chameau","changer","chanson","chanter","chapeau","charger","chariot","chasser","chateau","chemise","chiffon","chiffre","chimere","chinois","choisir","cholera","cigogne","ciseaux","clocher","cocotte","coffret","coiffer","collant","collier","colline","combien","comment","compose","compter","connard","content","corbeau","coucher","couette","couleur","couloir","cousine","coussin","couteau","couvert","couvrir","cracher","crapaud","cravate","creuser","crochet","croiser","croquer","cuisine","culotte","curieux","cuvette","dauphin","decorer","defiler","demolir","dernier","dessert","dessous","detroit","diamant","dinette","divorce","docteur","dossier","doucher","drapeau","ecarter","echarpe","echasse","echelle","eclater","eclipse","ecouter","ecraser","effacer","effraye","egalite","element","emmener","endroit","energie","enfiler","enlever","ennuyer","envoler","envoyer","epingle","essayer","essence","essuyer","estomac","etagere","ethique","etudier","excuser","facteur","falaise","falloir","famille","fantome","fatigue","fenetre","fermier","feuille","fevrier","ficelle","flotter","frapper","fratrie","fromage","frotter","galaxie","galette","galoper","gardien","gentile","glacier","glisser","gobelet","gonfler","goudron","gouffre","gouttes","graines","grandir","gratter","gravite","griffer","griller","grimace","grimper","gronder","guetter","habiter","hamster","haricot","hauteur","hesiter","heureux","hopital","horloge","iceberg","immense","inonder","insecte","inviter","italien","janvier","jongler","journee","juillet","justice","laisser","langues","largeur","lecture","lessive","lexique","liberte","licorne","liquide","logique","lumiere","machine","magasin","magenta","maillot","maladie","manquer","manteau","marcher","mariage","marteau","matelas","matiere","mauvais","mechant","medecin","mesurer","million","mineral","modeler","moineau","monnaie","montrer","morceau","moucher","mouette","mouille","musique","neutron","nombres","nonante","nourrir","nouveau","nuageux","obesite","obliger","occuper","oceanie","octante","octobre","optique","oreille","oublier","ouragan","ouvrier","panneau","parasol","parente","parking","passage","patient","paysage","pecheur","pedaler","peindre","peluche","pencher","pendant","pendule","penseur","percher","petrole","pinceau","piscine","placard","plafond","planche","planete","planter","plateau","pleurer","plonger","poignet","poireau","poisson","pompier","pousser","poussin","pouvoir","prairie","premier","prendre","present","presque","presser","profond","prudent","quitter","racisme","realite","recette","reciter","reculer","refuser","regaler","remplir","rentree","rentrer","reparer","repeter","reposer","reptile","reussir","revenir","riviere","robinet","ronfler","roulade","rouleau","rugueux","saigner","saisons","sardine","seconde","secouer","semaine","semelle","separer","serieux","serpent","serrure","sexisme","siffler","sifflet","silence","soigner","sommeil","sourcil","sourire","souvent","suivant","surdite","surface","tableau","tablier","tailler","tambour","tartine","tempete","terrain","terrier","theorie","torchon","tornade","toucher","tourner","tousser","trainer","tranche","travail","travaux","tremper","tricher","tromper","trousse","trouver","tsunami","univers","vampire","variole","vegetal","village","visiter","vitesse","voiture","volonte","vouloir","voyager"];
    
    let mot = "";
    let tableauLettre = [];
    let score = 10;
    let lettreJoueur = "";
    let trouvé = false;
    let reponse = 0;
    
    function newGame(){
        //tirer un mot au sort
        let hasard = parseInt(Math.random() * (mots_7.length - 0) + 0);
        mot = mots_7[hasard];
        for(i = 0; i< mot.length; i++){
            tableauLettre[i] = "-";
        }
        choisirLettre();
        
    }
    
    function choisirLettre(){
        console.log(mot);
        console.log(tableauLettre);
        do{
            lettreJoueur = prompt(`le mot à trouver est ${tableauLettre.join()}\nIl vous reste ${score} essais,\n Choisissez une lettre.`);
        }while((lettreJoueur == " " || lettreJoueur == null || lettreJoueur == "" || lettreJoueur.length > 1));
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
            confirm(`Une autre partie ? `) ? game() : alert(`Au revoir`);
        } else {
            reponse = 0;
            for(i = 0; i < tableauLettre.length; i++){
                if(tableauLettre[i] != "-"){
                    reponse++;
                }
            }
            
            if(reponse == mot.length){
                alert(`Bravo, vous avez gagné, le mot à trouver était bien ${mot}`);
                confirm(`Une autre partie ? `) ? game() : alert('Au revoir');
            } else{
                choisirLettre();
            }
        }
    }
    
    newGame();
}

confirm(`On se fait un petit pendu ? `) ? game() : alert('Au Revoir');