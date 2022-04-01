

import { StyleForm } from "../../styles/form";
import {Fab, maxWidth, TextField, TextareaAutosize, Grid} from '@material-ui/core'
import {ArrowBack, GetApp} from '@material-ui/icons'
import QRCode from "react-qr-code";
import {useEffect, useState} from 'react'
import {svgExport} from 'svg-in-png'

function Agregar() {

  const [qr, setQr] = useState('lintangwisesa');
    const handleChange = (event) => {
        setQr(event.target.value);
    };
    
    const  downloadQR =() => {
      
          svgExport({
            id:"thisChart",
            titleToExport:"example",
            options: {
                fontFamily: {
                    url: 'https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap',
                    fontFamily: "Sigmar One"
                }
            }
        })
        console.log(svgExport)
    
    }
      
        
       
          
      
    

    return (
      <div>
            <span>QR Generator</span>
            
            <div style={{marginTop:30}} className="margenes-laterales">
                <TextField onChange={handleChange} style={{width:320}}
                value={qr} label="QR content" size="large" variant="outlined" color="primary" 
                />
            </div>
          
                 
                 <div className="margenes-laterales" id={"thisChart"}>
                      {
                          qr ?
                          <QRCode
                              id="myqr"
                              value={qr} 
                              size={320}
                              includeMargin={true}
                          /> :
                          <p className="text-center">No QR code preview</p>
                      }
                  </div>
                 
           
            
            <div className="text-center-two">
                {
                    qr ? 
                    <Grid container>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={2}>
                        <Fab onClick={downloadQR} className="margenes-colector" >
                        <GetApp/>
                        </Fab>
                        </Grid>
                    </Grid> :
                    ''
                }
            </div>
      </div>

    );
  }

    


export default Agregar;