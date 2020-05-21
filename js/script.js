// dichiaro le variabili input

// FORM
var nomePasseggero = document.getElementById('form-nome');
var kmDistance = document.getElementById ('form-km');
var etaPasseggero = document.getElementById ('form-eta');
//bottoni
var buttonGenera = document.getElementById ('form-genera');
var buttonAnnulla = document.getElementById('form-annulla');
// TICKET
var nomeTicket = document.getElementById ('ticket-nome');
var distanceTicket = document.getElementById ('ticket-km');
var etaTicket = document.getElementById ( 'ticket-eta');
var prezzoTicket = document.getElementById ('ticket-prezzo');
var numeroCarrozza = document.getElementById ( 'ticket-carrozza');
var numeroTicket = document.getElementById ('ticket-number');
var scontoTicket = document.getElementById ('ticket-sconto');


//  altre variabili
var kmDistanceValue;
var etaPasseggeroValue;
var nomePasseggeroValue;

// LAYOUT
var showticket = document.getElementById('ticket');
// funzioni - genera
// quando clicco su genera deve succere qualcosa
  buttonGenera.addEventListener( 'click', function()
  {
    showticket.className = showticket.classList + ' show';
    nomePasseggeroValue = nomePasseggero.value;
    kmDistanceValue = parseInt(kmDistance.value);
    etaPasseggeroValue = etaPasseggero.value;

      //calcolo prezzo

    var prezzo = kmDistanceValue * 0.21;
    sconto = 'Prezzo Standard';
    console.log( prezzo);


    if ( etaPasseggeroValue == 'minorenne') {
        prezzo = prezzo - ( prezzo * 20 / 100);
        console.log ( prezzo.toFixed(2) );
        sconto = 'Abbiamo applicato uno sconto del 20%';



      }  else if (etaPasseggeroValue == 'over 65'){

        prezzo = prezzo - (prezzo * 40 / 100);
        console.log ( prezzo.toFixed(2) );
        sconto = 'Abbiamo applicato uno sconto del 40%';


      }





    //compilazione biglietti
    nomeTicket.innerHTML = nomePasseggero.value;
    distanceTicket.innerHTML = kmDistance.value;
    etaTicket.innerHTML = etaPasseggero.value;
    prezzoTicket.innerHTML = prezzo.toFixed(2) + ' euro';
    numeroCarrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
    numeroTicket.innerHTML = Math.random().toFixed(3);
    scontoTicket.innerHTML = sconto;



})
// funzioni - annulla

buttonAnnulla.addEventListener( 'click', function (){

  showticket.className = showticket.classList + (' hidden');

  // annullo nome
  nomePasseggero.value = '';
  nomeTicket.innerHTML = '';
  // annullo km
  kmDistance.value = '';
  distanceTicket.innerHTML = '';
  // annullo fascia di eta
  etaPasseggero.value = 'maggiorenne';
  etaTicket.innerHTML = '';

  numeroCarrozza.innerHTML = '';
  numeroTicket.innerHTML = '';
  scontoTicket.innerHTML = '';



})
