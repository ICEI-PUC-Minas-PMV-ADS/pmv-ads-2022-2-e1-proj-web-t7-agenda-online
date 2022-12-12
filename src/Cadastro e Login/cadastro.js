let sListaUsuario = localStorage.getItem("usuarios");
if (sListaUsuario == null) localStorage.setItem("usuarios", "[]");
 
document.querySelector("#btnInserir").onclick = function () {
 let sUsuario = document.querySelector("#usuario").value;
 let sSenha = document.querySelector("#senha").value;
 
 let oUsuario = {
 usuario: sUsuario,
 senha: sSenha,
 };
 
 let listaUsuario = JSON.parse(localStorage.getItem("usuarios"));
 listaUsuario.push(oUsuario);
 localStorage.setItem("usuarios", JSON.stringify(listaUsuario));
};
 
document.querySelector("#btnLogin").onclick = function () {
 let sUsuario = document.querySelector("#usuario").value;
 let sSenha = document.querySelector("#senha").value;
 
 let listaUsuario = JSON.parse(localStorage.getItem("usuarios"));
 let i = listaUsuario.findIndex((e) => e.usuario == sUsuario);
 if (i > -1) {
 if (listaUsuario[i].usuario == sUsuario && listaUsuario[i].senha == sSenha)
 console.log("logado");
 else console.log("dados inválidos");
 } else console.log("dados inválidos");
};