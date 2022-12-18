import React from 'react'

import { Header } from '@/components/ui/Header'
import { Content } from '@/components/ui/Content'

import { Top } from './Top'

export const TopPage = () => (
  <>
    <Header content="Miyu's portfolio" />

    <Content>
      <Top />
    </Content>
  </>
)
