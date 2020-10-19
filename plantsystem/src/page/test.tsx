import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
//処理に関するimportをしてください(Action:dispatchです)
import getData from "../API/fetch";
import { setInterval } from "timers";
import plant_img from "./img/plant.jpg";
import { css } from "emotion";
class plantMqtt extends React.Component<any, any> {
  test_css: string;
  testimg_css: string;
  testbase_css: string;
  senser: string;
  constructor(props: any) {
    super(props);
    this.state = {};
    this.testbase_css = css({
      display: "inline-flex",
      textAlign: "center",
      width: "80%",
       "@media (max-width: 1000px)": {
      display: "inline-block",
         },
    });
    this.test_css = css({
      textAlign: "left",
      display: "flex",
      width: "40%",
      fontSize: "1.4em",
      margin: "1em",
      border: "solid",
      borderColor: "rgb(100, 153, 100)",
      h4: {
        margin: "0px",
      },
      "@media (max-width: 1000px)": {
        width: "100%",
        marginLeft: "0px",
         fontSize: "1.4em",
      },
    });
    this.senser = css({
      marginLeft: "2em",
      fontSize: "4em",
      backgroundColor: "rgb(0,0,255)",
    });
    this.testimg_css = css({
      width: "30%",
      height: "40%",
    });
  }
  componentWillMount() {}
  componentDidMount() {}
  render() {
    return (
      <div className={this.testbase_css}>
        <div className={this.test_css}>
          <img className={this.testimg_css} src={plant_img} alt="" />
          <p>
            <h4>植物１</h4>
            土中水分 80% <br />
            温湿度 　21℃ 56%
            <br />
            飽差　　 快適
          </p>
        </div>
        <div className={this.test_css}>
          <img className={this.testimg_css} src={plant_img} alt="" />
          <p>
            <h4>植物２</h4>
            土中水分 74% <br />
            温湿度 　21℃ 56%
            <br />
            飽差　　 快適
          </p>
        </div>
        <div className={this.test_css}>
          <img className={this.testimg_css} src={plant_img} alt="" />
          <p>
            <h4>植物３</h4>
            土中水分 95% <br />
            温湿度 　21℃ 56%
            <br />
            飽差　　 快適
          </p>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state: any) {
  return state;
}
function mapDispatchToProps() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  return {
    get_plantMqtt: () => {
      getData().get_PlantMqtt(dispatch);
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(plantMqtt);
