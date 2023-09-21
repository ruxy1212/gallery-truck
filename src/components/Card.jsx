import {useState, useRef} from "react";
import PropTypes from 'prop-types';
import { useDrag, useDrop } from "react-dnd";


const Card = ({ data, index, moveImage }) => {
    const [loaded, setLoaded] = useState(false);
    const handleImageLoad = () => {
        setLoaded(true);
      };
        const id = data[2];
    const ref = useRef(null);
  
    const [, drop] = useDrop({
      accept: "image",
      hover: (item) => {
        if (!ref.current) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;
  
        if (dragIndex === hoverIndex) {
          return;
        }
  
        moveImage(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    });

    const [{ isDragging }, drag] = useDrag({
        type: "image",
        item: () => {
            return { 
                id, 
                index,
                dimensions: {
                    width: ref.current.clientWidth,
                    height: ref.current.clientHeight,
                },
            };
        },
        collect: (monitor) => {
          return {
            isDragging: monitor.isDragging()
          };
        }
    });
    
    const opacity = isDragging ? 0.5 : 1;
    drag(drop(ref));

    return (
        <div ref={ref} style={{opacity: opacity, boxShadow: "inset 0px 0px 2px 0px black"}} className={`rounded-md overflow-hidden cursor-pointer border-2 relative`}>
            <img src={data[0]} alt={data[1]} className={`w-full object-cover h-[320px] ${loaded?'block':'hidden'}`} onLoad={handleImageLoad}/>
            <h4 className={`absolute w-full bottom-0 select-none border-t-2 border-white text-center font-semibold text-lg bg-black opacity-80 py-2 px-4 text-white ${loaded?'block':'hidden'}`}>{ data[1] }</h4>
            <div className={`h-[320px] animate-pulse bg-slate-200 flex justify-center items-center ${loaded?'hidden':'block'}`}>
                <svg className="animate-spin w-[30px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            </div>
            <h4 className={`select-none text-center font-bold text-xl my-2 mx-4 bg-slate-200 text-slate-200 animate-pulse ${loaded?'hidden':'block'}`}>No data</h4>
        </div>
      );
};

Card.propTypes = {
    data: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    moveImage: PropTypes.func.isRequired
}

export default Card;