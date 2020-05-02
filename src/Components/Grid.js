import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CounterUp from 'react-countup'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop:30
  },
  paper: {
    display: 'flex',
    height: 210,
    width: 300,
    // paddingTop: 10,
    flexDirection: 'column',
    borderRadius:10,
  },
  control: {
    padding: theme.spacing(2),
  },
  tile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 60,
  },
}))

export default function SpacingGrid({ data }) {
  const [spacing] = React.useState(4)
  const classes = useStyles()
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={spacing}>
          {data &&
            data.map((item) => (
              <Grid key={item.country} item>
                <Paper
                  elevation={8}
                  variant={'elevation'}
                  className={classes.paper}
                >
                  <Paper
                    elevation={10}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      height: '30%',
                      paddingLeft: 20,
                      alignItems: 'center',
                    }}
                  >
                    <img
                      width={40}
                      height={40}
                      style={{ borderRadius: 20 }}
                      src={item.countryInfo.flag}
                      alt={item.country}
                    />
                    <label
                      style={{
                        paddingLeft: 10,
                        fontWeight: 'bold',
                        paddingTop: 10,
                        color: '#000',
                      }}
                    >
                      {item.country}
                    </label>
                  </Paper>
                  <div
                    style={{
                      height: '70%',
                      width: '100%',
                      paddingTop: 15,
                    }}
                  >
                    <ul>
                      <div className={classes.tile}>
                        <li style={{ fontWeight: 'bold' }}>Total Cases</li>{' '}
                        <CounterUp end={item.cases} delay={2} />
                      </div>
                      <div className={classes.tile}>
                        <li style={{ fontWeight: 'bold' }}>Today's Case</li>{' '}
                        <CounterUp end={item.todayCases} delay={2} />
                      </div>
                      <div className={classes.tile}>
                        <li style={{ fontWeight: 'bold' }}>Recoverd</li>{' '}
                        <CounterUp end={item.recovered} delay={2} />
                      </div>
                      <div className={classes.tile}>
                        <li style={{ fontWeight: 'bold' }}>Deaths</li>{' '}
                        <CounterUp end={item.deaths} delay={2} />
                      </div>
                      <div className={classes.tile}>
                        <li style={{ fontWeight: 'bold' }}>Updated</li>{' '}
                        {new Date(item.updated).toLocaleString(
                          'en-US',
                          {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                          }
                        )}
                      </div>
                    </ul>
                  </div>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
