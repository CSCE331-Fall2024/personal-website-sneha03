function toggleStyle() {
    const styleSheetLink = document.getElementById('stylesheet');
    const currentStyleSheet = styleSheetLink.getAttribute('href');

    if(currentStyleSheet === 'styles.css'){
        applyStyle('style2.css');
    } else{
        applyStyle('styles.css');
    }
}

function applyStyle(style) {
    const styleSheetLink = document.getElementById('stylesheet');
    styleSheetLink.setAttribute('href', style);
    localStorage.setItem('preferredStyle', style);
}

window.onload = function() {
    const savedStyle = localStorage.getItem('preferredStyle');
    const stylesheet = document.getElementById('stylesheet');

    if (savedStyle) {
        stylesheet.setAttribute('href', savedStyle);
    }

    const projectImages = [
        document.getElementById("project1"),
        document.getElementById('project2'),
        document.getElementById('project3')
    ];

    if (projectImages[0]) {  
        changeImages(savedStyle, projectImages, 'pics/HWOpixel.png', 'pics/pixelSEC.png', 'pics/spotifyPixel.png', 'pics/HWO.png', 'pics/secLogo.png', 'pics/spotifyLogo.png');
    }

    
    const serviceImages = [
        document.getElementById("service1"),
        document.getElementById("service2"),
        document.getElementById("service3")
    ];

    if (serviceImages[0]) {  
        changeImages(savedStyle, serviceImages, 'pics/halPixel.png', 'pics/JApixel.png', 'pics/secMilepixel.png', 'pics/halVolunteer.jpg', 'pics/JA.jpg', 'pics/secondMile.jpg');
    }

    function changeImages(style, images, pixelImage1, pixelImage2, pixelImage3, normalImage1, normalImage2, normalImage3) {
        if (style === 'style2.css') {
            images[0].src = pixelImage1; 
            images[1].src = pixelImage2; 
            images[2].src = pixelImage3; 
        } else {
            images[0].src = normalImage1; 
            images[1].src = normalImage2; 
            images[2].src = normalImage3; 
        }
    }
};
