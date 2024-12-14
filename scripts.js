var image_slider = document.querySelector('.image_slider');

var images = ['analysis.jpg','database.jpg','design.jpg','code.jpg','se.jpg'];

var current_index = 0;

function previous_img(){
    if(current_index <= 0) current_index = images.length;
    current_index--;
    return setImg();
}


function next_img(){
    if(current_index >= images.length -1) current_index = -1;
    current_index++;
    return setImg();
}

function setImg(){
    return image_slider.setAttribute('src','img/'+images[current_index]);
}