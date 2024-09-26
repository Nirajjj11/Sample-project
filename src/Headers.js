import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import image from './pic/logo.png'
export default function Headers() {
    return (
        <div><nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={image} alt="Logo" width="30" height="24" class="d-inline-block align-text-top "/>
                        Sample WebPage
                </a>
            </div>
        </nav></div>
    )
}
