/**
 * @author Igor Lilic <igor.lilic@consensys.net>
 */
contract GuestBook {
  mapping (address => string) entryLog;

  function setEntry(string guestBookEntry) {
    entryLog[msg.sender] = guestBookEntry;
  }

  function getMyEntry() constant returns (string) {
    return entryLog[msg.sender];
  }
}
