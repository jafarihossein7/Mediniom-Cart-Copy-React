import React from 'react'

export default function Body({children}) {
    return (
        <div className="body lg:bg-[#f9fafb]">
            <div className="container px-2 lg:mx-10 py-4">
                {children}
            </div>
        </div>
    )
}
