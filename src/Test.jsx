import React from 'react'
import * as S from './pages/Main/components/Profile/Profile.style'

function Test({scrollY}) {
  const visible = scrollY > 1000;

  return (
    <S.Container visible={visible}>
      <h1 style={{ width: '100%', color: '#ffffff', fontSize: '3em' }}>More Content Here!</h1>
    </S.Container>
  )
}

export default Test;