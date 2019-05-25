idAtual = 0

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

    novoId = gerarId(idAtual)

    novoCadastro = {
        id: novoId,
        first_name: elNome.val(),
        last_name: elSobrenome.val(),
        email: elEmail.val(),
        telephone: elTelefone.val(),
        city: elCidade.val(),
        state: elEstado.val(),
        zip_code: elCep.val()
    }

    body = $("table > tbody")

    novaLinha = "<tr>\n" +
        "<th scope=\"row\">" + novoCadastro.id + "</th>\n" +
        "<td>" + novoCadastro.first_name + "</td>\n" +
        "<td>" + novoCadastro.last_name + "</td>\n" +
        "<td>" + novoCadastro.email + "</td>\n" +
        "<td>" + novoCadastro.telephone + "</td>\n" +
        "<td>" + novoCadastro.city + "</td>\n" +
        "<td>" + novoCadastro.state + "</td>\n" +
        "<td>" + novoCadastro.zip_code + "</td>\n" +
        "</tr>"

    body.append(novaLinha)

$(".btn-limpar").click()

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

function gerarId(id) {
    soma = id + 1
    return idAtual = soma
}

function validarCampo(el, elErro) {

    if ( el.val() == "") {
        elErro.html("Campo obrigatório")
        valor = false
    }
}
