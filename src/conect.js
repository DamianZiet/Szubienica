const passwordss = {
     proverbs: ["co dwie głowy, to nie jedna","co za dużo, to niezdrowo","czego Jaś się nie nauczył, tego Jan nie będzie umiał"],
     sport: ["mistrzostwa świata w kolarstwie","narciarstwo alpejskie i klasyczne","Puchar Stanleya"],
     history: ["Bitwa o Midway","Upadek Konstantynopola","dynastia piastów"]
};

let tableSelectPassword = [];


function selectCategories (e){
    tableSelectPassword.splice(0,tableSelectPassword.length)
    let nameCategory = e.target.classList.value;
    switch (nameCategory){
    case "proverbs":
        const indexP = Math.floor(Math.random()*passwordss.proverbs.length);
        const selectPasswordP = passwordss.proverbs[indexP];
        // tableSelectPassword.push(selectPasswordP);
        tableSelectPassword.push(selectPasswordP);
        break;
    case "sport":
        const indexS = Math.floor(Math.random()*passwordss.sport.length);
        const selectPasswordS = passwordss.sport[indexS];
        tableSelectPassword.push(selectPasswordS)
        break;
    case "history":
        const indexH = Math.floor(Math.random()*passwordss.history.length);
        const selectPasswordH = passwordss.history[indexH];
        tableSelectPassword.push(selectPasswordH)
        break;
    default:
        alert('wybierz kategorie');
};


tableSelectPassword=tableSelectPassword[0].split('');
const arr = [tableSelectPassword]

localStorage.setItem('object',JSON.stringify(arr));
}
document.querySelectorAll("a").forEach(a=>a.addEventListener('click', selectCategories))


