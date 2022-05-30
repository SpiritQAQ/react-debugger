// 为了探究React.Children和React.props.children区别

import React, { useEffect } from 'react'

const Children = (props) => {
  const { children } = props

  const hadKeyChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      id: child.props.children,
      key: child.props.children,
    })
  })
  // console.log(
  //   '🚀 ~ file: LearnChildren.tsx ~ line 14 ~ hadKeyChildren ~ hadKeyChildren',
  //   hadKeyChildren
  // )

  // console.log(
  //   '🚀 ~ file: LearnChildren.tsx ~ line 7 ~ Children ~ children',
  //   children
  // )

  // useEffect(() => {
  //   // React.Children.forEach(children, (i) => (i.key = i.props.children))

  // }, [])
  return hadKeyChildren
}

const Father = (props) => {
  return (
    <Children>
      {[...new Array(10).keys()].map((i) => (
        <p>{i}</p>
      ))}
    </Children>
  )
}

export default Father
