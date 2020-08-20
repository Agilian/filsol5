var soma123 = 0;
var t = 0;
var iddd = "I00";
var AbaAtual = 0;
var ARRAYGLOBAL = [];
var arrayinterno = [];
var tamanhoDoColarinho = 0;
var grossuraDepoisdaFechadora = 0;

onload = function() {
    calcuclaVolume();
    var valores = new Array();
    var divPai = $('.Linha');
    var btnCriar = $('#criarLinha');

    btnCriar.click(function() {
        incrementaID();
        var ccc = iddd;
        divPai.append("<div  id=" + iddd + " onclick='trocaAbaAtual(" + ccc + ")' style='float:left; display:none; width:80; height:80; background-color:aquamarine; border-radius: 20px; '> <div class='textoBox' style='display:table-row;width:99px'>ítem A </div> <br > <div class='excluirBox' style='display:table-cell;width:20px;vertical-align:middle;'>excluir</div></div>");
        AbaAtual = AbaAtual + 1;
        zeraBotoes();
        document.getElementById("criarLinha").style.display = 'none';
        document.getElementById("Linha").style.display = 'none';
        document.getElementById('produto').focus();
        document.getElementById("produto").click();
    });

}

function trocaAbaAtual(ID) {

    var numeroDoId = ("00" + parseInt(ID.id.substr(1, 2))).slice(-2);
    AbaAtual = parseInt(numeroDoId);
    alert(AbaAtual);

}

function imprimeArray() {
    //alert("imprimindo");
    for (var i in ARRAYGLOBAL) {
        console.log("row " + i);
        for (var j in ARRAYGLOBAL[i]) {
            console.log(" " + ARRAYGLOBAL[i][j]);
            //alert(ARRAYGLOBAL[i][j]);
        }
    }
}

function zeraBotoes() {


    document.getElementById("Cproduto").style.display = 'table-row';
    document.getElementById("produto").selectedIndex = 0;
    document.getElementById("CprodutoMangaMaterial").style.display = 'none';
    document.getElementById("CprodutoMangaTratamento").style.display = 'none';
    document.getElementById("CprodutoMangaGramatura").style.display = 'none';
    document.getElementById("CprodutoMangaQuantidade").style.display = 'none';
    document.getElementById("CprodutoMangaComprimento").style.display = 'none';
    document.getElementById("CprodutoMangaDiametro").style.display = 'none';
    document.getElementById("CprodutoMangaColarinho").style.display = 'none';
    document.getElementById("CprodutoMangaTampao").style.display = 'none';
    document.getElementById("CprodutoMangaReforco").style.display = 'none';
    document.getElementById("CprodutoMangaCordoalha").style.display = 'none';
    document.getElementById("CprodutoMangaRabicho").style.display = 'none';
    document.getElementById("CprodutoMangaRabichoTamanho").style.display = 'none';
    document.getElementById("CprodutoMangaRabichoOlhal").style.display = 'none';
    document.getElementById("CprodutoMangaAlca").style.display = 'none';
    document.getElementById("CprodutoMangaVolume").style.display = 'none';
    document.getElementById("CprodutoMangaGuardar").style.display = 'none';
    document.getElementById("tabelaVolumeFinal").style.display = 'none';
}

function teste() {
    alert("oi");
}

function Guardar() {
    switch (AbaAtual) {
        case 0:
            alert("algo deu errado");
            break;
        default:
            arrayinterno = [];
            //document.getElementById('produtoMangaVolume').value;
            arrayinterno.push(document.getElementById('produtoMangaMaterial').value);
            arrayinterno.push(document.getElementById('produtoMangaTratamento').value);
            arrayinterno.push(document.getElementById('produtoMangaGramatura').value);
            arrayinterno.push(document.getElementById('produtoMangaQuantidade').value);
            arrayinterno.push(document.getElementById('produtoMangaComprimento').value);
            arrayinterno.push(document.getElementById('produtoMangaDiametro').value);
            arrayinterno.push(document.getElementById('produtoMangaLarguraDobrada').value);
            arrayinterno.push(document.getElementById('produtoMangaMetroQuadrado').value);
            arrayinterno.push(document.getElementById('produtoMangaColarinho').value);
            arrayinterno.push(document.getElementById('produtoMangaTampao').value);
            arrayinterno.push(document.getElementById('produtoMangaReforco').value);
            arrayinterno.push(document.getElementById('produtoMangaCordoalha').value);
            arrayinterno.push(document.getElementById('produtoMangaRabicho').value);
            arrayinterno.push(document.getElementById('produtoMangaRabichoTamanho').value);
            arrayinterno.push(document.getElementById('produtoMangaRabichoOlhal').value);
            arrayinterno.push(document.getElementById('produtoMangaAlca').value);
            arrayinterno.push(document.getElementById('produtoMangaVolume').value);

            ARRAYGLOBAL.push(arrayinterno);
            arrayinterno = [];
            imprimeArray(); // no console
            zeraBotoes();
            document.getElementById("Cproduto").style.display = 'none';
            document.getElementById("Cproduto").value = 0;
            document.getElementById("criarLinha").style.display = 'table-row';
            document.getElementById("Linha").style.display = 'table';
            document.getElementById(iddd).style.display = 'table-row';
            document.getElementById("btFinaliza").style.display = 'table-row';
            break;
    }
}


function imprime() {
    document.getElementById("tabelaImpressao").style.display = 'block';
    document.getElementById("foto").style.display = 'table';
    document.getElementById("Linha").style.display = 'none';
    document.getElementById("principal").style.display = 'none';
}




function zeraBotoesParcial(botaoz) {

    //document.getElementById(botaoz).style.display = 'table-row';
}

function Mudarestado(proximo) {
    var display = document.getElementById(proximo).style.display;

    switch (proximo) {
        case "CprodutoMangaMaterial":
            Mudarestado("CprodutoMangaTratamento");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaMaterial').value = 0;
            break;
        case "CprodutoMangaTratamento":
            Mudarestado("CprodutoMangaGramatura");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaTratamento').value = 0;
            break;
        case "CprodutoMangaGramatura":
            Mudarestado("CprodutoMangaQuantidade");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaGramatura').value = 0;
            break;
        case "CprodutoMangaQuantidade":
            Mudarestado("CprodutoMangaComprimento");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaQuantidade').value = 0;
            break;
        case "CprodutoMangaComprimento":
            Mudarestado("CprodutoMangaDiametro");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaComprimento').value = 0;
            break;
        case "CprodutoMangaDiametro":
            Mudarestado("CprodutoMangaColarinho");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaDiametro').value = 0;
            break;
        case "CprodutoMangaColarinho":
            Mudarestado("CprodutoMangaTampao");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaColarinho').value = 0;

            break;
        case "CprodutoMangaTampao":
            Mudarestado("CprodutoMangaReforco");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaTampao').value = 0;
            break;
        case "CprodutoMangaReforco":
            Mudarestado("CprodutoMangaCordoalha");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaReforco').value = 0;
            break;
        case "CprodutoMangaCordoalha":
            Mudarestado("CprodutoMangaRabicho");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaCordoalha').value = 0;
            break;
        case "CprodutoMangaRabicho":
            Mudarestado("CprodutoMangaRabichoTamanho");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaRabicho').value = 0;
            break;
        case "CprodutoMangaRabichoTamanho":
            Mudarestado("CprodutoMangaRabichoOlhal");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaRabichoTamanho').value = 0;
            break;
        case "CprodutoMangaRabichoOlhal":
            Mudarestado("CprodutoMangaAlca");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaRabichoOlhal').value = 0;
            break;
        case "CprodutoMangaAlca":
            Mudarestado("CprodutoMangaVolume");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaAlca').value = 0;
            break;
        case "CprodutoMangaVolume":
            Mudarestado("CprodutoMangaGuardar");
            document.getElementById(proximo).style.display = 'none';
            document.getElementById('produtoMangaVolume').value = 0;
            break;
        case "CprodutoMangaGuardar":
            //zeraBotoesParcial("produtoMangaDiametro");
            document.getElementById(proximo).style.display = 'none';
            break;
    }





}

function selecionaProduto() {
    var select = document.getElementById('produto');
    var value = $('#produto').val();

    switch (parseInt(value)) {
        case 0:
            alert("Obrigatório selecionar um produto");
            Mudarestado('CprodutoMangaMaterial');
            //document.getElementById('CprodutoMangaMaterial').style.display = 'table-row';
            break;
        case 1:
            Mudarestado('CprodutoMangaMaterial');
            document.getElementById('CprodutoMangaMaterial').style.display = 'table-row';
            document.getElementById('produtoMangaMaterial').focus();
            document.getElementById("produtoMangaMaterial").click();
            //$("#produtoMangaMaterial").trigger("click");
            //eventFire(document.getElementById('produtoMangaMaterial')[0], 'click');
            //arrayinterno.splice(1,14);//apaga o array da pra frente e adiciona +1
            //arrayinterno.push(value);
            break;
        case 2:
            alert("Produto ainda não programado");
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);
            break;
        case 3:
            alert("Produto ainda não programado");
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);
            break;
        case 4:
            alert("Produto ainda não programado");
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);
            break;
        case 5:
            alert("Produto ainda não programado");
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);
            break;
        case 6:
            alert("Produto ainda não programado");
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);
    }
}



function selecionaMangaMaterial() {
    var select = document.getElementById('produtoMangaMaterial');
    var value = $('#produtoMangaMaterial').val();

    switch (parseInt(value)) {
        case 0:
            alert("Obrigatório Escolher um Material");
            Mudarestado('CprodutoMangaTratamento');
            //document.getElementById('CprodutoMangaTratamento').style.display = 'table-row';
            break;
        case 1:
            Mudarestado('CprodutoMangaTratamento');
            document.getElementById('CprodutoMangaTratamento').style.display = 'table-row';
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);
            document.getElementById('materialTipo').value = select.options[select.selectedIndex].text;
            document.getElementById('produtoMangaTratamento').focus();
            document.getElementById("produtoMangaTratamento").click();
            break;
        case 2:
            Mudarestado('CprodutoMangaTratamento');
            document.getElementById('CprodutoMangaTratamento').style.display = 'table-row';
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);
            document.getElementById('materialTipo').value = select.options[select.selectedIndex].text;
            document.getElementById('produtoMangaTratamento').focus();
            document.getElementById("produtoMangaTratamento").click();
            break;
        case 3:
            Mudarestado('CprodutoMangaTratamento');
            document.getElementById('CprodutoMangaTratamento').style.display = 'table-row';
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);
            document.getElementById('materialTipo').value = select.options[select.selectedIndex].text.
            document.getElementById('produtoMangaTratamento').focus();
            document.getElementById("produtoMangaTratamento").click();
            break;
        case 4:
            Mudarestado('CprodutoMangaTratamento');
            document.getElementById('CprodutoMangaTratamento').style.display = 'table-row';
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);
            document.getElementById('materialTipo').value = select.options[select.selectedIndex].text;
            document.getElementById('produtoMangaTratamento').focus();
            document.getElementById("produtoMangaTratamento").click();
            break;
        case 5:
            Mudarestado('CprodutoMangaTratamento');
            document.getElementById('CprodutoMangaTratamento').style.display = 'table-row';
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);
            document.getElementById('materialTipo').value = select.options[select.selectedIndex].text;
            document.getElementById('produtoMangaTratamento').focus();
            document.getElementById("produtoMangaTratamento").click();
            break;
        case 6:
            Mudarestado('CprodutoMangaTratamento');
            document.getElementById('CprodutoMangaTratamento').style.display = 'table-row';
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);
            document.getElementById('materialTipo').value = select.options[select.selectedIndex].text;
            document.getElementById('produtoMangaTratamento').focus();
            document.getElementById("produtoMangaTratamento").click();
            break;
    }
}

function selecionaMangaTratamento() {
    var select = document.getElementById('produtoMangaTratamento');
    var value = $('#produtoMangaTratamento').val();

    switch (parseInt(value)) {
        case 0:
            alert("Obrigatório Escolher um Material");
            Mudarestado('CprodutoMangaGramatura');
            //document.getElementById('CprodutoMangaGramatura').style.display = 'table-row';
            break;
        case 1:
            Mudarestado('CprodutoMangaGramatura');
            document.getElementById('CprodutoMangaGramatura').style.display = 'table-row';
            document.getElementById('produtoMangaGramatura').focus();
            document.getElementById("produtoMangaGramatura").click();
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);

            break;
        case 2:
            Mudarestado('CprodutoMangaGramatura');
            document.getElementById('CprodutoMangaGramatura').style.display = 'table-row';
            document.getElementById('produtoMangaGramatura').focus();
            document.getElementById("produtoMangaGramatura").click();
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);
            break;
        case 3:
            Mudarestado('CprodutoMangaGramatura');
            document.getElementById('CprodutoMangaGramatura').style.display = 'table-row';
            document.getElementById('produtoMangaGramatura').focus();
            document.getElementById("produtoMangaGramatura").click();
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);
            break;
        case 3:
            Mudarestado('CprodutoMangaGramatura');
            document.getElementById('CprodutoMangaGramatura').style.display = 'table-row';
            document.getElementById('produtoMangaGramatura').focus();
            document.getElementById("produtoMangaGramatura").click();
            //arrayinterno.splice(1,14);
            //arrayinterno.push(value);
            break;
    }
}

function selecionaMangaGramatura() {
    var select = document.getElementById('produtoMangaGramatura');
    var value = $('#produtoMangaGramatura').val();

    switch (parseInt(value)) {
        case 0:
            alert("Obrigatório Escolher um Material");
            Mudarestado('CprodutoMangaQuantidade');
            //document.getElementById('CprodutoMangaQuantidade').style.display = 'table-row';
            break;
        case 1:
            Mudarestado('CprodutoMangaQuantidade');
            document.getElementById('CprodutoMangaQuantidade').style.display = 'table-row';
            //arrayinterno.splice(2,14);
            //arrayinterno.push(value);
            document.getElementById('materialGramatura').value = select.options[select.selectedIndex].text;
            document.getElementById('produtoMangaQuantidade').focus();
            document.getElementById('produtoMangaQuantidade').select();
            break;
        case 2:
            Mudarestado('CprodutoMangaQuantidade');
            document.getElementById('CprodutoMangaQuantidade').style.display = 'table-row';
            //arrayinterno.splice(2,14);
            //arrayinterno.push(value);
            document.getElementById('materialGramatura').value = select.options[select.selectedIndex].text;
            document.getElementById('produtoMangaQuantidade').focus();
            document.getElementById('produtoMangaQuantidade').select();
            break;
        case 3:
            Mudarestado('CprodutoMangaQuantidade');
            document.getElementById('CprodutoMangaQuantidade').style.display = 'table-row';
            //arrayinterno.splice(2,14);
            //arrayinterno.push(value);
            document.getElementById('materialGramatura').value = select.options[select.selectedIndex].text;
            document.getElementById('produtoMangaQuantidade').focus();
            document.getElementById('produtoMangaQuantidade').select();
            break;
        case 4:
            Mudarestado('CprodutoMangaQuantidade');
            document.getElementById('CprodutoMangaQuantidade').style.display = 'table-row';
            //arrayinterno.splice(2,14);
            //arrayinterno.push(value);
            document.getElementById('materialGramatura').value = select.options[select.selectedIndex].text;
            document.getElementById('produtoMangaQuantidade').focus();
            document.getElementById('produtoMangaQuantidade').select();
            break;
        case 5:
            Mudarestado('CprodutoMangaQuantidade');
            document.getElementById('CprodutoMangaQuantidade').style.display = 'table-row';
            //arrayinterno.splice(2,14);
            //arrayinterno.push(value);
            document.getElementById('materialGramatura').value = select.options[select.selectedIndex].text;
            document.getElementById('produtoMangaQuantidade').focus();
            document.getElementById('produtoMangaQuantidade').select();
            break;
        case 6:
            Mudarestado('CprodutoMangaQuantidade');
            document.getElementById('CprodutoMangaQuantidade').style.display = 'table-row';
            //arrayinterno.splice(2,14);
            //arrayinterno.push(value);
            document.getElementById('materialGramatura').value = select.options[select.selectedIndex].text;
            document.getElementById('produtoMangaQuantidade').focus();
            document.getElementById('produtoMangaQuantidade').select();
            break;
    }
    defineGrossuraDepoisDaFechadora();

}

function selecionaMangaQuantidade() {
    var select = document.getElementById('produtoMangaQuantidade');
    var value = $('#produtoMangaQuantidade').val();

    switch (parseInt(value)) {
        case 0:
            Mudarestado('CprodutoMangaComprimento');
            alert("Obrigatório escolher uma quantidade");
            Mudarestado('CprodutoMangaComprimento');
            //document.getElementById('CprodutoMangaComprimento').style.display = 'table-row';
            break;
        default:
            Mudarestado('CprodutoMangaComprimento');
            document.getElementById('CprodutoMangaComprimento').style.display = 'table-row';
            //arrayinterno.splice(3,14);
            //arrayinterno.push(value);
            document.getElementById('nMangas').value = select.value;
            calcuclaVolume();
            document.getElementById('produtoMangaComprimento').focus();
            document.getElementById('produtoMangaComprimento').select();
            break;
    }
}

function selecionaMangaComprimento() {
    var select = document.getElementById('produtoMangaComprimento');
    var value = $('#produtoMangaComprimento').val();

    switch (parseInt(value)) {
        case 0:
            Mudarestado('CprodutoMangaDiametro');
            alert("Obrigatório escolher um comprimento");
            Mudarestado('CprodutoMangaDiametro');
            //document.getElementById('CprodutoMangaDiametro').style.display = 'table-row';
            break;
        default:
            Mudarestado('CprodutoMangaDiametro');
            document.getElementById('CprodutoMangaDiametro').style.display = 'table-row';
            //arrayinterno.splice(4,14);
            //arrayinterno.push(value);
            document.getElementById('tamanhoManga').value = select.value;
            document.getElementById('produtoMangaDiametro').focus();
            document.getElementById('produtoMangaDiametro').select();
            break;
    }
}

function selecionaMangaDiametro() {
    produtoMangaDiametro
    var select = document.getElementById('produtoMangaDiametro');
    var value = $('#produtoMangaDiametro').val();

    switch (parseInt(value)) {
        case 0:
            Mudarestado('CprodutoMangaColarinho');
            alert("Obrigatório escolher um Diâmetro");
            document.getElementById('produtoMangaLarguraDobrada').value = 0;
            document.getElementById('produtoMangaMetroQuadrado').value = 0;
            break;
        default:
            Mudarestado('CprodutoMangaColarinho');
            document.getElementById('CprodutoMangaColarinho').style.display = 'table-row';
            document.getElementById('produtoMangaLarguraDobrada').value = (document.getElementById('produtoMangaDiametro').value * 3.14) / 2;
            document.getElementById('produtoMangaMetroQuadrado').value = document.getElementById('produtoMangaLarguraDobrada').value * 2 * document.getElementById('produtoMangaComprimento').value;
            //arrayinterno.splice(5,14);
            //value = $('#produtoMangaLarguraDobrada').val();
            //arrayinterno.push(value);
            document.getElementById('larguraDobrada').value = document.getElementById('produtoMangaLarguraDobrada').value;
            document.getElementById('produtoMangaColarinho').focus();
            document.getElementById("produtoMangaColarinho").click();
            break;
    }
}

function selecionaMangaLarguraDobrada() {
    var select = document.getElementById('produtoMangaLarguraDobrada');
    var value = $('#produtoMangaLarguraDobrada').val();

    switch (parseInt(value)) {
        case 0:
            Mudarestado('CprodutoMangaColarinho');
            alert("Obrigatório escolher uma largura");
            document.getElementById('produtoMangaDiametro').value = 0;
            document.getElementById('produtoMangaMetroQuadrado').value = 0;
            break;
        default:
            Mudarestado('CprodutoMangaColarinho');
            document.getElementById('CprodutoMangaColarinho').style.display = 'table-row';
            document.getElementById('produtoMangaDiametro').value = (2 * document.getElementById('produtoMangaLarguraDobrada').value) / 3.14;
            document.getElementById('produtoMangaMetroQuadrado').value = document.getElementById('produtoMangaComprimento').value * document.getElementById('produtoMangaLarguraDobrada').value * 2;
            //arrayinterno.splice(5,14);
            //arrayinterno.push(value);
            document.getElementById('larguraDobrada').value = document.getElementById('produtoMangaLarguraDobrada').value;
            document.getElementById('produtoMangaColarinho').focus();
            document.getElementById("produtoMangaColarinho").click();
            break;

    }
}

function selecionaMangaMetroQuadrado() {
    var select = document.getElementById('produtoMangaMetroQuadrado');
    var value = $('#produtoMangaMetroQuadrado').val();

    switch (parseInt(value)) {
        case 0:
            Mudarestado('CprodutoMangaColarinho');
            alert("Obrigatório escolher um metro quadrado");
            document.getElementById('produtoMangaLarguraDobrada').value = 0;
            document.getElementById('produtoMangaDiametro').value = 0;
            break;
        default:
            Mudarestado('CprodutoMangaColarinho');
            document.getElementById('CprodutoMangaColarinho').style.display = 'table-row';
            document.getElementById('produtoMangaLarguraDobrada').value = (document.getElementById('produtoMangaMetroQuadrado').value) / (2 * document.getElementById('produtoMangaComprimento').value);
            document.getElementById('produtoMangaDiametro').value = (document.getElementById('produtoMangaMetroQuadrado').value) / (3.14 * document.getElementById('produtoMangaComprimento').value);
            //arrayinterno.splice(5,14);
            //value = $('#produtoMangaLarguraDobrada').val();
            //arrayinterno.push(value);
            document.getElementById('larguraDobrada').value = document.getElementById('produtoMangaLarguraDobrada').value;
            document.getElementById('produtoMangaColarinho').focus();
            document.getElementById("produtoMangaColarinho").click();
            break;
    }
}

function selecionaMangaColarinho() {
    var select = document.getElementById('produtoMangaColarinho');
    var value = $('#produtoMangaColarinho').val();

    switch (parseInt(value)) {
        case 0:
            Mudarestado('CprodutoMangaTampao');
            alert("Obrigatório escolher um tipo de colarinho");
            tamanhoDoColarinho = 0;
            break;
        case 1:
            Mudarestado('CprodutoMangaTampao');
            document.getElementById('CprodutoMangaTampao').style.display = 'table-row';
            //arrayinterno.splice(6,14);
            //arrayinterno.push(value);
            tamanhoDoColarinho = 0;
            calculaQuantasMangasCabemNoPacote();
            document.getElementById('produtoMangaTampao').focus();
            document.getElementById("produtoMangaTampao").click();
            break;
        case 2:
            Mudarestado('CprodutoMangaTampao');
            document.getElementById('CprodutoMangaTampao').style.display = 'table-row';
            //arrayinterno.splice(6,14);
            //arrayinterno.push(value);
            tamanhoDoColarinho = 55;
            calculaQuantasMangasCabemNoPacote();
            document.getElementById('produtoMangaTampao').focus();
            document.getElementById("produtoMangaTampao").click();
            break;
        case 3:
            Mudarestado('CprodutoMangaTampao');
            document.getElementById('CprodutoMangaTampao').style.display = 'table-row';
            //arrayinterno.splice(6,14);
            //arrayinterno.push(value);
            tamanhoDoColarinho = 80;
            calculaQuantasMangasCabemNoPacote();
            document.getElementById('produtoMangaTampao').focus();
            document.getElementById("produtoMangaTampao").click();
            break;
        case 4:
            Mudarestado('CprodutoMangaTampao');
            document.getElementById('CprodutoMangaTampao').style.display = 'table-row';
            //arrayinterno.splice(6,14);
            //arrayinterno.push(value);
            tamanhoDoColarinho = 0;
            calculaQuantasMangasCabemNoPacote();
            document.getElementById('produtoMangaTampao').focus();
            document.getElementById("produtoMangaTampao").click();
            break;
        case 5:
            Mudarestado('CprodutoMangaTampao');
            document.getElementById('CprodutoMangaTampao').style.display = 'table-row';
            //arrayinterno.splice(6,14);
            //arrayinterno.push(value);
            tamanhoDoColarinho = 0;
            calculaQuantasMangasCabemNoPacote();
            document.getElementById('produtoMangaTampao').focus();
            document.getElementById("produtoMangaTampao").click();
            break;
        case 6:
            Mudarestado('CprodutoMangaTampao');
            document.getElementById('CprodutoMangaTampao').style.display = 'table-row';
            //arrayinterno.splice(6,14);
            //arrayinterno.push(value);
            tamanhoDoColarinho = 0;
            calculaQuantasMangasCabemNoPacote();
            document.getElementById('produtoMangaTampao').focus();
            document.getElementById("produtoMangaTampao").click();
            break;
    }
}

function calculaQuantasMangasCabemNoPacote() {
    //numeroDeMangasPorPacote = 600 / ( tamanhoDoColarinho + (( comprimentoDaManga * gramatura )/900    ) )
    document.getElementById('qMangasPacote').value = Math.round(1200 / (tamanhoDoColarinho + ((document.getElementById('produtoMangaComprimento').value * grossuraDepoisdaFechadora) / 900)));
    calcuclaVolume();
}

function selecionaMangaTampao() {
    var select = document.getElementById('produtoMangaTampao');
    var value = $('#produtoMangaTampao').val();

    switch (parseInt(value)) {
        case 0:
            Mudarestado('CprodutoMangaReforco');
            alert("Obrigatório escolher um tipo de colarinho");
            break;
        case 1:
            Mudarestado('CprodutoMangaReforco');
            document.getElementById('CprodutoMangaReforco').style.display = 'table-row';
            document.getElementById('produtoMangaReforco').focus();
            document.getElementById("produtoMangaReforco").click();
            //arrayinterno.splice(7,14);
            //arrayinterno.push(value);
            break;
        case 2:
            Mudarestado('CprodutoMangaReforco');
            document.getElementById('CprodutoMangaReforco').style.display = 'table-row';
            document.getElementById('produtoMangaReforco').focus();
            document.getElementById("produtoMangaReforco").click();
            //arrayinterno.splice(7,14);
            //arrayinterno.push(value);
            break;
        case 3:
            Mudarestado('CprodutoMangaReforco');
            document.getElementById('CprodutoMangaReforco').style.display = 'table-row';
            document.getElementById('produtoMangaReforco').focus();
            document.getElementById("produtoMangaReforco").click();
            //arrayinterno.splice(7,14);
            //arrayinterno.push(value);
            break;
        case 4:
            Mudarestado('CprodutoMangaReforco');
            document.getElementById('CprodutoMangaReforco').style.display = 'table-row';
            document.getElementById('produtoMangaReforco').focus();
            document.getElementById("produtoMangaReforco").click();
            //arrayinterno.splice(7,14);
            //arrayinterno.push(value);
            break;
        case 5:
            Mudarestado('CprodutoMangaReforco');
            document.getElementById('CprodutoMangaReforco').style.display = 'table-row';
            document.getElementById('produtoMangaReforco').focus();
            document.getElementById("produtoMangaReforco").click();
            //arrayinterno.splice(7,14);
            //arrayinterno.push(value);
            break;
        case 6:
            Mudarestado('CprodutoMangaReforco');
            document.getElementById('CprodutoMangaReforco').style.display = 'table-row';
            document.getElementById('produtoMangaReforco').focus();
            document.getElementById("produtoMangaReforco").click();
            //arrayinterno.splice(7,14);
            //arrayinterno.push(value);
            break;
    }
}

function selecionaMangaReforco() {
    var select = document.getElementById('produtoMangaReforco');
    var value = $('#produtoMangaReforco').val();

    switch (parseInt(value)) {
        case 0:
            Mudarestado('CprodutoMangaCordoalha');
            alert("Obrigatório escolher uma opção para esse item");
            break;
        case 1:
            Mudarestado('CprodutoMangaCordoalha');
            document.getElementById('CprodutoMangaCordoalha').style.display = 'table-row';
            document.getElementById('produtoMangaCordoalha').focus();
            document.getElementById("produtoMangaCordoalha").click();
            //arrayinterno.splice(8,14);
            //arrayinterno.push(value);
            break;
        case 2:
            Mudarestado('CprodutoMangaCordoalha');
            document.getElementById('CprodutoMangaCordoalha').style.display = 'table-row';
            document.getElementById('produtoMangaCordoalha').focus();
            document.getElementById("produtoMangaCordoalha").click();
            //arrayinterno.splice(8,14);
            //arrayinterno.push(value);
            break;
        case 3:
            Mudarestado('CprodutoMangaCordoalha');
            document.getElementById('CprodutoMangaCordoalha').style.display = 'table-row';
            document.getElementById('produtoMangaCordoalha').focus();
            document.getElementById("produtoMangaCordoalha").click();
            //arrayinterno.splice(8,14);
            //arrayinterno.push(value);
            break;
        case 4:
            Mudarestado('CprodutoMangaCordoalha');
            document.getElementById('CprodutoMangaCordoalha').style.display = 'table-row';
            document.getElementById('produtoMangaCordoalha').focus();
            document.getElementById("produtoMangaCordoalha").click();
            //arrayinterno.splice(8,14);
            //arrayinterno.push(value);
            break;
        case 5:
            Mudarestado('CprodutoMangaCordoalha');
            document.getElementById('CprodutoMangaCordoalha').style.display = 'table-row';
            document.getElementById('produtoMangaCordoalha').focus();
            document.getElementById("produtoMangaCordoalha").click();
            //arrayinterno.splice(8,14);
            //arrayinterno.push(value);
            break;
        case 6:
            Mudarestado('CprodutoMangaCordoalha');
            document.getElementById('CprodutoMangaCordoalha').style.display = 'table-row';
            document.getElementById('produtoMangaCordoalha').focus();
            document.getElementById("produtoMangaCordoalha").click();
            //arrayinterno.splice(8,14);
            //arrayinterno.push(value);
            break;
    }
}

function selecionaMangaCordoalha() {
    var select = document.getElementById('produtoMangaCordoalha');
    var value = $('#produtoMangaCordoalha').val();

    switch (parseInt(value)) {
        case 0:
            Mudarestado('CprodutoMangaRabicho');
            alert("Obrigatório escolher uma opção para esse item");
            break;
        case 1:
            Mudarestado('CprodutoMangaRabicho');
            document.getElementById('CprodutoMangaRabicho').style.display = 'table-row';
            document.getElementById('produtoMangaRabicho').focus();
            document.getElementById("produtoMangaRabicho").click();
            //arrayinterno.splice(9,14);
            //arrayinterno.push(value);
            break;
        case 2:
            Mudarestado('CprodutoMangaRabicho');
            document.getElementById('CprodutoMangaRabicho').style.display = 'table-row';
            document.getElementById('produtoMangaRabicho').focus();
            document.getElementById("produtoMangaRabicho").click();
            //arrayinterno.splice(9,14);
            //arrayinterno.push(value);
            break;
        case 3:
            Mudarestado('CprodutoMangaRabicho');
            document.getElementById('CprodutoMangaRabicho').style.display = 'table-row';
            document.getElementById('produtoMangaRabicho').focus();
            document.getElementById("produtoMangaRabicho").click();
            //arrayinterno.splice(9,14);
            //arrayinterno.push(value);
            break;
        case 4:
            Mudarestado('CprodutoMangaRabicho');
            document.getElementById('CprodutoMangaRabicho').style.display = 'table-row';
            document.getElementById('produtoMangaRabicho').focus();
            document.getElementById("produtoMangaRabicho").click();
            //arrayinterno.splice(9,14);
            //arrayinterno.push(value);
            break;
    }
}

function selecionaMangaRabicho() {
    var select = document.getElementById('produtoMangaRabicho');
    var value = $('#produtoMangaRabicho').val();

    switch (parseInt(value)) {
        case 0:
            Mudarestado('CprodutoMangaRabichoTamanho');
            alert("Obrigatório escolher uma opção para esse item");
            break;
        case 1:
            Mudarestado('CprodutoMangaRabichoTamanho');
            document.getElementById('CprodutoMangaRabichoTamanho').style.display = 'table-row';
            document.getElementById('produtoMangaRabichoTamanho').focus();
            document.getElementById('produtoMangaRabichoTamanho').select();

            //arrayinterno.splice(10,14);
            //arrayinterno.push(value);
            //arrayinterno.push(0);
            //arrayinterno.push(0);
            break;
        case 2:
            Mudarestado('CprodutoMangaRabichoTamanho');
            document.getElementById('CprodutoMangaRabichoTamanho').style.display = 'table-row';
            document.getElementById('produtoMangaRabichoTamanho').focus();
            document.getElementById('produtoMangaRabichoTamanho').select();
            //arrayinterno.splice(10,14);
            //arrayinterno.push(value);
            //arrayinterno.push(0);
            //arrayinterno.push(0);
            break;
        case 3:
            Mudarestado('CprodutoMangaRabichoTamanho');
            document.getElementById('CprodutoMangaRabichoTamanho').style.display = 'table-row';
            document.getElementById('produtoMangaRabichoTamanho').focus();
            document.getElementById('produtoMangaRabichoTamanho').select();
            //arrayinterno.splice(10,14);
            //arrayinterno.push(value);
            //arrayinterno.push(0);
            //arrayinterno.push(0);
            break;
    }
}

function selecionaMangaRabichoTamanho() {
    var select = document.getElementById('produtoMangaRabichoTamanho');
    var value = $('#produtoMangaRabichoTamanho').val();

    switch (parseInt(value)) {
        case 0:
            Mudarestado('CprodutoMangaRabichoOlhal');
            alert("Obrigatório escolher uma opção para esse item");
            break;
        default:
            Mudarestado('CprodutoMangaRabichoOlhal');
            document.getElementById('CprodutoMangaRabichoOlhal').style.display = 'table-row';
            document.getElementById('produtoMangaRabichoOlhal').focus();
            document.getElementById("produtoMangaRabichoOlhal").click();
            //arrayinterno.splice(11,14);
            //arrayinterno.push(value);
            //arrayinterno.push(0);
            break;
    }
}

function selecionaMangaRabichoOlhal() {
    var select = document.getElementById('produtoMangaRabichoOlhal');
    var value = $('#produtoMangaRabichoOlhal').val();

    switch (parseInt(value)) {
        case 0:
            Mudarestado('CprodutoMangaAlca');
            alert("Obrigatório escolher uma opção para esse item");
            break;
        case 1:
            Mudarestado('CprodutoMangaAlca');
            document.getElementById('CprodutoMangaAlca').style.display = 'table-row';
            document.getElementById('produtoMangaAlca').focus();
            document.getElementById("produtoMangaAlca").click();
            //arrayinterno.splice(12,14);
            //arrayinterno.push(value);
            break;
        case 2:
            Mudarestado('CprodutoMangaAlca');
            document.getElementById('CprodutoMangaAlca').style.display = 'table-row';
            document.getElementById('produtoMangaAlca').focus();
            document.getElementById("produtoMangaAlca").click();
            //arrayinterno.splice(12,14);
            //arrayinterno.push(value);
            break;
        case 3:
            Mudarestado('CprodutoMangaAlca');
            document.getElementById('CprodutoMangaAlca').style.display = 'table-row';
            document.getElementById('produtoMangaAlca').focus();
            document.getElementById("produtoMangaAlca").click();
            //arrayinterno.splice(12,14);
            //arrayinterno.push(value);
            break;
        case 4:
            Mudarestado('CprodutoMangaAlca');
            document.getElementById('CprodutoMangaAlca').style.display = 'table-row';
            document.getElementById('produtoMangaAlca').focus();
            document.getElementById("produtoMangaAlca").click();
            //arrayinterno.splice(12,14);
            //arrayinterno.push(value);
            break;
    }
}

function selecionaMangaAlca() {
    var select = document.getElementById('produtoMangaAlca');
    var value = $('#produtoMangaAlca').val();

    switch (parseInt(value)) {
        case 0:
            Mudarestado('CprodutoMangaVolume');
            alert("Obrigatório escolher uma opção para esse item");
            break;
        case 1:
            Mudarestado('CprodutoMangaVolume');
            document.getElementById('CprodutoMangaVolume').style.display = 'table-row';
            document.getElementById('produtoMangaVolume').focus();
            //arrayinterno.splice(13,14);
            //arrayinterno.push(value);
            break;
        case 2:
            Mudarestado('CprodutoMangaVolume');
            document.getElementById('CprodutoMangaVolume').style.display = 'table-row';
            document.getElementById('produtoMangaVolume').focus();
            //arrayinterno.splice(13,14);
            //arrayinterno.push(value);
            break;
        case 3:
            Mudarestado('CprodutoMangaVolume');
            document.getElementById('CprodutoMangaVolume').style.display = 'table-row';
            document.getElementById('produtoMangaVolume').focus();
            //arrayinterno.splice(13,14);
            //arrayinterno.push(value);
            break;
    }
}

function selecionaMangaVolume() {
    var select = document.getElementById('produtoMangaVolume');
    var value = $('#produtoMangaVolume').val();

    switch (parseInt(value)) {
        case 0:
            Mudarestado('CprodutoMangaGuardar');
            alert("Obrigatório escolher uma opção para esse item");
            break;
        case 1:
            Mudarestado('CprodutoMangaGuardar');
            document.getElementById('CprodutoMangaGuardar').style.display = 'table-row';
            //arrayinterno.splice(14,14);
            //arrayinterno.push(value);
            document.getElementById('qPallets').value = 0;
            calcuclaVolume();
            //pacote
            mostraOcultaVolumeDiferente();
            document.getElementById('tabelaVolumeFinal').style.display = 'table-row';
            document.getElementById('produtoMangaGuardar').focus();
            break;
        case 2:
            Mudarestado('CprodutoMangaGuardar');
            document.getElementById('CprodutoMangaGuardar').style.display = 'table-row';
            //arrayinterno.splice(14,14);
            //arrayinterno.push(value);
            document.getElementById('qPallets').value = 1;
            //document.getElementById('qPallets').value;
            calcuclaVolume();
            mostraOcultaVolumeDiferente();
            document.getElementById('tabelaVolumeFinal').style.display = 'table-row';
            document.getElementById('produtoMangaGuardar').focus();
            break;
    }
}

function mostraOcultaVolumeDiferente() {
    if (document.getElementById('qPalletsFinal1').value == 0) {
        var x = document.getElementsByClassName("td1");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.visibility = 'hidden';
        }
    } else {
        var x = document.getElementsByClassName("td1");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.visibility = 'visible';
        }
    }
    if (document.getElementById('qPalletsFinal2').value == 0) {
        var x = document.getElementsByClassName("td2");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.visibility = 'hidden';
        }
    } else {
        var x = document.getElementsByClassName("td2");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.visibility = 'visible';
        }
    }
}


function incrementaID() {
    var numeroDoId = ("00" + parseInt(iddd.substr(1, 2))).slice(-2);
    numeroDoId = ("00" + (parseInt(numeroDoId) + 1)).slice(-2);
    stringDoId = numeroDoId.toString();
    iddd = "I" + stringDoId;
}

function validaMaterial() {
    var materialTipo = document.getElementById('materialTipo').value;
    var MATTIPO = materialTipo.toUpperCase().substr(0, 3);

    if (MATTIPO == "POL" || MATTIPO == "ACR" || MATTIPO == "NOM") {
        document.getElementById('qPallets').value = 0;
        document.getElementById('qMangasPacote').value = 10;
        document.getElementById('amarracao').value = 4;
        calcuclaVolume();
    } else {
        if (MATTIPO == "VID" || MATTIPO == "FIB" || MATTIPO == "TEF") {
            document.getElementById('qPallets').value = 1;
            document.getElementById('qMangasPacote').value = 5;
            document.getElementById('amarracao').value = 12;
            calcuclaVolume();
        } else {
            alert("Material inexistente");
        }
    }
}

function calcuclaVolume() {
    var nMangas = document.getElementById('nMangas').value;
    var materialTipo = document.getElementById('materialTipo').value;
    var tColarinho = document.getElementById('tColarinho').value;
    var larguraDobrada = document.getElementById('larguraDobrada').value;
    var tamanhoManga = document.getElementById('tamanhoManga').value;
    var materialMetroQuadrado = document.getElementById('materialMetroQuadrado').value;
    var amarracao = document.getElementById('amarracao').value;
    var qMangasPacote = document.getElementById('qMangasPacote').value;
    var qPacotes = document.getElementById('qPacotes').value;
    var qPacotesPallet = document.getElementById('qPacotesPallet').value;
    var qPallets = document.getElementById('qPallets').value;
    var volumeFinal = document.getElementById('volumeFinal').value;
    var qFileiras = qPacotes / amarracao;
    var qFileirasMenor = 1;
    var qFileirasPallet = qFileiras / qPallets;

    document.getElementById("materialMetroQuadrado").value = ((tamanhoManga / 1000) * ((larguraDobrada * 2) / 1000)) * nMangas;
    //   SE TIVER PACOTE QUEBRADO ELE DIZ QUANTO VAI EM CADA
    if (Number.isInteger(nMangas / qMangasPacote)) {
        console.log("u1 - a divisão pra pacotes foi exata, todos pacotes mesma quantidade ");
        document.getElementById("qPacotes1").value = Math.ceil(nMangas / qMangasPacote);
        document.getElementById("qPacotes2").value = 0;
        document.getElementById("xxxx").value = qMangasPacote;
        document.getElementById("yyyy").value = 0;

    } else {
        console.log("u2 - o último pacote vai com uma quantidade diferente dos outros ");
        document.getElementById("qPacotes1").value = Math.trunc(nMangas / qMangasPacote);
        document.getElementById("qPacotes2").value = 1;
        document.getElementById("xxxx").value = qMangasPacote;
        document.getElementById("yyyy").value = Math.trunc(nMangas % qMangasPacote); //resto da divisão
    }

    document.getElementById("qPacotes").value = Math.ceil(nMangas / qMangasPacote);
    qPacotes = document.getElementById("qPacotes").value = Math.ceil(nMangas / qMangasPacote);
    // SE É PACOTE BATIDO

    if (qPallets == '0') {
        console.log("u3 - quantidade de pallets está zero, então é batido ");
        document.getElementById("volumeFinal").value = Math.ceil(nMangas / qMangasPacote);
        document.getElementById("qPalletsFinal1").value = document.getElementById("qPacotes1").value;
        document.getElementById("qPalletsFinal2").value = document.getElementById("qPacotes2").value;
        document.getElementById("aaaaFinal").value = document.getElementById("xxxx").value;
        document.getElementById("bbbFinal").value = document.getElementById("yyyy").value;
        calculaPeso();
        document.getElementById("pesoLiqFinal3").value = document.getElementById("pesoLiq1").value;
        document.getElementById("pesoBruFinal3").value = document.getElementById("pesoBru1").value;
        document.getElementById("pesoLiqFinal4").value = document.getElementById("pesoLiq2").value;
        document.getElementById("pesoBruFinal4").value = document.getElementById("pesoBru2").value;


        document.getElementById("alturaPalletFinal1").value = document.getElementById("alturaPacote1").value;
        document.getElementById("larguraPalletFinal1").value = document.getElementById("larguraPacote1").value;
        document.getElementById("comprimentoPalletFinal1").value = document.getElementById("comprimentoPacote1").value;

        document.getElementById("alturaPalletFinal2").value = document.getElementById("alturaPacote2").value;
        document.getElementById("larguraPalletFinal2").value = document.getElementById("larguraPacote2").value;
        document.getElementById("comprimentoPalletFinal2").value = document.getElementById("comprimentoPacote2").value;




    } else {
        console.log("u4 - quantidade de pallets é maior que zero, entçao vamos chamar recursivamente até dar tamanho");
        document.getElementById("qPacotesPallet").value = qPacotes / qPallets;
        qPacotesPallet = document.getElementById("qPacotesPallet").value;

        console.log("qFileiras =" + qFileiras);

        if (qFileiras % qPallets == 0) {
            console.log("u5 - aqui todos os pallets tiveram a mesma altura.. na divisão");
            //se tiver pallet com quantidade de pacotes diferente um do outro ele diz quantos pacotes irão em cada um
            if (Number.isInteger(qPacotes / qPacotesPallet)) {
                console.log("u6 - aqui, além da mesma altura, tem a mesma quantidade de pacote");
                document.getElementById("qPallets1").value = Math.ceil(qPacotes / qPacotesPallet);
                document.getElementById("qPallets2").value = 0;
                document.getElementById("aaaa").value = qPacotesPallet;
                document.getElementById("bbbb").value = 0;
                // deixei aqui antes de ir  pro cassio
                document.getElementById("qPalletsFinal1").value = document.getElementById("qPallets1").value;
                document.getElementById("qPalletsFinal2").value = document.getElementById("qPallets2").value;
                document.getElementById("aaaaFinal").value = document.getElementById("aaaa").value;
                document.getElementById("bbbFinal").value = document.getElementById("bbbb").value;
                calculaPeso();
                calculaDimensoes();
                document.getElementById("pesoLiqFinal3").value = document.getElementById("pesoLiq3").value;
                document.getElementById("pesoBruFinal3").value = document.getElementById("pesoBru3").value;
                document.getElementById("pesoLiqFinal4").value = document.getElementById("pesoLiq4").value;
                document.getElementById("pesoBruFinal4").value = document.getElementById("pesoBru4").value;


                document.getElementById("alturaPalletFinal1").value = document.getElementById("alturaPallet1").value;
                document.getElementById("larguraPalletFinal1").value = document.getElementById("larguraPallet1").value;
                document.getElementById("comprimentoPalletFinal1").value = document.getElementById("comprimentoPallet1").value;

                document.getElementById("alturaPalletFinal2").value = document.getElementById("alturaPallet2").value;
                document.getElementById("larguraPalletFinal2").value = document.getElementById("larguraPallet2").value;
                document.getElementById("comprimentoPalletFinal2").value = document.getElementById("comprimentoPallet2").value;

                alert("hey2");
            } else {
                console.log("u7 - aqui tem da mesma altura, mas não tem a mesma quantidade de pacote");
                qPacotes = document.getElementById("qPacotes").value;
                qPacotesPallet = document.getElementById("qPacotesPallet").value;
                document.getElementById("qPallets1").value = Math.trunc(qPacotes / qPacotesPallet);
                document.getElementById("qPallets2").value = 1;
                document.getElementById("aaaa").value = Math.ceil(qPacotesPallet);
                document.getElementById("bbbb").value = Math.trunc(qPacotes % qPacotesPallet); //resto da divisão
            }

        } else { //erro aqui para 4 pállets ou 6 pallets
            console.log("u8 - aqui os pállets tiveram alturas DIFERENTES na divisão");
            //document.getElementById("qPallets2").value = document.getElementById("qPallets2").value -1 ;
            qPacotes = document.getElementById("qPacotes").value;
            document.getElementById("qPacotesPallet").value = (qPacotes / qPallets);
            qPacotesPallet = document.getElementById("qPacotesPallet").value;
            qFileiras = (qPacotes / amarracao);
            qFileirasPallet = (qFileiras / qPallets);
            var bbbb2 = parseInt(1);
            var palpal2 = parseInt(1);
            bbbb2 = parseInt(document.getElementById("bbbb").value);
            palpal2 = parseInt(document.getElementById("qPallets2").value);
            document.getElementById("qPallets1").value = Math.trunc(qPacotes / (qFileirasPallet * amarracao));

            console.log("aquela divisão pra saber o valor do pallet 1:" + Math.trunc(qPacotes / (qFileirasPallet * amarracao)));
            console.log("logo em seguida o valor do palet 2 vai pra 1");
            document.getElementById("qPallets2").value = 1;
            document.getElementById("aaaa").value = Math.trunc(qFileirasPallet * amarracao);
            document.getElementById("qPallets1").value = document.getElementById("qPallets1").value - 1;
            palpal2 = parseInt(document.getElementById("qPallets2").value);
            bbbb2 = (qPacotes - (document.getElementById("qPallets1").value * document.getElementById("aaaa").value)); //resto da divisão
            document.getElementById("bbbb").value = parseInt(bbbb2);
            console.log("quantidade de pallets 1:" + document.getElementById("qPallets1").value);
            console.log("quantidade de pallets 2:" + document.getElementById("qPallets2").value);
            console.log("aaaa:" + document.getElementById("aaaa").value);
            console.log("bbbb:" + document.getElementById("bbbb").value);

            // o bbbb não pode ser zero se o qPallets2 não for também
            if (bbbb2 == 0 || palpal2 == 0) {
                console.log("u9 - um dos pallets ficou com zero");
                console.log("u9.1 - pallet2(plaplab2) = " + palpal2);
                console.log("u9.2 - bbbb = " + bbbb2);
                document.getElementById("bbbb").value = parseInt(bbbb2);


                // AQUI É SOBRE COMO DEIXAR OS PALLETS COM UMA ALTURA PARECEIDA . OU SEJA, NÃO ACONTECER DE TER UM PALLETS COM 1 PACOTE SÓ:
                // 2 MANEIRAS DE PENSAR NESSA DISTRIBUIÇÃ:
                // 		1)  ver se consigo tirar uma fileira de cada pallet pra passar pro pallet menor


            } else if (parseInt(document.getElementById("qPallets1").value) * parseInt(document.getElementById('amarracao').value) <= parseInt(document.getElementById("aaaa").value)) {
                //comparando 8 com 21
                console.log("u10 - se nenhum dos pallets ficou com zero, verifique se (pallet1 * amarracao < = aaaa)");
                console.log("u10.1 - to passando com a quantidade de pallets = " + qPallets);
                console.log("u10.1 - pallet2(plaplab2) = " + palpal2);
                console.log("u10.2 - bbbb = " + bbbb2);
                console.log("u10.2 - Pallet1 = " + document.getElementById("qPallets1").value);
                console.log("u10.2 - amarracao = " + amarracao);
                console.log("u10.2 - aaaa = " + document.getElementById("aaaa").value);
                //document.getElementById("qPallets1").value =document.getElementById("qPallets1").value - 1;
                document.getElementById("aaaa").value = parseInt(document.getElementById("aaaa").value) - parseInt(document.getElementById("amarracao").value);
                var tttt = parseInt(document.getElementById("amarracao").value);
                var rrrr = parseInt(document.getElementById("qPallets1").value);


                bbbb2 = parseInt(bbbb2) + parseInt(tttt * rrrr);
                document.getElementById("bbbb").value = parseInt(bbbb2);

                console.log("DEPOIS DE PASSAR NESSE IF:");
                console.log("u10.1 - to passando com a quantidade de pallets = " + qPallets);
                console.log("u10.1 - pallet2(plaplab2) = " + palpal2);
                console.log("u10.2 - bbbb = " + bbbb2);
                console.log("u10.2 - Pallet1 = " + document.getElementById("qPallets1").value);
                console.log("u10.2 - amarracao = " + amarracao);
                console.log("u10.2 - aaaa = " + document.getElementById("aaaa").value);

            } else if (parseInt(document.getElementById("aaaa").value) + parseInt(document.getElementById('bbbb').value) <= ((parseInt(document.getElementById("aaaa").value)) + 4)) {
                console.log("u11");
                document.getElementById("qPallets1").value = parseInt(document.getElementById("qPallets1").value) - 1;
                var tttt = parseInt(document.getElementById("amarracao").value);
                var rrrr = parseInt(document.getElementById("qPallets1").value);

                bbbb2 = (parseInt(bbbb2) + parseInt(document.getElementById("aaaa").value));
                document.getElementById("bbbb").value = parseInt(bbbb2);
                //document.getElementById("qPallets2").value = parseInt(document.getElementById("qPallets2").value) + 1;
                palpal2 = parseInt(document.getElementById("qPallets2").value);
            }


            document.getElementById("qPalletsFinal1").value = document.getElementById("qPallets1").value;
            document.getElementById("qPalletsFinal2").value = document.getElementById("qPallets2").value;
            document.getElementById("aaaaFinal").value = document.getElementById("aaaa").value;
            document.getElementById("bbbFinal").value = document.getElementById("bbbb").value;
            calculaPeso();
            calculaDimensoes();
            document.getElementById("pesoLiqFinal3").value = document.getElementById("pesoLiq3").value;
            document.getElementById("pesoBruFinal3").value = document.getElementById("pesoBru3").value;
            document.getElementById("pesoLiqFinal4").value = document.getElementById("pesoLiq4").value;
            document.getElementById("pesoBruFinal4").value = document.getElementById("pesoBru4").value;


            document.getElementById("alturaPalletFinal1").value = document.getElementById("alturaPallet1").value;
            document.getElementById("larguraPalletFinal1").value = document.getElementById("larguraPallet1").value;
            document.getElementById("comprimentoPalletFinal1").value = document.getElementById("comprimentoPallet1").value;

            document.getElementById("alturaPalletFinal2").value = document.getElementById("alturaPallet2").value;
            document.getElementById("larguraPalletFinal2").value = document.getElementById("larguraPallet2").value;
            document.getElementById("comprimentoPalletFinal2").value = document.getElementById("comprimentoPallet2").value;



        }
        document.getElementById("volumeFinal").value = qPallets;
    }
    verAlturaMaxima();
    calculaPeso();
    calculaDimensoes();
}

function verAlturaMaxima() {
    if (document.getElementById('qPallets').value != 0) {
        var maior = Math.max(document.getElementById("aaaa").value, document.getElementById("bbbb").value);
        if (((Math.ceil((maior) / document.getElementById('amarracao').value) * document.getElementById('larguraDobrada').value) + 112) > 1900) {
            document.getElementById('qPallets').value = (parseInt(document.getElementById('qPallets').value) + 1);
            //alert("Ultrapassa a altura máxima de 1900 mm .  Vou aumentar a quantidade de pallets para caber");
            //alert((Math.ceil((maior) / document.getElementById('amarracao').value) * document.getElementById('larguraDobrada').value) + 112);
            console.log("AGORA AUMENTAMOS O PALLET PARA = " + document.getElementById('qPallets').value);
            calcuclaVolume();
        }
    }
}

function calculaPeso() {
    var pesoTotal = ((parseFloat(document.getElementById('materialGramatura').value) * parseFloat(document.getElementById('materialMetroQuadrado').value)) / 1000) * 1.1;
    var pesoDeUmaManga = pesoTotal / parseInt(document.getElementById('nMangas').value);
    document.getElementById('pesoLiq1').value = ((parseInt(document.getElementById('qPacotes1').value) * parseInt(document.getElementById('xxxx').value)) * pesoDeUmaManga).toFixed(2);
    document.getElementById('pesoLiq2').value = ((parseInt(document.getElementById('qPacotes2').value) * parseInt(document.getElementById('yyyy').value)) * pesoDeUmaManga).toFixed(2);
    document.getElementById('pesoLiq3').value = ((parseInt(document.getElementById('qPallets1').value) * parseInt(document.getElementById('aaaa').value)) * pesoDeUmaManga * parseInt(document.getElementById('qMangasPacote').value)).toFixed(2);
    document.getElementById('pesoLiq4').value = ((parseInt(document.getElementById('qPallets2').value) * parseInt(document.getElementById('bbbb').value)) * pesoDeUmaManga * parseInt(document.getElementById('qMangasPacote').value)).toFixed(2);
    document.getElementById('pesoBru1').value = ((parseInt(document.getElementById('qPacotes1').value) * parseInt(document.getElementById('xxxx').value)) * pesoDeUmaManga).toFixed(2);
    document.getElementById('pesoBru2').value = ((parseInt(document.getElementById('qPacotes2').value) * parseInt(document.getElementById('yyyy').value)) * pesoDeUmaManga).toFixed(2);
    document.getElementById('pesoBru3').value = ((parseInt(document.getElementById('qPallets1').value) * parseInt(document.getElementById('aaaa').value)) * pesoDeUmaManga * parseInt(document.getElementById('qMangasPacote').value) + 15).toFixed(2);
    document.getElementById('pesoBru4').value = ((parseInt(document.getElementById('qPallets2').value) * parseInt(document.getElementById('bbbb').value)) * pesoDeUmaManga * parseInt(document.getElementById('qMangasPacote').value) + 15).toFixed(2);
}

function calculaDimensoes() {
    //pacotes
    document.getElementById('alturaPacote1').value = document.getElementById('larguraDobrada').value;
    document.getElementById('alturaPacote2').value = document.getElementById('larguraDobrada').value;
    document.getElementById('larguraPacote1').value = 500;
    document.getElementById('larguraPacote2').value = 500;
    document.getElementById('comprimentoPacote1').value = 700;
    document.getElementById('comprimentoPacote2').value = 700;

    //pallets
    document.getElementById('alturaPallet1').value = (Math.ceil((parseInt(document.getElementById('aaaa').value)) / (parseInt(document.getElementById("amarracao").value))) * parseInt(document.getElementById("larguraDobrada").value)) + 120;
    document.getElementById('alturaPallet2').value = (Math.ceil((parseInt(document.getElementById('bbbb').value)) / (parseInt(document.getElementById("amarracao").value))) * parseInt(document.getElementById("larguraDobrada").value)) + 120;
    document.getElementById('larguraPallet1').value = 1300;
    document.getElementById('larguraPallet2').value = 1300;
    document.getElementById('comprimentoPallet1').value = 1300;
    document.getElementById('comprimentoPallet2').value = 1300;
}

function defineGrossuraDepoisDaFechadora() {

    switch (document.getElementById('produtoMangaMaterial').value) {
        case "1":
            switch (document.getElementById('produtoMangaGramatura').value) {
                case "1":
                    grossuraDepoisdaFechadora = 10; //10 milimetros
                    break;
                case "2":
                    grossuraDepoisdaFechadora = 11;
                    break;
                case "3":
                    grossuraDepoisdaFechadora = 12;
                    break;
                case "4":
                    grossuraDepoisdaFechadora = 13;
                    break;
                case "5":
                    grossuraDepoisdaFechadora = 14;
                    break;
                case "6":
                    grossuraDepoisdaFechadora = 15;
                    break;
                case "7":
                    grossuraDepoisdaFechadora = 16;
                    break;
                case "8":
                    grossuraDepoisdaFechadora = 17;
                    break;
                case "9":
                    grossuraDepoisdaFechadora = 18;
                    break;
            }
            break;

        case "2": // nomex
            switch (document.getElementById('produtoMangaGramatura').value) {
                case "1":
                    grossuraDepoisdaFechadora = 13; //10 milimetros
                    break;
                case "2":
                    grossuraDepoisdaFechadora = 14;
                    break;
                case "3":
                    grossuraDepoisdaFechadora = 15;
                    break;
                case "4":
                    grossuraDepoisdaFechadora = 16;
                    break;
                case "5":
                    grossuraDepoisdaFechadora = 17;
                    break;
                case "6":
                    grossuraDepoisdaFechadora = 18;
                    break;
                case "7":
                    grossuraDepoisdaFechadora = 19;
                    break;
                case "8":
                    grossuraDepoisdaFechadora = 20;
                    break;
                case "9":
                    grossuraDepoisdaFechadora = 21;
                    break;
            }
            break;
        case "3": //  fibra de vidro
            switch (document.getElementById('produtoMangaGramatura').value) {
                case "1":
                    grossuraDepoisdaFechadora = 8; //10 milimetros
                    break;
                case "2":
                    grossuraDepoisdaFechadora = 9;
                    break;
                case "3":
                    grossuraDepoisdaFechadora = 10;
                    break;
                case "4":
                    grossuraDepoisdaFechadora = 11;
                    break;
                case "5":
                    grossuraDepoisdaFechadora = 12;
                    break;
                case "6":
                    grossuraDepoisdaFechadora = 13;
                    break;
                case "7":
                    grossuraDepoisdaFechadora = 14;
                    break;
                case "8":
                    grossuraDepoisdaFechadora = 15;
                    break;
                case "9":
                    grossuraDepoisdaFechadora = 16;
                    break;
            }
            break;
        case "4": //  teflon
            switch (document.getElementById('produtoMangaGramatura').value) {
                case "1":
                    grossuraDepoisdaFechadora = 8; //10 milimetros
                    break;
                case "2":
                    grossuraDepoisdaFechadora = 9;
                    break;
                case "3":
                    grossuraDepoisdaFechadora = 10;
                    break;
                case "4":
                    grossuraDepoisdaFechadora = 11;
                    break;
                case "5":
                    grossuraDepoisdaFechadora = 12;
                    break;
                case "6":
                    grossuraDepoisdaFechadora = 13;
                    break;
                case "7":
                    grossuraDepoisdaFechadora = 14;
                    break;
                case "8":
                    grossuraDepoisdaFechadora = 15;
                    break;
                case "9":
                    grossuraDepoisdaFechadora = 16;
                    break;
            }
            break;
        case "5": //  Acrílico
            switch (document.getElementById('produtoMangaGramatura').value) {
                case "1":
                    grossuraDepoisdaFechadora = 12; //10 milimetros
                    break;
                case "2":
                    grossuraDepoisdaFechadora = 13;
                    break;
                case "3":
                    grossuraDepoisdaFechadora = 14;
                    break;
                case "4":
                    grossuraDepoisdaFechadora = 15;
                    break;
                case "5":
                    grossuraDepoisdaFechadora = 16;
                    break;
                case "6":
                    grossuraDepoisdaFechadora = 17;
                    break;
                case "7":
                    grossuraDepoisdaFechadora = 18;
                    break;
                case "8":
                    grossuraDepoisdaFechadora = 19;
                    break;
                case "9":
                    grossuraDepoisdaFechadora = 20;
                    break;
            }
            break;
        case "6": //  Polipropileno
            switch (document.getElementById('produtoMangaGramatura').value) {
                case "1":
                    grossuraDepoisdaFechadora = 12; //10 milimetros
                    break;
                case "2":
                    grossuraDepoisdaFechadora = 13;
                    break;
                case "3":
                    grossuraDepoisdaFechadora = 14;
                    break;
                case "4":
                    grossuraDepoisdaFechadora = 15;
                    break;
                case "5":
                    grossuraDepoisdaFechadora = 16;
                    break;
                case "6":
                    grossuraDepoisdaFechadora = 17;
                    break;
                case "7":
                    grossuraDepoisdaFechadora = 18;
                    break;
                case "8":
                    grossuraDepoisdaFechadora = 19;
                    break;
                case "9":
                    grossuraDepoisdaFechadora = 20;
                    break;
            }
            break;
    }
}