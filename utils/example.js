const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');
const verifyProof = require('./verifyProof');

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root
const root = merkleTree.getRoot();
console.log("Root :", root);

// find the proof that norman block is in the list 
const name = 'Norman Block';
const index = niceList.findIndex(n => n === name);
console.log("Index of the name in the list : ", index);

const proof = merkleTree.getProof(index);

// verify proof against the Merkle Root, 
// given the proof in the merkle tree of a given index, 
// the name we're supposed to search, and the merkle tree's root we're searching in
console.log(verifyProof(proof, name, root)); // true, Norman Block is in the list!

// TRY IT OUT: what happens if you try a name not in the list, or a fake proof?