import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://timingapp.com/cdn-cgi/image/format=auto,width=256/img/app-icons/com.microsoft.to-do-mac/icon_128x128_2x.png" alt="Bootstrap" width="30" height="24" />
                    </a>
                    <a class="navbar-brand" href="#">TODO APP</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">ADD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">SEARCH</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view">VIEW</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar