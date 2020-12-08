import React, {Component} from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditUserComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            user_id : '',
            first_name : '',
            last_name : '',
            age : '',
            salary : '',
            message : null
        }
    }

    componentDidMount(){
        this.loadUser();        //api로 DB정보 호출
    }

    loadUser = () => {
        ApiService.fetchUserByID(window.localStorage.getItem("userID"))
        .then( res => {
            let user = res.data;
            this.setState({
                user_id: user.user_id,
                user_name : user.user_name,
                first_name : user.first_name,
                last_name : user.last_name,
                age : user.age,
                salary : user.salary
            })
        })
        .catch(err => {
            console.log('loadUser error', err);
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveUser = (e) => {
        e.preventDefault();

        let user = {
            user_id : this.state.user_id,
            password : this.state.password,
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            age : this.state.age,
            salary : this.state.salary
        }

        ApiService.editUser(user)
        .then( res => {
            this.setState({
                message : user.user_name + '님이 정보가 수정되었습니다.'
            })
            this.props.history.push('/users');
        })
        .catch( err => {
            console.log('editUser() error', err);
        })
    }

    render(){
        return(
            <div>
                <Typography variant="h4" style={style}>Edit User</Typography>
                <form>
                    <div>
                        <TextField placeholder="edit your user name" type="text" readOnly={true} fullWidth margin="normal" name="user_nameme" value={this.state.user_name}/>
                    </div>
                    <div>
                        <TextField placeholder="edit your first name" fullWidth margin="normal" name="first_name" value={this.state.first_name} onChange={this.onChange}/>
                    </div>
                    <div>
                        <TextField placeholder="edit your last name" fullWidth margin="normal" name="last_name" value={this.state.last_name} onChange={this.onChange}/>
                    </div>
                    <div>
                        <TextField type="number" placeholder="edit your age" fullWidth margin="normal" name="age" value={this.state.age} onChange={this.onChange}/>
                    </div>
                    <div>
                        <TextField type="number" placeholder="edit your salary" fullWidth margin="normal" name="salary" value={this.state.salary} onChange={this.onChange}/>
                    </div>

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        );
    }
}

const style = {
    display : 'flex',
    justifyContent : 'center'
}

export default EditUserComponent;