import React from 'react'
import { OnetimeNonce } from "@/types/OnetimeNonce";
import {Dialog, Card, CardMedia, CardHeader, CardActions, Button, CardContent, Typography} from "@mui/material";
import QRCode from "react-qr-code";
import dayjs from 'dayjs';


interface Prop {
  totalPoint: number;
  onetimeNonce: OnetimeNonce;
  open: boolean;
  onCancel: () => void;
}

const OnetimeNonceDisplay = (props: Prop) => {
  const { totalPoint, onetimeNonce, open, onCancel } = props;
  return (
    <Dialog open={open}>
      <Card>
        <CardHeader title={`${totalPoint} もりポ`} subheader={`有効期限: ${dayjs(new Date(+onetimeNonce.expired_at * 1000)).format("YYYY年MM月DD日 HH:mm:ss")}`} />
        <CardContent>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={onetimeNonce.nonce}
            viewBox={`0 0 256 256`}
          />
        </CardContent>
        <CardActions>
          <Button variant="outlined" onClick={onCancel}>キャンセル</Button>
        </CardActions>
      </Card>
    </Dialog>
  )
}

export default OnetimeNonceDisplay