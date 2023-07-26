import React from "react";
import { ReactComponent as Dots } from "../../assets/icons/dots.svg";
import { ReactComponent as Share } from "../../assets/icons/share.svg";
import { ReactComponent as Link } from "../../assets/icons/link.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";
import * as Styled from "./style";

function PinHeadNav() {
  return (
    <Styled.DetailHeadNav>
      <div>
        <button>
          <Dots stroke="black" />
        </button>
        <button>
          <Share />
        </button>
        <button>
          <Link />
        </button>
      </div>
      <button>
        <p>저장</p>
        <ArrowDown fill="white" />
      </button>
    </Styled.DetailHeadNav>
  );
}

export default PinHeadNav;
