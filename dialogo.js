let atr = token.actor.data.data.attributes;

let secundarias = new Dialog({
 title: "Secundarias",
 content: "<p>Menú de habilidades secundarias :</p>",
 buttons: {
  Atleticas: {
   icon: '<i class="fas fa-running"></i>',
   label: "Atéticas",
   callback: () => console.log("Chose One")
  },
  Sociales: {
   icon: '<i class="far fa-comment"></i>',
   label: "Sociales",
   callback: () => console.log("Chose Two")
  },
  Perceptivas: {
   icon: '<i class="far fa-eye"></i>',
   label: "Perceptivas",
   callback: () => console.log("Chose Two")
  },
  Intelectuales: {
   icon: '<i class="fas fa-book-open"></i>',
   label: "Intelectuales",
   callback: () => console.log("Chose Two")
  },
  Vigor: {
   icon: '<i class="fas fa-dumbbell"></i>',
   label: "Vigor",
   callback: () => console.log("Chose Two")
  },
  Subtefugio: {
   icon: '<i class="fas fa-user-ninja"></i>',
   label: "Subterfugio",
   callback: () => console.log("Chose Two")
  },
  Creativas: {
   icon: '<i class="fas fa-palette"></i>',
   label: "Creativas",
   callback: () => console.log("Chose Two")
  }
 }
});

/*

Template dialogo

var  = new Dialog({
    title: "",
    content: "<p></p>",
    buttons: {
        
        }
    });
    
Template boton

   name: {
   icon: '<i class="fas fa-palette"></i>',
   label: "",
   callback: () => 
  }

*/

function imp() {
    
    ChatMessage.create({content: token.actor.data.data.attributes.pro.value});
    ChatMessage.create({content: atr.pro.value});
    }
