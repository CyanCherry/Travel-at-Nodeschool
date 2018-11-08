var total = 0;
process.argv.forEach(element => {
    if (!isNaN(Number(element)))
        total += Number(element);
});
console.log(total);