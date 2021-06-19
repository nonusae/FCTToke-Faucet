//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FCTToken is ERC20 {
  constructor(string memory name, string memory symbol) ERC20(name, symbol) {
    _mint(msg.sender, 1000 * (10 ** 18));
  }

  function faucet (address recipient, uint amount) external {
    _mint(recipient, amount);
  }
}
