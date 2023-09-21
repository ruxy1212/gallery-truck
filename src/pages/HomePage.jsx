// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../data/firebase";
import { signOut } from "firebase/auth";
import { useState, useCallback, Children, useEffect } from 'react';
import Card from "../components/Card";
import gallery from "../data/Images";
import { toast } from 'react-toastify';
import Header from "../components/Header";

const HomePage = () => {
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState(false);
    useEffect(() => {
        auth.onAuthStateChanged(function(isLoggedIn) {
            if(!isLoggedIn) {
                toast.error('You must be logged in to view this page!', {
                    toastId: 'error1',
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate("/");
            }
            else setLoginState(true);
        });
    }, [navigate]);

    const logOut = async (e) => {
        e.preventDefault();
        toast.info('Thanks for Visiting!', {
            toastId: 'error1',
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        await signOut(auth);        
        navigate("/");
    }

    const [filterText, setFilterText] = useState("");
    const [images, setImages] = useState(gallery);
    const [loading, setLoading] = useState(false);

    const filterImages = () => {
        if (filterText.trim() === "") {
          return images;
        } else {
          return images.filter((image) =>
            image.title.toLowerCase().includes(filterText.toLowerCase())
          );
        }
    };

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
        let interval = Math.floor(Math.random * 3)+10;
        setTimeout(() => {
            setLoading(false);
        }, interval*1000);
      };

      const hasFilteredImages = filterImages().length > 0?true:false;

  const moveImage = useCallback((dragIndex, hoverIndex) => {
    setImages((curArray) => {
      const oldOrder = [...curArray];
      const movedItem = oldOrder.splice(dragIndex, 1)[0];

      oldOrder.splice(hoverIndex, 0, movedItem);
      return oldOrder;
    });
  }, []);
  const d = new Date();
  return (
    <main>
        <Header filterText={filterText} handleFilterChange={handleFilterChange} />
        <h2 className="text-center text-3xl italic m-4 font-bold text-blue-500">PURE Gallery!</h2>

      { loading && !loginState? (
            <div className="h-[200px] animate-pulse bg-slate-200 flex flex-col justify-center items-center">
                <svg className="animate-spin w-[30px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                <p>Searching...</p>
            </div>
      ): (hasFilteredImages? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-12 gap-8 mb-40">
                    {Children.toArray(
                        filterImages().map((image, index) => (
                            <Card data={[image.img, image.title, image.id]} index={index} moveImage={moveImage}/>
                        ))
                    )}
                </div>
            ):(filterText === ""? (
                    <p className="my-4 mx-auto text-center text-rose-700 mb-10">Error fetching data. Refresh your browser and try again</p>
                ):(
                    <p className="my-4 mx-auto text-center text-blue-500 mb-10">No images match your search.</p>
                )                
            )
      )}
      <footer className="m-0 bg-gray-700 text-white text-center py-3 fixed bottom-0 left-0 w-full">
        <p>Copyright <span>&copy; PURE{d.getFullYear()}</span> | All Rights Reserved</p>
        <button type = "submit" className = "my-3 py-1.5 px-4 border border-1 border-white hover:bg-white hover:font-bold hover:text-gray-800" onClick = {(e) => logOut(e)}>Log Out</button>
      </footer>
    </main>
  );
}

export default HomePage;