var raspA = [ "F" , "A" ];
var raspB = [ "simbolica, utilitate" , "economice contemporane" ];
var raspC = [ "3", "6", "1", "2", "4"];
var raspD = [ "d" , "c" , "a" , "b" , "c" ,"a", "d", "b", "c", "d", "b"];
var A = ["N","N"];
var B = ["N","N"];
var C = ["N", "N", "N", "N", "N"]
var D = ["N","N","N","N","N","N","N","N","N","N","N"];
function adevarat(x){A[x]="A";}
function fals(x){A[x]="F";}
function raspunsB(x){
	if(x==0)
	  B[x]=document.getElementById("X1").value;
    else
	  B[x]=document.getElementById("X2").value;
}
function raspunsC(x){
	if(x==0)
	C[x]= document.getElementById("X3").value;
	else
	if(x==1)
	C[x]= document.getElementById("X4").value;
	else
	if(x==2)
	C[x]= document.getElementById("X5").value;
	else
	if(x==3)
	C[x]= document.getElementById("X6").value;
    else
	C[x]= document.getElementById("X7").value;
}
function a(x){D[x]="a";}
function b(x){D[x]="b";}
function c(x){D[x]="c";}
function d(x){D[x]="d";}
function corecte(){
	if(A[0]==raspA[0]){
		document.getElementById("raspuns1").style.color = "green";
        document.getElementById("raspuns1").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns1").style.color = "red";
        document.getElementById("raspuns1").innerHTML = "Gresit, raspunsul corect este:";
		document.getElementById("R1").innerHTML = "Fals";
	}
	if(A[1]==raspA[1]){
		document.getElementById("raspuns2").style.color = "green";
        document.getElementById("raspuns2").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns2").style.color = "red";
        document.getElementById("raspuns2").innerHTML = "Gresit, raspunsul corect este: ";
		document.getElementById("R2").innerHTML = "Adevarat";
	}
	if(B[0]==raspB[0]){
		document.getElementById("raspuns3").style.color = "green";
        document.getElementById("raspuns3").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns3").style.color = "red";
        document.getElementById("raspuns3").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R3").innerHTML = raspB[0];
	}
	if(B[1]==raspB[1]){
		document.getElementById("raspuns4").style.color = "green";
        document.getElementById("raspuns4").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns4").style.color = "red";
        document.getElementById("raspuns4").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R4").innerHTML = raspB[1];
	}
	
	
	if(C[0]==raspC[0]){
		document.getElementById("raspuns16").style.color = "green";
        document.getElementById("raspuns16").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns16").style.color = "red";
        document.getElementById("raspuns16").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R16").innerHTML = raspC[0];
	}
	if(C[1]==raspC[1]){
		document.getElementById("raspuns17").style.color = "green";
        document.getElementById("raspuns17").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns17").style.color = "red";
        document.getElementById("raspuns17").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R17").innerHTML = raspC[1];
	}
		if(C[2]==raspC[2]){
		document.getElementById("raspuns18").style.color = "green";
        document.getElementById("raspuns18").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns18").style.color = "red";
        document.getElementById("raspuns18").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R18").innerHTML = raspC[2];
	}
	if(C[3]==raspC[3]){
		document.getElementById("raspuns19").style.color = "green";
        document.getElementById("raspuns19").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns19").style.color = "red";
        document.getElementById("raspuns19").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R19").innerHTML = raspC[3];
	}
		if(C[4]==raspC[4]){
		document.getElementById("raspuns20").style.color = "green";
        document.getElementById("raspuns20").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns20").style.color = "red";
        document.getElementById("raspuns20").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R20").innerHTML = raspC[4];
	}

	
	
	
	if(D[0]==raspD[0]){
		document.getElementById("raspuns5").style.color = "green";
        document.getElementById("raspuns5").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns5").style.color = "red";
        document.getElementById("raspuns5").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R5").innerHTML = raspD[0];
	}
	if(D[1]==raspD[1]){
		document.getElementById("raspuns6").style.color = "green";
        document.getElementById("raspuns6").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns6").style.color = "red";
        document.getElementById("raspuns6").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R6").innerHTML = raspD[1];
	}
	if(D[2]==raspD[2]){
		document.getElementById("raspuns7").style.color = "green";
        document.getElementById("raspuns7").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns7").style.color = "red";
        document.getElementById("raspuns7").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R7").innerHTML = raspD[2];
	}
	if(D[3]==raspD[3]){
		document.getElementById("raspuns8").style.color = "green";
        document.getElementById("raspuns8").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns8").style.color = "red";
        document.getElementById("raspuns8").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R8").innerHTML = raspD[3];
	}
	if(D[4]==raspD[4]){
		document.getElementById("raspuns9").style.color = "green";
        document.getElementById("raspuns9").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns9").style.color = "red";
        document.getElementById("raspuns9").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R9").innerHTML = raspD[4];
	}
	if(D[5]==raspD[5]){
		document.getElementById("raspuns10").style.color = "green";
        document.getElementById("raspuns10").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns10").style.color = "red";
        document.getElementById("raspuns10").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R10").innerHTML = raspD[5];
	}
	if(D[6]==raspD[6]){
		document.getElementById("raspuns11").style.color = "green";
        document.getElementById("raspuns11").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns11").style.color = "red";
        document.getElementById("raspuns11").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R11").innerHTML = raspD[6];
	}
	if(D[7]==raspD[7]){
		document.getElementById("raspuns12").style.color = "green";
        document.getElementById("raspuns12").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns12").style.color = "red";
        document.getElementById("raspuns12").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R12").innerHTML = raspD[7];
	}
	if(D[8]==raspD[8]){
		document.getElementById("raspuns13").style.color = "green";
        document.getElementById("raspuns13").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns13").style.color = "red";
        document.getElementById("raspuns13").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R13").innerHTML = raspD[8];
	}
	if(D[9]==raspD[9]){
		document.getElementById("raspuns14").style.color = "green";
        document.getElementById("raspuns14").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns14").style.color = "red";
        document.getElementById("raspuns14").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R14").innerHTML = raspD[9];
	}
	if(D[10]==raspD[10]){
		document.getElementById("raspuns15").style.color = "green";
        document.getElementById("raspuns15").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns15").style.color = "red";
        document.getElementById("raspuns15").innerHTML = "Gresit, raspunsul corect este:  ";
		document.getElementById("R15").innerHTML = raspD[10];
	}
	/**if(C[5]==raspC[5]){
		document.getElementById("raspuns10").style.color = "green";
        document.getElementById("raspuns10").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns10").style.color = "red";
        document.getElementById("raspuns10").innerHTML = "Gresit, raspunsul corect este:  ";
		//var x=raspC[5];
		//var y=x.toUpperCase();
		document.getElementById("R10").innerHTML = raspC[5];//y;
	}	
	if(C[6]==raspC[6]){
		document.getElementById("raspuns11").style.color = "green";
        document.getElementById("raspuns11").innerHTML = "Corect";
	}else{
		document.getElementById("raspuns11").style.color = "red";
        document.getElementById("raspuns11").innerHTML = "Gresit, raspunsul corect este:  ";
		//var x=raspC[6];
		//var y=x.toUpperCase();
		document.getElementById("R11").innerHTML = raspC[6];//y;
	}**/
}
function punctaj_total(){
	var scor=0;
	for(i=0 ; i<=1 ; ++i)
		if(A[i]==raspA[i])
			scor+=5;
	for(i=0; i<=1; i++)
		if(B[i]==raspB[i])
			scor+=5;		
	for(i= 0; i<=4; i++)
		if(C[i]==raspC[i])
			scor=scor+5;
	for(i= 0; i<=10; i++)
		if(D[i]==raspD[i])
			scor= scor+5;
	
	document.getElementById("total").innerHTML = scor;
	if(scor<70)
	{
		document.getElementById("DA").style.color = "red";
	    document.getElementById("DA").innerHTML = "Ne pare rãu, testul nu a fost promovat";
	}
	else
	{
		document.getElementById("DA").style.color = "green";
	    document.getElementById("DA").innerHTML = "Testul a fost promovat";
	}
	corecte();
}
function reia(){
	A = ["N","N"];
	B = ["N","N"];
	C = ["N", "N", "N", "N", "N"];
	D = ["N","N","N","N","N","N","N","N","N","N","N"];
}