const decoder = new TextDecoder('utf-8')
const file = await Deno.readFile('./file.txt')
console.log(decoder.decode(file))
