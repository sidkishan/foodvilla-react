import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    //create your states
    this.state = {
      count: 0,
      count1: 10,
      userInfo: {
        name: "dummy name",
        bio: "dummy bio",
        pic: "https://avatars.githubusercontent.com/u/583231?v=4",
      },
    };
    console.log("ProfileClass constructor", this.props.name);
  }
  async componentDidMount() {
    console.log(
      "componentDidMount is invoked but will go into async path now!!"
    );
    const resp = await fetch("https://api.github.com/users/sidkishan");
    const data = await resp.json();
    console.log(data);
    this.setState({
      userInfo: {
        name: data.name,
        bio: data.bio,
        pic: data.avatar_url,
      },
    });
    console.log("ProfileClass ComponentDidMount end", this.props.name);
  }
  componentDidUpdate() {
    console.log(
      "this is componentDidUpdate which should be called after every re-render"
    );
  }
  componentWillUnmount() {
    console.log("componentWillUnmount: current component will unmount now");
  }
  render() {
    console.log("ProfileClass render method", this.props.name);
    const { count } = this.state; //destructuring state object
    return (
      <div className="profile-class">
        <h1>This is profile class component</h1>
        <h2>Siddharth Kishan class</h2>
        <h3>Name from api state: {this.state.userInfo.name}</h3>
        <img src={this.state.userInfo.pic} alt="avatar" />
        <h3>Bio from api state: {this.state.userInfo.bio}</h3>
        <h4>count from state: {this.state.count}</h4>
        <h4>count1 from state: {this.state.count1}</h4>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          change count
        </button>
        <button
          onClick={() => this.setState({ count1: this.state.count1 - 1 })}
        >
          change count2
        </button>
        {console.log("ProfileClass render method end", this.props.name)}
      </div>
    );
  }
}
export default ProfileClass;
