// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "node_modules/@openzeppelin/contracts/security/Pausable.sol";
import "node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "node_modules/@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract MyNFT is ERC1155, Ownable, Pausable, ERC1155Burnable, ERC1155Supply {
    string public name;
    string public symbol;
    uint256 internal tokenCounter;

    constructor()
        ERC1155("https://nftstorage.link/ipfs/bafybeifdvlbxxfcaqrtwluiduzejnuo6uvnjbt4pos3tl2d5bsoi7n7t4u{id}")
    {
        name=_name;
        symbol=_symbol;
        tokenCounter =0;
        mint(msg.sender, 1, 1, "");

    }

    function getTokenCount() public view returns (uint256) { 
        return tokenCounter;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
        onlyOwner
    {
        _mint(account, id, amount, data);
        tokenCounter++;
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
        tokenCounter= tokenCounter+ids.length;
    }

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        whenNotPaused
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
