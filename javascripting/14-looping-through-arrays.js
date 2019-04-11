let pets = ['cat', 'dog', 'rat'];
//通过for循环结合下标引用，批量修改数组中的元素
for (let i = 0; i < pets.length; i++) {
    pets[i] = pets[i] + 's';
}
console.log(pets);