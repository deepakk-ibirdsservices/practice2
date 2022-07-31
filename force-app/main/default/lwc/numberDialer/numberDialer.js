import { LightningElement } from 'lwc';

export default class NumberDialer extends LightningElement {
    inputVal = '';
    showDialer = false;
    handleOnClick(event){
        this.template.querySelector('.numberInput').value += event.target.innerText;
    }
    handleBackClick(){
        let inputVal = this.template.querySelector('.numberInput').value;
        this.template.querySelector('.numberInput').value = inputVal.substring(0, inputVal.length - 1);
    }
    handleDialerClick(){
        this.showDialer = !this.showDialer;
    }
    handleInputChange(event){
        let inputVal = event.target.value;
        this.template.querySelector('.numberInput').value = inputVal.replace(/[^0-9\*\#]+/g, "");
    }
    handleAddUserClick(){
        alert('Nothing for now.');
    }
}