import React from 'react';


class App extends React.Component {
  render () {
    let styles={
      header: {
        height: '64px',
        width: '100%',
        backgroundColor: '#00bcd4',
        textAlign: 'center',
        lineHeight: '64px',
      },
      link: {
        fontSize: '1.5em',
        color: '#fff',
        textDecoration: 'none'
      }
    }
    return(
      <div>
        <header style={styles.header}>
          <div　style={styles.link}>
            BORN TO CODE
          </div>
        </header>
      　{this.props.children}
      </div>
    )
  }
}
export default App;
