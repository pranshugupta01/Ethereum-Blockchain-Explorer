import React, { useState } from 'react';
import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8551'));

function App() {
  const [blockNumber, setBlockNumber] = useState(0);
  const [blockData, setBlockData] = useState(null);
  const [contractAddress, setContractAddress] = useState("");
  const [contractData, setContractData] = useState(null);




  const handleBlock = async (e) => {
    e.preventDefault();
    const fetch = await web3.eth.getBlock(blockNumber);
    console.log(fetch);
    setBlockData(fetch);
  };

 
  web3.eth.net.isListening()
  .then(() => 
  console.log('yes'))
  .catch(() =>
   console.error('no'));



  const handleContract = async (e) => {
    e.preventDefault();
    const c = new web3.eth.Contract(null, contractAddress);
    const fetch = await c.methods.getPastEvents('allEvents', { fromBlock: 0, toBlock: 'latest' }).call();
    console.log(fetch);
    setContractData(fetch);
  };

  return (
    <>
     
      <form onSubmit={handleBlock}>
        <h3>Block:</h3>
        <input placeholder="Enter Block Number" type="text" id="block-number" onChange={e => setBlockNumber(e.target.value)} />
        <button type="submit">Fetch BLock</button>
      </form>
      {blockData && (
        <div>
          <h2>Block Data</h2>
          <p>{JSON.stringify(blockData, null)}</p>
        </div>
      )}
      <form onSubmit={handleContract}>
        <h3>Contract:</h3>
        <input placeholder='Enter Contract Address' type="text" id="contract-address" onChange={e => setContractAddress(e.target.value)} />
        <button type="submit">Fetch Contract</button>
      </form>
      {contractData && (
        <div>
          <h2>Contract Data</h2>
          <p>{JSON.stringify(contractData, null)}</p>
        </div>
      )}
      
    </>
  );
}

export default App;
