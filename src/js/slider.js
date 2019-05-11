var View = function (rootObject){

    this.InputMin;
    this.InputMax;
    this.InputCurrentValue1;
    this.InputCurrentValue2;
    this.InputStepSize;
    this.InputInterval;
    this.InputShowBubble;
    this.InputHorizontal;

    this.RangeBullet;
    this.RangeSlider;

    this.InputMinValue;
    this.InputMaxValue;

    this.InputContainer;
    this.Text_block;
    this.Num1;
    this.Num2;
    this.Num3;
    this.Num4;

    this.createRangeBullet = function (){
        const RangeBullet = document.createElement('span');
        RangeBullet.className = "rs-label";
        RangeBullet.innerHTML = 40;
        this.RangeBullet = RangeBullet;
        rootObject.appendChild(RangeBullet);
    };
    
    this.createRangeSlider = function (){
        const RangeSlider = document.createElement('input');
        const InputContainer = document.createElement('div');
        RangeSlider.className = "rs-range";
        RangeSlider.setAttribute("type", "range");
        RangeSlider.setAttribute("value", 40);
        RangeSlider.setAttribute("min", 0);
        RangeSlider.setAttribute("max", 100);
        this.RangeSlider = RangeSlider;
        this.InputContainer = InputContainer;
        InputContainer.appendChild(RangeSlider);
        rootObject.appendChild(InputContainer);
    };
    this.createNumbers = function (){
        const Numbers = document.createElement('div');
        Numbers.className = "text_block";
        const Num1 = document.createElement('span');
        const Num2 = document.createElement('span');
        const Num3 = document.createElement('span');
        const Num4 = document.createElement('span');
        const Num5 = document.createElement('span');
        this.Text_block = Numbers;
        this.Num1 = Num1;
        this.Num2 = Num2;
        this.Num3 = Num3;
        this.Num4 = Num4;
        this.Num5 = Num5;

        Num1.innerHTML="0";
        Num2.innerHTML="25";
        Num3.innerHTML="50";
        Num4.innerHTML="75";
        Num5.innerHTML="100";
        Numbers.appendChild(Num1);
        Numbers.appendChild(Num2);
        Numbers.appendChild(Num3);
        Numbers.appendChild(Num4);
        Numbers.appendChild(Num5);
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
        Min.setAttribute("name","Min");
        this.InputMin = Min;
        Min.className = "Min";

        const MinSpan = document.createElement('span');
        MinSpan.innerHTML = "Min";

        const Max = document.createElement('input');
        Max.setAttribute("type", "text");
        Max.setAttribute("placeholder","Max");
        Max.setAttribute("name","Max");
        this.InputMax = Max;
        Max.className = "Max";

        const MaxSpan = document.createElement('span');
        MaxSpan.innerHTML = "Max";

        const Br1 = document.createElement('br');

        const CurrentValue1 = document.createElement('input');
        CurrentValue1.setAttribute("type", "text");
        CurrentValue1.setAttribute("placeholder","CurrentValue1");
        CurrentValue1.setAttribute("id","CurrentValue1");
        this.InputCurrentValue1 = CurrentValue1;
        CurrentValue1.className = "CurrentValue1";

        const CurrentValue1Span = document.createElement('span');
        CurrentValue1Span.innerHTML = "CurrentValue1";

        const Br2 = document.createElement('br');

        const CurrentValue2 = document.createElement('input');
        CurrentValue2.setAttribute("type", "text");
        CurrentValue2.setAttribute("placeholder","CurrentValue2");
        CurrentValue2.setAttribute("name","CurrentValue2");
        this.InputCurrentValue2 = CurrentValue2;
        CurrentValue2.className = "CurrentValue2";

        const CurrentValue2Span = document.createElement('span');
        CurrentValue2Span.innerHTML = "CurrentValue2";

        const Br3 = document.createElement('br');

        const StepSize = document.createElement('input');
        StepSize.setAttribute("type", "text");
        StepSize.setAttribute("placeholder","StepSize");
        StepSize.setAttribute("name","StepSize");
        this.InputStepSize = StepSize;
        StepSize.className = "StepSize";

        const StepSizeSpan = document.createElement('span');
        StepSizeSpan.innerHTML = "StepSize";

        const Br4 = document.createElement('br');

        const Interval = document.createElement('input');
        Interval.setAttribute("type", "checkbox");
        Interval.setAttribute("value", "Interval");
        Interval.setAttribute("name", "Interval");
        Interval.setAttribute("checked","");
        this.InputInterval = Interval;

        const IntervalSpan = document.createElement('span');
        IntervalSpan.innerHTML = "Range/Interval";

        const ShowBubble = document.createElement('input');
        ShowBubble.setAttribute("type", "checkbox");
        ShowBubble.setAttribute("value", "Show Bubble");
        ShowBubble.setAttribute("name", "ShowBubble");
        ShowBubble.setAttribute("checked","");
        this.InputShowBubble = ShowBubble;

        const ShowBubbleSpan = document.createElement('span');
        ShowBubbleSpan.innerHTML = "Show Bubble";

        const Horizontal = document.createElement('input');
        Horizontal.setAttribute("type", "checkbox");
        Horizontal.setAttribute("value", "Horizontal");
        Horizontal.setAttribute("name", "Horizontal");
        Horizontal.setAttribute("checked","");
        this.InputHorizontal = Horizontal;

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

var Controller = function (id){

    const SliderElem = document.getElementById(id);
    const SliderView = new View(SliderElem);

    const SliderModel = new Model ();

    this.ReadStateAandUpdateModel = function (){

        SliderView.InputCurrentValue1.addEventListener('keyup', checkInputCurrentValue1);
        SliderView.InputMin.addEventListener('keyup', checkInputMin);
        SliderView.InputMax.addEventListener('keyup', checkInputMax);
        SliderView.InputStepSize.addEventListener('keyup', checkInputStepSize);
        SliderView.InputShowBubble.addEventListener('click', checkInputShowBubble);
        SliderView.InputInterval.addEventListener('click', checkInputInterval);
        SliderView.InputHorizontal.addEventListener('click', checkInputHorizontal);

        const multirange = require('./multiple.js');

        function checkInputCurrentValue1(e){
            var inputValue = e.target.value;
            SliderView.RangeBullet.innerHTML=inputValue;
            console.log(e.target.value);
        }
       
        function checkInputMin(e){
            var inputValue = e.target.value;
            SliderView.RangeSlider.setAttribute("min", Number.parseInt(inputValue));
            SliderView.InputMinValue = inputValue;
            console.log(e.target.value);
        }

        function checkInputMax(e){
            var inputValue = e.target.value;
            SliderView.RangeSlider.setAttribute("max", Number.parseInt(inputValue));
            SliderView.InputMaxValue = inputValue;
            console.log(e.target.value);
        }

        function checkInputStepSize(e){
            var inputValue = e.target.value;
            SliderView.RangeSlider.setAttribute("step", Number.parseInt(inputValue));
            console.log(e.target.value);
        }
        
        function checkInputShowBubble(){
            if (SliderView.InputShowBubble.checked === false)
            {
                SliderView.RangeBullet.className = "display_none";
               
            }
            else
            {
                SliderView.RangeBullet.className = "rs-label";
            }
        }

        function checkInputInterval(){
            if (SliderView.InputInterval.checked === true)
            {
                SliderView.RangeSlider.removeAttribute("multiple");
                SliderView.RangeSlider.classList.remove("multirange","original");
              //  SliderView.RangeSlider.removeAttribute("value");
                SliderView.RangeSlider.setAttribute("value",80);

                const Parent = SliderView.RangeSlider.parentNode;
                var Ghost = SliderView.RangeSlider.parentNode.childNodes[1];
                Parent.removeChild(Ghost);
                console.log("Range");
            }
            else
            {
                
                SliderView.RangeSlider.setAttribute("multiple","");
                SliderView.RangeSlider.removeAttribute("value");
                SliderView.RangeSlider.setAttribute("value","20,80");
                console.log("Interval");
                multirange.init();
            }
        }

        function checkInputHorizontal(){

            if (SliderView.InputHorizontal.checked === true)
            {   
                SliderView.InputContainer.classList.remove("vertical");
                SliderView.Text_block.classList.remove("vertical_text_block");
                SliderView.Num1.classList.remove("span_rotate");
                SliderView.Num2.classList.remove("span_rotate");
                SliderView.Num3.classList.remove("span_rotate");
                SliderView.Num4.classList.remove("span_rotate");
                SliderView.Num5.classList.remove("span_rotate");
            }
            else
            {
                SliderView.InputContainer.classList.add('vertical');
                SliderView.Text_block.classList.add("vertical_text_block");
                SliderView.Num1.classList.add("span_rotate");
                SliderView.Num2.classList.add("span_rotate");
                SliderView.Num3.classList.add("span_rotate");
                SliderView.Num4.classList.add("span_rotate");
                SliderView.Num5.classList.add("span_rotate");
            }

        }

        
     //   this.ReadModelAndUptadeSlider();
    //     function checkInputCurrentValue2(e){
    //         var inputValue = e.target.value;
    //         SliderModel.CurrentValue2Value = inputValue;
    //     }

    //     function checkInputStepSize(e){
    //         var inputValue = e.target.value;
    //         SliderModel.StepSizeValue = inputValue;
    //     }

    //     SliderModel.InputIntervalChecked = this.InputInterval.checked;
    //     SliderModel.ShowBubbleChecked = this.InputShowBubble.checked;
    //     SliderModel.HorizontalChecked = this.InputHorizontal;
     }

    this.ReadModelAndUptadeSlider = function(){
        
        SliderView.createRangeBullet();
        SliderView.createRangeSlider();
        SliderView.createNumbers();
        SliderView.createUI();
        console.log(SliderView.value);
    }
}

var Model = function (){

    this.MaxValue;
    this.MinValue;
    this.CurrentValue1Value;
    this.CurrentValue2Value;
    this.StepSizeValue;
    this.InputIntervalChecked;
    this.ShowBubbleChecked;
    this.HorizontalChecked;

}

var Controller1 = new Controller ('slider1');
var Controller2 = new Controller ('slider2');
Controller1.ReadModelAndUptadeSlider();
Controller1.ReadStateAandUpdateModel();
Controller2.ReadModelAndUptadeSlider();
Controller2.ReadStateAandUpdateModel();

// function createSliderAndUI (id){    
//     const SliderElem = document.getElementById(id);
//     const slider = new View(SliderElem);
//     slider.createRangeBullet();
//     slider.createRangeSlider();
//     // slider.createMultipleRangeBullet();
//     // slider.createMultipleRangeSlider();
//     slider.createNumbers();
//     slider.createUI();
// };

// createSliderAndUI ('slider1');
// createSliderAndUI ('slider2');
// createSliderAndUI ('slider3');



