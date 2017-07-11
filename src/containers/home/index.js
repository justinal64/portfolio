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
import { Article, Section, Headline } from "grommet/components/Article";
import "./home.css";

const Home = props =>
  <div className="background">
    <Article scrollStep={true}>
      <Section pad="large" justify="center" align="center" full="vertical">
        <Headline margin="none">Section 1</Headline>
      </Section>
      <Section
        pad="large"
        justify="center"
        align="center"
        full="vertical"
        colorIndex="grey-4"
      >
        <Headline margin="none">Section 2</Headline>
      </Section>
      <Section pad="large" justify="center" align="center" full="vertical">
        <Headline margin="none">Section 3</Headline>
      </Section>
      <Section
        pad="large"
        justify="center"
        align="center"
        full="vertical"
        colorIndex="grey-4"
      >
        <Headline margin="none">Section 4</Headline>
      </Section>
      <Section pad="large" justify="center" align="center" full="vertical">
        <Headline margin="none">Section 5</Headline>
      </Section>
    </Article>
  </div>;

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push("/about")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
