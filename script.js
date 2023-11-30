export function exercise01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e" && currentElement != "E")
    result.push(currentElement)
  }
  return result.join("")
}
export function exercise02(args){
 return args.toUpperCase()
}
export function exercise03(args){
   const input = args
   
   const result = []
  for (let i = 0; i < input.length; i++){
    const inputElement = input[i]
    if (inputElement === "e")
    inputElement.textContent = parseInt(inputElement.textContent) + 1 
    result.push(inputElement)
  }

return result.join("")  
}