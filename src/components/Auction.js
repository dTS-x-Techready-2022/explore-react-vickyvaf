import { Button, Typography } from "@mui/material";
import iauction from "iauction";
import { useEffect, useState } from "react";

const Auction = () => {
  const [teks, setTeks] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState("");

  useEffect(() => {
    iauction({
      countdownInMin: 1,
      startDate: "2022/10/10 17:30:00",
      endDate: "2022/12/11 18:23:00",
      callback: (time) => {
        // console.log(time.time);
        let times = time.time;
        setTimer(time.time);
        if (times === "00:00") {
          setTeks(false);
          setIsOpen(true);
        }
      },
    });
  }, []);
  return (
    <>
      {teks && (
        <Typography>Dalam waktu {timer} tombol beli akan muncul 🤑</Typography>
      )}
      {isOpen && <Button>BUY NOW</Button>}
    </>
  );
};

export default Auction;
