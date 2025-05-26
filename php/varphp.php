<?php
// exo 1



$ville = 'Paris';
echo $ville;


$nom = 'lopez';
$prenom = 'Nina';
// exo 2

echo " Bonjour " . $prenom . " " . $nom;

// Chose a savoir un php et un langages differents de js donc donc ne se lis pas par live serveurs 
//exo 3 dans ton eco tu peut mettre directement la balise 
$score =  10;
echo " " . $score . "";

$score =  15;
echo " " . $score . "";

// Exo 4 
$a = 8;
$b = 4;
$total = $a + $b;
echo " " . $total . " ";

$text = "Coucou toi comment tu vas depuis ?";
$entie = 10;
$decimal = 1.5;
$vraiOuFaux = false;

echo var_dump($text, $decimal, $entie);


$note_maths = 15;
$note_francais = 12;
$note_histoire_geo = 9;
$moyenne = ($note_francais + $note_maths + $note_histoire_geo) / 3;
echo 'La moyenne est de ' . $moyenne . ' / 20.';


$prix_ht = 50;
$tva = 20;
$prix_ttc = $prix_ht - $tva;
echo 'Le prix TTC du produit est de ' . $prix_ttc . ' €.';
?>
<!-- Condiditons  -->
<?php
$age = 23;
if ($age >= 18) {
   echo 'tu es majeurs   ';
} else {
   echo 'Tu es mineurs  ';
}

$note = 16.5;
if ($note < 10) {
   echo 'Insuffisant';
}
if ($note >= 10 && $note <= 13) {
   echo 'Passable';
} elseif ($note >= 14 && $note <= 16) {
   echo 'Bien';
} else {
   echo 'Exellent';
}
// Fait attention a la condition total === !
$abonner = false;
if ($age >= 18 && $abonner === true) {
   echo 'Accès accepter ';
} else {
   echo 'Accès refusé ';
}

$budget = 1953.89;
$achat = 1554.74;

if ($budget >= $achat) {
   echo 'achat effectuer';
} else {
   echo 'buget serrer pas possible';
}


?>
<!-- Boucles -->
<?php
$x = 5;
for ($i = 0; $i < 11; $i++) {

   echo $x * $i . ' ';
}

$prenoms = ['Nuno', 'Angélique', 'Sébastien', 'Nina', 'Adrien'];

foreach ($prenoms as $prenom) {
   echo $prenom . ' present  ';
}

$equipe = [
   'Nuno' => 'PHP',
   'Angélique' => 'JavaScript',
   'Sébastien' => 'PHP',
   'Nina' => 'Python',
   'Adrien' => 'PHP',
   'Alvyn' => 'PHP',
   'Ilona' => 'JavaScript',
   'Jean-François' => 'PHP',
   'Alan' => 'JavaScript',
   'Guillaume' => 'PHP'
];

$phpdev = [];
foreach ($equipe as $nom => $langage) {
   if ($langage == 'PHP') {
      $phpdev[] = $nom;
      echo $nom . '  est developper PHP  ';
   }
}

$liste =  [
   ' France' => 'Paris',
   ' Allemagne' => 'Berlin',
   ' italie' => 'Rome',
];

foreach ($liste as $pays => $capital) {
   echo $pays . ' : ' . $capital;
}


$nombreAleatoire = rand(0, 50);
echo $nombreAleatoire;

$pays_population = array(
   'France' => 67595000,
   'Suede' => 9998000,
   'Suisse' => 8417000,
   'Kosovo' => 1820631,
   'Malte' => 434403,
   'Mexique' => 122273500,
   'Allemagne' => 82800000,
);

echo "Nombre d'éléments : " . count($pays_population);

?>