function storePrice([arg1,arg2,arg3]){
  let fruit = arg1.toLowerCase();
  let day = arg2.toLowerCase();
  let quntity = Number(arg3);
  let price = 1;

  if(day === 'saturday' || day === 'sunday'){
    if(fruit === 'banana'){
      console.log(fruit + " = " + (2.7 * quntity).toFixed(2));
    }
    else if(fruit === 'apple'){
      console.log(fruit + " = " + (1.25 * quntity).toFixed(2));
    }
    else if(fruit === 'orange'){
      console.log(fruit + " = " + (0.90 * quntity).toFixed(2));
    }
    else if(fruit === 'grapefruit'){
      console.log(fruit + " = " + (1.60 * quntity).toFixed(2));
    }
    else if(fruit === 'kiwi'){
      console.log(fruit + " = " + (3 * quntity).toFixed(2));
    }
    else if(fruit === 'pineapple'){
      console.log(fruit + " = " + (5.60 * quntity).toFixed(2));
    }
    else if(fruit === 'grapes'){
      console.log(fruit + " = " + (4.20 * quntity).toFixed(2));
    }
    else{
      console.log('Error!')
    }
  }
  else if(day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday'){
    if(fruit === 'banana'){
      console.log(fruit + " = " + (2.50 * quntity).toFixed(2));
    }
    else if(fruit === 'apple'){
      console.log(fruit + " = " + (1.20 * quntity).toFixed(2));
    }
    else if(fruit === 'orange'){
      console.log(fruit + " = " + (0.85 * quntity).toFixed(2));
    }
    else if(fruit === 'grapefruit'){
      console.log(fruit + " = " + (1.45 * quntity).toFixed(2));
    }
    else if(fruit === 'kiwi'){
      console.log(fruit + " = " + (2.70 * quntity).toFixed(2));
    }
    else if(fruit === 'pineapple'){
      console.log(fruit + " = " + (5.50 * quntity).toFixed(2));
    }
    else if(fruit === 'grapes'){
      console.log(fruit + " = " + (3.85 * quntity).toFixed(2));
    }
    else{
      console.log('Error!')
    }
  }
  else{
    console.log('Error!');
  }
}

storePrice(['grapes', 'monday', 0.5]);
