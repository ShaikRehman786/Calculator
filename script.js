
function clearDisplay(){
    document.getElementById('display').value='';
}

function appendToDisplay(value){
    document.getElementById('display').value += value;
}

function calculateResult(){
    const display=document.getElementById('display');
    let expression=display.value;

    function clearDisplay() {
        document.getElementById('display').value = '';
    }
    
    function appendToDisplay(value) {
        document.getElementById('display').value += value;
    }
    
    function calculateResult() {
        const display = document.getElementById('display');
        const expression = display.value;
    
        try {
            if (expression) {
                const result = eval(expression);
    
                // Check for invalid result
                if (result === undefined || isNaN(result) || result === Infinity || result === -Infinity) {
                    throw new Error('Invalid calculation');
                }
    
                display.value = result;
            } else {
                throw new Error('Empty expression');
            }
        } catch (err) {
            display.value = 'Error';
        }
    }
    try{

        if(expression){
            let result=eval(expression);


            if(isNaN(result) || result===Infinity || result===-Infinity){
                throw new Error("Invalid Calculation")
            }

            display.value=result;
        }else{
            throw new Error("Empty expression")
        }
    }catch(err){
        display.value='Error'
    }
}

