import React from 'react'
import { Segment } from 'semantic-ui-react'

const messageRow = (props) => {
  const { message, username } = props
  return (
    <Segment>
      <Segment vertical size='huge' basic>{username}</Segment>
      <Segment vertical>{message}</Segment>
    </Segment>
  )
}

export default messageRow
