import React from 'react'
import date from 'date-and-time'
const Article = ({ topic, description, date: articleDate, readTime }) => {
  return (
    <article>
      <h2>{topic}</h2>
      <div>
        <span
          style={{
            marginRight: '10px',
            fontStyle: 'italic',
            fontSize: '14px',
            color: 'var(--color-font)',
          }}
        >
          {date.format(articleDate, 'ddd, MMM DD YYYY')}
        </span>
        <span style={{ color: 'var(--color-font)' }}>{readTime}</span>
      </div>
      <p>{description}</p>
    </article>
  )
}

export default Article
