import React from "react";
import "./About.css";
import axios from "axios";
const fs = require("fs");

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      errorMessage: "",
      imageData: []
    };
  }

//   getImage() {
//       axios({
//           method: 'GET',
//           url: "https://scontent.fsin2-1.fna.fbcdn.net/v/t1.0-9/1508573_10152860854262753_8069599316435852797_n.jpg?_nc_cat=103&_nc_ohc=fbCc0jn0x4gAX_pOFfq&_nc_ht=scontent.fsin2-1.fna&oh=c9f43ee7c90e2f1a3d2e440215763e81&oe=5EDBE295",
//           responseType: 'blob'
//       }).then(response => {
//           if (response) {
//               const file = new Blob([response.data], {type:`image/png`})
//               return file;
//           }
//           return Promise.reject('An unknown error occurred')
//       })
//   }
//   componentDidMount() {
//     const url =
//       "https://scontent.fsin2-1.fna.fbcdn.net/v/t1.0-9/1508573_10152860854262753_8069599316435852797_n.jpg?_nc_cat=103&_nc_ohc=fbCc0jn0x4gAX_pOFfq&_nc_ht=scontent.fsin2-1.fna&oh=c9f43ee7c90e2f1a3d2e440215763e81&oe=5EDBE295";
    
//     let resp = axios(url, { responseType: "stream" });
//     console.log(resp)
//     this.setState({
//         errorMessage: "",
//         imageData: resp.data.pipe(fs.createWriteStream("image.jpg"))
//     });
//   }
  getWindowSize() {
    let heightWindow = window.innerHeight;
    let widthWindow = window.innerWidth;
    let windowSize = 0;
    if (heightWindow >= widthWindow) {
      windowSize = widthWindow;
    } else {
      windowSize = heightWindow;
    }
    return windowSize
  }
  render() {
    // this.getImage();
    
    return (
      <div className="about-profile">
        <header>About the Creator</header>
        <p className="about-text">Wee Meng is a software developer that will work for food</p>
        <div >
        <img
          src="https://scontent.fsin2-1.fna.fbcdn.net/v/t1.0-9/1508573_10152860854262753_8069599316435852797_n.jpg?_nc_cat=103&_nc_ohc=fbCc0jn0x4gAX_pOFfq&_nc_ht=scontent.fsin2-1.fna&oh=c9f43ee7c90e2f1a3d2e440215763e81&oe=5EDBE295"
          alt="profile"
          width={this.getWindowSize()*2/3}
          className="about-profile__image"
        ></img>
        </div>
      </div>
    );
  }
}

export default About;
