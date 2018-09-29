
import {Enum} from './BlockType'

test("enumtest",()=>{
  const student:Enum = new Enum({
    Steven:{value: 1, description:"Steven Wu"},
    Paige:{value: 2, description:"Paige Xie"}
  })
  const stevenDesc = student["Steven"].getDescription();
  expect(stevenDesc).toBe("Steven Wu");
  expect(student.keys().length).toBe(2);
})

// describe('ExampleComponent', () => {
//   it('is truthy', () => {
//     expect(ExampleComponent).toBeTruthy()
//   })
// })
