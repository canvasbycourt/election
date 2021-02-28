var createPolitician = function(name, partyColor) {

    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;

    politician.announcePolitician = function (){
    console.log(this.name);
    };

    politician.announcePolitician();

    politician.tallyUpTotalVotes = function(){
        this.totalVotes = 0;
        for(var i = 0; i < this.electionResults.length; i++){
            this.totalVotes = this.totalVotes + this.electionResults[i];
        }
    };

    return politician;
};

var flo = createPolitician("Donald Trump", [205, 24, 28]);
var jane = createPolitician("Joe Biden",[10, 106, 166]);

flo.electionResults = [9,3,0,6,0,0,0,0,29,0,0,4,0,11,6,6,8,8,0,0,0,0,0,10,3,4,0,0,0,0,0,15,3,18,7,0,0,0,9,3,11,38,6,0,0,0,0,5,0,3];
jane.electionResults = [0,0,11,0,55,9,7,3,0,16,4,0,20,0,0,0,0,0,3,10,11,16,10,0,0,0,6,4,14,5,29,0,0,0,0,7,20,4,0,0,0,0,0,3,13,12,3,0,10,0];


console.log(flo.electionResults);
console.log(jane.electionResults);

var setStateResults = function(state){
    theStates[state].winner = null;
    if (flo.electionResults[state] > jane.electionResults[state]){
        theStates[state].winner = flo;
    } else if (flo.electionResults[state] < jane.electionResults[state]){
        theStates[state].winner = jane;
    }

var stateWinner = theStates[state].winner;
    if (stateWinner !== null){
        theStates[state].rgbColor = stateWinner.partyColor;
    } else {
        theStates[state].rgbColor = [11,32,57];
    }

  stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

candidate1Name.innerText = flo.name;
candidate2Name.innerText = jane.name;

candidate1Results.innerText = flo.electionResults[state];
candidate2Results.innerText = jane.electionResults[state];

if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
}

flo.tallyUpTotalVotes();
jane.tallyUpTotalVotes();

console.log(flo.totalVotes);
console.log(jane.totalVotes);

console.log("Flo's color is: " + flo.partyColor);
console.log("Jane's color is: " + jane.partyColor);

var winner = "???";
if (flo.totalVotes > jane.totalVotes){
     winner = flo.name;
}else if (flo.totalVotes < jane.totalVotes){
     winner = jane.name;
}else{
     winner = "DRAW."
}

console.log("AND THE WINNER IS..." + winner + "!!!");

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = flo.name;
row.children[1].innerText = flo.totalVotes;
row.children[2].innerText = jane.name;
row.children[3].innerText = jane.totalVotes;
row.children[5].innerText = winner;

var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];
