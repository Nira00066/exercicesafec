function actionHello() {
  alert("bravo, tu as cliqué !");
}

function changeColor() {
  let zone = document.getElementById("paragraphe");

  zone.addEventListener("mouseover", function () {
    zone.style.color = "red";
  });
zone.addEventListener('mouseout', function(){
  zone.style.color="black";
})
}

   window.onload = changeColor;
  //  sert de mettre en jour le chargement