import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import styles from './BasePage.module.css'

const { Header, Content, Footer } = Layout

export function Home () {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.logo}>Todo</div>
      </Header>
      <Content className={styles.content}>
        <div className={styles.pageContent}>
          <h1>Welcome</h1>
          <Link to="/todo/list" className={styles.linkButton}>
            Show Todo list
          </Link>
          <Link to="/todo/edit" className={styles.linkButton}>
            Add new Todo right here!
          </Link>
          <Link to="/about" className={styles.linkButton}>
            About us
          </Link>
        </div>
      </Content>
      <Footer
        className={styles.footer}>© {new Date().getFullYear()} Todo</Footer>
    </Layout>
  )
}
