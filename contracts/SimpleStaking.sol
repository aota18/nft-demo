
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

    // @dev Deploys contract and links the ERC20 token which we are staking, also sets owner as msg.sender and sets timestampSet bool to false.
    // @param _erc20_contract_address

    constructor(IERC20 _erc20_contract_address){
        // Set contract owner
        owner = msg.sender;

        // Timestamp values not set yet
        timestampSet = false;

        // Set the erc20 contract address which this timelock is deliberately paired to
        require(address(_erc20_contract_address) != address(0), "_erc20_contract_address address can not be zero");
        erc20Contract = _erc20_contract_address;

        // Initialize the reentrancy variable to not locked
        locked = false;
    }

    // Modifier
    /**
     * @dev Prevents reentrancy
     */
     modifier noReentrant(){
        require(!locked, "No re-entrancy");
        locked = true;
        _;
        locked = false;
     }

     // Modifier
     /**
      * @dev Throws if called by any account other than the owner.
      */
      modifier onlyOwner(){
        require(timestampSet == false, "The time stamp has already been set.");
        _;
      }

      // Modifier
      /**
       * @dev Throws if timestamp already set.
       */
      modifier timestampNotSet(){
        require(timestampSet == false, "The time stamp has already been set.");
        _;
      }


    // Modifier 
    modifier timestampIsSet(){
        require(timestampSet == true, "Please set the time stamp first, then try again.");
        _;
    }


    /// @dev Sets the initial timestamp and calculates minimun staking period in seconds i.e.3600 = 1hour
    /// @param _timePeriodInSeconds amount of seconds to add to the initial timestamp i.e. we are estimally creating the minimum staking period here
    function setTimestamp(uint256 _timePeriodInSeconds) public onlyOwner timestampNotSet {
        timestampSet = true;
        initialTimestamp = block.timestamp;
        timePeriod = initialTimestamp.add(_timePeriodInSeconds);
    }

    /// @dev Allows the contract owner to allocate official ERC20 tokens to each future recipient (only one at a time).
    /// @param token, the official ERC20 token which this contract exclusively accepts.
    /// @param amount to allocate to recipient.
    function stakeTokens(IERC20 token, uint256 amount) public timestampIsSet noReentrant {
        
    }
}