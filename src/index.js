class Sorter {
  constructor() {
    this.repository = [];
    this.fn = (a, b) => a - b;
  }

  add(element) {this.repository.push(element);}

  at(index) {return this.repository[index];}

  get length() {return this.repository.length;}

  toArray() {return this.repository;}

  sort(indices) {
    indices.sort();
    var sarr = [];
        if (indices.length > 2 || indices.length == 1){
          for (let i = indices[0]; i <= indices[indices.length-1]; i++){
            sarr.push(this.repository[i]);
          }
          sarr.sort(this.fn);
          this.repository.splice(indices[0], indices.length, ...sarr);
          return this.repository;
        }

        if (indices.length == 2) {
          sarr.push(this.repository[indices[0]]);
          sarr.push(this.repository[indices[1]]);
          sarr.sort(this.fn);
          this.repository.splice(indices[0],1,sarr[0]);
          this.repository.splice(indices[1],1,sarr[1]);
          return this.repository;
        }
  }

  setComparator(compareFunction) {
    this.fn = compareFunction;
  }
}

module.exports = Sorter;
