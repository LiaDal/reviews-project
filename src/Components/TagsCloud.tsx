import React from 'react'
import { TagCloud } from 'react-tagcloud'

const data = [
  { value: 'books', count: 38 },
  { value: 'movies', count: 30 },
  { value: 'games', count: 35 },
  { value: 'apps', count: 25 },
  { value: 'series', count: 29 },
  { value: 'comics', count: 12 },
  { value: 'shows', count: 20 },
  { value: 'magazines', count: 10 },
  { value: 'adventure', count: 38 },
  { value: 'comedy', count: 30 },
  { value: 'drama', count: 28 },
  { value: 'fantasy', count: 25 },
  { value: 'horror', count: 33 },
  { value: 'musicals', count: 18 },
  { value: 'romance', count: 20 },
  { value: 'science fiction', count: 14 },
  { value: 'thriller', count: 25 },
]

export default function TagsCloud() {
  return (
    <TagCloud
      className="w-75 justify-content-center"
      minSize={12}
      maxSize={35}
      tags={data}
      onClick={(tag) => alert(`'${tag.value}' was selected!`)}
    />
  )
}
