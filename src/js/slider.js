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
    this.createNumbers = function (){
        const Numbers = document.createElement('div');
        Numbers.className = "text_block";
        const Num1 = document.createElement('span');
        const Num2 = document.createElement('span');
        const Num3 = document.createElement('span');
        const Num4 = document.createElement('span');
        Num1.innerHTML="0";
        Num2.innerHTML="25";
        Num3.innerHTML="50";
        Num4.innerHTML="100";
        Numbers.appendChild(Num1);
        Numbers.appendChild(Num2);
        Numbers.appendChild(Num3);
        Numbers.appendChild(Num4);
        rootObject.appendChild(Numbers);
    };
    
    this.createMultipleRangeBullet = function (){
        const MultipleRangeBulletsContainer = document.createElement('div');
        const MultipleRangeBulletLow = document.createElement('span');
        const MultipleRangeBulletHigh = document.createElement('span');
        MultipleRangeBulletsContainer.className= "multiple";
        MultipleRangeBulletLow.className = "rs-label";
        MultipleRangeBulletHigh.className = "rs-label";
        MultipleRangeBulletLow.innerHTML = "20";
        MultipleRangeBulletHigh.innerHTML = "80";
        MultipleRangeBulletsContainer.appendChild(MultipleRangeBulletLow);
        MultipleRangeBulletsContainer.appendChild(MultipleRangeBulletHigh);
        rootObject.appendChild(MultipleRangeBulletsContainer);
    };

    this.createMultipleRangeSlider = function (){
        const MultipleRangeSlider = document.createElement('input');
        MultipleRangeSlider.className = "rs-range";
        MultipleRangeSlider.setAttribute("type", "range");
        MultipleRangeSlider.setAttribute("multiple","");
        MultipleRangeSlider.setAttribute("value", "20,80");
        rootObject.appendChild(MultipleRangeSlider);
    };
    this.createUI = function (){
        const UIcontainer = document.createElement('div');
        UIcontainer.className = "panel";

        const Min = document.createElement('input');
        Min.setAttribute("type", "text");
        Min.setAttribute("placeholder","Min");
        Min.className = "Min";

        const MinSpan = document.createElement('span');
        MinSpan.innerHTML = "Min";

        const Max = document.createElement('input');
        Max.setAttribute("type", "text");
        Max.setAttribute("placeholder","Max");
        Max.className = "Max";

        const MaxSpan = document.createElement('span');
        MaxSpan.innerHTML = "Max";

        const Br1 = document.createElement('br');

        const CurrentValue1 = document.createElement('input');
        CurrentValue1.setAttribute("type", "text");
        CurrentValue1.setAttribute("placeholder","CurrentValue1");
        CurrentValue1.className = "CurrentValue1";

        const CurrentValue1Span = document.createElement('span');
        CurrentValue1Span.innerHTML = "CurrentValue1";

        const Br2 = document.createElement('br');

        const CurrentValue2 = document.createElement('input');
        CurrentValue2.setAttribute("type", "text");
        CurrentValue2.setAttribute("placeholder","CurrentValue2");
        CurrentValue2.className = "CurrentValue2";

        const CurrentValue2Span = document.createElement('span');
        CurrentValue2Span.innerHTML = "CurrentValue2";

        const Br3 = document.createElement('br');

        const StepSize = document.createElement('input');
        StepSize.setAttribute("type", "text");
        StepSize.setAttribute("placeholder","StepSize");
        StepSize.className = "StepSize";

        const StepSizeSpan = document.createElement('span');
        StepSizeSpan.innerHTML = "StepSize";

        const Br4 = document.createElement('br');

        const Interval = document.createElement('input');
        Interval.setAttribute("type", "checkbox");
        Interval.setAttribute("value", "Interval");
        Interval.setAttribute("checked","");

        const IntervalSpan = document.createElement('span');
        IntervalSpan.innerHTML = "Interval/Range";

        const ShowBubble = document.createElement('input');
        ShowBubble.setAttribute("type", "checkbox");
        ShowBubble.setAttribute("value", "Show Bubble");
        ShowBubble.setAttribute("checked","");

        const ShowBubbleSpan = document.createElement('span');
        ShowBubbleSpan.innerHTML = "Show Bubble";

        const Horizontal = document.createElement('input');
        Horizontal.setAttribute("type", "checkbox");
        Horizontal.setAttribute("value", "Horizontal");
        Horizontal.setAttribute("checked","");

        const HorizontalSpan = document.createElement('span');
        HorizontalSpan.innerHTML = "Horizontal/Vertical";
     
        UIcontainer.appendChild(Min);
        UIcontainer.appendChild(MinSpan);
        UIcontainer.appendChild(Max);
        UIcontainer.appendChild(MaxSpan);
        UIcontainer.appendChild(Br1);
        UIcontainer.appendChild(CurrentValue1);
        UIcontainer.appendChild(CurrentValue1Span);
        UIcontainer.appendChild(Br2);
        UIcontainer.appendChild(CurrentValue2);
        UIcontainer.appendChild(CurrentValue2Span);
        UIcontainer.appendChild(Br3);
        UIcontainer.appendChild(StepSize);
        UIcontainer.appendChild(StepSizeSpan);
        UIcontainer.appendChild(Br4);
        UIcontainer.appendChild(Interval);
        UIcontainer.appendChild(IntervalSpan);
        UIcontainer.appendChild(ShowBubble);
        UIcontainer.appendChild(ShowBubbleSpan);
        UIcontainer.appendChild(Horizontal);
        UIcontainer.appendChild(HorizontalSpan);

        rootObject.appendChild(UIcontainer);
    };
}

    
function createSlider (id){    
    const SliderElem = document.getElementById(id);
    const slider = new View(SliderElem);
  //  slider.createRangeBullet();
   // slider.createRangeSlider();
    slider.createMultipleRangeBullet();
    slider.createMultipleRangeSlider();
    slider.createNumbers();
    slider.createUI();
};

createSlider ('slider1');
createSlider ('slider2');
createSlider ('slider3');



