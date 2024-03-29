import type { Liff } from "@line/liff";
import React, {useState} from 'react'
import { Button } from "@mui/material"

interface Prop {
  liff: Liff;
  callback: (value: string | null) => void;
}

const QrCodeReaderButton = (props: Prop) => {
  const { liff, callback } = props;
  const [active, setActive] = useState(true);
  const onClick = () => {
    try {
      liff.scanCodeV2().then((value) => {
        callback(value.value)
      })
    } catch (error) {
      setActive(false)
    }
  }
  return (
    <Button variant="contained" disabled={!active} onClick={onClick}>
      QRコード読み取り
    </Button>
  )
}

export default QrCodeReaderButton
