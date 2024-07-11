'use client'

import { useState } from 'react'

export default function Home() {
  const [nfValue, setNfValue] = useState('')
  const [userValue, setUserValue] = useState('')

  const [result, setResult] = useState('')

  function calcResult() {
    const res1 = (userValue * 100) / nfValue
    const formattedResult = (res1 / 100).toFixed(8).replace('.', ',')

    setResult(formattedResult)
  }

  console.log(nfValue, userValue)

  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col gap-6">
      <div className="flex flex-col">
        <label className="text-gray-600 text-sm font-semibold" htmlFor="nf">
          QTD da Nf:
        </label>
        <input
          id="nf"
          type="number"
          placeholder="Dados da NFe"
          className="w-56 h-6 p-4 bg-white border border-black rounded-md"
          onChange={(e) => setNfValue(e.target.value)}
          value={nfValue}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-600 text-sm font-semibold" htmlFor="user">
          QTD desejada:
        </label>
        <input
          id="user"
          type="number"
          placeholder="Quantidade desejada"
          className="w-56 h-6 p-4 bg-white border border-black rounded-md"
          onChange={(e) => setUserValue(e.target.value)}
          value={userValue}
        />
      </div>

      <button
        className="w-56 py-2 font-bold bg-green-600 rounded-md"
        onClick={() => calcResult()}
      >
        Calcular
      </button>

      <p>Resultado: {result}</p>
    </div>
  )
}
