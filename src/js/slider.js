var View = function (rootObject){

    this.InputCurrentValue1;
    this.InputCurrentValue2;
    this.InputStepSize;
    this.InputInterval;
    this.InputShowBubble;
    this.InputHorizontal;

    this.BulletLow;
    this.BulletHigh;
    this.BulletsContainer;
    this.BulletLowText;
    this.BulletHighText;

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

    this.ErrorMessage;

    this.createBullets = function (){
        const BulletsContainer = document.createElement('div');
        const BulletLow = document.createElement('div');
        const BulletHigh = document.createElement('div');
        const BulletLowText = document.createElement('span');
        const BulletHighText = document.createElement('span');

        BulletsContainer.className= "multiple";
        BulletLow.className = "rs-label";
        BulletHigh.className = "rs-label";
        BulletLow.classList.add("bullet-low");
        BulletHigh.classList.add("bullet-high");
        BulletLowText.innerHTML = "20";
        BulletHighText.innerHTML = "80";
        this.BulletLow = BulletLow;
        this.BulletHigh = BulletHigh;
        this.BulletsContainer = BulletsContainer;
        this.BulletLowText = BulletLowText;
        this.BulletHighText = BulletHighText;

        BulletLow.appendChild(BulletLowText);
        BulletHigh.appendChild(BulletHighText);
        BulletsContainer.appendChild(BulletLow);
        BulletsContainer.appendChild(BulletHigh);
        rootObject.appendChild(BulletsContainer);
    };
    
    this.createSlider = function (){
        const InputContainer = document.createElement('div');
        const FillContainer = document.createElement('div');
        const RangeSlider = document.createElement('input');
        const GhostSlider = document.createElement('input');
        RangeSlider.className = "rs-range";
        GhostSlider.className = "rs-range";
        GhostSlider.classList.add("ghost-input");
        InputContainer.className = "input-container";
        RangeSlider.setAttribute("type", "range");
        RangeSlider.setAttribute("value", 20);
        RangeSlider.setAttribute("min", 0);
        RangeSlider.setAttribute("max", 100);
        GhostSlider.setAttribute("type", "range");
        GhostSlider.setAttribute("value", 80);
        GhostSlider.setAttribute("min", 0);
        GhostSlider.setAttribute("max", 100);

        FillContainer.className = "fill-container";
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
        Numbers.className = "text-block";
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
        Min.className = "min";

        const MinSpan = document.createElement('span');
        MinSpan.innerHTML = "Min";

        const Max = document.createElement('input');
        Max.setAttribute("type", "text");
        Max.setAttribute("placeholder","100");
        this.InputMax = Max;
        Max.className = "max";

        const MaxSpan = document.createElement('span');
        MaxSpan.innerHTML = "Max";

        const Br1 = document.createElement('br');

        const CurrentValue1 = document.createElement('input');
        CurrentValue1.setAttribute("type", "text");
        CurrentValue1.setAttribute("placeholder","20");
        this.InputCurrentValue1 = CurrentValue1;
        CurrentValue1.className = "current-value-1";

        const CurrentValue1Span = document.createElement('span');
        CurrentValue1Span.innerHTML = "Value";
        this.CurrentValue1Span = CurrentValue1Span;

        const Br2 = document.createElement('br');

        const CurrentValue2 = document.createElement('input');
        CurrentValue2.setAttribute("type", "text");
        CurrentValue2.setAttribute("placeholder","80");
        this.InputCurrentValue2 = CurrentValue2;
        CurrentValue2.className = "current-value-2";

        const CurrentValue2Span = document.createElement('span');
        CurrentValue2Span.innerHTML = "CurrentValue2";
        this.CurrentValue2Span = CurrentValue2Span;

        const Br3 = document.createElement('br');
        this.Br3 = Br3;

        const StepSize = document.createElement('input');
        StepSize.setAttribute("type", "text");
        StepSize.setAttribute("placeholder","1");
        this.InputStepSize = StepSize;
        StepSize.className = "step-size";

        const StepSizeSpan = document.createElement('span');
        StepSizeSpan.innerHTML = "StepSize";

        const Br4 = document.createElement('br');

        const Interval = document.createElement('input');
        Interval.setAttribute("type", "checkbox");
        Interval.setAttribute("value", "Interval");
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

    this.createErrorMessage = function (){

        const ErrorMessage = document.createElement('div');
        ErrorMessage.className = "error-message";
        this.ErrorMessage = ErrorMessage;
        rootObject.appendChild(ErrorMessage);
    }

}

var Controller = function (id){

    const SliderElem = document.getElementById(id);

    const SliderView = new View(SliderElem);

    const SliderModel = new Model ();

    this.ReadViewAndUpdateModel = function (){

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

        ReadModelAndUptateView();

        if (SliderView.InputInterval.checked === true){

            SliderView.InputCurrentValue2.classList.add("display-none");
            SliderView.CurrentValue2Span.classList.add("display-none");
            SliderView.Br3.classList.add("display-none");
            SliderView.BulletHigh.classList.add("display-none");
            SliderView.GhostSlider.classList.add("display-none");
        }
        
      
        function checkInputCurrentValue1(e){
            var inputValue = e.target.value;
            SliderView.BulletLowText.innerHTML=inputValue;
            SliderView.RangeSlider.value = inputValue;
            SliderModel.CurrentValueLow = inputValue;

            ReadModelAndUptateView(); 
        }

        function checkInputCurrentValue2(e){
            var inputValue = e.target.value;
            SliderView.BulletHighText.innerHTML=inputValue;
            SliderView.RangeSlider.valueHigh = inputValue;
            SliderModel.CurrentValueHigh = inputValue;

            ReadModelAndUptateView();
        }
       
        function checkInputMin(e){
            var inputValue = e.target.value;
            SliderModel.MinValue = inputValue;

            console.log(SliderModel.MinValue);

            ReadModelAndUptateView();
        }

        function checkInputMax(e){
            var inputValue = e.target.value;

            SliderModel.MaxValue = inputValue;

            ReadModelAndUptateView();
        }

        function checkInputStepSize(e){
            var inputValue = e.target.value;

            SliderModel.StepSize = inputValue;

            ReadModelAndUptateView();
        }
        
        function checkInputShowBubble(){
            if (SliderView.InputShowBubble.checked === false)
            {
                SliderView.BulletsContainer.classList.add("display-none");     
            }
            else
            {
                SliderView.BulletsContainer.classList.remove("display-none");
            }

            ReadModelAndUptateView();
        }

        function checkInputInterval(){
            if (SliderView.InputInterval.checked === true)
            {
                SliderView.InputCurrentValue1.setAttribute("placeholder", "Value");
                SliderView.CurrentValue1Span.innerHTML = "Value";
                SliderModel.RangeInterval = true;

                ReadModelAndUptateView();
            }
            else
            {
                SliderView.InputCurrentValue1.setAttribute("placeholder", "20");
                SliderView.CurrentValue1Span.innerHTML = "ValueLow";

                SliderView.InputCurrentValue2.setAttribute("placeholder", "80");
                SliderView.CurrentValue2Span.innerHTML = "ValueHigh";

                SliderModel.RangeInterval = false;

                ReadModelAndUptateView();
            }
        }

        function checkGhostSlider(){

            value=this.value;
            SliderView.InputCurrentValue2.value = value;
            SliderView.BulletHighText.innerHTML = value;
            SliderModel.CurrentValueHigh = value;
            
            ReadModelAndUptateView();
        }

        function checkInputHorizontal(){

            if (SliderView.InputHorizontal.checked === true)
            {   
                SliderView.InputContainer.classList.remove("vertical");
                SliderView.Text_block.classList.remove("vertical-text-block");
                SliderView.BulletsContainer.classList.remove("bullets-containner-vertical");

                SliderView.BulletLowText.classList.remove("span-rotate");
                SliderView.BulletHighText.classList.remove("span-rotate");

                SliderView.Num1.classList.remove("span-rotate");
                SliderView.Num2.classList.remove("span-rotate");
                SliderView.Num3.classList.remove("span-rotate");
                SliderView.Num4.classList.remove("span-rotate");
                SliderView.Num5.classList.remove("span-rotate");

                ReadModelAndUptateView();
            }
            else
            {
                SliderView.InputContainer.classList.add('vertical');
                SliderView.Text_block.classList.add("vertical-text-block");
                SliderView.BulletsContainer.classList.add("bullets-containner-vertical");

                SliderView.BulletLowText.classList.add("span-rotate");
                SliderView.BulletHighText.classList.add("span-rotate");

                SliderView.Num1.classList.add("span-rotate");
                SliderView.Num2.classList.add("span-rotate");
                SliderView.Num3.classList.add("span-rotate");
                SliderView.Num4.classList.add("span-rotate");
                SliderView.Num5.classList.add("span-rotate");

                ReadModelAndUptateView();
            }

              
        }

        function checkRangeSlider(){

            var value = this.value;

            SliderView.InputCurrentValue1.value = value;
            SliderView.BulletLowText.innerHTML = value;
            SliderModel.CurrentValueLow = value;
          
            ReadModelAndUptateView();
    
        }

        function ReadModelAndUptateView(){

            SliderModel.CalculateValues();
            SliderView.Num1.innerHTML = SliderModel.MinValue;
            SliderView.Num2.innerHTML = SliderModel.Value1;
            SliderView.Num3.innerHTML = SliderModel.Value2;
            SliderView.Num4.innerHTML = SliderModel.Value3;
            SliderView.Num5.innerHTML = SliderModel.MaxValue;

            SliderModel.CalculateBulletsOffsets();
            SliderView.BulletLow.style.left = SliderModel.LowBulletOffset;
            SliderView.BulletHigh.style.left = SliderModel.HighBulletOffset;

            SliderModel.CheckForErrors();
            SliderView.ErrorMessage.innerHTML = SliderModel.ErrorMessage;

            if (SliderView.InputInterval.checked === true)
            {
                SliderView.InputCurrentValue2.classList.add("display-none");
                SliderView.CurrentValue2Span.classList.add("display-none");
                SliderView.Br3.classList.add("display-none");
                SliderView.BulletHigh.classList.add("display-none");
                SliderView.GhostSlider.classList.add("display-none");

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

                SliderView.InputCurrentValue2.classList.remove("display-none");
                SliderView.CurrentValue2Span.classList.remove("display-none");
                SliderView.Br3.classList.remove("display-none");
                SliderView.BulletHigh.classList.remove("display-none");

                SliderView.GhostSlider.classList.remove("display-none");
                    
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

    this.InitView = function(){
        
        SliderView.createBullets();
        SliderView.createSlider();
        SliderView.createNumbers();
        SliderView.createUI();
        SliderView.createErrorMessage();
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

    this.LowBulletOffset = 0;
    this.HighBulletOffset = 0;

    this.Value1;
    this.Value2;
    this.Value3;

    this.ErrorMessage;

    this.RangeInterval = true;

    this.CalculateValues = function () {
    
        this.Value1 = parseFloat(this.MinValue) + parseFloat(((this.MaxValue-this.MinValue)/4).toFixed(2));
        this.Value2 = parseFloat(this.MinValue) + parseFloat(((this.MaxValue-this.MinValue)/4*2).toFixed(2));
        this.Value3 = parseFloat(this.MinValue) + parseFloat(((this.MaxValue-this.MinValue)/4*3).toFixed(2));
    }    

    this.CalculateFillPosition = function (){

        this.FillPosition = Math.abs(parseFloat(this.CurrentValueLow)-parseFloat(this.MinValue))/Math.abs(parseFloat(this.MaxValue)-parseFloat(this.MinValue))*250 +5 + "px";
        this.FillOffset = 0;
    }

    this.CalculateFillPositionMultiple = function (){

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

    this.CalculateBulletsOffsets = function (){

        var OffsetLow = Math.abs(parseFloat(this.CurrentValueLow)-parseFloat(this.MinValue))/Math.abs(parseFloat(this.MaxValue)-parseFloat(this.MinValue))*235;
        var OffsetHigh = Math.abs(parseFloat(this.CurrentValueHigh)-parseFloat(this.MinValue))/Math.abs(parseFloat(this.MaxValue)-parseFloat(this.MinValue))*235;

        this.LowBulletOffset = OffsetLow + "px";
        this.HighBulletOffset = OffsetHigh -32 + "px";
    }

    this.CheckForErrors = function(){

        var defaultMessage = "Введенные значения корректны";
        this.ErrorMessage = defaultMessage;
        
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
          }
        
        if (isNumeric(this.MinValue)==false || isNumeric(this.MaxValue)==false || isNumeric(this.StepSize)==false || isNumeric(this.CurrentValueLow)==false || isNumeric(this.CurrentValueHigh)==false)
        {
            this.ErrorMessage = "Введенное значение некорректно. Введите число";
            return;
        }
    
        if ( this.MinValue >= this.MaxValue)
        {
            this.ErrorMessage = "Min Значение больше Max Значения. Ввредите коррекнто.";
            return;
        }

        if (this.RangeInterval == true)
        {
            if ((parseFloat(this.CurrentValueLow) < parseFloat(this.MinValue)) || (parseFloat(this.CurrentValueLow) > parseFloat(this.MaxValue)))
            {
                this.ErrorMessage = "Введены некорректные значения текущего положения. Положение должно находиться между Min и Max";

                return;
            }
        }
        else {

            if ( parseFloat(this.CurrentValueHigh) < parseFloat(this.MinValue) || (parseFloat(this.CurrentValueHigh) > parseFloat(this.MaxValue) || parseFloat(this.CurrentValueLow) < parseFloat(this.MinValue) || parseFloat(this.CurrentValueLow) > parseFloat(this.MaxValue)))
            {
                this.ErrorMessage = "Введены некорректные значения текущего положения. Положение должно находиться между Min и Max";
                return;
            }
        }
        if ( this.StepSize < 1 || this.StepSize >= (this.MaxValue - this.MinValue))
        {
            this.ErrorMessage = "Значение шага введено некорректо.";
            return;
        }
       
    }
}

var Controller1 = new Controller ('slider1');
var Controller2 = new Controller ('slider2');
var Controller3 = new Controller ('slider3');
Controller1.InitView();
Controller1.ReadViewAndUpdateModel();
Controller2.InitView();
Controller2.ReadViewAndUpdateModel();
Controller3.InitView();
Controller3.ReadViewAndUpdateModel();




