function seleciona(e){
	e.target.select();
}


function atualizaValvula(){
	if(document.getElementById("Fabricante").value == "AE"){
		document.getElementById("Fabricante2").value = "VÁLVULA AUTEL";
	}else{
		document.getElementById("Fabricante2").value = "VÁLVULA AUTEL";
	}
}

function atualizaValvula2(){
	if(document.getElementById("Fabricante2").value == "VÁLVULA AUTEL"){
		document.getElementById("Fabricante").value = "AE";
	}else{
		document.getElementById("Fabricante").value = "AE";
	}
}

function atualizaAcionamento(){
	switch (document.getElementById("Acionamento").value){
		case "18":
			document.getElementById("Acionamento21").value = "DE ACIONAMENTO ELÉTRICO";
			document.getElementById("Acionamento22").value = "DE SIMPLES DIAFRÁGMA";
			break;
		case "14":
			document.getElementById("Acionamento21").value = "DE ACIONAMENTO ELÉTRICO";
			document.getElementById("Acionamento22").value = "DE DUPLO DIAFRÁGMA";
			break;
		case "28":
			document.getElementById("Acionamento21").value = "DE ACIONAMENTO PNEUMÁTICO";
			document.getElementById("Acionamento22").value = "DE SIMPLES DIAFRÁGMA";
			break;
		case "24":
			document.getElementById("Acionamento21").value = "DE ACIONAMENTO PNEUMÁTICO";
			document.getElementById("Acionamento22").value = "DE DUPLO DIAFRÁGMA";
			break;
	   default: 
		   alert('CÓDIGO NÃO EXISTE NO ESTOQUE.    EXITE: 18 14 28 24 ');
	}
}

function atualizaAcionamento2(){
	switch (document.getElementById("Acionamento21").value){
		case "DE ACIONAMENTO ELÉTRICO": case "DE ACIONAMENTO ELETRICO":  case "ACIONAMENTO ELETRICO":  case "ELÉTRICO": case "ELETRICO": case "DE ASSIONAMENTO ELÉTRICO": case "DE ASSIONAMENTO ELETRICO": case "ELÉTRIC": case "ELETRIC" : case "ELÉTRI" : case "ELETRI" : case "ELÉTR" : case "ELETR" : case "ELÉT" : case "ELET" : case "ELÉ" : case "ELE" : case "EL" : case "EL" : case "E" : case "ELETRICA" : case "ELÉTRICA" : case "DE ACIONAMENTO ELÉTRICA" : case "DE ACIONAMENTO ELÉTRICA" : case "DE ACIONAMENTO ELETRICA" : case "DE ACIONAMENTO ELETRONICO" : case "DE ACIONAMENTO ELETRÔNICO" : case "ACIONAMENTO ELETRÔNICO" : case "ACIONAMENTOS ELÉTRICOS" : case "ACIONAMENTOS ELETRÔNICOS": 
			document.getElementById("Acionamento").value = "1";
			document.getElementById("Acionamento21").value = "DE ACIONAMENTO ELÉTRICO";
			break;
		case "DE ACIONAMENTO PNEUMÁTICO" : case "ACIONAMENTO PNEUMÁTICO"  : case "PNEUMÁTICO"  : case "PNEUMATICO"  : case "PNEUMÁTIC"  : case "PNEUMATIC"  : case "PNEUMÁTI"  : case "PNEUMATI" : case "PNEUMÁT"  : case "PNEUMAT"  : case "PNEUMÁ"  : case "PNEUMA" : case "PNEUM"  : case "PNEU" : case "PNE"  : case "PN" : case "P"  : case "PINEUMATICO" : case "PINEUMÁTICO"  : case "PINEUMATI"  : case "PINEUMÁTI"  : case "PINEUMAT" : case "PINEUMÁT"  : case "PINEUMATICA" : case "PINEUMÁTICA"  : case "PNEUMATICA" : case "PNEUMÁTICA" :
			document.getElementById("Acionamento").value = "2";
			break;
	   default: 
		alert(document.getElementById("Acionamento21").value);
		   alert('NÃO ENCONTRADO ESSE TIPO DE ACIONAMENTO. TENTE: ELÉTRICO OU PNEUMÁTICO');
	}
}



function atualizaPolegadas(){
	var P = document.getElementById("Polegadas");
	var P2 = document.getElementById("Polegadas2");
	switch (true){
		case P.value==18 || P.value==20:
			P2.value = "0,75 POLEGADAs";
			break;
		case P.value==22 || P.value==25:
			P2.value = "1 POLEGADA";
			break;
		case P.value==40:
			P2.value = "1,5 POLEGADAs";
			break;
		case P.value==50:
			P2.value = "2 POLEGADAs";
			break;
		case P.value==60:
			P2.value = "2,5 POLEGADAs";
			break;
		case P.value==75:
			P2.value = "3 POLEGADAs";
			break;
		case P.value==90:
			P2.value = "3.5 POLEGADAs";
			break;
	   default: 
		   alert('NÃO EXISTE ESSA MEDIDA NO ESTOQUE');
	}
}

function atualizaPolegadas2(){
	var P = document.getElementById("Polegadas2");
	var P2 = document.getElementById("Polegadas");
	switch (true){
		case P.value=="0,75 POLEGADAS" || P.value=="3/4":
			P2.value = "18"; // OU 20
			break;
		case P.value=="1 POLEGADA" :
			P2.value = "22"; // OU 25
			break;
		case P.value=="1,5 POLEGADAS":
			P2.value = "40";
			break;
		case P.value=="2 POLEGADAS":
			P2.value = "50";
			break;
		case P.value=="2,5 POLEGADAS":
			P2.value = "60";
			break;
		case P.value=="3 POLEGADAS":
			P2.value = "75";
			break;
		case P.value=="3.5 POLEGADAs":
			P2.value = "90";
			break;
	   default: 
		   alert('Default case');
	}
}




function atualizaTipo(){
	var T = document.getElementById("Tipo");
	var T2 = document.getElementById("Tipo2");
	switch (T.value){
		case "B":
			T2.value = "CONEXÃO DE ROSCA";
			break;
		case "R":
			T2.value = "CONEXÃO DE ENGATE RÁPIDO";
			break;
		case "I":
			T2.value = "VÁLVULA DE IMERSÃO";
			break;
		case "G":
			T2.value = "IMERSÃO COM CONEXÃO PLANA";
			break;
		case "W":
			T2.value = "IMERSÃO COM FIXAÇÃO POR SOLDA";
			break;
	   default: 
		   alert('Default case');
	}
}

function atualizaTipo2(){
	var T = document.getElementById("Tipo2");
	var T2 = document.getElementById("Tipo");
	switch (T.value){
		case "CONEXÃO DE ROSCA":
			T2.value = "B";
			break;
		case "CONEXÃO DE ENGATE RÁPIDO":
			T2.value = "R";
			break;
		case "VÁLVULA DE IMERSÃO":
			T2.value = "I";
			break;
		case "IMERSÃO COM CONEXÃO PLANA":
			T2.value = "G";
			break;
		case "IMERSÃO COM FIXAÇÃO POR SOLDA":
			T2.value = "W";
			break;
	   default: 
		   alert('Default case');
	}
}



function atualizaOpcoes(){

}

function atualizaVoltagem(){

}



function handleInput(e) {
   var ss = e.target.selectionStart;
   var se = e.target.selectionEnd;
   e.target.value = e.target.value.toUpperCase();
   e.target.selectionStart = ss;
   e.target.selectionEnd = se;
}