import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '1em'
  }
};

const Loading = ({text = 'Loading', speed = 300}) => {
  const [content, setContent] = useState(text)

  useEffect(() => {
    const id = window.setInterval(() => {
      setContent(content => {
        return content === `{text}...`
          ? text
          : `${content}.`
      })
    }, speed)

    return () => window.clearInterval(id)
  }, [text, speed])

    return (
      <p style={styles.content}>
        {content}
      </p>
    )
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
}

export default Loading;