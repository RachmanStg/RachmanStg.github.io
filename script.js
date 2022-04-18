window.addEventListener('scroll', () => {
    const imageTop = document.querySelector('.img-top');
    const imageMiddle = document.querySelector('.img-middle');
    const imageBottom = document.querySelector('.img-bottom');
    const showcaseData = document.querySelector('.showcase-data');
    let scrollPositionY = window.scrollY;
    let showcaseDataStyles = `
        transform: translateY(${scrollPositionY * .2}%);
        opacity: ${1 - scrollPositionY * 0.002}; 
    `;
    
    if (scrollPositionY < 600) {
        showcaseData.style = showcaseDataStyles;
        imageTop.style.transform = `translateY(${-scrollPositionY * .001}%)`;
        imageMiddle.style.transform = `translateY(${scrollPositionY * .02}%)`;
        imageBottom.style.transform = `translateY(${-scrollPositionY * .04}%)`;
    };
});