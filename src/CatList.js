import React from 'react'

const CatList = props => {
  const catPics = props.catPics.map((pic,idx) => {
      return (<img src={pic.url} key={idx}></img>)
    })

  return(
    <div>
      {catPics}
    </div>
  )
}

export default CatList
