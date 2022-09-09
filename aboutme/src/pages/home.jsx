import React from 'react';
import Header from '../tools/bar';


export default function Home() {
  let tree = require('../files/tree.jpg')
  
  return (
    <>
    <Header/>
    <img src={tree} alt="image not found" width={400} height={500}/>
    </>
  )
}