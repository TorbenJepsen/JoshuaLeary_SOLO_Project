import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { Edit } from '@material-ui/icons';
import { Check, Close, Smoking } from '@material-ui/icons';
import Paper from 'material-ui/Paper';
import MyProfile from '../MyProfile/MyProfile';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import '../MyProfileView/MyProfileView.css';

class MyProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: '',
      city: '',
      skill: '',
      bio: '',
    }
  }

  handleClickEdit = () => {
    console.log('button clicked!');
    this.setState({
      isEditing: !this.state.isEditing,
    })
  }
  
  handleEditSubmit = () => {
    this.props.dispatch({
      type: 'UPDATE_PROFILE',
      payload: {name: this.state.name, city: this.state.city, skill: this.state.skill, bio: this.state.bio}
    })
    this.setState({
      isEditing: false,
      name: '',
      city: '',
      skill: '',
      bio: '',
    });
  }
  
  handleChangeFor = (type) => {
    return (event) => {
      this.setState({
        ...this.state,
        [type]: event.target.value
      })
      console.log(this.state);
    }
  } 

  showAlcohol = () => {
    // console.log('help Kam...Help');
    // let drink;
    // if (this.props.golfer.alcohol === false){
    //   drink = <img src={beer}/>
    //   console.log('drink:',drink);
    // } else {
    //   drink = <p></p>
    // }
  }
  
  showEditing = () => {
    if (this.state.isEditing) {
      console.log('this.state:', this.props.golfer);
      return (
        <div>
            <TextField
            id="name"
            label="Edit Profile Name"
            value={this.state.name}
            onChange={this.handleChangeFor('name')}
            margin="normal"
             />
              <TextField
            id="city"
            label="Edit City"
            value={this.state.city}
            onChange={this.handleChangeFor('city')}
            margin="normal"
             />
              <InputLabel htmlFor="skill_level">Skill Level</InputLabel>
           <Select
            value={this.state.skill}
            onChange={this.handleChangeFor('skill')}
            // inputProps={{
            //   name: 'age',
            //   id: 'age-simple',
            // }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value='Beginner'>Beginner</MenuItem>
            <MenuItem value='Amateur'>Amateur</MenuItem>
            <MenuItem value='Professional'>Professional</MenuItem>
          </Select>
              {/* <TextField
            id="skill"
            label="Edit Skill"
            value={this.state.skill}
            onChange={this.handleChangeFor('skill')}
            margin="normal"
             /> */}
              <TextField
            id="bio"
            label="Edit Bio"
            value={this.state.bio}
            onChange={this.handleChangeFor('bio')}
            margin="normal"
             />
            <IconButton onClick = {this.handleEditSubmit}><Check /></IconButton>
            <IconButton onClick = {this.handleClickEdit}><Close /></IconButton>
          </div>
      )
    } else {
      return (
        <div>
          <Paper className="profile">
                <Typography  variant="headline" component="h2">
                  {this.props.golfer.name}
                </Typography>
                <Typography component="p">
                  {this.props.golfer.city}
                </Typography>
                <Typography component="p">
                  {this.props.golfer.skill}
                </Typography>
                <Typography  component="p">
                  {this.props.golfer.bio}
                </Typography>
                <Typography component='img'>
                  {/* {drink} */}
                </Typography>
                <IconButton onClick = {this.handleClickEdit}><Edit /></IconButton>
              </Paper>
          </div>
      )
    }
  }

 



    render() {
        return (
            <div>
              {this.showEditing()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    state: state
  });

export default connect(mapStateToProps)(MyProfileView);