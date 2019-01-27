const inputs = process.argv.slice(2);
console.log(`[${inputs}] becomes "${inputs.reduce((accumulator, string) => accumulator + string[0], "")}"`);