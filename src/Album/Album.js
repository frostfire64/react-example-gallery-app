import React, {Component} from 'react';
import './Album.scss';
import axios from "axios";

class Album extends Component {
  constructor(props) {
    super(props);
    this.fetchAlbum();
  }

  state = {
    pictures: [],
    name: '',
    APIData: {},
  };

  fetchAlbum = () => {
    const {id} = this.props;
    axios.get('https://jsonplaceholder.typicode.com/albums/' + id)
        .then((res) => {
          this.setState({name: res.data.title});
          return res;
        }).then((res) => {
          axios.get('https://jsonplaceholder.typicode.com/albums/' + id + '/photos')
            .then((res) => {
              this.setState({pictures: res.data});
              return res;
            }).catch((err) => {throw err});
        }).catch((err) => { alert(`Nie nie udało się pobrać danych dla albumu ${id}`); console.error(err) });
  };

  render() {
    const { id } = this.props;
    const { pictures, name } = this.state;

    const firstPicture = (pictures !== undefined && pictures[0] !== undefined) ? pictures[0] : {};

    const imageStyle = {
      backgroundImage: 'url(' + firstPicture.thumbnailUrl + ')',
      backgroundSize: "cover"
    };

    const domImgStyle = {
      width: "100%",
      height: "100%",
      opacity: 0
    };

    return (
        <div className="album" key={id}>
          <div className="album__image" style={ imageStyle }>
            <img src={firstPicture.url} style={ domImgStyle } />
          </div>
          <div className="album__card">
            <span className="album__header">{name}</span>
          </div>
        </div>
    );
  }
}

export default Album;
