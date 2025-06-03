import React from "react";
class UserCardClass extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const { name } = this.props;
       return( <div className="user-card">
            <h3>Name: {name}</h3>
            <h4>Location: India</h4>
            <h4>Contact: @theahmadshaikh</h4>

        </div>)//

    }
}

export default UserCardClass