function esconder(){
    var element  = document.getElementById('perfil');
    var content  = document.getElementById('content');
    var foto  = document.getElementById('fotoPerfil');
    var perfil = document.getElementById('perfilDescription');
    var w = element.offsetWidth;
    if (w<200){
        maximizarMenu(element, content, foto,perfil);
    }else{
        minimizarMenu(element, content, foto,perfil);
    }
}
function maximizarMenu(element, content, foto, perfil){

    element.style.width = '500px';
    content.style.marginLeft = '500px';
    
    foto.style.width = '200px';
    foto.style.height = '200px';
    perfil.hidden = false;

    
}
function minimizarMenu(element, content, foto, perfil){
    perfil.hidden = true;
    content.style.marginLeft = '150px';
    element.style.width = '150px';
    foto.style.width = '100px';
    foto.style.height = '100px';

}
function CargarConocimientos(){
   fetch('Conocimientos/conocimientos.json').then(data => data.json()).then(data => console.log(data));
}