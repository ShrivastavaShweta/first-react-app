//import { Fragment } from "react";
//import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   arr[0] //variable (selectedIndex
  //   arr[1] //updater function
  //items = [];
  //const message = items.length === 0 ? <p>No Itmes Found</p> : null;
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No Items Found</p>
  //       </>
  //     );

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No Itmes Found</p> : null;
  //   };

  //Event Handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
