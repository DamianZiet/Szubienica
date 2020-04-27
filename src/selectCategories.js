function selectCategories(e) {
    tableSelectPassword.splice(0, tableSelectPassword.length);
    let nameCategory = e.target.classList.value;
    console.log(nameCategory);
    switch (nameCategory) {
        case "proverbs":
            const indexP = Math.floor(Math.random() * passwordss.proverbs.length);
            const selectPasswordP = passwordss.proverbs[indexP];
            const qwe = tableSelectPassword.push(selectPasswordP);
            break;
        case "sport":
            const indexS = Math.floor(Math.random() * passwordss.sport.length);
            const selectPasswordS = passwordss.sport[indexS];
            tableSelectPassword.push(selectPasswordS);
            break;
        case "history":
            const indexH = Math.floor(Math.random() * passwordss.history.length);
            const selectPasswordH = passwordss.history[indexH];
            tableSelectPassword.push(selectPasswordH);
            break;
        default:
            alert('wybierz kategorie');
    }
    ;
    tableSelectPassword = tableSelectPassword[0].split('');
    for (let i = 0; i < tableSelectPassword.length; i++) {
        const span = document.createElement('span');
        span.textContent = tableSelectPassword[i];
        console.log(span);
    }
    // console.log(tableSelectPassword);
}
