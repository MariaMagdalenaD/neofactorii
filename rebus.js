var r1="INTREPRINDERE";
var r2="TEHNOLOGII";
var r3="FURNIZOR";
var r4="PROGRES";
var r5="RESURSE";
var r6="MARKETING";
var r7="TRANZACTIE";
var r8="PIATA";
var r9="REVOLUTIE";
var r10="STRATEGIE";
var x;/*in x am form-ul curent*/
var k;/*in k am cuvantul curent*/
var functia;/*numarul functiei apelate in cheama_functii()*/
var culoare;
function stil(x,i){
	document.getElementById(x).style.color = culoare;
	document.getElementById(x).innerHTML = k[i];
}
function cuv1(){
	stil("c11",0);
	stil("c12",1);
	stil("c13",2);
	stil("c14",3);
	stil("c15",4);
	stil("c16",5);
	stil("c17",6);
	stil("c18",7);
	stil("c19",8);
	stil("c110",9);
	stil("c111",10);
	stil("c112",11);
	stil("c113",12);
}
function cuv2(){
	stil("c21",0);
	stil("c22",1);
	stil("c23",2);
	stil("c24",3);
	stil("c25",4);
	stil("c26",5);
	stil("c27",6);
	stil("c28",7);
	stil("c29",8);
	stil("c210",9);
}
function cuv3(){
	stil("c31",0);
	stil("c32",1);
	stil("c33",2);
	stil("c34",3);
	stil("c35",4);
	stil("c36",5);
	stil("c37",6);
	stil("c38",7);
}
function cuv4(){
	stil("c41",0);
	stil("c42",1);
	stil("c43",2);
	stil("c44",3);
	stil("c45",4);
	stil("c46",5);
	stil("c47",6);
}
function cuv5(){
	stil("c51",0);
	stil("c52",1);
	stil("c53",2);
	stil("c54",3);
	stil("c55",4);
	stil("c56",5);
	stil("c57",6);
}
function cuv6(){
	stil("c61",0);
	stil("c62",1);
	stil("c63",2);
	stil("c64",3);
	stil("c65",4);
	stil("c66",5);
	stil("c67",6);
	stil("c68",7);
	stil("c69",8);
}
function cuv7(){
	stil("c71",0);
	stil("c72",1);
	stil("c73",2);
	stil("c74",3);
	stil("c75",4);
	stil("c76",5);
	stil("c77",6);
	stil("c78",7);
	stil("c79",8);
	stil("c710",9);
}
function cuv8(){
	stil("c81",0);
	stil("c82",1);
	stil("c83",2);
	stil("c84",3);
	stil("c85",4);
}
function cuv9() {
	stil("c91",0);
	stil("c92",1);
	stil("c93",2);
	stil("c94",3);
	stil("c95",4);
	stil("c96",5);
	stil("c97",6);
	stil("c98",7);
	stil("c99",8);
}
function cuv10() {
	stil("c101",0);
	stil("c102",1);
	stil("c103",2);
	stil("c104",3);
	stil("c105",4);
	stil("c106",5);
	stil("c107",6);
	stil("c108",7);
	stil("c109",8);
}
function cheama_functii(x){/*alege ce functie sa cheme din cele de mai sus*/
	if(x==1)
		cuv1();
	else 
	if(x==2)
		cuv2();
	else
	if(x==3)
		cuv3();
	else
	if(x==4)
		cuv4();
	else
	if(x==5)
		cuv5();
	else
	if(x==6)
		cuv6();
	else
	if(x==7)
        cuv7();
    else
	if(x==8)
        cuv8();
	else
	if(x==9)
		cuv9();
	else
	if(x==10)
		cuv10();
}
function raspuns(){
    var text = "";
    var i;
	var ok=1;
    for (i=0; i<x.length ; ++i)
		text += x.elements[i].value;
	text=text.toUpperCase();
	if(text!=k)
		culoare="red";
	else
		culoare="green";
	cheama_functii(functia);
}
function toate_raspunsurile(){
	x = document.getElementById("cuvant1");
	k=r1;
	functia=1;
	raspuns();
	
	x = document.getElementById("cuvant2");
	k=r2;
	functia=2;
	raspuns();
	
	x = document.getElementById("cuvant3");
	k=r3;
	functia=3;
	raspuns();
	
	x = document.getElementById("cuvant4");
	k=r4;
	functia=4;
	raspuns();
	
	x = document.getElementById("cuvant5");
	k=r5;
	functia=5;
	raspuns();
	
	x = document.getElementById("cuvant6");
	k=r6;
	functia=6;
	raspuns();
	
	x = document.getElementById("cuvant7");
	k=r7;
	functia=7;
	raspuns();
	
	x = document.getElementById("cuvant8");
	k=r8;
	functia=8;
	raspuns();
	
	x = document.getElementById("cuvant9");
	k=r9;
	functia=9;
	raspuns();
	
	x = document.getElementById("cuvant10");
	k=r10;
	functia=10;
	raspuns();

}




