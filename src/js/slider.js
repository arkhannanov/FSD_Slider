var View = function (rootObject){
   
    this.createRangeBullet = function (){
        const RangeBullet = document.createElement('span');
        RangeBullet.className = "rs-label";
        RangeBullet.innerHTML = "40";
        rootObject.appendChild(RangeBullet);
    };
    
    this.createRangeSlider = function (){
        const RangeSlider = document.createElement('input');
        RangeSlider.className = "rs-range";
        RangeSlider.setAttribute("type", "range");
        RangeSlider.setAttribute("value", 40);
        RangeSlider.setAttribute("min", 0);
        RangeSlider.setAttribute("max", 100);
        rootObject.appendChild(RangeSlider);
    };    
}

    
function createSlider (id){    
    const SliderElem = document.getElementById(id);
    const slider = new View(SliderElem);
    slider.createRangeBullet();
    slider.createRangeSlider();
};

createSlider ('slider1');
createSlider ('slider2');
createSlider ('slider3');



