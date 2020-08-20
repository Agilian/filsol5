function pal(s) {
    alert("entrei");
    var i = s.indexOf("mangas");
    if (i != -1) { // se a palavra mangas estiver na frase, (indexOf retorna onde está)
        alert("entrei2");
        var n = numero(s, i); // entende o que foi dito antes de "mangas" e transforma em numero
        alert("entrei3");
        document.getElementById('criarLinha').click();
        document.getElementById('produto').value = 1; // produto é = manga
        document.getElementById('produtoMangaQuantidade').value = n; // produto é = manga
        alert(document.getElementById('produtoMangaQuantidade').value);
        selecionaProduto();
        calcuclaVolume();
    }
}

function numero(s, i) { // "i" é o indice da palavre importante (a qual estamos querendo saber a quantidade, que geralmente vem logo antes da palavra importante)
    /*  1) problema: quando fala numero no feminino, (ex.: 532 mangas) ele separa em 530 + "e duas"
        solução: criar função que verifica se as próximas 2 palavras sáo : "e uma" ou "e duas" (acho que não vai dar problema, mas existem centenas no feminino: "duzentAs, trezentAs")
        se houver, retorna numero formatado
        2) problema: quando fala "3,4m" geralmente falamos "3 metros e 40"
        solução: procura a palavra "metro(s)" || centimetro(s) e verifica se as proximas 2 palavras estão no formato "e +numero" || "e meio"  */
    var N = 0;
    var n1 = s[i - 1];
    var n2 = s[i - 2];
    var n3 = s[i - 3];
    if (Number.isInteger(parseInt(n1)) || String(n1) == 'duas' || String(n1) == 'uma') { //se a palavra anterior é um  numero ,ou uma variação do feminino do numero
        switch (String(n1)) {
            case 'duas':
                n1 = 2;
                n2 = s[i - 3]; // porque geralmente falamos uma letra "e" entre os numeros
                n3 = s[i - 4]; // porque geralmente falamos uma letra "e" entre os numeros
                break;
            case 'uma':
                n1 = 1;
                n2 = s[i - 3]; // porque geralmente falamos uma letra "e" entre os numeros
                n3 = s[i - 4]; // porque geralmente falamos uma letra "e" entre os numeros
                break;
        }
        N = parseInt(n1);
        if (Number.isInteger(parseInt(n2))) {
            N = parseInt(n1) + parseInt(n2);
            if (Number.isInteger(parseInt(n3))) {
                N = parseInt(n1) + parseInt(n2) + parseInt(n3);
            }
        }
    }
    return N;
}

function emp(qp) {
    alert(qp);
}