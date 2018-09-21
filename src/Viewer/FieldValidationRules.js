export const required = value => value ? undefined : 'Required'
export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(15)  
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const minValue = min => value =>value && value < min ? `Must be at least ${min}` : undefined
export const minValue18 = minValue(18)
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined
export const tooOld = value => value && value > 65 ? 'You might be too old for this' : undefined

//rules is an JSON object with validation rules with rule name as key and optional defined property for this rule as value. 
//e.g.{required:true,maxLength: 10, number:true,minValue: 18}
export const renderValidateRules = rules =>{
    let result = [];
    //const validations = {required:true,maxLength: 10, number:true,minValue: 18};
    if(rules.get('required') != undefined){
        result.push(required);
    }
    if(rules.get('maxLength') != undefined){
        result.push(maxLength(rules.get('maxLength')));
    }
    if(rules.get('number') !== undefined){
        result.push(number);
    }
    if(rules.get('minValue') !== undefined){
        result.push(minValue(rules.get('minValue')));
    }
    if(rules.get('email') !== undefined){
        result.push(email);
    }
    if(result.length == 0){
        result.push(required,maxLength(14));
    }
    return result;
}