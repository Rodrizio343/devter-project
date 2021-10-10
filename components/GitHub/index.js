import * as React from "react"

function GitHub(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <circle cx={12} cy={12} r={10} opacity={0.35} />
      <path d="M17 7.625c0-.475-.032-1.058-.25-1.625 0 0-1.426.01-2.771 1.284a7.063 7.063 0 00-3.958 0C8.676 6.01 7.25 6 7.25 6 7.033 6.567 7 7.15 7 7.625c0 .719.128 1.16.205 1.378C6.452 9.839 6 10.874 6 12c0 2.186 1.655 3.531 4 4-.527.463-.85 1.11-.953 1.836-.223.108-.547.164-.922.164-.301 0-.886-.142-1.431-.991C6.474 16.665 6 16 5.375 16c-.122 0-.379-.008-.375.181.002.09.14.091.435.354.247.221.477.583.565.965.145.627.726 1.875 2.125 1.875.5 0 .875-.125.875-.125v2.291a10.011 10.011 0 006 0V18.25c0-.899-.374-1.7-1-2.25 2.345-.469 4-1.814 4-4 0-1.106-.436-2.125-1.166-2.953.063-.195.166-.647.166-1.422z" />
    </svg>
  )
}

export default GitHub