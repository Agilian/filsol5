const open = (item) => {
    alert(`OPENING: ${item.join(" ")}`);
}


const lu = (item) => {
    var a = (`${item.join(" ")}`).toString();
    var s = a.split(' ');
    document.getElementById("teste").innerHTML = s;
    switch (String(s[0])) {
        case "paletiza" || "a" || "Letícia":
            pal(s);
            break;
        case "empacota":
            emp(s);
            break;
        default:
            alert(s[0]);
            break;
    }


}

var funcs = {
    open,
    lu
}