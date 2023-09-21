import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { MultiBackend, TouchTransition, MouseTransition, DndProvider } from 'react-dnd-multi-backend';
import { Preview } from 'react-dnd-preview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gallery from "./data/Images";
import './index.css'

export const HTML5toTouch = {
  backends: [
    {
      id: "html5",
      backend: HTML5Backend,
      transition: MouseTransition
    },
    {
      id: "touch",
      backend: TouchBackend,
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition
    }
  ]
};

const generatePreview = ({ itemType, item, style }) => {
  if (itemType === "image") {
    const imageUrl = gallery[item.id-1].img; 
    const dataTitle = gallery[item.id-1].title;
    const { width, height } = item.dimensions;
    return (
      <div style={{ ...style, width, height, opacity: 0.8, boxShadow: "inset 0px 0px 2px 0px black" }} className="rounded-md overflow-hidden lg:hidden cursor-pointer border-2 relative">
          <img src={imageUrl} alt={dataTitle} className={`w-full object-cover h-[320px]`} />
          <div className="absolute -z-0 h-[320px] animate-pulse bg-slate-200 flex justify-center items-center">
                <svg className="animate-spin w-[30px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          </div>
          <h4 className="select-none text-center font-bold text-xl my-2 mx-4">{ dataTitle }</h4>
    </div>
    );
  }
  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
          <ToastContainer />
          <App />
          <Preview>{generatePreview}</Preview>
      </DndProvider>
  </React.StrictMode>,
)
