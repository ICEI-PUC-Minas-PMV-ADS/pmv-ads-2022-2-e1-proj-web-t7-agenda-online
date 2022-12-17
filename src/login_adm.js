function Login() {
    var done = 0;
    var usuario = document.getElementsByName('email')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;
    senha = senha.toLowerCase();
    if (usuario == "admin@admin.com" && senha == "admin") {
        alert("Login bem sucedido!")
        window.location = "tela_admlogado.html";
        done = 1;
    }
    else {
        alert("Dados incorretos, tente novamente");
    }
}
