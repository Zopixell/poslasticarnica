import React from 'react';
import './ContactUs.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';


function ContactUs() {


  return (
    
      <Grid>
        <Card style={{ maxWidth: 450, padding: "82px 20px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Piši nam
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Ukoliko imate posebne zahteve vezane za ukus torte ili kolača, dekoraciju ili izgled, budite slobodni da nas kontaktirate putem ove forme!
              <p>
                Pored toga, ukoliko imate neke zamerke ili pohvale, tu smo da čujemo i potrudimo se da poboljšamo naše usluge.
              </p>
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Unesite Vaše ime" label="Ime" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Unesite Vaše prezime" label="Prezime" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Email adresa" label="Email adresa" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Vaš broj telefona" label="Broj telefona" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Poruka:" multiline rows={4} placeholder="Poruka koju želite poslati" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color='#4f6bd1' fullWidth>Pošalji</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
  
  );
}

export default ContactUs;