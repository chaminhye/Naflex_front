import React, {Component} from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddUserComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            user_name : '',
            password : '',
            first_name : '',
            last_name : '',
            age : '',
            salary : '',
            message : null
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    setUser = (e) => {
        e.preventDefault();

        let user = {
            user_name : this.state.user_name,
            password : this.state.password,
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            age : this.state.age,
            salary : this.state.salary
        }

        ApiService.addUser(user)
        .then( res => {
            this.setState({
                message : user.user_name + '님이 성공적으로 등록되었습니다.'
            })
            console.log(this.state.message);
            this.props.history.push('/users');
        })
        .catch( err => {
            console.log('saveUser() error', err);
        })
    }

    render(){
        return(
            <div>
                <Typography variant="h4" style={style}>Add User</Typography>
                <form style={formStyle}>
                    <div>
                        <TextField type="text" placeholder="plz.. input your name" name="user_name" fullWidth margin="normal" value={this.state.user_name} onChange={this.onChange}/>
                    </div>
                    <div>
                        <TextField type="password" placeholder="plz.. input your psword" name="password" fullWidth margin="normal" value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <div>
                        <TextField placeholder="plz.. input your first name" name="first_name" fullWidth margin="normal" value={this.state.first_name} onChange={this.onChange}/>
                    </div>
                    <div>
                        <TextField placeholder="plz.. input your last name" name="last_name" fullWidth margin="normal" value={this.state.last_name} onChange={this.onChange}/>
                    </div>
                    <div>
                        <TextField type="number" placeholder="plz.. input your age" name="age" fullWidth margin="normal" value={this.state.age} onChange={this.onChange}/>
                    </div>
                    <div>
                        <TextField type="number" placeholder="plz.. input your salary" name="salary" fullWidth margin="normal" value={this.state.salary} onChange={this.onChange}/>
                    </div>

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        );
    }
}

const formStyle = {
    display : 'flex',
    flexFlow : 'row wrap'
}

const style = {
    display : 'flex',
    justifyContent : 'center'
}
export default AddUserComponent;