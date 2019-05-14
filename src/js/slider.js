var View = function (rootObject){

    this.InputCurrentValue1;
    this.InputCurrentValue2;
    this.InputStepSize;
    this.InputInterval;
    this.InputShowBubble;
    this.InputHorizontal;

    this.RangeBulletLow;
    this.RangeBulletHigh;

    this.RangeSlider;
    this.GhostSlider;

    this.InputContainer;
    this.Text_block;

    this.Num1;
    this.Num2;
    this.Num3;
    this.Num4;
    this.Num5;

    this.CurrentValue1Span;
    this.CurrentValue2Span;

    this.Br3;

    this.FillContainer;

    this.createRangeBullet = function (){
        const RangeBulletsContainer = document.createElement('div');
        const RangeBulletLow = document.createElement('span');
        const RangeBulletHigh = document.createElement('span');
        RangeBulletsContainer.className= "multiple";
        RangeBulletLow.className = "rs-label";
        RangeBulletHigh.className = "rs-label";
        RangeBulletLow.innerHTML = "20";
        RangeBulletHigh.innerHTML = "80";
        this.RangeBulletLow = RangeBulletLow;
        this.RangeBulletHigh = RangeBulletHigh;
        RangeBulletsContainer.appendChild(RangeBulletLow);
        RangeBulletsContainer.appendChild(RangeBulletHigh);
        rootObject.appendChild(RangeBulletsContainer);
    };
    
    this.createSlider = function (){
        const InputContainer = document.createElement('div');
        const FillContainer = document.createElement('div');
        const RangeSlider = document.createElement('input');
        const GhostSlider = document.createElement('input');
        RangeSlider.className = "rs-range";
        GhostSlider.className = "rs-range";
        GhostSlider.classList.add("ghostinput");
        InputContainer.className = "inputContainer";
        RangeSlider.setAttribute("type", "range");
        RangeSlider.setAttribute("value", 20);
        RangeSlider.setAttribute("min", 0);
        RangeSlider.setAttribute("max", 100);
        GhostSlider.setAttribute("type", "range");
        GhostSlider.setAttribute("value", 80);
        GhostSlider.setAttribute("min", 0);
        GhostSlider.setAttribute("max", 100);

        FillContainer.className = "fill_container";
        this.FillContainer = FillContainer;
        this.RangeSlider = RangeSlider;
        this.GhostSlider = GhostSlider;
        this.InputContainer = InputContainer;
        InputContainer.appendChild(RangeSlider);
        InputContainer.appendChild(GhostSlider);
        rootObject.appendChild(InputContainer);
        InputContainer.appendChild(FillContainer);
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

        this.Num1.innerHTML="0";
        this.Num2.innerHTML="25";
        this.Num3.innerHTML="50";
        this.Num4.innerHTML="75";
        this.Num5.innerHTML="100";
        Numbers.appendChild(Num1);
        Numbers.appendChild(Num2);
        Numbers.appendChild(Num3);
        Numbers.appendChild(Num4);
        Numbers.appendChild(Num5);
        rootObject.appendChild(Numbers);
    };

    this.createUI = function (){
        const UIcontainer = document.createElement('div');
        UIcontainer.className = "panel";

        const Min = document.createElement('input');
        Min.setAttribute("type", "text");
        Min.setAttribute("placeholder","0");
        this.InputMin = Min;
        Min.className = "Min";

        const MinSpan = document.createElement('span');
        MinSpan.innerHTML = "Min";

        const Max = document.createElement('input');
        Max.setAttribute("type", "text");
        Max.setAttribute("placeholder","100");
        Max.setAttribute("name","Max");
        this.InputMax = Max;
        Max.className = "Max";

        const MaxSpan = document.createElement('span');
        MaxSpan.innerHTML = "Max";

        const Br1 = document.createElement('br');

        const CurrentValue1 = document.createElement('input');
        CurrentValue1.setAttribute("type", "text");
        CurrentValue1.setAttribute("placeholder","20");
        this.InputCurrentValue1 = CurrentValue1;
        CurrentValue1.className = "CurrentValue1";

        const CurrentValue1Span = document.createElement('span');
        CurrentValue1Span.innerHTML = "Value";
        this.CurrentValue1Span = CurrentValue1Span;

        const Br2 = document.createElement('br');

        const CurrentValue2 = document.createElement('input');
        CurrentValue2.setAttribute("type", "text");
        CurrentValue2.setAttribute("placeholder","80");
        CurrentValue2.setAttribute("name","CurrentValue2");
        this.InputCurrentValue2 = CurrentValue2;
        CurrentValue2.className = "CurrentValue2";

        const CurrentValue2Span = document.createElement('span');
        CurrentValue2Span.innerHTML = "CurrentValue2";
        this.CurrentValue2Span = CurrentValue2Span;

        const Br3 = document.createElement('br');
        this.Br3 = Br3;

        const StepSize = document.createElement('input');
        StepSize.setAttribute("type", "text");
        StepSize.setAttribute("placeholder","1");
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

    this.ReadStateAndUpdateModel = function (){

        SliderView.InputCurrentValue1.addEventListener('keyup', checkInputCurrentValue1);
        SliderView.InputCurrentValue2.addEventListener('keyup', checkInputCurrentValue2);
        SliderView.InputMin.addEventListener('keyup', checkInputMin);
        SliderView.InputMax.addEventListener('keyup', checkInputMax);
        SliderView.InputStepSize.addEventListener('keyup', checkInputStepSize);
        SliderView.InputShowBubble.addEventListener('click', checkInputShowBubble);
        SliderView.InputInterval.addEventListener('click', checkInputInterval);
        SliderView.InputHorizontal.addEventListener('click', checkInputHorizontal);
        SliderView.InputHorizontal.addEventListener('click', checkInputHorizontal);
        SliderView.RangeSlider.addEventListener("input", checkRangeSlider);
        SliderView.GhostSlider.addEventListener("input", checkGhostSlider);

        if (SliderView.InputInterval.checked === true){

            SliderView.InputCurrentValue2.classList.add("display_none");
            SliderView.CurrentValue2Span.classList.add("display_none");
            SliderView.Br3.classList.add("display_none");
            SliderView.RangeBulletHigh.classList.add("display_none");
            SliderView.GhostSlider.classList.add("display_none");
        }
        
      
        function checkInputCurrentValue1(e){
            var inputValue = e.target.value;
            SliderView.RangeBulletLow.innerHTML=inputValue;
            SliderView.RangeSlider.value = inputValue;
            SliderModel.CurrentValueLow = inputValue;

            ReadModelAndUptateSlider(); 
        }

        function checkInputCurrentValue2(e){
            var inputValue = e.target.value;
            SliderView.RangeBulletHigh.innerHTML=inputValue;
            SliderView.RangeSlider.valueHigh = inputValue;
            SliderModel.CurrentValueHigh = inputValue;

            ReadModelAndUptateSlider();
        }
       
        function checkInputMin(e){
            var inputValue = e.target.value;
            SliderModel.MinValue = inputValue;

            console.log(SliderModel.MinValue);

            ReadModelAndUptateSlider();
        }

        function checkInputMax(e){
            var inputValue = e.target.value;

            SliderModel.MaxValue = inputValue;

            ReadModelAndUptateSlider();
        }

        function checkInputStepSize(e){
            var inputValue = e.target.value;

            SliderModel.StepSize = inputValue;

            ReadModelAndUptateSlider();
        }
        
        function checkInputShowBubble(){
            if (SliderView.InputShowBubble.checked === false)
            {
                SliderView.RangeBulletHigh.classList.add("display_none");     
            }
            else
            {
                SliderView.RangeBulletHigh.classList.remove("display_none");
            }

            ReadModelAndUptateSlider();
        }

        function checkInputInterval(){
            if (SliderView.InputInterval.checked === true)
            {
                SliderView.InputCurrentValue1.setAttribute("placeholder", "Value");
                SliderView.CurrentValue1Span.innerHTML = "Value";

                ReadModelAndUptateSlider();
            }
            else
            {
                SliderView.InputCurrentValue1.setAttribute("placeholder", "20");
                SliderView.CurrentValue1Span.innerHTML = "ValueLow";

                SliderView.InputCurrentValue2.setAttribute("placeholder", "80");
                SliderView.CurrentValue2Span.innerHTML = "ValueHigh";

                SliderView.RangeBulletHigh.classList.remove("display_none");

                ReadModelAndUptateSlider();
            }
        }

        function checkGhostSlider(){

            value=this.value;
            SliderView.InputCurrentValue2.value = value;
            SliderView.RangeBulletHigh.innerHTML = value;
            SliderModel.CurrentValueHigh = value;
            
            ReadModelAndUptateSlider();
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

                ReadModelAndUptateSlider();
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

                ReadModelAndUptateSlider();
            }

              
        }

        function checkRangeSlider(){

            var value = this.value;

            SliderView.InputCurrentValue1.value = value;
            SliderView.RangeBulletLow.innerHTML = value;
            SliderModel.CurrentValueLow = value;
          
            ReadModelAndUptateSlider();
    
        }

        function ReadModelAndUptateSlider(){

            SliderModel.CalculateValues();
            SliderView.Num1.innerHTML = SliderModel.MinValue;
            SliderView.Num2.innerHTML = SliderModel.Value1;
            SliderView.Num3.innerHTML = SliderModel.Value2;
            SliderView.Num4.innerHTML = SliderModel.Value3;
            SliderView.Num5.innerHTML = SliderModel.MaxValue;

            if (SliderView.InputInterval.checked === true)
            {
                SliderView.InputCurrentValue2.classList.add("display_none");
                SliderView.CurrentValue2Span.classList.add("display_none");
                SliderView.Br3.classList.add("display_none");
                SliderView.RangeBulletHigh.classList.add("display_none");
                SliderView.GhostSlider.classList.add("display_none");

                SliderView.RangeSlider.setAttribute("step", SliderModel.StepSize);
                SliderView.RangeSlider.setAttribute("max", SliderModel.MaxValue);
                SliderView.RangeSlider.setAttribute("min", SliderModel.MinValue);
                SliderView.RangeSlider.value = SliderModel.CurrentValueLow;

                SliderModel.CalculateFillPosition();
                SliderView.FillContainer.style.width = SliderModel.FillPosition;
                SliderView.FillContainer.style.left = 0;
            }
            else
            {
                SliderView.RangeSlider.setAttribute("step", SliderModel.StepSize);
                SliderView.RangeSlider.setAttribute("max", SliderModel.MaxValue);
                SliderView.RangeSlider.setAttribute("min", SliderModel.MinValue);
                SliderView.RangeSlider.value = SliderModel.CurrentValueLow;

                SliderView.InputCurrentValue2.classList.remove("display_none");
                SliderView.CurrentValue2Span.classList.remove("display_none");
                SliderView.Br3.classList.remove("display_none");
                SliderView.RangeBulletHigh.classList.remove("display_none");

                SliderView.GhostSlider.classList.remove("display_none");
                    
                SliderView.GhostSlider.setAttribute("step", SliderModel.StepSize);
                SliderView.GhostSlider.setAttribute("max", SliderModel.MaxValue);
                SliderView.GhostSlider.setAttribute("min", SliderModel.MinValue);
                SliderView.GhostSlider.value = SliderModel.CurrentValueHigh;
                   
                SliderModel.CalculateFillPositionMultiple();
                SliderView.FillContainer.style.width = SliderModel.FillPosition;
                SliderView.FillContainer.style.left = SliderModel.FillOffset;
            }
        }

     }

    this.InitSlider = function(){
        
        SliderView.createRangeBullet();
        SliderView.createSlider();
        SliderView.createNumbers();
        SliderView.createUI();
    }
}

var Model = function (){
    
    this.MinValue = 0.00;
    this.MaxValue = 100.00;
    this.StepSize = 1;
    this.FillPosition = 0;
    this.CurrentValueLow = 20;
    this.CurrentValueHigh = 80;
    this.FillOffset = 20;

    this.Value1;
    this.Value2;
    this.Value3;

    this.CalculateValues = function () {
    
        this.Value1 = parseFloat(this.MinValue) + parseFloat(((this.MaxValue-this.MinValue)/4).toFixed(2));
        this.Value2 = parseFloat(this.MinValue) + parseFloat(((this.MaxValue-this.MinValue)/4*2).toFixed(2));
        this.Value3 = parseFloat(this.MinValue) + parseFloat(((this.MaxValue-this.MinValue)/4*3).toFixed(2));
    }    

    this.CalculateFillPosition = function ()
    {
        this.FillPosition = Math.abs(parseFloat(this.CurrentValueLow)-parseFloat(this.MinValue))/Math.abs(parseFloat(this.MaxValue)-parseFloat(this.MinValue))*250 +5 + "px";
        this.FillOffset = 0;
    }

    this.CalculateFillPositionMultiple = function ()
    {
        if ( parseFloat(this.CurrentValueHigh) < parseFloat(this.CurrentValueLow))
        {
           
            var OffsetLow = Math.abs(parseFloat(this.CurrentValueHigh)-parseFloat(this.MinValue))/Math.abs(parseFloat(this.MaxValue)-parseFloat(this.MinValue))*250 + 5;
            var OffsetHigh = Math.abs(parseFloat(this.CurrentValueLow)-parseFloat(this.MinValue))/Math.abs(parseFloat(this.MaxValue)-parseFloat(this.MinValue))*250 + 5;
            

            this.FillOffset = OffsetLow + "px";
            this.FillPosition = OffsetHigh - OffsetLow + "px";
        }
        else
        {
        var OffsetLow = Math.abs(parseFloat(this.CurrentValueLow)-parseFloat(this.MinValue))/Math.abs(parseFloat(this.MaxValue)-parseFloat(this.MinValue))*250 +5;
        var OffsetHigh = Math.abs(parseFloat(this.CurrentValueHigh)-parseFloat(this.MinValue))/Math.abs(parseFloat(this.MaxValue)-parseFloat(this.MinValue))*250 + 5;

            this.FillOffset = OffsetLow + "px";
            this.FillPosition = OffsetHigh - OffsetLow + "px";

        }
    }
}

var Controller1 = new Controller ('slider1');
var Controller2 = new Controller ('slider2');
Controller1.InitSlider();
Controller1.ReadStateAndUpdateModel();
Controller2.InitSlider();
Controller2.ReadStateAndUpdateModel();



