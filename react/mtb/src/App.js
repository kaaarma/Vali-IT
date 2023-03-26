import React, {useState} from "react";
import'./App.css';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpeg";
import img4 from "./images/4.jpeg";
import img5 from "./images/5.jpeg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpeg";
import img8 from "./images/8.jpeg";
import Grid from "@mui/material/Grid";



function App() {

  const [open, setOpen] = useState(false);
  const [dialogImg, setDialogImg] = useState({ imgsrc: "", label: "" });

   const itemData = [
        {
            imgsrc: img1,
            label: "This is me racing in Elva at year 2021.",
        },
        {
            imgsrc: img2,
            label: "This is me racing in Elva at year 2021.",
        },
        {
            imgsrc: img3,
            label: "This is me racing in Elva at year 2021.",
        },
        {
            imgsrc: img4,
            label: "This is me racing in Elva at year 2021.",
        },
        {
            imgsrc: img5,
            label: "This is me racing in Elva at year 2021.",
        },
        {
            imgsrc: img6,
            label: "This is me racing in Elva at year 2021.",
        },
       {
           imgsrc: img7,
           label: "This is me racing in Elva at year 2021.",
       },
       {
           imgsrc: img8,
           label: "This is me racing in Elva at year 2021.",
       }

    ];


  function openDialog(img) {
      setDialogImg(img);
      setOpen(true);
  }

    function handleClose() {
    setOpen(false);
  }

    return (
      <main>
          <header>
              <h1 style={{textAlign: "center", padding: "50px"}}>Mtb rules</h1>
          </header>
          <div className="App">
              <Box sx={{ flexGrow: 1}}>
                  <Grid container spacing={2}  alignItems="center" justify="center">
                      {itemData.map((item, index) => {

                      return (
                          <Grid item xs={12} md={3} key={index}>
                            <Paper
                                sx={{ height: "200px", width: "270px" }}
                                elevation={3}
                                onClick={() => openDialog(item)}>
                                <img src={item.imgsrc} style={{ height: "200px", width:"270px" }} ></img>
                            </Paper>
                          </Grid>
                      )
                      }
                      )}
                  </Grid>
              </Box>
              <Dialog onClose={handleClose} open={open}>
                  <DialogContent>
                      <img src={dialogImg.imgsrc} style={{ maxWidth: "100%" }} alt={dialogImg.label} />
                      <p> {dialogImg.label} </p>
                  </DialogContent>
              </Dialog>
          </div>
      </main>
    );

}

export default App;

