import React, {useState, useEffect, } from 'react'
import moment from 'moment'
import parse from "html-react-parser"
import { getComments } from '../services'

function Comments({slug}) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug)
      .then(res => setComments(res))
  }, [slug])

  return (
    <>
      {comments.length > 0 && (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            {comments.length}
            {" "}
            Comments
          </h3>
          {comments.map((el, index) => (
            <div className='border-b border-gray-100 mb-4 pb-4' key={index}>
              <p className='mb-4'>
                <span className='font-semibold'>{el.name}</span>
                {" "}
                on
                {" "}
                {moment(el.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className='whitespace-pre-line text-gray-600 w-full'>{parse(el.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments