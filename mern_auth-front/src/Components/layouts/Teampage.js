import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import a from "../../assets/Images/anonymous.png"

import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Teampage() {
    return (

        <div id="teampage">
            <div class="container">
                <h3>Team</h3>

                <div class="card-deck row">

                    <div class="col-md-12 col-lg-4">

                        <div class="card singleperson">


                            <div class="view overlay">
                                <img class="card-img-top" src={a} alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>


                            <div class="card-body persondetails">


                                <h4 class="card-title">Ayushree</h4>

                                <p class="card-text">2147141</p>

                                <div class="social">
                                    <a href="https://www.linkedin.com/in/ayushreechakrabartty07/"><i class="linkedin fab fa-linkedin"></i></a>
                                    <a href="https://github.com/Ayushree-2147141"><i class=" github fab fa-github-square "></i></a>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col-md-12 col-lg-4">

                        <div class="card singleperson">


                            <div class="view overlay">
                                <img class="card-img-top" src={a} alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>


                            <div class="card-body persondetails">


                                <h4 class="card-title">Divya</h4>

                                <p class="card-text">2147145</p>

                                <div class="social">
                                    <a href="https://github.com/2147145-DivyaVPrasad"><i class=" linkedin fab fa-linkedin "></i></a>
                                    <a ><i class="github fab fa-github-square"></i></a>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col-md-12 col-lg-4">

                        <div class="card singleperson">


                            <div class="view overlay">
                                <img class="card-img-top" src={a} alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>


                            <div class="card-body persondetails">


                                <h4 class="card-title">Priyanka</h4>

                                <p class="card-text">2147150</p>

                                <div class="social">
                                    <a href="https://github.com/priyankayadav98"><i class=" linkedin fab fa-linkedin "></i></a>
                                    <a href="https://www.linkedin.com/in/priyanka-yadav-904727245/"><i class="github fab fa-github-square"></i></a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
