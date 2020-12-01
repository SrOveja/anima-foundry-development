//Skill Roll
//      //<th> ${defRoll.dice}</th>
//Attack Roll


//Defense Roll

async function defensa() {
var attr, esq, par, defMod, flavor, flavor2, defRoll, defFinal;


attr = _token.actor.data.data.attributes; //assigns attr for simpler sintax
esq = attr.esq.value;
par = attr.par.value;  //assigns the values of the defense skills

if (esq > par ){

flavor = "esquiva";
flavor2 = "Esquiva";
defMod = esq;
//If dodge skill is higher than the block skill, then it determines the flavor text and modifier
} else {

flavor = "detiene el ataque";
flavor2 = "Parada";
defMod = par;

//If block skill is higher than the dodge skill, then it determines the flavor text and modifier
}

defRoll = new Roll(`1d100x>89+${defMod}-${attr.penTodaAccion.value}`).roll();
defFinal = defRoll.total;



const actor = _token.name;
		let html = `
		<h2 style="width:100%; border:8px">${flavor2} de ${actor}</h2>
		<table style="width:100%; display:flex">
		  <tr>
			<th > ${actor} ${flavor} : ${defFinal} </th>

			
		  </tr>
		</table>`;
		ChatMessage.create({content : html});
	
}
