
elNome = $("#nome")
elSobrenome = $("#sobrenome")
elEmail = $("#email")
elTelefone = $("#telefone")
elCidade = $("#cidade")
elEstado = $("#estado")
elCep = $("#cep")

elErroNome = $(".erro-nome")
elErroSobrenome = $(".erro-sobrenome")
elErroEmail =$(".erro-email")
elErroTelefone = $(".erro-telefone")
elErroCidade = $(".erro-cidade")
elErroEstado = $(".erro-estado")
elErroCep = $(".erro-cep")

$("#finalizar").on('click', function () {

    validacao = validarFormulario()

    if (validacao == false) {
        return false
    }


    novoCadastro = {
        first_name: elNome.val(),
        last_name: elSobrenome.val(),
        email: elEmail.val(),
        telephone: elTelefone.val(),
        city: elCidade.val(),
        state: elEstado.val(),
        zip_code: elCep.val()
    }

    $(".btn-limpar").click()

    cadastrarPessoa(novoCadastro)

    inserirDadosTabela(novoCadastro)

})

function validarFormulario() {

    valor = true

    $(".erro").html("")

    validarCampo(elNome, elErroNome)

    validarCampo(elSobrenome, elErroSobrenome)

    validarCampo(elEmail, elErroEmail)

    validarCampo(elTelefone, elErroTelefone)

    validarCampo(elCidade, elErroCidade)

    validarCampo(elEstado, elErroEstado)

    validarCampo(elCep, elErroCep)

    return valor
}

function validarCampo(el, elErro) {

    if ( el.val() == "") {
        elErro.html("Campo obrigatório")
        valor = false
    }
}

function cadastrarPessoa(novoCadastro) {

    $.ajax({
        method: "POST",
        data: JSON.stringify(novoCadastro),
        url: "https://cadastrar-dados-pessoais.firebaseio.com/pessoas.json",
        //crossDomain: true,
        dataType: 'json',
        Accept: 'application/json',
        beforeSend: function() {
            console.log("start");
        }
    }).done(function (data) {
      console.log(data)
    }).fail(function (error) {
        console.log(error)
    }).always(function () {
       // console.log("complete")
    })
    
}

function listarDadosPessoais(){

    $.ajax({
        method: "GET",
        url: "https://cadastrar-dados-pessoais.firebaseio.com/pessoas.json",
        dataType: "json",
        accept: "application/json",
        beforeSend: function () {
            //console.log("start")
        }
    }).done(function (data){

        $.each(data,function(key, pessoa){
            inserirDadosTabela(pessoa)
        })

    }).fail(function (error) {
        console.log(error)
    }).always(function(){
        // console.log("Ok")
    })

}

function inserirDadosTabela(pessoa){
console.log(pessoa)
    body = $("table > tbody")

    novaLinha = "<tr>\n" +
        "<th scope=\"row\">" +"."+ "</th>\n" +
        "<td>" + pessoa.first_name + "</td>\n" +
        "<td>" + pessoa.last_name + "</td>\n" +
        "<td>" + pessoa.email + "</td>\n" +
        "<td>" + pessoa.telephone + "</td>\n" +
        "<td>" + pessoa.city + "</td>\n" +
        "<td>" + pessoa.state + "</td>\n" +
        "<td>" + pessoa.zip_code + "</td>\n" +
        "</tr>"

    body.append(novaLinha)
}

listarDadosPessoais()