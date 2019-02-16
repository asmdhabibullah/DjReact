import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './content.css';



const PostApi ='http://127.0.0.1:8000/post/?format=json';


class Home extends React.Component {

    state = {
        Posts : [],
      }
    
      componentDidMount(){
        axios.get(PostApi)
        .then(res =>{
          this.setState({
            Posts: res.data
          })
        })
        .catch(err=>{
          console.log(err)
        })
      }

    render() {
        return (
            <div className="container">
                {
                    this.state.Posts.map((item, id) => (
                        <div className="card" key={id}>
                            <div className="card-image">
                                <img src={item.image}/>
                            </div>

                            <div className="card-content">
                                <span className="card-title">{item.title}</span>
                                <p>{item.dis}</p>
                            </div>
                            <div className="card-action">
                                <div className="left">
                                    <button className="btn">More..</button>
                                </div>
                                <div className="right">
                                    Post time: {item.post_time}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

Home.propTypes = {};

export default Home;
