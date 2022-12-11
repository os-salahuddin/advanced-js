// use of get
const obj = {
    log:[1,2,3],
    get latest() {
        return this.log[0];
    }
};

console.log(obj.latest);

// use of set
const language = {
    set current(name) {
        this.log.push(name);
    },
    log: []
};

language.current = 'English';
language.current = 'French'

console.log(language.log);

