import "./socials.css"
import { socialHandles } from "../../data"
import {cssPerfectShape,convertHexToRgba} from "../../utils"

const Socials = () => {
  return (
    <div className="socials">
      {
        socialHandles.map((list, index) => {
          return (
            <a href={list.link} target="_blank" key={index} className="icon"
            style={{...cssPerfectShape(40,40),
                backgroundColor: convertHexToRgba("--primary",0.1),
            }}
             >
              <list.icon />
            </a>
          )
        })
      }
    </div>
  )
}

export default Socials
