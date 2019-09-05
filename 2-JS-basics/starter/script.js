var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];
        for(var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];

            if(bill < 50){
                percentage = .2;
            }else if (bill <= 200){
                percentage = .15;
            }else {
                percentage = .1;
            }
            this.tips[i] = bill*percentage; 
            this.finalValues[i] = this.tips[i] + bill;
        }
    }
}

john.calcTips();
console.log(john);