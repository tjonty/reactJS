import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "") {
            alert('All fields are required');
            return 
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
    }
    render() {
        return (
            <div>
                <div>Add Contact</div>
                <form onSubmit={this.add}>
                    <label>Name</label>
                    <input 
                        name="name" 
                        type="text" 
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })} 
                        />
                    <label>Email</label>
                    <input 
                        name="Email" 
                        type="text" 
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;