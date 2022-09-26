
const $btn_on = document.querySelector('.btn-on');  // Botón para activar el darkmode
const $btn_off = document.querySelector('.btn-off');  // Botón para activar el lightmode


//  Obtenemos todos los elementos a los que les tenemos que cambiar estilos
const $body = document.querySelector('body');   
const $a_nav_g = document.querySelector('.a-nav-g');
const $a_nav_i= document.querySelector('.a-nav-i');
const $menu_icon= document.querySelector('.menu-icon');
const $img_logo_ppal = document.querySelector('.img-logo-ppal');
const $input = document.querySelector('.input');
const $search_icon = document.querySelector('.search-icon');
const $btn1 = document.querySelector('.btn-1');
const $btn2 = document.querySelector('.btn-2');
const $footer = document.querySelector('footer');

// Declaramos los links de las imagenes del logo (de colores y blanco) en variables 
const logo_blanco = 'https://www.google.com.co/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png'
const logo_color = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'


$btn_on.addEventListener('click', activeDarkMode);  // agregamos un evento al botón para activar el darkmode 
$btn_off.addEventListener('click', inactiveDarkMode);  // agregamos un evento al botón para activar el darkmode 

function activeDarkMode(){
    $body.classList.add('darkmode');
    if (!$a_nav_g.classList.contains('darkmode-a')){
        $a_nav_g.classList.add('darkmode-a');
    }
    if (!$a_nav_i.classList.contains('darkmode-a')){
        $a_nav_i.classList.add('darkmode-a');
    }
    if (!$menu_icon.classList.contains('darkmode-menu')){
        $menu_icon.classList.add('darkmode-menu');
    }
    if (!$input.classList.contains('input-darkmode')){
        $input.classList.add('input-darkmode');
    }
    if (!$search_icon.classList.contains('darkmode-search')){
        $search_icon.classList.add('darkmode-search');
    }
    if (!$btn1.classList.contains('darkmode-btns')){
        $btn1.classList.add('darkmode-btns');
    }
    if (!$btn2.classList.contains('darkmode-btns')){
        $btn2.classList.add('darkmode-btns');
    } 
    if (!$footer.classList.contains('darkmode-footer')){
        $footer.classList.add('darkmode-footer');
    } 


    $img_logo_ppal.removeAttribute('src');
    $img_logo_ppal.setAttribute('src',logo_blanco)

}

function inactiveDarkMode(){

    if ($body.classList.contains('darkmode')){
        $body.classList.remove('darkmode');
    }

    
    if ($a_nav_g.classList.contains('darkmode-a')){
        $a_nav_g.classList.remove('darkmode-a');
    }
    if ($a_nav_i.classList.contains('darkmode-a')){
        $a_nav_i.classList.remove('darkmode-a');
    }
    if ($menu_icon.classList.contains('darkmode-menu')){
        $menu_icon.classList.remove('darkmode-menu');
    }
    if ($input.classList.contains('input-darkmode')){
        $input.classList.remove('input-darkmode');
    }
    if ($search_icon.classList.contains('darkmode-search')){
        $search_icon.classList.remove('darkmode-search');
    }
    if ($btn1.classList.contains('darkmode-btns')){
        $btn1.classList.remove('darkmode-btns');
    }
    if ($btn2.classList.contains('darkmode-btns')){
        $btn2.classList.remove('darkmode-btns');
    } 
    if ($footer.classList.contains('darkmode-footer')){
        $footer.classList.remove('darkmode-footer');
    } 


    $img_logo_ppal.removeAttribute('src');
    $img_logo_ppal.setAttribute('src',logo_color)

}



