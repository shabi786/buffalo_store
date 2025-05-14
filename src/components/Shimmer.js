import React from 'react'

function Shimmer() {
    return (
        <div className="flex flex-wrap" >
            {Array(10)
                .fill("")
                .map((e, index) => (
                    <div key={index} className="bg-gray-300 w-52 h-52 m-3"></div>
                ))}
        </div>
    )
}

export default Shimmer
