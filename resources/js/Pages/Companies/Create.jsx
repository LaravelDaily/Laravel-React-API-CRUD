import { Component } from "react";
import { useNavigate } from "react-router-dom";

export const withNavigation = (Component) => {
    return props => <Component {...props} navigate={useNavigate()} />;
}

class CompaniesCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            address: '',
            website: '',
            errors: {}
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handleAddressChange(event) {
        this.setState({ address: event.target.value });
    }

    handleWebsiteChange(event) {
        this.setState({ website: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/api/companies', {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            website: this.state.website,
        })
            .then(response => this.props.navigate('/dashboard'))
            .catch(error => this.setState({ errors: error.response.data.errors }));
    }

    errorMessage(field) {
        return (
            <div className="text-red-600 mt-1">
                {
                    this.state.errors?.[field]?.map((message, index) => {
                        return (
                            <div key={index}>{ message }</div>
                        )
                    })
                }
            </div>
        )
    }

    render() {
        return (
            <form className="space-y-6" onSubmit={ this.handleSubmit }>
                <div className="space-y-4 rounded-md shadow-sm">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <div className="mt-1">
                            <input value={this.state.name} onChange={this.handleNameChange} type="text" name="name" id="name"
                                   className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            { this.errorMessage('name') }
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="mt-1">
                            <input value={this.state.email} onChange={this.handleEmailChange} type="text" name="email" id="email"
                                   className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            { this.errorMessage('email') }
                        </div>
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <div className="mt-1">
                            <input value={this.state.address} onChange={this.handleAddressChange} type="text" name="address" id="address"
                                   className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            { this.errorMessage('address') }
                        </div>
                    </div>

                    <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                        <div className="mt-1">
                            <input value={this.state.website} onChange={this.handleWebsiteChange} type="text" name="website" id="website"
                                   className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            { this.errorMessage('website') }
                        </div>
                    </div>
                </div>

                <button type="submit"
                        className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
                    Create
                </button>
            </form>
        )
    }
}

export default withNavigation(CompaniesCreate);
