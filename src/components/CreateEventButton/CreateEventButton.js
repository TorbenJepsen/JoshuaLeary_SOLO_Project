import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from 'material-ui/Icon';
import { Link } from 'react-router-dom';


class CreateEventButton extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div>
                <Link to="/create">
                <Button variant="fab" color="primary" aria-label="add">
                <AddIcon />
                </Button>
                </Link>
            </div>
        )
    }
}

export default CreateEventButton;