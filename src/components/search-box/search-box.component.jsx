//import { Component } from "react";

import './search-box.styles.css';

const SearchBox=({classname, placeholder, onChangeHandler})=>{
    return (
        <div>
            <input 
                className={`search-box ${classname}`}
                type='search' 
                placeholder={placeholder} 
                onChange={onChangeHandler} 
            />
        </div>
    );
}

// class SearchBox extends Component{
//     render(){
//         return (
//             <div>
//                 <input 
//                     className={`search-box ${this.props.classname}`}
//                     type='search' 
//                     placeholder={this.props.placeholder} 
//                     onChange={this.props.onChangeHandler} 
//                 />
//             </div>
//         );
//     }
// }

export default SearchBox;