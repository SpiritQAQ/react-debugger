import React, { useEffect } from 'react'

interface TemplateProps {
  num: number
}

const FCTemplate: React.FC<TemplateProps> = ({ num }) => {
  return <p>{num}</p>
}

const ElementTemplate = ({ num }) => {
  return <p>{num}</p>
}

const CloneOrCreate: React.FC = () => {
  console.log(
    '🚀 ~ file: CloneOrCreate.tsx ~ line 18 ~ ElementTemplate',
    ElementTemplate
  )
  console.log(
    '🚀 ~ file: CloneOrCreate.tsx ~ line 19 ~ <ElementTemplate />',
    <ElementTemplate />
  )

  return (
    <>
      {React.createElement(ElementTemplate, {
        num: 5,
      })}
      {React.cloneElement(<ElementTemplate />, {
        num: 6,
      })}
    </>
  )
}
export default CloneOrCreate
