import React, {Component} from 'react';

class NewCharForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            race: '',
            charClass: '',
            profession: '',
            location: '',
            gender: '',
            affiliation: '',
            campaign: '',
            description: '',
            plotNotes: '',
            image: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(){
        this.props.addNpc({
            name: this.state.name,
            race: this.state.race,
            charClass: this.state.charClass,
            profession: this.state.profession,
            location: this.state.location,
            gender: this.state.gender,
            affiliation: this.state.affiliation,
            campaign: this.state.campaign,
            description: this.state.description,
            plotNotes: this.state.plotNotes,
            image: this.state.image
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="formInput"
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="Character Name"
                        required
                        onChange={this.handleInputChange}
                    ></input>
                    <input
                        className="formInput"
                        type="text"
                        name="race"
                        value={this.state.race}
                        placeholder="Character Race"
                        onChange={this.handleInputChange}
                    ></input>
                    <input
                        className="formInput"
                        type="text"
                        name="charClass"
                        value={this.state.charClass}
                        placeholder="Character Class"
                        onChange={this.handleInputChange}
                    ></input>
                    <input
                        className="formInput"
                        type="text"
                        name="profession"
                        value={this.state.profession}
                        placeholder="Profession"
                        onChange={this.handleInputChange}
                    ></input>
                    <input
                        className="formInput"
                        type="text"
                        name="location"
                        value={this.state.location}
                        placeholder="Location"
                        onChange={this.handleInputChange}
                    ></input>
                    <input
                        className="formInput"
                        type="text"
                        name="gender"
                        value={this.state.gender}
                        placeholder="Gender"
                        onChange={this.handleInputChange}
                    ></input>
                    <input
                        className="formInput"
                        type="text"
                        name="affiliation"
                        value={this.state.affiliation}
                        placeholder="Affiliations"
                        onChange={this.handleInputChange}
                    ></input>
                    <input
                        className="formInput"
                        type="text"
                        name="campaign"
                        value={this.state.campaign}
                        placeholder="Campaign"
                        onChange={this.handleInputChange}
                    ></input>
                    <textarea
                        className="formInput"
                        name="description"
                        value={this.state.description}
                        placeholder="Description"
                        onChange={this.handleInputChange}
                    ></textarea>
                    <textarea
                        className="formInput"
                        name="plotNotes"
                        value={this.state.plotNotes}
                        placeholder="Plot Notes"
                        onChange={this.handleInputChange}
                    ></textarea>
                    <input
                        className="formInput"
                        type="text"
                        name="image"
                        value={this.state.image}
                        placeholder="Image URL"
                        onChange={this.handleInputChange}
                    ></input>
                    <input
                        className="formInput"
                        type="submit"
                        className = "btn"
                        id="submit"
                    ></input>
                </form>
            </div>
        )
    }
}

export default NewCharForm;