
// SPDX-License-Identifier: MIT
// WARNING this contract has not been independently tested or audited
// DO NOT use this contract with funds of real value until officially tested and audited by an independent expert or group
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "openzeppelin-solidity/contracts/utils/math/SafeMath.sol";

contract SmartStaking {
    //boolean to prevent reentrancy
    bool internal locked;

    // Library usage
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    // Contract Owner
    address public owner;

    // Timestamp related variables
    uint256 public initialTimestamp;
    bool public timestampSet;
    uint256 public timePeriod;

    // Token amount variables
    mapping(address => uint256 ) public alreadyWithdrawn;
    mapping(address => uint256 ) public balances;

    // ERC20 contract address
    IERC20 public erc20Contract;

    // Events
    event tokensStaked(address from, uint256 amount);
    event TokensUnstaked(address to, uint256 amount);

}