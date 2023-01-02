const { ethers } = require('ethers');
import { EtherscanProvider } from '@ethersproject/providers';
import { Signer } from 'ethers/lib/ethers';
import React from 'react';
import { useState, useEffect } from 'react';

const App = () => {
  async function connect() {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    }
  }

  // Create a Provider *Web3Provider(window.ethereum)

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // Create a Signer

  const signer = provider.getSigner();

  // Enter your Contract Address below

  const contractAddress = '';

  // Enter your ABI below (Copy from remix or wherever you have deployed the contract)

  const abi = [{}];

  const contract = new ethers.Contract(contractAddress, abi, signer);

  // Function to Interact with Smart Contract

  async function randomFunction() {
    await contract.functionNameFromContract(`parameters->if there`);
  }

  // *Add your Frontend Below Onwards👇👇👇*
};
