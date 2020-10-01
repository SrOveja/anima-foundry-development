var key=[];
let secundarias = new Dialog({
 title: "Secundarias",
 content: "<p>Menú de habilidades secundarias :</p>",
 buttons: {
  Atleticas: {
   icon: '<i class="fas fa-running"></i>',
   label: "Atéticas",
   callback: () => atleticas.render(true)
  },
  Sociales: {
   icon: '<i class="far fa-comment"></i>',
   label: "Sociales",
   callback: () => sociales.render(true)

  },
  Perceptivas: {
   icon: '<i class="far fa-eye"></i>',
   label: "Perceptivas",
   callback: () => perceptivas.render(true)
  },
  Intelectuales: {
   icon: '<i class="fas fa-book-open"></i>',
   label: "Intelectuales",
   callback: () => intelectuales.render(true)
  },
  Vigor: {
   icon: '<i class="fas fa-dumbbell"></i>',
   label: "Vigor",
   callback: () => vigor.render(true)
  },
  Subtefugio: {
   icon: '<i class="fas fa-user-ninja"></i>',
   label: "Subterfugio",
   callback: () => subterfugio.render(true)
  },
  Creativas: {
   icon: '<i class="fas fa-palette"></i>',
   label: "Creativas",
   callback: () => creativa.render(true)
  }
 }
});

secundarias.render(true);

let atleticas = new Dialog({
 title: "Atleticas",
 content: "<p>Menú de habilidades relacionadas al cuerpo :</p>",
 buttons: {
  Acrobacia: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Acrobacia",
   callback: () => key=[_token.actor.data.data.attributes.acr.value,"Acrobacias"]
  },
  Atletismo: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Atletismo",
   callback: () => key=[_token.actor.data.data.attributes.atl.value,"Atletismo"]

  },
  Montar: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Montar",
  callback: () => key=[_token.actor.data.data.attributes.mon.value, "Montar"]
  },
  Nadar: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Nadar",
   callback: () => key=[_token.actor.data.data.attributes.nad.value,"Nadar"]
  },
  Saltar: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Saltar",
  callback: () => key=[_token.actor.data.data.attributes.sal.value,"Saltar"]
  },
  Pilotear: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Pilotear",
   callback: () => key=[_token.actor.data.data.attributes.pil.value,"Pilotear"]
  },
  Trepar: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Trepar",
  callback: () => key=[_token.actor.data.data.attributes.tre.value,"Trepar"]
  }
 },close:  () => rollhab(key) 
});

let sociales = new Dialog({
 title: "Sociales",
 content: "<p>Menú de habilidades relacionadas al interactuar con otros :</p>",
 buttons: {
  Estilo: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Estilo",
  callback: () => key=[_token.actor.data.data.attributes.est.value,"Estilo"]
  },
  Intimidar: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Intimidar",
   callback: () => key=[_token.actor.data.data.attributes.intimidar.value,"Intimidar"]

  },
  Liderazgo: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Liderazgo",
   callback: () => key=[_token.actor.data.data.attributes.lid.value,"Liderazgo"]
  },
  Persuacion: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Persuación",
   callback: () => key=[_token.actor.data.data.attributes.persuacion.value,"Persuación"]
  },
  Comercio: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Comercio",
   callback: () => key=[_token.actor.data.data.attributes.com.value,"Comercio"]
  },
  Callejeo: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Callejeo",
   callback: () => key=[_token.actor.data.data.attributes.callejeo.value,"Callejeo"]
  },
  Etiqueta: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Etiqueta",
   callback: () => key=[_token.actor.data.data.attributes.eti.value,"Etiqueta"]
  }
 },close:  () => rollhab(key)
});

let perceptivas = new Dialog({
 title: "Percetivas",
 content: "<p>Menú de habilidades relacionadas al percibir el entorno :</p>",
 buttons: {
  Advertir: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Advertir",
  callback: () => key=[_token.actor.data.data.attributes.adv.value,"Advertir"]
  },
  Buscar: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Buscar",
  callback: () => key=[_token.actor.data.data.attributes.bus.value,"Buscar"]

  },
  Rastrear: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Rastrear",
  callback: () => key=[_token.actor.data.data.attributes.ras.value,"Rastrear"]
  }
 },close:  () => rollhab(key)
});

let intelectuales = new Dialog({
 title: "Intelectuales",
 content: "<p>Menú de habilidades relacionadas a diversas áreas del conocimiento :</p>",
 buttons: {
  Animales: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Animales",
   callback: () => key=[_token.actor.data.data.attributes.animales.value,"Animales"]
  },
  Ciencia: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Ciencia",
   callback: () => key=[_token.actor.data.data.attributes.cie.value,"Ciencia"]

  },
  Ley: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Ley",
   callback: () => key=[_token.actor.data.data.attributes.ley.value,"Ley"]
  },
  Herbolaria: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Herbolaria",
   callback: () => key=[_token.actor.data.data.attributes.her.value,"Herbolaria"]
  },
  Historia: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Historia",
   callback: () => key=[_token.actor.data.data.attributes.his.value,"Historia"]
  },
  Tactica: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Tactica",
   callback: () => key=[_token.actor.data.data.attributes.tac.value,"Tactica"]
  },
  Medicina: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Medicina",
   callback: () => key=[_token.actor.data.data.attributes.med.value,"Medicina"]
  },
  Memorizar: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Memorizar",
   callback: () => key=[_token.actor.data.data.attributes.mem.value,"Memorizar"]
  },
  Navegacion: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Navegación",
   callback: () => key=[_token.actor.data.data.attributes.nav.value,"Navegación"]
  },
  Ocultismo: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Ocultismo",
   callback: () => key=[_token.actor.data.data.attributes.ocultismo.value,"Ocultismo"]
  },
  Tasacion: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Tasación",
   callback: () => key=[_token.actor.data.data.attributes.tas.value,"Tasación"]
  },
  vMagica: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Valoración Magica",
   callback: () => key=[_token.actor.data.data.attributes.val.value,"Valoración Magica"]
  }
 },close:  () => rollhab(key)
});

let vigor = new Dialog({
 title: "Frialdad",
 content: "<p>Menú de habilidades relacionadas al aguante en estados de estrés :</p>",
 buttons: {
  Frialdad: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Frialdad",
   callback: () => key=[_token.actor.data.data.attributes.fri.value,"Frialdad"]
  },
  Pfuerza: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Proeza de fuerza",
   callback: () => key=[_token.actor.data.data.attributes.pro.value,"Proeza de fuerza"]

  },
  Rdolor: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Resistencia al dolor",
   callback: () => key=[_token.actor.data.data.attributes.res.value,"Resistencia al dolor"]
  }
 },close:  () => rollhab(key)
});

let subterfugio = new Dialog({
 title: "Subterfugio",
 content: "<p>Menú de habilidades relacionadas al disimulo:</p>",
 buttons: {
  Cerrajeria: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Cerrajería",
   callback: () => key=[_token.actor.data.data.attributes.cer.value,"Cerrajería"]
  },
  Disfraz: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Disfraz",
   callback: () => key=[_token.actor.data.data.attributes.dis.value,"Disfraz"]

  },
  Ocultarse: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Ocultarse",
   callback: () => key=[_token.actor.data.data.attributes.ocultarse.value,"Ocultarse"]
  },
  Robo: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Robo",
   callback: () => key=[_token.actor.data.data.attributes.rob.value,"Robo"]
  },
  Sigilo: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Sigilo",
   callback: () => key=[_token.actor.data.data.attributes.sig.value,"Sigilo"]
  },
  Tramperia: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Trampería",
   callback: () => key=[_token.actor.data.data.attributes.tra.value,"Trampería"]
  },
  Venenos: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Venenos",
   callback: () => key=[_token.actor.data.data.attributes.ven.value,"Venenos"]
  }
 },close:  () => rollhab(key)
});

let creativa = new Dialog({
 title: "Creativas",
 content: "<p>Menú de habilidades relacionadas a la artesania :</p>",
 buttons: {
  Arte: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Arte",
   callback: () => key=[_token.actor.data.data.attributes.art.value,"Arte"]
  },
  Baile: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Baile",
   callback: () => key=[_token.actor.data.data.attributes.bai.value,"Baile"]

  },
  Forja: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Forja",
   callback: () => key=[_token.actor.data.data.attributes.forja.value,"Forja"]
  },
  Runas: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Runas",
   callback: () => key=[_token.actor.data.data.attributes.run.value,"Runas"]
  },
  Alquimia: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Alquimia",
   callback: () => key=[_token.actor.data.data.attributes.alq.value,"Alquimia"]
  },
  Animismo: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Animismo",
   callback: () => key=[_token.actor.data.data.attributes.animismo.value,"Animismo"]
  },
  Musica: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Musica",
   callback: () => key=[_token.actor.data.data.attributes.mus.value,"Musica"]
  },
  tManos: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Truco de manos",
   callback: () => key=[_token.actor.data.data.attributes.tru.value,"Truco de manos"]
  },
  cRitual: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Caligrafia ritual",
   callback: () => key=[_token.actor.data.data.attributes.caligrafia.value,"Caligrafia ritual"]
  },
  Orfebreria: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Orfebrería",
   callback: () => key=[_token.actor.data.data.attributes.orf.value,"Orfebrería"]
  },
  Confeccion: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Confección",
   callback: () => key=[_token.actor.data.data.attributes.confeccion.value,"Confección"]
  },
  cMarionetas: {
   icon: '<i class="fas fa-chevron-right"></i>',
   label: "Confección de Marionetas",
   callback: () => key=[_token.actor.data.data.attributes.cMar.value,"Confección de Marionetas"]
  }
 },close:  () => rollhab(key)
});



async function rollhab(key) {
	for (let token of canvas.tokens.controlled){
		var v_mod = key[0]; //Modificar "advertir" por key de cualquier stat (recordar cambiar en html)
		var v_f = new Roll(`1d100x>89+${v_mod}`).roll().total; // rolling the formula
		const actor = token.actor.name;
		let html = `
		<h2 style="width:100%">${key[1]} de ${actor}</h2>
		<table style="width:100%; display:flex">
		  <tr>
			<th> La tirada de ${key[1]} final es ${v_f} </th>
			
		  </tr>
		</table>`;
		ChatMessage.create({content: html});
	}
}
