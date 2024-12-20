import React from 'react'
import EmpApi from './components/EmpApi'
import Products from './components/Products'
import EmpSal from './components/EmpSal'
export default function App() {
  return(
    <div>
    <EmpSal/>
    <Products/>
    <EmpApi/>
    </div>
  )
}
