.border {
    border: 1px solid black;
    width: 80px;
  }

body {
    background-color: rgba(124, 116, 116, 0.466);
}

.also {
    font-size: 120%;
    text-align: center;

}

.rendszam {
    text-align: left;
}

.jel {
    font-size: 200%;
    text-align: center;
}

#myImg {
    cursor: pointer;
    transition: 0.3s;
  }
  
  #myImg:hover {
    opacity: 0.7;
  }
  
  .modal {
    display: none;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    padding-top: 100px;
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.9);
    /* Black w/ opacity */
  }
  
  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 500px;
  }
  
  #caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
  }
  
  .modal-content,
  #caption {
    animation-name: zoom;
    animation-duration: 0.6s;
  }
  
  @keyframes zoom {
    from {
      transform: scale(0)
    }
    to {
      transform: scale(1)
    }
  }
  
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }
  
  .close:hover,
  .close:focus {
    color: red;
    text-decoration: none;
    cursor: pointer;
  }
  
  @media only screen and (max-width: 700px) {
    .modal-content {
      width: 100%;
    }
  }
  
 .sorkizatz {
    text-align: justify;
   text-justify: inter-word;
 }
 
 
 
 .igazitas{
    width:50px;
    height:50px;
    border: 3px ridge black;
    border-radius: 25px;
    transition: transform  0.3s;
 }
 .igazitas:hover {
    transform: scale(1.2);
    cursor: pointer;   
 }
 
 header {
    position: fixed;
 }
