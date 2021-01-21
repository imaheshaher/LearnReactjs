import React from 'react'


class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            name:"mahesh"
        }
    }
    updatebtn(name) {
        
        if(name=="aher") {
            this.setState({
                name:"mahesh"
            })
        }
        else {
        this.setState({
            name: "aher"
        })
    }
    }
    render() {
        return(
            <div>
                Profile
                <h1>
                   Name : {this.props.text.name} 
                </h1>
                <h2>
                    Data:{this.props.data}
                </h2>

                <h3>
                    State: 
                    <br/>
                    Name : {this.state.name}
                    <button onClick={() => this.updatebtn(this.state.name)}>Update</button>
                    
                </h3>
            </div>
        )
    }
}

export default Profile;