import { Component } from "react";
import { NavLink } from "react-router-dom";

class CompaniesIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companies: []
        }
    }

    fetchCompanies() {
        axios.get('/api/companies')
            .then(response => this.setState({ companies: response.data.data }))
    }

    componentDidMount() {
        this.fetchCompanies()
    }

    deleteCompany = (event) => {
        if (!window.confirm('You sure?')) {
            return
        }

        axios.delete('/api/companies/' + event.target.value)
            .then(response => this.fetchCompanies())
            .catch(error => console.log(error));
    }

    renderCompanies() {
        return this.state.companies.map(company => <tr key={company.id}>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">{company.name}</td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">{company.email}</td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">{company.address}</td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">{company.website}</td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                <button value={company.id} onClick={this.deleteCompany} type="button" className="bg-red-500 rounded-md text-white px-3 py-1 font-bold">Delete</button>
            </td>
        </tr>);
    }

    render() {
        return (
            <div className="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
                <div className="flex place-content-end mb-4">
                    <NavLink to="/companies/create" className="px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Create</NavLink>
                </div>

                <div className="min-w-full align-middle">
                    <table className="min-w-full divide-y divide-gray-200 border">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-50">
                                    <span className="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Name</span>
                                </th>
                                <th className="px-6 py-3 bg-gray-50">
                                    <span className="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Email</span>
                                </th>
                                <th className="px-6 py-3 bg-gray-50">
                                    <span className="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Address</span>
                                </th>
                                <th className="px-6 py-3 bg-gray-50">
                                    <span className="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Website</span>
                                </th>
                                <th className="px-6 py-3 bg-gray-50">
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {this.renderCompanies()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CompaniesIndex
