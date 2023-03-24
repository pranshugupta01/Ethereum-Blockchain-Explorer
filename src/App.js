import React, { useState } from "react";
import Web3 from "web3";

const url = "https://mainnet.infura.io/v3/564d1029bb6d4c5aa8081904dea41eda";

const web3 = new Web3(new Web3.providers.HttpProvider(url));

function App() {
  const [blockNumber, setBlockNumber] = useState("");
  const [blockData, setBlockData] = useState(null);
  const [transactionData, setTransactionData] = useState(null);
  const [transactionHash, setTransactionHash] = useState("");

  const handleBlock = () => {
    web3.eth.getBlock(blockNumber, (e, block) => {
      if (e) {
        console.error(e);
        setBlockData(null);
      } else {
        console.log(block);
        setBlockData(block);
      }
    });
  };


  const handleTransactionHash = async () => {
    const transaction = await web3.eth.getTransaction(transactionHash);

    if (transaction) {
      const block = await web3.eth.getBlock(transaction.blockNumber, true);
      console.log(block);
      const blockData = {
        blockNumber: block.number,
        gasUsed: transaction.gas,
        from: transaction.from,
        to: transaction.to,
        value: web3.utils.fromWei(transaction.value, "ether"),
        timestamp: block.timestamp,
        gasLimit:block.gasLimit,

      };

      setTransactionData(blockData);
    }
  };

  return (
    <div className="maindiv">
      <h1 className="heading">Infura Data</h1>
      <div className="inputButton"></div>
      <h3 className="heading">Block:</h3>
      <input className='inputMain'
        type="text"
        placeholder="Enter Block Number"
        value={blockNumber}
        onChange={(e) => setBlockNumber(e.target.value)}
      />
      <button className='buttonMain' onClick={handleBlock}>Get</button>

      {blockData && (
        <div className='data'>
          <h4>Block Number: {blockData.number}</h4>
          <p>
            Timestamp: {new Date(blockData.timestamp * 1000).toLocaleString()}
          </p>
          <p>Transactions: {blockData.transactions.length}</p>
          <p>Gas Used: {blockData.gasUsed}</p>
          <p>Gas Limit: {blockData.gasLimit}</p>
          <p>Hash: {blockData.hash}</p>
          <p>Parent Hash: {blockData.parentHash}</p>
          <p>Miner: {blockData.miner}</p>
          <p>Difficulty: {blockData.difficulty}</p>
          <p>Total Difficulty: {blockData.totalDifficulty}</p>
          <p>Size: {blockData.size} bytes</p>
          <p>State Root: {blockData.stateRoot}</p>
        </div>
      )}



      <h3 className="heading" >Transaction Hash:</h3>
        <input className='inputMain' placeholder="Transaction Hash"
          type="text"
          value={transactionHash}
          onChange={(e) => {
    setTransactionHash(e.target.value)}}
        />
        <button className='buttonMain' onClick={handleTransactionHash}>Get</button>

      {transactionData && (
        <div className='data'>
          <h4>Block Number:{transactionData.blockNumber}</h4>
          <p>Gas Used: {transactionData.gasUsed}</p>
          <p>Gas Limit: {transactionData.gasLimit}</p>
          <p>From: {transactionData.from}</p>
          <p>To: {transactionData.to}</p>
          <p>Value: {transactionData.value} ETH</p>
          <p>
            Timestamp: {new Date(transactionData.timestamp * 1000).toString()}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
