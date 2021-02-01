import React, {Component} from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* Column1 */}
                        <div className="col">
                            <h4>Chocolander</h4>
                            <ul className="list-unstyled">
                                <li>123-456-7890</li>
                                <li>Toronto, Ontario</li>
                                <li>Virtual Company</li>
                            </ul>
                        </div>
                        {/* Column2 */}
                        <div className="col">
                            <h4>STUFF</h4>
                            <ul className="list-unstyled">
                                <li>asdasdas</li>
                                <li>asdasdas</li>
                                <li>sadasdsa</li>
                            </ul>
                        </div>
                        {/* Column3 */}
                        <div className="col">
                            <h4>STUFF</h4>
                            <ul className="list-unstyled">
                                <li>asdasdas</li>
                                <li>asdasdas</li>
                                <li>sadasdsa</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} CHOCOLANDER | All right reserved | Terms Of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer; 