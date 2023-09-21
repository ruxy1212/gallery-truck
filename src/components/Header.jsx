import PropTypes from 'prop-types';

const Header = ({filterText, handleFilterChange}) => {
    return (
        <header className="m-0 w-full py-3 px-4 bg-blue-500">
            <div className="relative w-[500px] max-w-[80%] mx-auto my-3">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Filter by tag..."   value={filterText} onChange={handleFilterChange}/>
            </div>
        </header>
    );
}

Header.propTypes = {
    filterText: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired,
};

export default Header