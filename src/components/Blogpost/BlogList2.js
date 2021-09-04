import { React } from "react";
import Search from '../serachBar/Search';
import { filterUser } from '../data/filterUsers';
import "./BlogList2.css";
//import getData from "../../data/data.json";

export const BlogPost2 = ({ props1, val, search }) => {
  const filteredUsers = filterUser(props1, val);
  if(filteredUsers.length === 0){
    return(
      <h1>No users</h1>
    )
  }
  return (
    <div>
      <Search value={val} search={search}/>
    
    <div className="main2">
      {filteredUsers.map((post, index) => {
        return (
          <div class="row card2">
            <div class="col s10 m10">
              <div class="card">
                <div class="card-image">
                  <img src={post.picture.large} alt="no img" />
                  <span class="card-title">{post.name.first}</span>
                </div>
                <div class="card-content">
                  <p>
                    <i className="small material-icons email">email</i> email:{" "}
                    {formatEmail(post.email)};
                  </p>

                  <p>
                    <i className="small material-icons cake">cake</i> date of
                    birth: {new Date(post.dob.date).toDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
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
