/*Ejercicio de elección de imágen*/    
    function verImagen() {
    let num  = parseInt(document.getElementById("num").value);
    let imagen = document.getElementById('img');

    switch (num) {
        case 1:
            imagen.src = "https://img.asmedia.epimg.net/resizer/G0B1tvsP5ngy8GGl4YrPcv-9u08=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YGUETBGYZRHZ5BA7A2BLETAVAU.jpg";
            break;
        case 2:
            imagen.src = "https://blog.hunteet.com/wp-content/uploads/2017/10/Decoracion-de-Halloween-1024x680.jpg";
            break;
        case 3:
            imagen.src = "https://www.quadratin.com.mx/www/wp-content/uploads/2020/10/CP_Michoacan-y-su-dia-de-muertos-1160x700.jpg";
            break;
        case 4:
            imagen.src = "https://parquesalegres.org/wp-content/uploads/2020/09/grito-1.png";
            break;
        case 5:
            imagen.src = "https://www.lavanguardia.com/files/article_main_microformat/uploads/2017/12/08/5fa3dc90794da.jpeg";
            break;
        default:
            break;
    }
}