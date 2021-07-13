import React, {useState, useEffect} from 'react';

const Search = ({getQuery}) => {
  const [text, setText] = useState("");
  const onChange = (q) =>{
    setText(q);
    getQuery(q);
  }
  
  return (
    <section className="search my-5">
      <form>
        <input type="text"
          className="form-control" 
          placeholder="Search characters actors" 
          value={text}
          onChange = {(e) => onChange(e.target.value)}
            autoFocus
          />
          
      </form>
    </section>
  );
};

export default Search;