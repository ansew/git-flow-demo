import { React } from "react";
import Search from '../serachBar/Search';
import { filterUser } from '../data/filterUsers'
import "./Bloglist.css";
//import data from "../../data/data.json"

export const Blogpost = ({ props1,val, search }) => {
  const filteredUsers = filterUser(props1, val);
  console.log(props1);
  return (
    <div className="main">
      <Search value={val} search={search}/>
      <p>{countGender(props1)}</p>

      {filteredUsers.map((post, index) => {
        if (post.gender === "female") {
          return (
            <div className="blogList #ffebee red lighten-5 " key={index}>
              <img src={post.picture.medium} alt="no img" />
              <div>
                <p>name: {post.name.first}</p>
                <p>
                  <i className="small material-icons email">email</i> email:{" "}
                  {formatEmail(post.email)}
                </p>

                <p>
                  <i className="small material-icons cake">cake</i> date of
                  birth: {new Date(post.dob.date).getDay()}
                  {"-"}
                  {new Date(post.dob.date).getMonth() + 1}
                  {"-"}
                  {new Date(post.dob.date).getFullYear()}
                </p>
              </div>
            </div>
          );
        }
        return (
          <div className="blogList" key={index}>
            <img src={post.picture.medium} alt="no img" />
            <div>
              <p>name: {post.name.first}</p>
              <p>
                <i className="small material-icons email">email</i> email:{" "}
                {formatEmail(post.email)}
              </p>

              <p>
                <i className="small material-icons cake">cake</i> date of birth:{" "}
                {new Date(post.dob.date).getDay()}
                {"-"}
                {new Date(post.dob.date).getMonth() + 1}
                {"-"}
                {new Date(post.dob.date).getFullYear()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const formatEmail = function (user_email) {
  let avg, splitted, part1, part2, part3;
  splitted = user_email.split("@");
  part1 = splitted[0];

  avg = part1.substring(0, 3);
  //  console.log(avg)
  part3 = part1.substring(part1.length - 2);

  part2 = splitted[1];
  return avg + "..." + part3 + "@" + part2;
};

const countGender = function (p) {
  let count = 0;

  p.map((post, index) => {
    if (post.gender === "female") {
      count++;
    }

    return {
      count,
    };
  });
  let maleCount = p.length - count;

  return `Female: ${count} Male: ${maleCount}`;
};

//  export class Blogpost extends React.Component{

//   constructor(props) {
//     super(props);
//     this.state = {

//         users: []
//     };
// }

//  componentDidMount(){

//   fetch("https://randomuser.me/api/?results=15")
//   .then(response=>response.json())
//   .then(result=>
//     this.setState({
//       users:result.results
//     })
//   )
//  }
//  render(){
//   return(

//     <div className="main">
//        {this.state.users.map((post,index)=>{
//       return  <div className="blogList" key={index}>
//               <img src={post.picture.medium} />
//           <div>
//          <p>name: {post.name.first}</p>
//          <p>email: {post.email}</p>
//          <p>date of birth: {new Date(post.dob.date).getFullYear()}{"-"}{ new Date(post.dob.date).getMonth()+1}{"-"}{new Date(post.dob.date).getDay()}</p>
//          </div>

//         </div>

//    })}

//     </div>

//   ) ;

//    }

//   }
