import { useState } from 'react';
import { ethers } from 'ethers';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const tokenAddress = '0x9f62EE65a8395824Ee0821eF2Dc4C947a23F0f25';

const TokenSend = ({ tokenContract }) => {
  const [userAccount, setUserAccount] = useState();
  const [amount, setAmount] = useState();

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function sendCoins() {
    if (typeof window.ethereum != 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        tokenAddress,
        tokenContract.abi,
        signer,
      );
      const transaction = await contract.transfer(userAccount, amount);
      await transaction.wait();
      console.log(`${amount} Coins successfully sent to ${userAccount}`);
    }
  }

  return (
    <Card style={{ background: 'rgba(227, 104, 222, 0.71)' }}>
      <Card.Body>
        <Card.Subtitle> send faucet to an address</Card.Subtitle>
        <br></br>
        <div className="d-grid gap-2">
          <input
            onChange={(e) => setUserAccount(e.target.value)}
            placeholder="Payee 0x address"
          />
          <input
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />
          <Button onClick={sendCoins} variant="success">
            send{' '}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TokenSend;
