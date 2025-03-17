import React, { useState } from 'react'

function Search() {

  const [searchKeyword, setSearchKeyword] = useState('')

  return (
    <div id='search'>
        <div className='search__inner'>
            <label htmlFor='searchInput'>
                <span className='ir'>검색</span>
            </label>
            <input
                type='search'
                name='searchInput'
                id='searchInput'
                autoComplete='off'
                className='search__input'
                placeholder='검색어를 입력해주세요'
                onChange={e => setSearchKeyword(e.target.value)}
                />
        </div>

    </div>
  )
}

export default Search
