import React, {useState} from "react";
import { formatEther } from "ethers";

export const MetaMask = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChanged([result[0]])
            })
        } else {
            setErrorMessage('Install MetaMask please!!')
        }
    }

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName);
        getBalance(accountName)
    }

    const getBalance = (accountAddress) => {
        window.ethereum.request({method: 'eth_getBalance', params: [String(accountAddress), "latest"]})
        .then(balance => {
            setUserBalance(formatEther(balance));
        })

    }

    return (
        <div>
            <h3> MetaMask Wallet Connection </h3>

            <button onClick={connectWallet}>Connect Wallet</button>
            <h5>Address: {defaultAccount} </h5>
            <h5>Balance: $ {userBalance} </h5>

            {errorMessage}
        </div>
    )
}