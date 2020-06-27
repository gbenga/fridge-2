import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <>
        <input type="text" onChange={this.props.updateFilter}/>
      </>
    )
  }
}


// import React, { Component } from "react";
// import { Input, Menu } from "semantic-ui-react";

// export default class MenuExampleSecondary extends Component {
//   // state = { activeItem: "home"};

//   // searchFunction(value){
//   //   this.props.updateState(value)
//   //   // debugger
//   // }

//   // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

//   render() {
//     // const { activeItem } = this.state;

//     return (
//       <Menu secondary>
//         <Menu.Item
//           name="home"
//           // active={activeItem === "home"}
//           // onClick={this.handleItemClick}
//         />
//         <Menu.Menu position="right">
//           <Menu.Item>
//             <Input onChange={this.props.updateState} icon="search" placeholder="Search..." />
//           </Menu.Item>
//           <Menu.Item
//             name="logout"
//             // active={activeItem === "logout"}
//             // onClick={this.handleItemClick}
//           />
//         </Menu.Menu>
//       </Menu>
//     );
//   }
// }
