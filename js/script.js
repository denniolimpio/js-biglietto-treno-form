
// variabili bottoni
btnGenera = document.getElementById('form-genera');
btnAnnulla = document.getElementById ('form-annulla');

// variabili input
var inputNome = document.getElementById('form-nome');
var inputKm = document.getElementById('form-km');
var inputEta = document.getElementById('form-eta');


// variabili ticket

var outputNome = document.getElementById ('ticket-nome');
var outputOfferta = document.getElementById ('ticket-offerta');
var outputCarrozza = document.getElementById ('ticket-carrozza');
var outputCodice = document.getElementById ('ticket-codice');
var outputCosto = document.getElementById ('ticket-costo');

// evento click genera

btnGenera.addEventListener('click',
function () {

  // leggo i dati immessi dall'utente

  nomeValue = inputNome.value;
  kmValue = inputKm.value;
  etaValue = inputEta.value;

  //calcolo

  var prezzo = kmValue * 0.21;
  var sconto;

  // IMPORTANTE -  validazione


  if ((nomeValue === '') || (isNaN(kmValue))){

    // Se il campo "nome" è VUOTO o il campo km non è un numero
    //  allora mostro messaggio di errore

    var errore = document.getElementById ('error-message');
    errore.className = ' show';

  }
  // se le condizioni sono soddisfatte allora ..
  else {
    // parte logica
    if ( etaValue == 'minorenne') {
      prezzo = prezzo - ( prezzo * 20 / 100);
      sconto = ' Ridotto under 18'

    } else if ( etaValue == 'over 65') {
      prezzo = prezzo - ( prezzo * 40 / 100);
      sconto = 'ridotto over 65'

    }
    else {
      prezzo = prezzo;

      sconto = 'prezzo standard'

    }
    // compilo il ticket
    outputNome.innerHTML = nomeValue;
    outputOfferta.innerHTML = 'da compilare';
    outputCosto.innerHTML = prezzo.toFixed(2) + ' euro';
    outputOfferta.innerHTML = sconto;
    outputCarrozza.innerHTML = Math.floor(Math.random() * 10) + 1;
    outputCodice.innerHTML = ' IT' + Math.floor(Math.random() * 101) + ' NA';
    //mostro il biglietto
    var showTicket = document.getElementById ('ticket');
    showTicket.className = ' show';
  }
})


// evento click annulla
btnAnnulla.addEventListener ('click',
function() {

  // nascondo messaggio di errore
  var errore = document.getElementById ('error-message');
  errore.className = ' hidden';

  //nascondo il biglietto
  var hiddenTicket = document.getElementById ('ticket');
  hiddenTicket.className = ' hidden';

  // svuoto contenuto showTicket
  inputNome.value = '';
  outputNome.innerHTML = '';
  inputKm.value = '';
  outputOfferta.innerHTML = '';
  outputCosto.innerHTML = '';
  inputEta.value = '0';
  outputOfferta.innerHTML = '';
  outputCarrozza.innerHTML ='';
  outputCodice.innerHTML = '';
})
