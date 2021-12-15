// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// Bonus:
// In una cartella bonus:
// Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
// Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, 
// i dati devono venire da Vue.
// Poi aggiungiamo un pulsante per aumentare questo numero.

var title = new Vue({
	el: '#title',
	data: {
	  message: 'Hello Vue!',
	}
  })

  var card = new Vue({
	el: '#card',
	data: {
		image: 'https://picsum.photos/id/1040/600/400'
	}
  })

console.log(card);