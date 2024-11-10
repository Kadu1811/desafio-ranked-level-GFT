min = Math.ceil(0);
max = Math.floor(130);

var vitorias =  Math.floor(Math.random() * (max - min + 1)) + min;
var derrotas =  Math.floor(Math.random() * (max - min + 1)) + min;

let rankedFinalLevel = vitorias - derrotas


function rankedLevel(rankedFinalLevel) {
    let rankedLevelName

    if (rankedFinalLevel < 10) {
        return rankedLevelName = "Ferro"
    } else if (rankedFinalLevel >= 11 && rankedFinalLevel < 20) {
        return rankedLevelName = "Bronze"
    } else if (rankedFinalLevel >= 21 && rankedFinalLevel < 50) {
        return rankedLevelName = "Prata"
    } else if (rankedFinalLevel >= 51 && rankedFinalLevel < 80) {
        return rankedLevelName = "Ouro"
    } else if (rankedFinalLevel >= 81 && rankedFinalLevel < 90) {
        return rankedLevelName = "Diamante"
    } else if (rankedFinalLevel >= 91 && rankedFinalLevel < 100) {
        return rankedLevelName = "Lendário"
    } else if (rankedFinalLevel >= 101) {
        return rankedLevelName = "Imortal"
    }

    return rankedLevelName
    
}


console.log(`O Héroi tem de saldo de ${rankedFinalLevel} vitórias e está no nível ${rankedLevel(rankedFinalLevel)}`);
