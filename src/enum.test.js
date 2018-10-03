
import {Enum} from './Enum'

test("enumtest",()=>{
  const student = new Enum({
    Steven:{value: 1, description:"Steven Wu"},
    Paige:{value: 2, description:"Paige Xie"}
  })
  const stevenDesc = student["Steven"].getDescription();
  expect(stevenDesc).toBe("Steven Wu");
  expect(student.keys().length).toBe(2);
})