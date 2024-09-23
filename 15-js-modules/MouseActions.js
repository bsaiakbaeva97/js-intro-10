class MouseActions {
   static click (){
        console.log('CLICK');
    }

    rightClick() {
        console.log('RIGHT CLICK');
    }

    scrollUp () {
        console.log('SCROLL UP');
    }

    scrollDown() {
        console.log('SCROLL DOWN');
    }

    moveTo() {
        console.log('MOVE');
    }

    clickAndHold() {
       console.log('CLICK AND HOLD');
    }

    release() {
        console.log('RELEASE');
    }

    dragAndDrop() {
        this.moveTo();
        this.clickAndHold();
        this.release();
    }
}

module.exports.MouseActions = MouseActions;