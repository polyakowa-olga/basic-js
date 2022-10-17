const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {

  getLength() {
    return this.arrChain.length;
  },
  addLink(value) {

    this.arrChain = this.arrChain ? this.arrChain : [];
    this.arrChain.push(`( ${value} )`);

    return this;

  },
  removeLink(position) {
    for (let i = 0; i < this.arrChain.length; i++) {
      if (i == (position-1)) {
        this.arrChain.splice(i,1)
      }
      
    }
    return this;
  },
  reverseChain() {
    this.arrChain.reverse()
    return this;
  },
  finishChain() {
    return this.arrChain.join('~~')
    
  }
};

module.exports = {
  chainMaker
};
