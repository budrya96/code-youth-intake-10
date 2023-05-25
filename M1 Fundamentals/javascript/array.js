// const num=[3,6,9,12,15];

// let newNum=[];

// for(let i=0;i<num.length;i++){
//     newNum[i]=num[i] *2;
//     console.log(newNum[i])
    
// }

// console.log(num+newNum)

// .push();
    /*
        1)
        Decalare an empty array
        Using a for loop add the number 0 - 10 to the array
    */

// let data=[];

// for(i=0;i<11;i++){
//     data[i] =i;
// }
// console.log(data)

/*
        2)
        Add everyone from toBeAdded to the banList array then empty the toBeAdded Array
        !Hint: try looking up: "js how to empty an array"
        */
        
// let toBeAdded = ["Jomsly", "Henrick", "Darsha"]
// let banList = ["Budly","Gurtrood","dimsly"]

// banList.push(toBeAdded);

// console.log(banList);
// toBeAdded.length=0;
// console.log(toBeAdded);



/*1) Using only pop(), push(), unshift(), and shift() make weekDays start at monday and end at sunday in the correct order
   */

let weekDays = ["Friday", "Tuesday","Wednesday","Thursday","Sunday","Monday","Saturday","PlaceHolder"]


// weekDays.pop();
// weekDays.shift();
// weekDays.unshift("Monday");
// weekDays.push("Sunday");

weekDays.pop();
weekDays.pop();
weekDays.pop();
weekDays.pop();
weekDays.pop();
weekDays.pop();
weekDays.pop();
weekDays.pop();

weekDays.unshift("Sunday");
weekDays.unshift("Saturday");
weekDays.unshift("Friday");
weekDays.unshift("Thursday");
weekDays.unshift("Wednesday");
weekDays.unshift("Tuesday");
weekDays.unshift("Monday");







console.log(weekDays);



