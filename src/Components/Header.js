import React from 'react'
export default function Header() {
return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li className="active">
                    <a href="/my-react-project-1/" style={{textDecoration:'none',color:'white',margin:'20px'}}> <span
                    className="display-6">Home </span></a></li>
                    <li><a href="/my-react-project-1/Login" style={{textDecoration:'none',color:'white',margin:'20px'}}><span
                    className="display-6">Login </span></a></li>
                </ul>
            </div>
        </nav>
    </div>
)
}
