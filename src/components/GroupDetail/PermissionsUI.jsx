import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Skeleton, Alert, AlertTitle } from "@material-ui/lab";
import { Button } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    width: 700,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  middle: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
}));

export default function PermissionsUI(props) {
  const classes = useStyles();
  const initialState = props.defaultData;
  const { isAdmin, checkbox_name } = props.defaultData;
  const [state, setState] = useState(checkbox_name);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  console.log(state);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {isAdmin ? (
          <Alert severity="success">
            <strong>Changes have been saved successfully!</strong>
          </Alert>
        ) : null}

        <Typography align="center" variant="h5">
          Group Permissions
        </Typography>

        <br />
        {props.defaultData.loading ? (
          <div>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <br />
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <br />
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
          </div>
        ) : (
          <div
            style={{
              "padding-left": 55,
            }}
          >
            <Grid container spacing={3} justify="center">
              <Grid item>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        //disabled={!isAdmin}
                        checked={state.checkedA}
                        onChange={isAdmin && handleChange}
                        name="checkedA"
                      />
                    }
                    label="is Admin"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    //disabled={!isAdmin}
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={isAdmin && handleChange}
                        name="checkedB"
                      />
                    }
                    label="is Staff"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    disabled={!isAdmin}
                    control={
                      <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedC"
                      />
                    }
                    label="Can Create Tasks"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    //disabled={!isAdmin}
                    control={
                      <Checkbox
                        checked={state.checkedD}
                        onChange={isAdmin && handleChange}
                        name="checkedD"
                      />
                    }
                    label="Can Create Groups"
                  />
                </FormGroup>
              </Grid>

              <Grid item></Grid>
              <div style={{ "padding-left": 25 }}></div>
              <Grid item>
                <FormGroup row>
                  <FormControlLabel
                    disabled={!isAdmin}
                    control={
                      <Checkbox
                        checked={state.checkedE}
                        onChange={handleChange}
                        name="checkedE"
                      />
                    }
                    label="Can Send Invite For Staff"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    //disabled={!isAdmin}
                    control={
                      <Checkbox
                        checked={state.checkedF}
                        onChange={isAdmin ? handleChange : !handleChange}
                        name="checkedF"
                      />
                    }
                    label="Can Reply To Queries"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    disabled={!isAdmin}
                    control={
                      <Checkbox
                        checked={state.checkedG}
                        onChange={handleChange}
                        name="checkedG"
                      />
                    }
                    label="Can Access Leaderboard Settings"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    disabled={!isAdmin}
                    control={
                      <Checkbox
                        checked={state.checkedH}
                        onChange={handleChange}
                        name="checkedH"
                      />
                    }
                    label="Can Approve/Reject Proofs"
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </div>
        )}
        <div className={classes.middle}>
          <Button
            variant="contained"
            color="secondary"
            disabled={!props.defaultData.isAdmin}
          >
            {isAdmin ? "Save" : "Edit"}
          </Button>
        </div>
      </Paper>
    </div>
  );
}
