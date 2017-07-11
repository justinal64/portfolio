import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from "../../modules/counter";
import "./home.css";
import { Article, Section, Headline } from "grommet/components/Article";

class Home extends React.Component {
  //   static propTypes = {
  //     news: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         title: PropTypes.string.isRequired,
  //         link: PropTypes.string.isRequired,
  //         content: PropTypes.string,
  //       }),
  //     ).isRequired,
  //   };

  render() {
    return (
      <div>
        <div>
          <h1>React.js New</h1>
          {/* <Starwars />*/}
          {/* <p>This is my homepage</p>*/}
          <div>
            {/* <img className={s.pacmanBG} src={Pacman} alt="pacman is awesome"/>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
