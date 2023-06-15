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

    const accountChanged = (accountName) => {s
        setDefaultAccount(accountName);
        getBalance(accountName)
    }

    const getBalance = (accountAddress) => {
        window.ethereum.request({method: 'eth_getBalance', params: [String(accountAddress), "latest"]})
        .then(balance => {
            setUserBalance(formatEther(balance));
        })

    }

    async function sendTransaction(e) {
        let params = [{
            from: {defaultAccount}, 
            to: e.target.to_address.value,
            gas: Number(21000).toString(16),
            gasPrice: Number(2500000).toString(16),
            value: Number(1000000000000000).toString(16)
        }]


        let result = await window.ethereum.request({method: "eth_sendTransaction", params}).catch((err) => {
            console.log(err)
        })
    }

    async function productPicker() {
        let sales_value;

        if(e.target.product_form.value == "product1") {
            sales_value = 1000000000000000
        }
        if(e.target.product_form.value == "product2") {
            sales_value = 1000000000000000
        }
        if(e.target.product_form.value == "product3") {
            sales_value = 1000000000000000
        };

        let params = [{
            from: {defaultAccount}, 
            to: e.target.to_address.value,
            gas: Number(21000).toString(16),
            gasPrice: Number(2500000).toString(16),
            value: Number(sales_value).toString(16)
        }]

        let result = await window.ethereum.request({method: "eth_sendTransaction", params}).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h3> MetaMask Wallet Connection </h3>

            <button onClick={connectWallet}>Connect Wallet</button>
            <h5>Address: {defaultAccount} </h5>
            <h5>Balance: $ {userBalance} </h5>

            <form onSubmit={sendTransaction}>
            <h5>Enter Transaction Address</h5>
            <input type="text" name="to_address" placeholder="Address"></input>
            <input type="submit" value="Submit" />
            </form>
            <hr></hr>

            <form onSubmit={productPicker}>
                <label>
                    Pick Your Product:
                    <select value="product_form" id="product_form">
                        <option value="product1"> Product 1</option>
                        <option value="product1"> Product 2</option>
                        <option value="product1"> Product 3</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>

            {errorMessage}
        </div>
    )
}