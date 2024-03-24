// Task - Q
function hasProperty(a: { [key: string]: any }, b: string): boolean {
  for (let key in a) {
    if (key === b) {
      return true;
    }
  }
  return false;
}
console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));

/* Project Standards:
  - Logging standards
  - Naming standards
    CAMEL case : function, method, variable 
    PASCAL : class                            
    KEBAB case : folder - file
    SNAKE case : css
  - Error handling
*/

/* Request:
Traditional Api (form -> html ni uzini elementlari orqali Post request ni misol qilishimiz mumkin)
Rest Api
GraphQL Api
*/

/* Cookie:
  request: join
  self: destroy
*/

/* Validation:
  Frontend: validation
  Backend: validation
  Database: validation
*/
