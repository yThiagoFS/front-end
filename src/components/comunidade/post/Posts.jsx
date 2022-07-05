
import { ImArrowUp } from "react-icons/im"

import { FaRegPaperPlane } from "react-icons/fa"

import { RiBookmarkLine } from 'react-icons/ri'


function Posts({imgPost,userImg, caption, userNick}){

    

    return(

        
        <li>
            
            <div className="post__menu">
                <ImArrowUp className="icon__post"/>
                <FaRegPaperPlane className="icon__post"/>
                <RiBookmarkLine className="icon__post"/>
            </div>

           <div className="container__img">
                <img src={imgPost}/>
            </div>

          <div className="footer__post">

            <div className="user__profile">
                <div className="user__img">
                    <img src={userImg}/>
                </div>
                <span>{userNick}</span>
            </div>

            <p className="post__caption">{caption}</p>

          </div>
            
        </li>
    )
}
export default Posts
