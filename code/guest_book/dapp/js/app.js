web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var guestBookContract = 'contract GuestBook { mapping (address => string) entryLog; function setEntry(string guestBookEntry) { entryLog[msg.sender] = guestBookEntry; } function getMyEntry() constant returns (string) { return entryLog[msg.sender]; } }';

var guestBookCompiled = web3.eth.compile.solidity(guestBookContract);

var guestBookContract = web3.eth.contract(guestBookCompiled.GuestBook.info.abiDefinition)

// console.dir(guestBookContract);
// console.dir(guestBookCompiled);
// console.dir(guestBookContract);

// var guestBook = guestBookContract.new(
//   {
//     from:web3.eth.accounts[0],
//     data:guestBookCompiled.GuestBook.code,
//     gas: 1000000
//   }, function(e, contract){
//     if(!e) {
//
//       if(!contract.address) {
//         console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
//
//       } else {
//         console.log("Contract mined! Address: " + contract.address);
//         console.log(contract);
//       }
//     }
// });

// Address on the test net
var guestBookContractAddress = '0xeff76306729ce2f746512da26cdde9f9bbb09383';

var guestBookInstance = guestBookContract.at(guestBookContractAddress);

// guestBookInstance.setEntry.sendTransaction("Hello!!", {from: web3.eth.accounts[0]})
// console.dir(guestBookInstance.getMyEntry());
