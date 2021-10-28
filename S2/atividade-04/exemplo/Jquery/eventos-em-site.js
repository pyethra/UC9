function clicavel(ele) {
    alert("O elemento " + this.nodeName + " foi clicado!")
}
var ele = document.querySelectorAll("clicavel")
ele.forEach(it => {
})

// click
$(".clicavel").click((el) => {
    console.log(el)
    alert("O elemento " + el.target.nodeName + " foi clicado")
})

//Mudar cor do elemento
$("focus-habilitado").focus((el) => {
    el.target.classlist.add("cor-focado")
})
//Voltar a cor original do elemento
$("focus-habilitado").blur((el) => {
    el.target.classlist.remove("cor-focado")
})

//Elemento aparece
$("#fadein").click(() => {
    $("#fadeele").fadein();
})
//Elemento desaparece
$("#fadeout").click(() => {
    $("#fadeele").fadein();
})