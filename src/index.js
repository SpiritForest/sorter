class Sorter {

  constructor(age) {
      this.storage = [];
      this.age = age;
  }

  add(element) {
   this.storage[this.storage.length] = element;
  }

  at(index) {
      return this.storage[index];
  }

  get length() {
    return this.storage.length;
  }

  toArray() {
    return this.storage;
  }

  sort(indices) {
      var mass = [];
      indices = indices.sort();
    for (var i = 0; i < indices.length; i++){
       mass[i] = this.storage[indices[i]];
    }
    mass.sort(function (a,b) {return a-b});
    for (var y = 0; y < indices.length; y++){
        this.storage[indices[y]] = mass[y];
    }
    return this.storage;
  }

  setComparator(compareFunction) {
  
  }
}

module.exports = Sorter;