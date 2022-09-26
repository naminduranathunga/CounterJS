class Counter{
    constructor(element, duration){
        this.element = element;
        this.max = parseInt(element.innerText);
        this.step = this.max / duration * 10;
    }

    start = () => {
        this.value = 0;
        this.timerID = setInterval(() => {
            this.tick();
        }, 10);
    };

    tick = () =>{
        this.value += this.step;
        if (this.value >= this.max){
            clearInterval(this.timerID);
            this.element.innerText = this.max;
        }else{
            this.element.innerText = Math.round(this.value);
        }
    };
}