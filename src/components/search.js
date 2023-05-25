const Search = ({ categories, search, setSearch, handleSearch }) => {
    return (
      <div className="max-w-xs mx-auto pt-3 pb-2">
        <div className="form-control">
          <div className="input-group">
            <select 
              defaultValue={"descripcion"} 
              className="select select-bordered"
              onChange={(e)=>setSearch({...search, menuKey: e.target.value})}
              >
              <option disabled >Pick category</option>
              {categories.map((category, index) => (
                <option 
                  key={index} 
                  value={category}
                  >
                    {category}
                </option>
              ))}
            </select>
            <div className="input-group pl-2">
              <input 
                type="text" 
                placeholder="Search…" 
                className="input input-bordered" 
                value={search.key} 
                onChange={handleSearch}
                />
              <button className="btn btn-square" onClick={handleSearch} >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Search;
  