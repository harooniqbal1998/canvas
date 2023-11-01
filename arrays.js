const people = [
    { name: 'Wes', year: 2000},
    { name: 'Haroon', year: 1982},
    { name: 'Jes', year: 1934},
    { name: 'Walter', year: 2020}
]

const comments = [
    { text: 'dsaf', id: 3423},
    { text: 'asdfsdf', id: 343},
    { text: 'defeggf', id: 323},
    { text: 'dsedesaf', id: 34},
    { text: 'asdfsd', id: 342}
]

const isAdult = people.some(function(person) {
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year > 18) {
        return true;
    }
});

const everyoneAdult = people.every(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year > 18;
})

const comment = comments.find(comment => comment.id === 34)

const index = comments.findIndex(comment => comment.id === 34)


console.log(index)